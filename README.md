## Ontario vaccination automated search Chrome extension
Chrome Extension to auto-search for available vaccination bookings on the Ontario Health portal. Can be installed directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/book-your-ontario-covid-v/dhojjkiidphhnacemkijenggcbooaoel?hl=en-GB&authuser=0).

https://user-images.githubusercontent.com/34248317/119238819-fb9b5a80-bb12-11eb-9b9f-08cc261efa55.mp4

### Credit
Builds off of [get-vaccinated-fool](https://greasyfork.org/en/scripts/426622-get-vaccinated-fool) published by [morinted](https://greasyfork.org/en/users/153377-morinted) to accomplish just this. This ports the functionality to a Chrome extension with hopes of better ease of use by a wider audience.

## Usage
This extension will only run on the appointment selection page of the `vaccine.covaxonbooking.ca` website. When you've entered the portal and selected your preferred vaccination location, it will automatically start scanning for any available openings. Note that there may not be immediate availability, however, the extension will continue searching, and will detect new openings as they are made available by the Province.

When an available appointment is found, this extension will automatically select the first time slots found for both 1st and 2nd doses.

**Note:** The extension will not automatically submit the request on your behalf; it will only automate the search and selection of appointments for you. You will still be required to click on **I agree and continue** in order to complete the appointment request.

## Installation
You can download the extension directly from the [Chrome Web Store](https://chrome.google.com/webstore/detail/book-your-ontario-covid-v/dhojjkiidphhnacemkijenggcbooaoel?hl=en-GB&authuser=0).

## Developer Installation
Refer to [Developer Installation](https://github.com/pvienneau/chrome-extension-on-vaccine/blob/master/developer-installation.md) on steps to install this extension from local code.

## Feedback
Please create an [issue](https://github.com/pvienneau/chrome-extension-on-vaccine/issues) ticket with any issues encountered, or questions you have.
