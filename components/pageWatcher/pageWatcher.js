function delay(delayMs) {
   return new Promise(function(resolve) {
       setTimeout(resolve.bind(null), delayMs)
   });
}

function waitForLoadingToComplete (maxDelayMs) {
  return new Promise(function(resolve) {
    let startTime = _.now()
    let foundInitialLoading = false

    const interval = setInterval(() => {
      if (_.now() - maxDelayMs > startTime) {
        window.clearInterval(interval)
        resolve()
        return
      }

      if (foundInitialLoading) {
        if (!$loaderSpinner().length) {
          window.clearInterval(interval)
          resolve()
          return
        }
      } else {
        if ($loaderSpinner().length) {
          foundInitialLoading = true
        }
      }
    }, 250)
  });
}

const getLocationPathname = () => window.location.pathname
const isPageToWatch = () => {
  return _.includes(getLocationPathname(), '/appointment-select')
}

const hasAvailableBookings = () => {
  return $getAvailableCalendarDays().length > 0
}

async function selectBooking() {
  $getAvailableCalendarDays().first().click()

  await delay(1000)

  $getAvailableTimeSlots().first().click() //select first dose date

  await delay(1000)

  $getAvailableTimeSlots().first().click() // select second dose date
}

const $getCalendar = () => $('.DayPicker')
const $getCalendarActiveMonth = () => $getCalendar().find('.CalendarMonthGrid_month__horizontal').filter(':not(.CalendarMonthGrid_month__hidden)')
const $getCalendarNextMonthButton = () => $getCalendar().find('[data-testid="calendar-next-button"]')
const $getCalendarPrevMonthButton = () => $getCalendar().find('[data-testid="calendar-prev-button"]')
const $getCalendarDays = () => $getCalendarActiveMonth().find('.CalendarDay')
const $getAvailableCalendarDays = () => $getCalendarDays().filter(':not(.CalendarDay__blocked_out_of_range):not(.CalendarDay__today)')
const $getAvailableTimeSlots = () => $('[data-testid="appointment-select-timeslot"]')
const $loaderSpinner = () => $('[data-testid="loading-indicator"]')

async function checkForVaccineBooking () {
  await delay(5000)

  while (true) {
    if (!isPageToWatch()) return false

    $getCalendarNextMonthButton().click()

    await waitForLoadingToComplete(5000)

    if (hasAvailableBookings()) {
      await selectBooking()

      return true
    }

    await delay(5000)

    $getCalendarPrevMonthButton().click()

    await waitForLoadingToComplete(5000)

    if (hasAvailableBookings()) {
      await selectBooking()

      return true
    }

    await delay(5000)
  }
}


/*
 * SETUP
 */

var prevPathname = null

const domObserver = new MutationObserver(function(mutations){
  const nextPathname = getLocationPathname()

  if (prevPathname && prevPathname !== nextPathname) {
    if (isPageToWatch()) {
      checkForVaccineBooking()
    }
  }

  prevPathname = nextPathname
})

domObserver.observe(document.body, {
  childList: true,
  subtree: true,
})
