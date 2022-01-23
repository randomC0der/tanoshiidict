"use strict";

import browser from "webextension-polyfill";

async function openTab(query: string, language: string): Promise<void> {
  await browser.tabs.create({
    url: `https://www.tanoshiijapanese.com/dictionary/index.cfm?${language}=${encodeURI(query)}`,
  });
}

function createContextMenu(language: string): void {
  browser.contextMenus.create({
    title: browser.i18n.getMessage(language === "j" ? "contextMenuTitleJpEn" : "contextMenuTitleEnJp"),
    contexts: ["selection"],
    onclick: async (info) => await openTab(info.selectionText, language),
  });
}

createContextMenu("j");
createContextMenu("e");
