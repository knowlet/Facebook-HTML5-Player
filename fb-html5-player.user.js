// ==UserScript==
// @name         Facebook HTML5 Player
// @namespace    http://knowlet3389.blogspot.tw
// @version      1.0
// @description  I hate flash player.
// @author       KNowlet
// @match        https://*.facebook.com/*
// @grant        none
// @downloadURL  https://github.com/knowlet/Facebook-HTML5-Player/raw/master/fb-html5-player.user.js
// ==/UserScript==
var handle = setInterval(function() {
    var flash = document.querySelector(".videoStage embed");
    if (flash) {
        // clearInterval(handle);
        (function(f) {    
            var flashvars  = f.getAttribute("flashvars");
            var vData = {};
            (function(f, v) {
                var params;
                eval(decodeURIComponent(f.split("&width")[0]));
                v.sd = params.video_data[0].sd_src;
                v.hd = params.video_data[0].hd_src;
            })(flashvars, vData);
            var htmlPlayer = document.createElement("video");
            htmlPlayer.setAttribute("width", f.width);
            htmlPlayer.setAttribute("height", f.height);
            htmlPlayer. setAttribute("controls", "");
            htmlPlayer. setAttribute("autoplay", "");
            var vSource = document.createElement("source");
            vSource.setAttribute("src", vData.hd ? vData.hd : vData.sd);
            vSource.setAttribute("type", "video/mp4");
            htmlPlayer.appendChild(vSource);
            f.parentNode.replaceChild(htmlPlayer, f);
        })(flash);
    }
}, 1200);