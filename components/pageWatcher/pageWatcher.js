function delay(delayMs) {
   return new Promise(function(resolve) {
       setTimeout(resolve.bind(null), delayMs)
   });
}

const beep = () => {
  var beepsound = new Audio('../../assets/audio/beep.mp3')

  beepsound.play()
}

const getLocationPathname = () => window.location.pathname
const isPageToWatch = () => {
  console.warn(getLocationPathname())

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

async function checkForVaccineBooking () {
  while (true) {
    if (!isPageToWatch()) return false

    $getCalendarNextMonthButton().click()

    await delay(5000)

    if (hasAvailableBookings()) return selectBooking()

    $getCalendarPrevMonthButton().click()

    await delay(5000)

    if (hasAvailableBookings()) return selectBooking()
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
