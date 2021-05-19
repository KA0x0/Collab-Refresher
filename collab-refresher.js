// ==UserScript==
// @name        Collab Refresher
// @namespace   https://github.com/KH405-TV
// @author      KH405
// @license     GPL-3
// @version     1.0.0
// @description Refresh Google Collab so it doesn't time out
// @grant       None
// @homepageURL https://github.com/KH405-TV/Collab-Refresher
// @supportURL  https://github.com/KH405-TV/Collab-Refresher/issues
// @downloadURL https://github.com/KH405-TV/Collab-Refresher/blob/master/collab-refresher.js
// @updateURL   https://github.com/KH405-TV/Collab-Refresher/blob/master/collab-refresher.js
// ==/UserScript==
function ClickConnect(){
document.querySelector("colab-toolbar-button#connect").click() 
}
setInterval(ClickConnect,600000)
