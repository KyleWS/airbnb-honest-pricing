const airbnb_com_au = 'https://www.airbnb.com.au/';
const chrome_dev = "https://developer.chrome.com/"

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(airbnb_com_au) || tab.url.startsWith(chrome_dev)) {
    await chrome.scripting.executeScript({
      target: {tabId: tab.id, allFrames: true},
      files: ['convertAudToUsdOnAirbnb.js']
    }, () => {})
  }
});