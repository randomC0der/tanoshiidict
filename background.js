"use strict";

function Sleep(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

browser.runtime.onInstalled.addListener(function (details) {
  const openExample = async function (word) {

    const tab = await browser.tabs.create({
      url: "https://www.tanoshiijapanese.com/dictionary/",
    });

    await Sleep(1000); // TODO: otherwise it can't establish the connection

    browser.tabs
      .sendMessage(tab.id, { query: word.selectionText })
      .catch(e => console.error(e));
  };

  browser.contextMenus.create({
    title: "Open in Tanoshii Dictionary",
    contexts: ["selection"],
    onclick: openExample,
  });
});
