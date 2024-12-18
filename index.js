import{S as u,i as d}from"./assets/vendor-B2mb6eXk.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f=({query:o})=>fetch(`https://pixabay.com/api/?key=18172942-eab38dca32c93699ea5d62826&q=${encodeURI(o)}&image_type=photo&orientation=horizontal&safesearch=true`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).then(t=>t.hits.map(({comments:s,downloads:a,likes:e,views:r,largeImageURL:i,webformatURL:l,tags:c})=>({comments:s,downloads:a,likes:e,views:r,largeImageURL:i,webformatURL:l,tags:c}))).catch(t=>console.log(t)),n=(o,t)=>`
        <li class="image-statistics-list-item">
            <h3>${o}</h3>
            <p>${t}</p>
          </li>
        `,g=o=>o.map(({comments:t,downloads:s,likes:a,views:e,largeImageURL:r,webformatURL:i,tags:l})=>`
     <li class="gallery-item">
        <a class="gallery-link" href="${r}">
          <img class="gallery-image" src="${i}" alt="${l}" />
        </a>
        <ul class="image-statistics-list">
            ${n("Likes",a)}
            ${n("Views",e)}
            ${n("Comments",t)}
            ${n("Downloads",s)}
        </ul>
      </li>
    `).join(""),m=({ref:o,position:t="beforeEnd",markup:s})=>{o.insertAdjacentHTML(t,s)};document.addEventListener("DOMContentLoaded",()=>{const o={form:document.querySelector(".search-form"),gallery:document.querySelector(".gallery"),spinner:document.querySelector(".spinner")},t=()=>{o.gallery.classList.toggle("loading"),o.spinner.classList.toggle("loading")},s=(e="Sorry, there are no images matching your search query. Please try again!")=>{d.error({message:e,position:"topRight"})},a=new u(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});o.form.addEventListener("submit",e=>{e.preventDefault();const r=o.form.query.value.trim();if(!r){s("Please enter a valid search query.");return}o.gallery.innerHTML="",t(),f({query:r}).then(i=>{i.length?(m({ref:o.gallery,markup:g(i)}),a.refresh()):s(),t()}).catch(i=>{s("An error occurred while fetching the images. Please try again later."),t()})})});
//# sourceMappingURL=index.js.map
