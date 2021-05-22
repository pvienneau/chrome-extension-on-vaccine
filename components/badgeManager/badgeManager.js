const proxySites = ['vaccine.covaxonbooking.ca', 'covid19.ontariohealth.ca']
const exactSites = ['vaccine.covaxonbooking.ca/appointment-select']

async function getCurrentTab() {
  const [ tab ] = await chrome.tabs.query({ active: true, currentWindow: true })

  return tab;
}

async function refreshBadge () {
  const tab = await getCurrentTab()
  const { id: tabId, url } = tab

  if (_.some(exactSites, site => _.includes(url, site))) {
    chrome.action.setBadgeBackgroundColor({ color: '#00b4d8', tabId })
    chrome.action.setBadgeText({ text: ' ', tabId })
  } else if (_.some(proxySites, site => _.includes(url, site))) {
    chrome.action.setBadgeBackgroundColor({ color: '#ffbf69', tabId })
    chrome.action.setBadgeText({ text: ' ', tabId })
  } else {
    chrome.action.setBadgeText({ text: '', tabId })
  }
}

chrome.tabs.onUpdated.addListener(async function() {
  refreshBadge()
});
