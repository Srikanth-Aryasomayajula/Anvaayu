
/* =========================================================
   ANVAAYU — TEMPORARY FOUNDER SURPRISE
   Homepage only. Shown once per browser.
   ========================================================= */

(() => {
  const overlay = document.querySelector("#founder-surprise");

  if (!overlay) return;

  const closeButton = overlay.querySelector(".surprise-close");
  const celebrateButton = overlay.querySelector(".surprise-cta");

  const storageKey = "anvaayu-founder-surprise-seen";
  let previousBodyOverflow = "";
  let timerId;

  function hasBeenSeen() {
    try {
      return localStorage.getItem(storageKey) === "true";
    } catch {
      return false;
    }
  }

  function rememberSeen() {
    try {
      localStorage.setItem(storageKey, "true");
    } catch {
      // The popup can still work if browser storage is unavailable.
    }
  }

  function openSurprise() {
    if (hasBeenSeen()) return;

    rememberSeen();
    previousBodyOverflow = document.body.style.overflow;

    overlay.hidden = false;
    document.body.style.overflow = "hidden";

    closeButton.focus();
  }

  function closeSurprise() {
    window.clearTimeout(timerId);
    overlay.hidden = true;
    document.body.style.overflow = previousBodyOverflow;
  }

  closeButton.addEventListener("click", closeSurprise);
  celebrateButton.addEventListener("click", closeSurprise);

  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
      closeSurprise();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !overlay.hidden) {
      closeSurprise();
    }
  });

  // Give the homepage a moment to load before the surprise appears.
  timerId = window.setTimeout(openSurprise, 1800);
})();
