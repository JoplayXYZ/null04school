const params = new URLSearchParams(window.location.search);
const pageUrl = params.get('page');
const hideBar = params.get('hidebar');

if (pageUrl) {
    const iframe = document.querySelector('iframe');

    if (iframe) {
        iframe.src = pageUrl;
    } else {
        console.warn("[iframe.js] No frame found on the page.");
    }
} else {
    console.warn("[iframe.js] No 'page' parameter found in the URL.");
}

if (hideBar) {
    document.getElementById('url-display').style.display = "none";
}


const frame = document.getElementById('frame');
const urlDisplay = document.getElementById('url-display');

function updateUrlDisplay() {
    try {
        urlDisplay.textContent = 'Current site: ' + frame.contentWindow.location.href;
    } catch (e) {
        urlDisplay.textContent = 'Current site: ' + frame.src + ' (cross-origin)';
    }
}

const container = document.getElementById('frame-container');



frame.addEventListener('load', updateUrlDisplay);
updateUrlDisplay();

function reloadIframe() {
    frame.contentWindow.location.reload();
}



function toggleFullscreen() {
    if (!document.fullscreenElement) {
        container.requestFullscreen().catch(err => {
            alert(`Error attempting fullscreen: ${err.message}`);
        });
    } else {
        document.exitFullscreen();
    }
}

document.addEventListener('fullscreenchange', () => {
    if (document.fullscreenElement === container) {
        frame.classList.add('full');
        console.log('Fullscreen entered');

        const Urls [
            '/_pages/peopleplayground',
            '/_pages/bigtowertinysquare2',
            '/_pages/bigneontowertinysquare',
            '/_pages/badtimesimulator',
            '/_pages/badgxme',
            '/_pages/cookieclicker',
            '/_pages/fivenightsatfreddys',
            '/_pages/fivenightsatfreddys2',
            '/_pages/fivenightsatfreddys3',
            '/_pages/fivenightsatfreddys4',
            '/_pages/fivenightsatfreddyspizzasimulator',
            '/_pages/fivenightsatfreddyssisterlocation',
            '/_pages/fivenightsatfreddysworld',
            '/_pages/fivenightsatfreddysultimatecustomnight'
            
        ];
            
        if (Urls.includes(pageUrl) {
            frame.classList.add('full-wide');
        }
    } else {
        frame.classList.remove('full', 'full-wide');
        console.log('Fullscreen exited');
    }
});

const fullscreen = document.getElementById('fullscreenFrame');
const reload = document.getElementById('reloadFrame');

reload.addEventListener('click', reloadIframe);
fullscreen.addEventListener('click', toggleFullscreen);
