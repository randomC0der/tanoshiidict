"use strict";

import browser from 'webextension-polyfill';

let query = null;
let tabId = null;

async function openTab(word) {
  query = word.selectionText;

  const tab = await browser.tabs.create({
    url: "https://www.tanoshiijapanese.com/dictionary/",
  });

  tabId = tab.id; // you already have the tab, so remember its id
}

browser.contextMenus.create({
  title: "Open in Tanoshii Dictionary",
  contexts: ["selection"],
  onclick: openTab,
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.hostname === "www.tanoshiijapanese.com" && query) {
    browser.tabs
      .sendMessage(tabId, { query })
      .then(() => (query = null)); // reset the query
  }
});
