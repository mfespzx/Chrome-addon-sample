"use strict";
let Data = { Title: "", URL: "" };
chrome.tabs.query({
    active: true,
    currentWindow: true,
}, (tabs) => {
    const tab = tabs[0];
    Data.Title = tab.title || '';
    Data.URL = tab.url || '';
    console.log(`Title: ${Data.Title}`);
    console.log(`URL: ${Data.URL}`);
});
window.addEventListener('load', () => {
    var _a, _b, _c, _d;
    const txtBox = document.querySelector('input');
    const get = document.getElementById('get');
    (_a = document.querySelector('button.ttl')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        if (txtBox)
            txtBox.value = Data.Title;
    });
    (_b = document.querySelector('button.url')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        if (txtBox)
            txtBox.value = Data.URL;
        if (get)
            get.href = "http://127.0.0.1/get/writeurl.php?url=" + Data.URL;
    });
    (_c = document.querySelector('button.bmark')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        if (txtBox)
            txtBox.value = `[${Data.Title}](${Data.URL})`;
    });
    (_d = document.querySelector('button.mov')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => {
        // 動作の追加
    });
    document.body.addEventListener('selectstart', () => {
        //alert('test');
        console.log("テキストが選択されました");
    });
    const cb = new ClipboardJS('button.copy');
    const msgContainer = document.querySelector('div.msg');
    const msgSuccess = document.querySelector('p.copied');
    const msgFailed = document.querySelector('p.failed');
    cb.on("success", (e) => {
        console.log('Copied Successfully.', e);
        if (msgContainer)
            msgContainer.style.display = "block";
        if (msgSuccess)
            msgSuccess.style.display = "block";
        setTimeout(() => {
            if (msgSuccess)
                msgSuccess.style.display = "none";
            if (msgContainer)
                msgContainer.style.display = "none";
        }, 3000);
    });
    cb.on("error", (e) => {
        console.error('Failed to Copy.', e);
        if (msgContainer)
            msgContainer.style.display = "block";
        if (msgFailed)
            msgFailed.style.display = "block";
        setTimeout(() => {
            if (msgFailed)
                msgFailed.style.display = "none";
            if (msgContainer)
                msgContainer.style.display = "none";
        }, 3000);
    });
});
