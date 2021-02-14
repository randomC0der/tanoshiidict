chrome.extension.onMessage.addListener(
  function (request, sender, sendResponse) {
    document.getElementsByName("j")[0].value = request.content;
  }
);

chrome.runtime.sendMessage("replace_here", { status: "ok" });