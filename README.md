## Ontario vaccination automated search Chrome extension
Chrome Extension to auto-search for available vaccination bookings on the Ontario Health portal.

https://user-images.githubusercontent.com/4933086/119232092-e4984080-baf1-11eb-8e58-5601bde337d9.mp4 

### Credit
Builds off of [get-vaccinated-fool](https://greasyfork.org/en/scripts/426622-get-vaccinated-fool) published by [morinted](https://greasyfork.org/en/users/153377-morinted) to accomplish just this. This ports the functionality to a Chrome extension with hopes of better ease of use by a wider audience.

## Usage
**Note:** Chrome extension not yet available on the Chrome Web Store, pending review. In the meantime, you can install this extension locally. See instructions [below](https://github.com/pvienneau/chrome-extension-on-vaccine#installation).

This extension will only run on the appointment selection page of the `vaccine.covaxonbooking.ca` website. When you've entered the portal and selected your preferred vaccination location, it will automatically start scanning for any available openings. Note that there may not be immediate availability, however, the extension will continue searching, and will detect new openings as they are made available by the Province.

When an available appointment is found, this extension will automatically select the first time slots found for both 1st and 2nd doses.

**Note:** The extension will not automatically submit the request on your behalf; it will only automate the search and selection of appointments for you. You will still be required to click on **I agree and continue** in order to complete the appointment request.

## Installation
1. Download the `.zip` from the [latest release](https://github.com/pvienneau/chrome-extension-on-vaccine/releases) of code. Unzip locally.
2. From your Chrome browser, go to `chrome://extensions`
3. Turn on **Developer mode**

![Screen Shot 2021-05-22 at 11 29 47 AM](https://user-images.githubusercontent.com/4933086/119231920-22489980-baf1-11eb-88a3-7f632f3b4d55.png)

4. Select **Load unpacked**

![Screen Shot 2021-05-22 at 11 29 51 AM](https://user-images.githubusercontent.com/4933086/119231925-25438a00-baf1-11eb-9f81-cd0369432428.png)

6. Find the unzipped folder, select it
7. You should confirm that the **Book your Ontario COVID Vaccine** has been installed, and is now one of your running Chrome extensions

<img width="419" alt="Screen Shot 2021-05-22 at 2 48 54 PM" src="https://user-images.githubusercontent.com/4933086/119237828-e1f71480-bb0c-11eb-9d18-a0144a3be037.png">

**Note:** You can always take back control of the booking page by disabling this extension via `chrome://extensions`. Also see [uninstallation instructions](https://github.com/pvienneau/chrome-extension-on-vaccine/blob/master/README.md#uninstallation) for how to remove this extension from your browser, once you're done with the booking.

## Uninstallation
Once you have your booking completed, this extension has no more use for you. You can uninstall the extension by simply going to `chrome://extensions`, or by accessing the extension's options via your Chrome's toolbar.

<img width="421" alt="Screen Shot 2021-05-22 at 3 30 10 PM" src="https://user-images.githubusercontent.com/34248317/119238772-a8290c80-bb12-11eb-93ba-2b4cecd58f61.png">
<img width="392" alt="Screen Shot 2021-05-22 at 3 30 24 PM" src="https://user-images.githubusercontent.com/34248317/119238773-a8c1a300-bb12-11eb-8c1d-fe26a1ce68b5.png">

