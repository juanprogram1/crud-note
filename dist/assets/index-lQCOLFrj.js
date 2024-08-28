(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&e(n)}).observe(document,{childList:!0,subtree:!0});function o(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function e(s){if(s.ep)return;s.ep=!0;const a=o(s);fetch(s.href,a)}})();function v(){const d=document.getElementById("date"),t=new Date,o={weekday:"long",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0},e=t.toLocaleString("es-ES",o);return d.innerText=e,e}function b(d){const t=document.getElementById("text-content");t&&t.insertAdjacentHTML("afterbegin",d)}function S(){document.querySelectorAll(".botonDelete").forEach(t=>{t.addEventListener("click",()=>{const o=t.getAttribute("data-key"),e=document.getElementById("form"+o);if(e!==null&&o!==null){e.remove(),localStorage.removeItem(o);const s=document.getElementById("message-delete");s.classList.remove("hidden"),s.classList.remove("hide-message"),s.classList.add("show-message"),setTimeout(()=>{s.classList.remove("show-message"),s.classList.add("hide-message")},1300)}})})}function p(){document.querySelectorAll(".botonShow").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.key,e=document.querySelector(".container-modal"),s=document.querySelector(".modal-info"),a=document.querySelector(".box1"),n=document.querySelector(".box2"),i=document.querySelector("header"),m=document.querySelector("footer"),l=document.querySelector(".btnSaveEdit"),u=localStorage.getItem(o),r=JSON.parse(u),f=`
        <div class="date-modal">${r.date}</div>
        <h3 class="title-modal">${r.title}</h3>
        <p class="textarea-modal">${r.textarea}</p>
      `;s.innerHTML=f,e!==null&&a!==null&&n!==null?(e.animate([{opacity:0,transform:"translateY(1%)"},{opacity:1,transform:"translateY(0%)"}],{duration:900,easing:"ease-in-out",fill:"forwards"}),e.classList.remove("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),i.classList.add("hidden"),m.classList.add("hidden"),l.classList.add("hidden")):alert("no existe contenido")})})}function L(){document.querySelectorAll(".bottom-close").forEach(t=>{t.addEventListener("click",()=>{const o=document.querySelector(".container-modal"),e=document.querySelector(".box1"),s=document.querySelector(".box2"),a=document.querySelector("header"),n=document.querySelector("footer");o!==null&&e!==null&&s!==null&&a!==null&&n!==null&&(o.classList.add("hidden"),e.classList.remove("hidden"),s.classList.remove("hidden"),a.classList.remove("hidden"),n.classList.remove("hidden"))})})}function x(){document.querySelectorAll(".botonEdit").forEach(t=>{t.addEventListener("click",()=>{const o=t.dataset.key,e=document.querySelector(".container-modal"),s=document.querySelector(".modal-info"),a=document.querySelector(".box1"),n=document.querySelector(".box2"),i=document.querySelector("header"),m=document.querySelector("footer"),l=document.querySelector(".btnSaveEdit"),u=localStorage.getItem(o),r=JSON.parse(u),f=r.title,h=r.textarea,c=r.date,y=`
      <div id="modal-info-secondary" data-key="${o}">
        <div class="date-modal">${c}</div>
        <h3 id="title${o}" class="title-modal title-modal-edit" contenteditable="true">${f}</h3>
        <p id="textarea${o}" class="textarea-modal textarea-modal-edit" contenteditable="true">${h}</p>
      </div>
      `;s.innerHTML=y,e!==null&&a!==null&&n!==null&&(e.animate([{opacity:0,transform:"translateY(1%)"},{opacity:1,transform:"translateY(0%)"}],{duration:900,easing:"ease-in-out",fill:"forwards"}),e.classList.remove("hidden"),a.classList.add("hidden"),n.classList.add("hidden"),i.classList.add("hidden"),m.classList.add("hidden"),l.classList.remove("hidden"))})})}function q(){var a,n;const t=document.getElementById("modal-info-secondary").dataset.key,o=(a=document.getElementById("title"+t))==null?void 0:a.innerText.trim(),e=(n=document.getElementById("textarea"+t))==null?void 0:n.innerText.trim(),s=v();if(o!==""&&e!==""){const i=document.getElementById("text-content");i.innerHTML="";const m=localStorage.getItem(t),l=JSON.parse(m);l.title=o,l.textarea=e,l.date=s;const u=JSON.stringify(l);localStorage.setItem(t,u);const h=Object.keys(localStorage).map(c=>localStorage.getItem(c)).map(c=>JSON.parse(c));h.sort((c,y)=>c.id-y.id),h.forEach(c=>{const y=c.date.split(",")[1].trim(),B=`
       <div id="form${c.id}" class="text-content-box" data-key="${c.id}">
         <div>
           <h3 class="titleh3">${c.title}</h3>
           <p class="date-text">${y}</p>
           <p class="text-paragraph">${c.textarea}</p>
         </div>
               <div class="container">
                 <div class="barraMostrar"></div>
                 <button data-key="${c.id}" class="botonShow">Mostrar</button>
               </div>
               <div class="container">
                 <div class="barra"></div>
                 <button data-key="${c.id}" class="botonEdit">Editar</button>
               </div>
               <div class="container">
                 <div class="barraDelete"></div>
                 <button data-key="${c.id}" class="botonDelete">Borrar</button>
               </div>
       </div>
     `;b(B),x(),p(),L(),S();const g=document.querySelector(".message-save-edit");g.classList.remove("hidden"),g.classList.remove("hide-message"),g.classList.add("show-message"),setTimeout(()=>{g.classList.remove("show-message"),g.classList.add("hide-message")},900)})}else if(o===""||e===""){const i=document.querySelector(".message-warning-edit");i.classList.remove("hidden"),i.classList.remove("hide-message"),i.classList.add("show-message"),setTimeout(()=>{i.classList.remove("show-message"),i.classList.add("hide-message")},1500)}}function O(){const d=Date.now();return`${Math.floor(d/1e3)}`}function M(){const d=document.getElementById("title"),t=document.getElementById("writenote"),o=d.value,e=t.value,s=v(),a=s.split(",")[1].trim();if(o!==""&&e!==""){const n=O(),i={id:n,title:o,textarea:e,date:s};localStorage.setItem(n,JSON.stringify(i));const m=`
      <div id="form${n}" class="text-content-box" data-key="${n}">
        <div>
          <h3 class="titleh3">${o}</h3>
          <p class="date-text">${a}</p>
          <p class="text-paragraph">${e}</p>
        </div>
                <div class="container">
                  <button data-key="${n}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <button data-key="${n}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <button data-key="${n}" class="botonDelete">Borrar</button>
                </div>
      </div>
    `;b(m),d.value="",t.value=""}else{const n=document.querySelector(".message-warning");(o===""||e==="")&&(n.classList.remove("hidden"),n.classList.remove("hide-message"),n.classList.add("show-message"),setTimeout(()=>{n.classList.remove("show-message"),n.classList.add("hide-message")},2500))}S(),p(),x(),L()}function D(){const o=Object.keys(localStorage).map(e=>localStorage.getItem(e)).map(e=>JSON.parse(e));o.sort((e,s)=>e.id-s.id),o.forEach(e=>{const s=e.date.split(",")[1],a=`
        <div id="form${e.id}" class="text-content-box" data-key="${e.id}">
          <div>
            <h3 class="titleh3">${e.title}</h3>
            <p class="date-text">${s}</p>
            <p class="text-paragraph">${e.textarea}</p>
          </div>
                <div class="container">
                  <button data-key="${e.id}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <button data-key="${e.id}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <button data-key="${e.id}" class="botonDelete">Borrar</button>
                </div>
        </div>
      `;b(a)}),S(),p(),x(),L()}var E;(E=document.getElementById("bottomShow"))==null||E.addEventListener("click",function(){const d=document.getElementById("bottomShow"),t=document.getElementById("hiddenContent");d&&t&&(d.style.display="none",t.classList.remove("hidden"),t.animate([{opacity:0},{opacity:1}],{duration:1200,easing:"ease-in-out"}))});var I;(I=document.getElementById("bottomShow"))==null||I.addEventListener("click",function(){const d=document.getElementById("bottomShow"),t=document.getElementById("bottomHeader"),o=document.getElementById("bottomFooter"),e=document.getElementById("hiddenContent");d&&t&&o&&e&&(t.style.textTransform="uppercase",t.style.fontFamily="Roboto",t.style.fontSize="52px",t.style.paddingTop="0rem",t.style.fontWeight="bold",t.style.letterSpacing="2px",o.style.fontFamily="Roboto",o.style.fontSize="20px",o.style.fontWeight="bold",o.style.letterSpacing="1px",o.style.paddingBottom="8px",o.style.textTransform="uppercase")});document.addEventListener("DOMContentLoaded",()=>{v()});var $;($=document.getElementById("btnSave"))==null||$.addEventListener("click",M);document.addEventListener("DOMContentLoaded",()=>{D()});var w;(w=document.getElementById("saveChanges"))==null||w.addEventListener("click",q);
