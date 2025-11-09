document.head = document.head || document.getElementsByTagName('head')[0];

const enable = document.getElementById("mask-enable");
const titleInput = document.getElementById("mask-title");
const icoInput = document.getElementById("mask-ico");
const updateButton = document.getElementById("mask-update");

let currentMask = {};

const favicons = {
    "google": "https://www.google.com/favicon.ico",
    "classroom": "https://ssl.gstatic.com/classroom/favicon.png",
    "docs": "https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://docs.google.com/document/u/0/&size=16",
    "drive": "https://t3.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://drive.google.com&size=16",
    "gmail": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mail.google.com&size=16"
};

function changeFavicon(src) {
    const link = document.createElement('link');
    const oldLink = document.getElementById('dynamic-favicon');

    link.id = 'dynamic-favicon';
    link.rel = 'shortcut icon';
    link.href = src;
    link.type = src.endsWith(".png") ? "image/png" : "image/x-icon";

    if (oldLink) document.head.removeChild(oldLink);
    document.head.appendChild(link);
}

function changeTitle(title) {
    document.title = title === "" ? "Google" : title;
}

function applyMask(mask) {
    const iconSrc = favicons[mask.ico] || mask.ico || favicons.google;
    const title = mask.title || "Google";
    changeFavicon(iconSrc);
    changeTitle(title);
}

function updateMasking() {
    currentMask = {
        enabled: enable.checked,
        ico: icoInput.value || "google",
        title: titleInput.value || "Google"
    };

    localStorage.setItem("maskSettings", JSON.stringify(currentMask));

    if (currentMask.enabled) {
        applyMask(currentMask);
    } else {
        applyMask({ ico: "google", title: "Google" });
    }
}

function loadMasking() {
    console.log("Loading stored mask...");
    const saved = localStorage.getItem("maskSettings");

    if (saved) {
        currentMask = JSON.parse(saved);
    } else {
        currentMask = {
            enabled: true,
            ico: "google",
            title: "Google"
        };
        localStorage.setItem("maskSettings", JSON.stringify(currentMask));
    }

    if (enable && titleInput && icoInput) {
        enable.checked = currentMask.enabled;
        icoInput.value = currentMask.ico;
        titleInput.value = currentMask.title;
    }

    if (currentMask.enabled) {
        applyMask(currentMask);
    } else {
        applyMask({ ico: "google", title: "Google" });
    }

    console.log("Loaded mask: ", currentMask);
}


if (updateButton) {
    updateButton.onclick = (event) => {
        event.preventDefault();
        updateMasking();
    };
}

loadMasking();
