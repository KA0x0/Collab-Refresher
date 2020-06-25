// ==UserScript==
// @name        Collab Refresher
// @namespace   https://gitlab.com/KH405
// @author      KH405
// @license     MIT
// @version     1.0.0
// @description Refresh Google Collab so it doesn't time out
// @grant       None
// @homepageURL https://gitlab.com/KH405/Collab-Refresher/
// @supportURL  https://gitlab.com/KH405/Collab-Refresher/-/issues
// @downloadURL https://gitlab.com/KH405/Collab-Refresher/-/raw/master/collab-refresher.js
// @updateURL   https://gitlab.com/KH405/Collab-Refresher/-/raw/master/collab-refresher.js
// ==/UserScript==
function ClickConnect(){
document.querySelector("colab-toolbar-button#connect").click() 
}
setInterval(ClickConnect,600000)