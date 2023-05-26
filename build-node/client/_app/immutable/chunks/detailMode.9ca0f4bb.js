import{w as e}from"./singletons.95df4c48.js";const s=e(localStorage.getItem("setting.ldm")||"");s.subscribe(t=>{localStorage.setItem("setting.ldm",t.length>0?t:"")});export{s};
