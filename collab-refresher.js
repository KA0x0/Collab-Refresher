// ==UserScript==
// @name        Collab Refresher
// @namespace   https://codeberg.org/KHAOZ
// @author      KH405
// @license     MIT
// @version     1.0.0
// @description Refresh Google Collab so it doesn't time out
// @grant       None
// @homepageURL https://codeberg.org/KHAOZ/Collab-Refresher/
// @supportURL  https://codeberg.org/KHAOZ/Collab-Refresher/-/issues
// @downloadURL https://codeberg.org/KHAOZ/Collab-Refresher/-/raw/master/collab-refresher.js
// @updateURL   https://codeberg.org/KHAOZ/Collab-Refresher/-/raw/master/collab-refresher.js
// ==/UserScript==
function ClickConnect(){
document.querySelector("colab-toolbar-button#connect").click() 
}
setInterval(ClickConnect,600000)