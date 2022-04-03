// ==UserScript==
// @name         TagPro r/place  Template
// @namespace    http://tagpro.gg/
// @version      0.3
// @description  Shows which colors to use for the TagPro design
// @author       Catalyst, Fa113n5tar
// @match        https://hot-potato.reddit.com/embed*
// @icon         https://tagpro.koalabeast.com/images/favicon.ico
// @updateURL    https://github.com/catalyst518/tagpro_place_template/raw/main/userscript.user.js
// @downloadURL  https://github.com/catalyst518/tagpro_place_template/raw/main/userscript.user.js
// @grant        none
// ==/UserScript==
if (window.top !== window.self){
	window.addEventListener('load', ()=>{
			document.getElementsByTagName("mona-lisa-embed")[0].shadowRoot.children[0].getElementsByTagName("mona-lisa-canvas")[0].shadowRoot.children[0].appendChild(
		(function (){
			const i = document.createElement("img");
			i.src = "https://github.com/catalyst518/tagpro_place_template/blob/main/template.png?raw=true";
			i.style = "position: absolute;left: 0;top: 0;image-rendering: pixelated;width: 2000px;height: 2000px;";
			console.log(i);
			return i;
		})())}, false);
}