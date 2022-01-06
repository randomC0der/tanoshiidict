"use strict";

import browser from 'webextension-polyfill';

browser.runtime.onMessage.addListener((message, sender) => {
  document.getElementsByName("j")[0].setAttribute("value", message.query);
  document.getElementsByName("search")[0].click();
});

// The page is ready. Now the background script can send the query
browser.runtime.sendMessage({});
