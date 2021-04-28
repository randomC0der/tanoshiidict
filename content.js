"use strict";

browser.runtime.onMessage.addListener(request => {
  document.getElementsByName("j")[0].value = request.query;
  document.getElementsByName("search")[0].click();
});

// The page is ready. Now the background script can send the query
browser.runtime.sendMessage({ hostname: document.location.hostname });
