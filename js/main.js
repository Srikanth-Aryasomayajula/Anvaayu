(() => {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") !== "true";
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
      nav.classList.toggle("is-open", open);
      document.body.classList.toggle("menu-open", open);
    });
    nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
      toggle.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
      document.body.classList.remove("menu-open");
    }));
  }

  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const form = document.querySelector("#contact-form");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `Anvaayu project enquiry — ${data.get("service")}`;
      const body = [
        `Name: ${data.get("name")}`,
        `Work email: ${data.get("email")}`,
        `Company: ${data.get("company") || "Not provided"}`,
        `Service: ${data.get("service")}`,
        "",
        "Requirement:",
        data.get("message")
      ].join("\n");
      const status = document.querySelector("#form-status");
      status.textContent = "Your email application should open with the enquiry details. Please review and send the message.";
      window.location.href = `mailto:pavanibharadwaj93@gmail.com,sushmasri1699@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();