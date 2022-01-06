"use strict";

import browser from 'webextension-polyfill';

let query: string = null;
let tabId: number = 0;

async function openTab(word) {
  query = word.selectionText;

  const tab = await browser.tabs.create({
    url: "https://www.tanoshiijapanese.com/dictionary/",
  });

  tabId = tab.id; // you already have the tab, so remember its id
}

browser.contextMenus.create({
  title: browser.i18n.getMessage("contextMenuTitle"),
  contexts: ["selection"],
  onclick: openTab,
});

browser.runtime.onMessage.addListener(function (request, sender) {
  if (query) {
    browser.tabs
      .sendMessage(tabId, { query })
      .then(() => (query = null)); // reset the query
  }
});
