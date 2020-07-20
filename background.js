// const sleepyBirb = 'https://sleepy-birb.vercel.app'
const sleepyBirb = 'http://localhost:3000'

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const url = new URL(details.url)

    // if sleepy is false, don't redirect
    if (url.search === '?sleepy=false') return

    // don't redirect on home page
    if (url.pathname === '/' || url.pathname === '/home') return

    console.log(url)

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
