/* empty css                      */import{f as b,i as m}from"./assets/vendor-f20d2ef6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const E={inputEl:document.querySelector("#datetime-picker"),btnStart:document.querySelector("[data-start]"),output:document.querySelector(".js-timer")},{inputEl:u,btnStart:i,output:c}=E;let p,h;function C(){return{dateDays:c.querySelector("[data-days]"),dateHours:c.querySelector("[data-hours]"),dateMinutes:c.querySelector("[data-minutes]"),dateSeconds:c.querySelector("[data-seconds]")}}const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){p=t[0]},onChange(t){t[0]<y.defaultDate?(l(),m.error({title:"Error",message:"Please choose a date in the future",position:"topRight",closeOnEscape:!0,theme:"dark",backgroundColor:"#EF4040",titleColor:"#FFF",messageColor:"#FFF",iconUrl:"../img/icon-error.svg"}),i.disabled=!0):(i.disabled=!1,l())}};function l(){const t=document.querySelectorAll(".iziToast");t.length>=1&&m.hide({},t[0])}document.addEventListener("DOMContentLoaded",()=>{b(u,y)});i.addEventListener("click",q);function q(){f(),h=setInterval(f,1e3),u.disabled=!0,i.disabled=!0}function f(){const t=Date.now(),n=p-t;if(n<=0){clearInterval(h),u.disabled=!1,i.disabled=!1;return}const{days:a,hours:s,minutes:e,seconds:o}=D(n),r=C();r.dateDays.textContent=d(a),r.dateHours.textContent=d(s),r.dateMinutes.textContent=d(e),r.dateSeconds.textContent=d(o)}function d(t){return String(t).padStart(2,"0")}function D(t){const o=Math.floor(t/864e5),r=Math.floor(t%864e5/36e5),g=Math.floor(t%864e5%36e5/6e4),S=Math.floor(t%864e5%36e5%6e4/1e3);return{days:o,hours:r,minutes:g,seconds:S}}
//# sourceMappingURL=commonHelpers.js.map
