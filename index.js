import{i as c,S as u}from"./assets/vendor-B07T6_gy.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d="https://pixabay.com/api/",f="49371297-53cf19ada26e8c05638a83539";function m(s){const l=new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${d}?${l}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}function p({webformatURL:s,largeImageURL:l,tags:t,likes:o,views:e,comments:r,downloads:i}){return`
  <div class="gallery-item">
    <li>
      <a class="gallery-link" href="${l}">
        <img
          class="gallery-image"
          src="${s}"
          alt="${t}"
        />
      </a>
    </li>
    <ul class="gallery-ul">
      <li class="gallery-li">
        <p>Likes</p>
        <p>${o}</p>
      </li>
      <li class="gallery-li">
        <p>Views</p>
        <p>${e}</p>
      </li>
      <li class="gallery-li">
        <p>Comments</p>
        <p>${r}</p>
      </li>
      <li class="gallery-li">
        <p>Downloads</p>
        <p>${i}</p>
      </li>
    </ul>
  </div>`}function y(s){return s.map(p).join("")}const a={form:document.querySelector(".js-form"),gallery:document.querySelector(".js-gallery"),notFoundText:document.querySelector(".js-not-found-text"),loader:document.querySelector(".js-loader")},n="active";function g(s){s.preventDefault(),a.notFoundText.innerHTML="";const l=s.currentTarget,t=l.elements.user_query.value.trim();if(console.dir(t),t===""){c.show({title:"",message:"Введіть будь-ласка запит!"});return}a.loader.classList.add(n),m(t).then(o=>{if(a.loader.classList.remove(n),console.dir(o),o.total===0){a.gallery.innerHTML="",c.show({title:"",message:"Sorry, there are no images matching your search query. Please try again!"});return}a.gallery.innerHTML=y(o.hits),new u(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(o=>{a.loader.classList.remove(n),console.log(o)}).finally(()=>{l.reset()})}a.form.addEventListener("submit",g);
//# sourceMappingURL=index.js.map
