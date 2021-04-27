"use strict";

let query = null;
let tabId = null;

browser.runtime.onInstalled.addListener(function (details) {
  const openExample = async function (word) {
    query = word.selectionText;

    const tab = await browser.tabs.create({
      url: "https://www.tanoshiijapanese.com/dictionary/",
    });

    tabId = tab.id; // you already have the tab, so remember its id
  };

  browser.contextMenus.create({
    title: "Open in Tanoshii Dictionary",
    contexts: ["selection"],
    onclick: openExample,
  });
});

browser.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.status === "ok" && query) {
    browser.tabs
      .sendMessage(tabId, { query })
      .then(() => (query = null)); // reset the query
  }
});
