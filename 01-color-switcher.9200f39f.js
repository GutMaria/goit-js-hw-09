const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),d=document.querySelector("button[data-stop]");d.setAttribute("disabled","disabled"),e.addEventListener("click",(function(){a=setInterval(r,1e3),e.setAttribute("disabled","disabled"),d.removeAttribute("disabled","disabled")})),d.addEventListener("click",(function(){clearInterval(a),e.removeAttribute("disabled","disabled"),d.setAttribute("disabled","disabled")}));let a=0;function r(){t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}
//# sourceMappingURL=01-color-switcher.9200f39f.js.map
