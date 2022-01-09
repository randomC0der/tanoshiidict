"use strict";

import browser from "webextension-polyfill";
import url from "./url";

let query: string = null;
let tabId: number = 0;

async function openTab(info: browser.Menus.OnClickData) {
  query = info.selectionText;

  const tab = await browser.tabs.create({
    url: url.toString(),
  });

  tabId = tab.id; // remember the new tab's id so that we can inject the query later
}

browser.contextMenus.create({
  title: browser.i18n.getMessage("contextMenuTitle"),
  contexts: ["selection"],
  onclick: openTab,
});

browser.runtime.onMessage.addListener(async function (message: { isSearchPage: boolean }) {
  if (message.isSearchPage && query) {
    await browser.tabs.sendMessage(tabId, { query });
    query = null; // reset the query
  }
});
