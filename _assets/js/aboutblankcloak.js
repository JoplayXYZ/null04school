function cloak() {
    let win = window.open();
    win.document.body.style.margin = "0";
    win.document.body.style.height = "100vh";
    
    let iframe = win.document.createElement("iframe");
    iframe.style.border = "none";
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.src = "/";

    win.document.body.appendChild(iframe);
    window.location.replace("https://classroom.google.com"); 
};