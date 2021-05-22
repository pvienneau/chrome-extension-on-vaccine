(function ($) {
  const formInitialValues = {
    days: 30,
  }

  $form = $('#form_settings')

  const initiateForm = () => {
    chrome.storage.sync.get('settings', ({ settings: storedFormValues }) => {
      const computedFormValues = _.merge({}, formInitialValues, storedFormValues)

      _.forEach(computedFormValues, (value, name) => {
        $form.find(`[name="${name}"]`).val(value)
      })
    })

    $form.submit((e) => {
      e.preventDefault()

      const serializedFormValues = $form.serializeArray()

      const formValues = _.reduce(serializedFormValues, (acc, formValue) => {
        const { name, value } = formValue

        _.set(acc, name, value)

        return acc
      }, {})

      chrome.storage.sync.set({ settings: formValues })
    })
  }



  initiateForm()
})($)
