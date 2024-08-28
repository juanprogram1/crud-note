(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))e(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function s(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function e(o){if(o.ep)return;o.ep=!0;const n=s(o);fetch(o.href,n)}})();function h(){const d=document.getElementById("date"),t=new Date,s={weekday:"long",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0},e=t.toLocaleString("es-ES",s);return d.innerText=e,e}function b(d){const t=document.getElementById("text-content");t&&t.insertAdjacentHTML("afterbegin",d)}function S(){document.querySelectorAll(".botonDelete").forEach(t=>{t.addEventListener("click",()=>{const s=t.getAttribute("data-key"),e=document.getElementById("form"+s);if(e!==null&&s!==null){e.remove(),localStorage.removeItem(s);const o=document.getElementById("message-delete");o.classList.remove("hidden"),o.classList.remove("hide-message"),o.classList.add("show-message"),setTimeout(()=>{o.classList.remove("show-message"),o.classList.add("hide-message")},1300)}})})}function p(){document.querySelectorAll(".botonShow").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.key,e=document.querySelector(".container-modal"),o=document.querySelector(".modal-info"),n=document.querySelector(".box1"),a=document.querySelector(".box2"),c=document.querySelector("header"),m=document.querySelector("footer"),l=document.querySelector(".btnSaveEdit"),u=localStorage.getItem(s),r=JSON.parse(u),f=`
        <div class="date-modal">${r.date}</div>
        <h3 class="title-modal">${r.title}</h3>
        <p class="textarea-modal">${r.textarea}</p>
      `;o.innerHTML=f,e!==null&&n!==null&&a!==null?(e.animate([{opacity:0,transform:"translateY(1%)"},{opacity:1,transform:"translateY(0%)"}],{duration:900,easing:"ease-in-out",fill:"forwards"}),e.classList.remove("hidden"),n.classList.add("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),m.classList.add("hidden"),l.classList.add("hidden")):alert("no existe contenido")})})}function L(){document.querySelectorAll(".bottom-close").forEach(t=>{t.addEventListener("click",()=>{const s=document.querySelector(".container-modal"),e=document.querySelector(".box1"),o=document.querySelector(".box2"),n=document.querySelector("header"),a=document.querySelector("footer");s!==null&&e!==null&&o!==null&&n!==null&&a!==null&&(s.classList.add("hidden"),e.classList.remove("hidden"),o.classList.remove("hidden"),n.classList.remove("hidden"),a.classList.remove("hidden"))})})}function x(){document.querySelectorAll(".botonEdit").forEach(t=>{t.addEventListener("click",()=>{const s=t.dataset.key,e=document.querySelector(".container-modal"),o=document.querySelector(".modal-info"),n=document.querySelector(".box1"),a=document.querySelector(".box2"),c=document.querySelector("header"),m=document.querySelector("footer"),l=document.querySelector(".btnSaveEdit"),u=localStorage.getItem(s),r=JSON.parse(u),f=r.title,v=r.textarea,i=r.date,y=`
      <div id="modal-info-secondary" data-key="${s}">
        <div class="date-modal">${i}</div>
        <h3 id="title${s}" class="title-modal title-modal-edit" contenteditable="true">${f}</h3>
        <p id="textarea${s}" class="textarea-modal textarea-modal-edit" contenteditable="true">${v}</p>
      </div>
      `;o.innerHTML=y,e!==null&&n!==null&&a!==null&&(e.animate([{opacity:0,transform:"translateY(1%)"},{opacity:1,transform:"translateY(0%)"}],{duration:900,easing:"ease-in-out",fill:"forwards"}),e.classList.remove("hidden"),n.classList.add("hidden"),a.classList.add("hidden"),c.classList.add("hidden"),m.classList.add("hidden"),l.classList.remove("hidden"))})})}function q(){var n,a;const t=document.getElementById("modal-info-secondary").dataset.key,s=(n=document.getElementById("title"+t))==null?void 0:n.innerText.trim(),e=(a=document.getElementById("textarea"+t))==null?void 0:a.innerText.trim(),o=h();if(s!==""&&e!==""){const c=document.getElementById("text-content");c.innerHTML="";const m=localStorage.getItem(t),l=JSON.parse(m);l.title=s,l.textarea=e,l.date=o;const u=JSON.stringify(l);localStorage.setItem(t,u);const v=Object.keys(localStorage).map(i=>localStorage.getItem(i)).map(i=>JSON.parse(i));v.sort((i,y)=>i.id-y.id),v.forEach(i=>{const y=i.date.split(",")[1].trim(),B=`
       <div id="form${i.id}" class="text-content-box" data-key="${i.id}">
         <div>
           <h3 class="titleh3">${i.title}</h3>
           <p class="date-text">${y}</p>
           <p class="text-paragraph">${i.textarea}</p>
         </div>
               <div class="container">
                 <div class="barraMostrar"></div>
                 <button data-key="${i.id}" class="botonShow">Mostrar</button>
               </div>
               <div class="container">
                 <div class="barra"></div>
                 <button data-key="${i.id}" class="botonEdit">Editar</button>
               </div>
               <div class="container">
                 <div class="barraDelete"></div>
                 <button data-key="${i.id}" class="botonDelete">Borrar</button>
               </div>
       </div>
     `;b(B),x(),p(),L(),S();const g=document.querySelector(".message-save-edit");g.classList.remove("hidden"),g.classList.remove("hide-message"),g.classList.add("show-message"),setTimeout(()=>{g.classList.remove("show-message"),g.classList.add("hide-message")},900)})}else if(s===""||e===""){const c=document.querySelector(".message-warning-edit");c.classList.remove("hidden"),c.classList.remove("hide-message"),c.classList.add("show-message"),setTimeout(()=>{c.classList.remove("show-message"),c.classList.add("hide-message")},1500)}}function M(){const d=Date.now();return`${Math.floor(d/1e3)}`}function O(){const d=document.getElementById("title"),t=document.getElementById("writenote"),s=d.value,e=t.value,o=h(),n=o.split(",")[1].trim();if(s!==""&&e!==""){const a=M(),c={id:a,title:s,textarea:e,date:o};localStorage.setItem(a,JSON.stringify(c));const m=`
      <div id="form${a}" class="text-content-box" data-key="${a}">
        <div>
          <h3 class="titleh3">${s}</h3>
          <p class="date-text">${n}</p>
          <p class="text-paragraph">${e}</p>
        </div>
                <div class="container">
                  <div class="barraMostrar"></div>
                  <button data-key="${a}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <div class="barra"></div>
                  <button data-key="${a}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <div class="barraDelete"></div>
                  <button data-key="${a}" class="botonDelete">Borrar</button>
                </div>
      </div>
    `;b(m),d.value="",t.value=""}else{const a=document.querySelector(".message-warning");(s===""||e==="")&&(a.classList.remove("hidden"),a.classList.remove("hide-message"),a.classList.add("show-message"),setTimeout(()=>{a.classList.remove("show-message"),a.classList.add("hide-message")},2500))}S(),p(),x(),L()}function D(){const s=Object.keys(localStorage).map(e=>localStorage.getItem(e)).map(e=>JSON.parse(e));s.sort((e,o)=>e.id-o.id),s.forEach(e=>{var c;const o=(c=e.date)==null?void 0:c.split(","),n=o&&o.length>1?o[1]:"",a=`
        <div id="form${e.id}" class="text-content-box" data-key="${e.id}">
          <div>
            <h3 class="titleh3">${e.title}</h3>
            <p class="date-text">${n}</p>
            <p class="text-paragraph">${e.textarea}</p>
          </div>
                <div class="container">
                  <div class="barraMostrar"></div>
                  <button data-key="${e.id}" class="botonShow">Mostrar</button>
                </div>
                <div class="container">
                  <div class="barra"></div>
                  <button data-key="${e.id}" class="botonEdit">Editar</button>
                </div>
                <div class="container">
                  <div class="barraDelete"></div>
                  <button data-key="${e.id}" class="botonDelete">Borrar</button>
                </div>
        </div>
      `;b(a)}),S(),p(),x(),L()}var E;(E=document.getElementById("bottomShow"))==null||E.addEventListener("click",function(){const d=document.getElementById("bottomShow"),t=document.getElementById("hiddenContent");d&&t&&(d.style.display="none",t.classList.remove("hidden"),t.animate([{opacity:0},{opacity:1}],{duration:1200,easing:"ease-in-out"}))});var I;(I=document.getElementById("bottomShow"))==null||I.addEventListener("click",function(){const d=document.getElementById("bottomShow"),t=document.getElementById("bottomHeader"),s=document.getElementById("bottomFooter"),e=document.getElementById("hiddenContent");d&&t&&s&&e&&(t.style.textTransform="uppercase",t.style.fontFamily="Roboto",t.style.fontSize="52px",t.style.paddingTop="0rem",t.style.fontWeight="bold",t.style.letterSpacing="2px",s.style.fontFamily="Roboto",s.style.fontSize="20px",s.style.fontWeight="bold",s.style.letterSpacing="1px",s.style.paddingBottom="8px",s.style.textTransform="uppercase")});document.addEventListener("DOMContentLoaded",()=>{h()});var $;($=document.getElementById("btnSave"))==null||$.addEventListener("click",O);document.addEventListener("DOMContentLoaded",()=>{D()});var w;(w=document.getElementById("saveChanges"))==null||w.addEventListener("click",q);
