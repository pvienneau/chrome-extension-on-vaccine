const proxySites = ['vaccine.covaxonbooking.ca', 'covid19.ontariohealth.ca']
const exactSites = ['vaccine.covaxonbooking.ca/appointment-select']

async function getCurrentTab() {
  const [ tab ] = await chrome.tabs.query({ active: true, currentWindow: true })

  return tab;
}

async function refreshBadge () {
  const tab = await getCurrentTab()
  const { id: tabId, url } = tab

  console.warn('refreshBadge')

  if (_.some(exactSites, site => _.includes(url, site))) {
    chrome.action.setBadgeBackgroundColor({ color: '#0096c7', tabId })
    chrome.action.setBadgeText({ text: 'on', tabId })
  } else if (_.some(proxySites, site => _.includes(url, site))) {
    chrome.action.setBadgeBackgroundColor({ color: '#fb8500', tabId })
    chrome.action.setBadgeText({ text: 'off', tabId })
  } else {
    chrome.action.setBadgeText({ text: 'off', tabId })
    chrome.action.setBadgeBackgroundColor({ color: '#9999a1', tabId })
  }
}

chrome.tabs.onActivated.addListener(() => refreshBadge())
chrome.tabs.onUpdated.addListener(() => refreshBadge())
