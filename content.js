"use strict";

browser.runtime.onMessage.addListener(request => {
  document.getElementsByName("j")[0].value = request.query;
  document.getElementsByName("search")[0].click();
});

browser.runtime.sendMessage({ status: "ok" });
