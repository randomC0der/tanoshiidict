
var tabId;
var query;

chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    if (request.status === "ok") {
      chrome.tabs.sendMessage(tabId, { content: query });
    }
  }
);

openExample = function (word) {
  query = word.selectionText;
  chrome.tabs.create({ url: "https://www.tanoshiijapanese.com/dictionary" }, (tab) => { tabId = tab.id });
};

chrome.contextMenus.create({
  title: "Open in Tanoshii Dictionary",
  contexts: ["selection"],
  onclick: openExample
});
