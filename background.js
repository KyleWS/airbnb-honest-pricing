const airbnb_com_au = 'https://www.airbnb.com.au/';


function do_work() {
  const AUD_TO_USD_RATIO = 0.64;
  prices = document.getElementsByClassName('t5u4927');
  Object.keys(prices).forEach(item_key => {
    const already_usd = prices[item_key].innerHTML.split(";")[1] === 'USD'
    if (!already_usd) {
      const aud = prices[item_key].innerHTML.split("&")[0].replace("$", "").replace(",", "");
      const usd = Math.round(aud * AUD_TO_USD_RATIO);
      prices[item_key].innerHTML = `${usd}&nbsp;USD`
    }
  })
}

// When the user clicks on the extension action
chrome.action.onClicked.addListener(async (tab) => {
  if (tab.url.startsWith(airbnb_com_au)) {
    await chrome.scripting.executeScript({
      target: {tabId: tab.id},
      func: do_work,
    }, () => {})
  }
});