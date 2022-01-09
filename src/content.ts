"use strict";

import browser from "webextension-polyfill";
import url from "./url"

browser.runtime.onMessage.addListener((message: { query: string, japanese: boolean }, sender: browser.Runtime.MessageSender) => {
  // inject the query
  document.getElementsByName("j")[0].setAttribute("value", message.query);
  document.getElementsByName("search")[0].click();
});

// The page is ready. Now the background script can send the query
browser.runtime.sendMessage({ isSearchPage: window.location.pathname === url.pathname });
