document.addEventListener("DOMContentLoaded", () => {
  fetchConfig();
});

function fetchConfig() {
  fetch("config.json?_=" + Date.now())
    .then(res => res.json())
    .then(cfg => applyConfig(cfg))
    .catch(err => {
      console.warn("Could not load config.json", err);
    });
}

function applyConfig(cfg) {
  // Loader change banner
  const banner = document.getElementById("loaderBanner");
  if (banner) {
    if (cfg.loaderChange) {
      banner.classList.add("show");
      banner.innerHTML = `
🔴 LOADER CHANGE IN PROGRESS<br>
Please wait for the new Mode of Payment in the official Messenger group.<br>
<strong>NO MORE PAHABOL TO AVOID DELAYS.</strong>
      `;
    } else {
      banner.classList.remove("show");
    }
  }

  // Messenger links
  const links = document.querySelectorAll(".messenger-link");
  if (cfg.messengerUrl && links.length) {
    links.forEach(a => (a.href = cfg.messengerUrl));
  }
}
