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
    // Loader Change banner
    const banner = document.getElementById("loaderBanner");
    if (banner) {
        if (cfg.loaderChange) {
            banner.classList.remove("banner-hidden");
            banner.innerHTML = `
                🔴 <strong>LOADER CHANGE IN PROGRESS</strong><br>
                Please wait for the new Mode of Payment (MOP) to be posted in the official Messenger group.<br>
                ‼️ NO MORE PAHABOL TO AVOID DELAYS ‼️
            `;
        } else {
            banner.classList.add("banner-hidden");
        }
    }

    // Loader name
    const ln = document.getElementById("loaderName");
    if (ln && cfg.loaderName) {
        ln.textContent = cfg.loaderName;
    }

    // Loader status text
    const ls = document.getElementById("loaderStatus");
    if (ls && cfg.loaderStatus) {
        ls.textContent = cfg.loaderStatus === "online" ? "🟢 Online" : "🔴 Offline";
    }

    // Messenger links
    const links = document.querySelectorAll(".messenger-link");
    links.forEach(a => {
        if (cfg.messengerUrl) {
            a.href = cfg.messengerUrl;
        }
    });

    // Disable forms if loader change is on
    if (cfg.loaderChange) {
        const formLockElems = document.querySelectorAll(".form-lock");
        formLockElems.forEach(el => {
            el.classList.add("locked");
            const btns = el.querySelectorAll("button, input, a.btn-primary");
            btns.forEach(b => {
                b.classList.add("btn-disabled");
                b.disabled = true;
            });
        });
    }
}
