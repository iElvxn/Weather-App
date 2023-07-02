(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>p});var r=t(81),o=t.n(r),c=t(645),i=t.n(c),s=t(667),a=t.n(s),l=new URL(t(90),t.b),f=i()(o());f.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap);"]);var d=a()(l);f.push([e.id,`body {\n    margin: 0;\n    background-color: rgb(38, 14, 66);\n    color: white;\n    font-family: 'Montserrat', sans-serif;\n    background-image: url(${d}); \n    height: 100vh;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n.weather-top {\n    display: flex;\n    justify-content: space-between;\n    padding: 4vw;\n}\n\n.weather-info {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n}\n\n.city-name {\n    font-size: 2.5rem;\n    font-weight: 500;\n}\n\n.temperature {\n    font-size: 3.5rem;\n    font-weight: 700;\n}\n\n.unit-btn {\n    margin-top: -.9rem;\n    font-size: .7rem;\n    font-weight: 500;\n    cursor: pointer;\n    transition: .4s;\n}\n\n.unit-btn:hover{\n    color: rgb(185, 154, 214);\n}\n\n.condition {\n    font-size: 1.2rem;\n    font-weight: 400;\n}\n\n.condition-img {\n    width: 100px;\n    height: 100px;\n    background: none;\n}\n\n.search-box {\n    height: 30px;\n    max-width: 200px;\n    border-bottom: 2px solid;\n    padding: 6px 12px;\n    outline: none;\n    border: none;\n    background: none;\n    border-bottom: 2px solid rgb(255, 255, 255)\n}\n\ninput,\n::placeholder {\n    color: white;\n    font-family: 'Montserrat', sans-serif;\n    font-size: .85rem;\n    font-weight: 700;\n}\n\n.weather-details {\n    display: flex;\n}\n\n.details-container {\n    display: flex;\n    justify-content: space-between;\n    flex-direction: column;\n    height: 100%;\n}\n\n.detail {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n}\n\n.detail-info {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 50px;\n}\n\n.detail-svg {\n    height: 50px;\n    width: 50px;\n}\n\n.detail-title {\n    font-size: .85rem;\n    font-weight: 600;\n}\n\n.detail-text {\n    font-size: 1.8rem;\n    font-weight: 800;\n}`,""]);const p=f},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,c){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var a=this[s][0];null!=a&&(i[a]=!0)}for(var l=0;l<e.length;l++){var f=[].concat(e[l]);r&&i[f[0]]||(void 0!==c&&(void 0===f[5]||(f[1]="@layer".concat(f[5].length>0?" ".concat(f[5]):""," {").concat(f[1],"}")),f[5]=c),t&&(f[2]?(f[1]="@media ".concat(f[2]," {").concat(f[1],"}"),f[2]=t):f[2]=t),o&&(f[4]?(f[1]="@supports (".concat(f[4],") {").concat(f[1],"}"),f[4]=o):f[4]="".concat(o)),n.push(f))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var c={},i=[],s=0;s<e.length;s++){var a=e[s],l=r.base?a[0]+r.base:a[0],f=c[l]||0,d="".concat(l," ").concat(f);c[l]=f+1;var p=t(d),u={css:a[1],media:a[2],sourceMap:a[3],supports:a[4],layer:a[5]};if(-1!==p)n[p].references++,n[p].updater(u);else{var h=o(u,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var c=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<c.length;i++){var s=t(c[i]);n[s].references--}for(var a=r(e,o),l=0;l<c.length;l++){var f=t(c[l]);0===n[f].references&&(n[f].updater(),n.splice(f,1))}c=a}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var c=t.sourceMap;c&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(c))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},90:(e,n,t)=>{e.exports=t.p+"c39d40be4a949714b5cd.png"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var c=n[r]={id:r,exports:{}};return e[r](c,c.exports,t),c.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),c=t(569),i=t.n(c),s=t(565),a=t.n(s),l=t(216),f=t.n(l),d=t(589),p=t.n(d),u=t(426),h={};h.styleTagTransform=p(),h.setAttributes=a(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=f(),n()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const g={renderCurrent:(e,n)=>{const t=document.querySelector(".city-name"),r=document.querySelector(".temperature"),o=document.querySelector(".condition"),c=document.querySelector(".condition-img");console.log(e),t.innerText=e.location.name+", "+e.location.country,r.innerText="F"===n?Math.round(e.current.temp_f)+" °"+n:Math.round(e.current.temp_c)+" °"+n,o.innerText=e.current.condition.text,c.innerHTML=w.getIcon(e)},unitChange:e=>{document.querySelector(".unit-btn").innerText="F"===e?"Display °C":"Display °F";let n=document.querySelector(".city-name").innerText;w.getWeatherData(n,e)},renderDetails:(e,n)=>{document.querySelector("#feels-like-text").innerText="F"===n?Math.round(e.current.feelslike_f)+" °"+n:Math.round(e.current.feelslike_c)+" °"+n}},v=g,m={getWeatherData:async function(e,n){try{let t="https://api.weatherapi.com/v1/forecast.json?key=9dc871fe45fb412ab3d165658232906&q="+e;const r=await fetch(t,{mode:"cors"}),o=await r.json();v.renderCurrent(o,n),v.renderDetails(o,n)}catch(e){console.log("Enter a valid city name.")}},getIcon:function(e){const n=JSON.stringify(e.current.condition.code),t=document.querySelector(".condition").innerText;return"1000"===n?"Clear"===t?'<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Environment / Moon"> <path id="Vector" d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6144 14.6147C19.4943 18.3103 16.0613 20.9999 12 20.9999C7.02944 20.9999 3 16.9707 3 12.0001C3 7.93883 5.69007 4.50583 9.38561 3.38574C9.13484 4.21311 9 5.09074 9 6Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g></svg>':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="3 3 26 26">\n                <title>sun</title>\n                <path d="M16 9c-3.859 0-7 3.141-7 7s3.141 7 7 7 7-3.141 7-7c0-3.859-3.141-7-7-7zM16 21c-2.762 0-5-2.238-5-5s2.238-5 5-5 5 2.238 5 5-2.238 5-5 5zM16 7c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM16 25c-0.552 0-1 0.448-1 1v2c0 0.552 0.448 1 1 1s1-0.448 1-1v-2c0-0.552-0.448-1-1-1zM23.777 9.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM8.223 22.365l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0l1.414-1.414c0.391-0.392 0.391-1.023 0-1.414s-1.023-0.392-1.414 0zM7 16c0-0.552-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1zM28 15h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1zM8.221 9.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM23.779 22.363c-0.392-0.391-1.023-0.391-1.414 0s-0.392 1.023 0 1.414l1.414 1.414c0.391 0.391 1.023 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414z"/>\n                </svg>':"1003"===n?"//cdn.weatherapi.com/weather/64x64/night/116.png"===e.current.condition.icon?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 2.42 32 29.57">\n                <title>cloudy-night</title>\n                <path d="M27.191 16.385c0.305-0.227 0.613-0.449 0.889-0.725 0.826-0.827 1.454-1.833 1.862-2.991 0.13-0.362 0.038-0.768-0.236-1.039-0.272-0.273-0.676-0.366-1.039-0.237-2.212 0.781-4.605 0.25-6.244-1.391-1.641-1.641-2.174-4.033-1.391-6.244 0.128-0.363 0.036-0.767-0.237-1.040-0.271-0.271-0.676-0.365-1.039-0.237-1.159 0.411-2.164 1.039-2.99 1.864-2.096 2.094-2.749 5.063-2.030 7.737-2.703 0.345-5.133 1.781-6.751 3.987-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-3.090-2.026-5.689-4.809-6.615zM18.182 5.76c0.159-0.161 0.329-0.311 0.509-0.452-0.141 2.249 0.671 4.461 2.319 6.108 1.648 1.648 3.861 2.458 6.109 2.319-0.862 1.099-2.050 1.783-3.32 2.074-1.711-2.172-4.225-3.539-6.997-3.762-0.767-2.122-0.318-4.59 1.38-6.288zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 1.262-2.46 3.734-4.181 6.645-4.346 0.152-0.009 0.301-0.033 0.453-0.033 0.807 0 1.582 0.126 2.313 0.349 0.987 0.302 1.887 0.794 2.668 1.428 0.746 0.605 1.371 1.348 1.863 2.181 0.083 0.141 0.177 0.273 0.253 0.421 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n                </svg>':'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n                <title>cloudy</title>\n                <path d="M13 4c0.552 0 1-0.448 1-1v-2c0-0.552-0.448-1-1-1s-1 0.448-1 1v2c0 0.552 0.448 1 1 1zM20.777 6.635l1.414-1.414c0.391-0.391 0.391-1.023 0-1.414s-1.023-0.391-1.414 0l-1.414 1.414c-0.391 0.391-0.391 1.023 0 1.414s1.023 0.391 1.414 0zM1 14h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1s0.448 1 1 1zM22 13c0 0.552 0.448 1 1 1h2c0.552 0 1-0.448 1-1s-0.448-1-1-1h-2c-0.552 0-1 0.448-1 1zM5.221 6.635c0.391 0.391 1.024 0.391 1.414 0s0.391-1.023 0-1.414l-1.414-1.414c-0.391-0.391-1.023-0.391-1.414 0s-0.391 1.023 0 1.414l1.414 1.414zM25 16c-0.332 0-0.66 0.023-0.987 0.070-1.048-1.43-2.445-2.521-4.029-3.219-0.081-3.789-3.176-6.852-6.984-6.852-3.859 0-7 3.141-7 7 0 1.090 0.271 2.109 0.719 3.027-3.727 0.152-6.719 3.211-6.719 6.973 0 3.859 3.141 7 7 7 0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM13 8c2.488 0 4.535 1.823 4.919 4.203-0.626-0.125-1.266-0.203-1.919-0.203-2.871 0-5.531 1.238-7.398 3.328-0.371-0.698-0.602-1.482-0.602-2.328 0-2.762 2.238-5 5-5zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.484 0 0.941 0.091 1.383 0.221 0.176 0.049 0.354 0.089 0.52 0.158 0.273-0.535 0.617-1.025 0.999-1.484 1.461-1.758 3.634-2.895 6.099-2.895 0.633 0 1.24 0.091 1.828 0.232 0.66 0.156 1.284 0.393 1.865 0.706 1.456 0.773 2.651 1.971 3.404 3.441 0.587-0.242 1.229-0.379 1.904-0.379 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n                </svg>':"1006"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6 32 20">\n          <title>cloud</title>\n          <path d="M25 10c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 22c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5z"/>\n          </svg>':"1009"===n||"04n"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 6.57 32 25.43">\n          <title>Overcast</title>\n          <path d="M32 15c0-3.073-2.5-5.572-5.573-5.572-0.15 0-0.298 0.007-0.447 0.018-1.445-1.803-3.624-2.874-5.98-2.874-2.355 0-4.535 1.070-5.98 2.874-0.148-0.012-0.298-0.018-0.449-0.018-3.070-0-5.57 2.499-5.57 5.572 0 0.322 0.043 0.631 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.605-0.565-3.068-1.479-4.25 0.911-0.994 1.479-2.302 1.479-3.75zM25 28c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.137 1.902 0.379 0.035-0.066 0.078-0.125 0.113-0.189 0.352-0.642 0.785-1.23 1.292-1.753 1.443-1.495 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.379 0.353-0.145 0.729-0.238 1.117-0.301l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.338 1.314 0.836 1.79 1.449 0.656 0.845 1.065 1.897 1.065 3.051 0 2.762-2.238 5-5 5zM29.098 17.352c-1.155-0.841-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070-2.133 0-4.145 0.69-5.809 1.896 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.848 2.852-3.126 5.070-3.126s4.122 1.279 5.068 3.126c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.572 0 0.905-0.348 1.721-0.902 2.351z"/>\n          </svg>':"1063"===n||"1180"===n||"1183"===n||"1186"===n||"1189"===n||"1192"===n||"1195"===n||"1240"===n||"1243"===n||"1146"===n||"1150"===n||"1153"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n          <title>rainy</title>\n          <path d="M25 4c-0.332 0-0.66 0.023-0.987 0.070-1.867-2.544-4.814-4.070-8.013-4.070s-6.145 1.526-8.013 4.070c-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 1.81 1.578 4.112 2.458 6.518 2.458 2.409 0 4.708-0.88 6.518-2.458 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7s-3.141-7-7-7zM25 16c-1.070 0-2.057-0.344-2.871-0.917-1.467 1.768-3.652 2.917-6.129 2.917s-4.662-1.148-6.129-2.917c-0.813 0.573-1.801 0.917-2.871 0.917-2.762 0-5-2.238-5-5s2.238-5 5-5c0.676 0 1.316 0.138 1.902 0.38 1.327-2.588 3.991-4.38 7.098-4.38s5.771 1.792 7.096 4.38c0.587-0.242 1.229-0.38 1.904-0.38 2.762 0 5 2.238 5 5s-2.238 5-5 5zM14.063 30c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM22 28c0 1.105 0.895 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4zM6 24c0 1.105 0.894 2 2 2s2-0.895 2-2-2-4-2-4-2 2.895-2 4z"/>\n          </svg>':"1087"===n||"1273"===n||"1276"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0 0 32 32">\n          <title>lightning</title>\n          <path d="M12 24l2 2-2 6 6-6-2-2 2-4-6 4zM32 8.427c0-3.072-2.5-5.57-5.573-5.57-0.15 0-0.298 0.005-0.447 0.017-1.445-1.802-3.624-2.874-5.98-2.874-2.355 0-4.535 1.072-5.98 2.874-0.148-0.012-0.298-0.017-0.449-0.017-3.070 0-5.57 2.499-5.57 5.57 0 0.322 0.043 0.633 0.094 0.94-0.034 0.044-0.074 0.085-0.107 0.13-0.327-0.047-0.655-0.070-0.987-0.070-3.859 0-7 3.141-7 7s3.141 7 7 7c0.856 0 1.693-0.156 2.482-0.458 0.069 0.060 0.151 0.102 0.221 0.16l1.77-1.18c-0.59-0.418-1.141-0.883-1.602-1.438-0.813 0.572-1.801 0.915-2.871 0.915-2.762 0-5-2.237-5-5 0-2.76 2.238-5 5-5 0.676 0 1.316 0.138 1.902 0.38 0.035-0.068 0.078-0.125 0.113-0.19 0.352-0.642 0.785-1.229 1.292-1.753 1.443-1.493 3.448-2.438 5.693-2.438 3.107 0 5.771 1.792 7.096 4.38 0.353-0.146 0.729-0.24 1.117-0.302l0.787-0.078c0.771 0 1.492 0.19 2.145 0.5 0.707 0.339 1.314 0.836 1.79 1.45 0.656 0.845 1.065 1.896 1.065 3.050 0 2.763-2.238 5-5 5-1.070 0-2.057-0.344-2.871-0.915-0.875 1.055-2.027 1.848-3.322 2.348l-0.374 0.746 1.141 1.141c1.066-0.415 2.064-1.012 2.944-1.777 0.789 0.302 1.626 0.458 2.482 0.458 3.859 0 7-3.141 7-7 0-1.604-0.565-3.068-1.479-4.25 0.911-0.992 1.479-2.301 1.479-3.75zM29.098 10.779c-1.155-0.84-2.563-1.352-4.098-1.352-0.332 0-0.66 0.023-0.987 0.070-1.867-2.543-4.814-4.070-8.013-4.070-2.133 0-4.145 0.691-5.809 1.897 0.467-1.428 1.796-2.467 3.379-2.467 0.484 0 0.941 0.098 1.359 0.271 0.949-1.849 2.852-3.128 5.070-3.128s4.122 1.279 5.068 3.128c0.421-0.173 0.88-0.271 1.359-0.271 1.974 0 3.573 1.599 3.573 3.57 0 0.906-0.348 1.723-0.902 2.352z"/>\n          </svg>':"1066"===n||"1210"===n||"1213"===n||"1216"===n||"1219"===n||"1255"===n||"1258"===n||"1279"===n||"1282"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="0.5 1 47.01 47.01">\n          <title>snow</title>\n          <path d="M14.5 24.502c0 1 0.16 1.97 0.44 2.871l-4.080 2.35-7.26-1.94c-1.31-0.35-2.66 0.43-3.020 1.729-0.35 1.311 0.43 2.65 1.75 3l5.87 1.57-1.58 5.84c-0.35 1.301 0.43 2.65 1.74 3 1.32 0.35 2.67-0.43 3.020-1.738l1.94-7.221 4.27-2.451c1.11 1.010 2.46 1.771 3.95 2.172v5.5l-5.32 4.488c-0.96 0.99-0.96 2.59 0 3.59 0.96 0.99 2.52 0.99 3.48 0l4.3-4.439 4.3 4.439c0.96 0.99 2.52 0.99 3.479 0 0.961-1 0.961-2.6 0-3.59l-5.319-4.488v-5.5c1.49-0.4 2.84-1.162 3.95-2.172l4.27 2.451 1.94 7.221c0.35 1.309 1.699 2.088 3.020 1.738 1.311-0.35 2.091-1.699 1.74-3l-1.58-5.84 5.87-1.57c1.32-0.35 2.1-1.689 1.75-3-0.359-1.299-1.71-2.078-3.020-1.729l-7.261 1.939-4.079-2.35c0.279-0.9 0.439-1.871 0.439-2.871s-0.16-1.97-0.439-2.88l4.079-2.34 7.261 1.94c1.31 0.35 2.66-0.431 3.020-1.73 0.35-1.31-0.43-2.65-1.75-3l-5.87-1.57 1.58-5.84c0.351-1.3-0.43-2.649-1.74-3-1.32-0.35-2.67 0.43-3.020 1.74l-1.94 7.22-4.27 2.45c-1.11-1.010-2.46-1.77-3.95-2.17v-4.5l5.319-5.49c0.961-0.99 0.961-2.59 0-3.59-0.96-0.99-2.52-0.99-3.479 0l-4.3 4.442-4.3-4.44c-0.96-0.99-2.52-0.99-3.48 0-0.96 1-0.96 2.6 0 3.59l5.32 5.49v4.5c-1.49 0.4-2.84 1.16-3.95 2.17l-4.27-2.45-1.94-7.22c-0.35-1.311-1.7-2.090-3.020-1.74-1.31 0.351-2.090 1.7-1.74 3l1.58 5.84-5.87 1.57c-1.32 0.35-2.1 1.69-1.75 3 0.36 1.3 1.71 2.080 3.020 1.73l7.26-1.94 4.080 2.34c-0.28 0.91-0.44 1.879-0.44 2.879zM24 29.002c-2.49 0-4.5-2.010-4.5-4.5s2.010-4.5 4.5-4.5 4.5 2.010 4.5 4.5c0 2.49-2.010 4.5-4.5 4.5z"/>\n          </svg>':"1030"===n||"1135"===n||"1147"===n?'<svg xmlns="http://www.w3.org/2000/svg" version="1.1" fill="#f5f5f5" viewBox="1.94 5.94 30 18">\n          <title>mist</title>\n          <path d="M30.938 13.938h-5.102c-0.504-4.487-4.277-8-8.898-8-3.113 0-5.859 1.591-7.477 4h-6.523c-0.552 0-1 0.448-1 1s0.448 1 1 1h5.552c-0.226 0.638-0.374 1.306-0.45 2h-3.102c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.102c0.077 0.693 0.224 1.363 0.45 2h-5.37c-0.654 0-1.182 0.448-1.182 1s0.529 1 1.182 1h6.341c1.617 2.41 4.363 4 7.477 4s5.859-1.59 7.477-4h2.341c0.654 0 1.182-0.448 1.182-1s-0.529-1-1.182-1h-1.37c0.227-0.637 0.372-1.307 0.451-2h5.102c0.552 0 1-0.448 1-1s-0.448-1-1-1zM10.639 11.938h6.298c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.884c1.263-1.233 2.983-2 4.884-2 3.518 0 6.409 2.617 6.898 6h-13.797c0.102-0.707 0.302-1.378 0.6-2zM16.938 21.938c-1.901 0-3.621-0.768-4.884-2h9.767c-1.262 1.232-2.982 2-4.883 2zM23.234 17.938h-12.595c-0.298-0.622-0.499-1.293-0.6-2h13.797c-0.102 0.707-0.302 1.378-0.602 2z"/>\n          </svg>':"1069"===n||"1072"===n||"1168"===n||"1171"===n||"1198"===n||"1201"===n||"1204"===n||"1207"===n||"1237"===n||"1249"===n||"1252"===n||"1261"===n||"1264"===n?'<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" stroke-width="0.01024"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M680.1 254.3c-23.6 0-45.7 5.5-65.8 14.9C604.1 198.5 543.7 144 470.2 144c-80.8 0-146.3 65.5-146.3 146.4 0 8 1.1 15.7 2.3 23.3h-2.3c-67.9 0-123 55.1-123 123s55.1 131.5 123 131.5h356.3c86.7 0 156.9-70.2 156.9-156.9s-70.3-157-157-157z" fill="#FFFFFF"></path><path d="M680.1 233.1c-17.1 0-34 2.5-50.6 7.6-21.4-68.7-85.9-117.9-159.4-117.9-92.4 0-167.5 75.2-167.5 167.6 0 1.2 0 2.4 0.1 3.6-69.5 10.3-123.1 70.3-123.1 142.7 0 81.3 67.4 152.7 144.2 152.7h356.3c98.2 0 178.2-79.9 178.2-178.1 0-98.3-79.9-178.2-178.2-178.2z m0 313.9H323.8C269.6 547 222 495.4 222 436.7c0-56.1 45.7-101.8 101.8-101.8h2.3c6.2 0 12.1-2.7 16.2-7.5 4-4.7 5.8-11 4.8-17.1-1-6.1-2.1-13.2-2.1-19.9 0-69 56.1-125.2 125.1-125.2 61.3 0 114.3 46 123.2 107 1 6.6 5 12.4 10.9 15.6 5.9 3.2 12.9 3.4 19 0.6 18.4-8.6 37.5-12.9 56.8-12.9 74.8 0 135.7 60.9 135.7 135.7 0.2 74.9-60.7 135.8-135.6 135.8zM331.3 653c-17.6 0-31.8 14.2-31.8 31.8s14.2 31.8 31.8 31.8 31.8-14.2 31.8-31.8c0.1-17.5-14.2-31.8-31.8-31.8zM501 653c-17.5 0-31.8 14.2-31.8 31.8s14.3 31.8 31.8 31.8c17.6 0 31.8-14.2 31.8-31.8 0-17.5-14.2-31.8-31.8-31.8z" fill="#ffffff"></path><path d="M670.7 684.8m-31.8 0a31.8 31.8 0 1 0 63.6 0 31.8 31.8 0 1 0-63.6 0Z" fill="#ffffff"></path><path d="M246.5 780.3c-17.6 0-31.8 14.2-31.8 31.8s14.2 31.8 31.8 31.8 31.8-14.2 31.8-31.8-14.2-31.8-31.8-31.8zM416.2 780.3c-17.5 0-31.8 14.2-31.8 31.8s14.3 31.8 31.8 31.8c17.6 0 31.8-14.2 31.8-31.8s-14.2-31.8-31.8-31.8z" fill="#ffffff"></path><path d="M585.8 812.1m-31.8 0a31.8 31.8 0 1 0 63.6 0 31.8 31.8 0 1 0-63.6 0Z" fill="#ffffff"></path></g></svg>':"1114"===n||"1117"===n||"1222"===n||"1225"===n?'<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#ffffff" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.354 7.354l-.707-.707 5-5 .707.707zm3.129-.541L7.095 19.2a2.426 2.426 0 1 1 0-3.43l.707-.707a3.425 3.425 0 1 0 0 4.844L20.19 7.52zm-3.958 7.933l-4.94 4.94a2 2 0 1 0 3.038.245l-.811.586A.989.989 0 0 1 13 21.1a1 1 0 1 1-1.707-.707l4.748-4.749a1.49 1.49 0 0 1-.516-.898zM17 15h1v-1h-1zm3-1h-1v1h1zm2 1v-1h-1v1zm-3-3v1h1v-1zm1 5v-1h-1v1zm-1.854-1.854l-.5.5.707.707.5-.5zm2.707-1.293l.5-.5-.707-.707-.5.5zm0 1.293l-.707.707.5.5.707-.707zm-2.707-1.293l.707-.707-.5-.5-.707.707zM4.247 9.533l1.472-.85.5.866.366-1.366L8 7.366V10l-1 1h1v1h1v-1h1l-1-1V7.366l1.415.817.366 1.366.5-.866 1.472.85.5-.866-1.472-.85.5-.866-1.366.366L9.5 6.5l1.415-.817 1.366.366-.5-.866 1.472-.85-.5-.866-1.472.85-.5-.866-.366 1.366L9 5.634V3l1-1H9V1H8v1H7l1 1v2.634l-1.415-.817-.366-1.366-.5.866-1.472-.85-.5.866 1.472.85-.5.866 1.366-.366L7.5 6.5l-1.415.817-1.366-.366.5.866-1.472.85z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>':""}},w=m,x=document.querySelector(".search-box"),y=document.querySelector(".unit-btn");let M="F";w.getWeatherData("Tokyo",M),x.addEventListener("keydown",(async e=>{if("Enter"===e.key){let n=x.value;e.preventDefault(),w.getWeatherData(n,M),x.value=""}})),y.addEventListener("click",(()=>{M="F"===M?"C":"F",v.unitChange(M)}))})()})();