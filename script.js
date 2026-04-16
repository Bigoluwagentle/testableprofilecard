(function () {
  "use strict";
  /** @type {HTMLElement|null} */
  const timeEl = document.getElementById("epoch-time");
  if (!timeEl) {
    console.warn("[ProfileCard] #epoch-time element not found.");
    return;
  }
  function updateTime() {
    timeEl.textContent = Date.now().toString();
  }
  updateTime();
  setInterval(updateTime, 1000);
})();