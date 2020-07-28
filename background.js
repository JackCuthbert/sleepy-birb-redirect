const sleepyBirb = 'https://sleepy-birb.vercel.app'

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url)

    // if sleepy is false, don't redirect
    if (url.search === '?sleepy=false') return

    // only redirect for individual tweets
    if (!url.pathname.toLowerCase().includes('/status/')) return

    return {
      redirectUrl: sleepyBirb + '/?t=' + url.href
    }
  },
  {
    urls: ['*://twitter.com/*', '*://mobile.twitter.com/*'],
    types: [
      'main_frame',
      'sub_frame',
      'stylesheet',
      'script',
      'image',
      'object',
      'xmlhttprequest',
      'other'
    ]
  },
  ['blocking']
)
