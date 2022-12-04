function fetchConversionRate() {
    return fetch('https://openexchangerates.org/api/latest.json?app_id=&base=USD&symbols=AUD')
      .then(response => response.json())
      .then(data => 1 / data.rates.AUD)
      .catch(err => {
        console.error(err);
        return 0.67; // Fall back to a default value if the API request fails
      });
  }

async function do_work() {
    const AUD_TO_USD_RATIO = await fetchConversionRate()
    alert(AUD_TO_USD_RATIO)
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

do_work()