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
    "gmail": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://mail.google.com&size=16",
    "translate": "https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=https://translate.google.com&size=16"
};

const UNMASKED_DEFAULT = {
    ico: "data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAASYfrAABZ/wD39/cAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIAAAIgAAAAADMzMAAAAAADMzMzAAAAAAMzMzMAAAAAAzMzMwAAAAADMzMzAAAAAAEyIjEAAAAAAwMjAwAAAAADMzMzAAAAAAAzMzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAOAPAADwHwAA4A8AAIADAADABwAA4A8AAOAPAADgDwAA4A8AAOAPAADwHwAA+D8AAP//AAD//wAA",
    title: "Google"
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
    document.title = title;
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

    if (currentMask.enabled) {
        localStorage.setItem("maskSettings", JSON.stringify(currentMask));
        applyMask(currentMask);
    } else {
        const unmasked = { ...UNMASKED_DEFAULT, enabled: false };
        localStorage.setItem("maskSettings", JSON.stringify(unmasked));
        applyMask(unmasked);
    }
}

function loadMasking() {
    console.log("Loading stored mask...");
    const saved = localStorage.getItem("maskSettings");

    if (saved) {
        currentMask = JSON.parse(saved);
    } else {
        currentMask = { ...UNMASKED_DEFAULT, enabled: false };
        localStorage.setItem("maskSettings", JSON.stringify(currentMask));
    }

    if (enable && titleInput && icoInput) {
        enable.checked = currentMask.enabled;
        icoInput.value = currentMask.ico || "google";
        titleInput.value = currentMask.title || "Google";
    }

    applyMask(currentMask);
    console.log("Loaded mask:", currentMask);
}

if (updateButton) {
    updateButton.onclick = (event) => {
        event.preventDefault();
        updateMasking();
        window.location.reload();
    };
}

loadMasking();
