import{S as t,i as a,s as n,a as e,e as s,c as o,v as i,t as r,q as l,d as c,b as h,f as m,g as d,j as p,h as u,k as f,l as v,m as k,n as w,C as g,A as x,E as b,D as y,p as E,r as M,u as j,w as C,x as S,F as D,y as I,G as J,H as $}from"./client.16cc5078.js";import{c as V,u as B,p as T,a as R,M as Z,t as q,b as H}from"./markmap.34205e13.js";var L=V((function(t,a){a.__esModule=!0,a.fillTemplate=function(t,a){const{js:e,css:s,initializers:o}=(0,B.persistPlugins)([(null==a?void 0:a.mathJax)&&T.mathJax,(null==a?void 0:a.prism)&&T.prism].filter(Boolean),a),i=[...(0,B.persistJS)(n),e,...(0,B.persistJS)([{type:"iife",data:{fn:(t,...a)=>{const{Markmap:n}=window.markmap;a.forEach(t=>t(n)),n.create("svg#mindmap",null,t)},getParams:({data:t,initializers:a})=>[t,...a]}}],{data:t,initializers:o})];return'<!DOCTYPE html>\n<html>\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n<meta http-equiv="X-UA-Compatible" content="ie=edge">\n<title>Markmap</title>\n<style>\n* {\n  margin: 0;\n  padding: 0;\n}\n#mindmap {\n  display: block;\n  width: 100vw;\n  height: 100vh;\n}\n</style>\n\x3c!--CSS--\x3e\n</head>\n<body>\n<svg id="mindmap"></svg>\n\x3c!--JS--\x3e\n</body>\n</html>\n'.replace("\x3c!--CSS--\x3e",s).replace("\x3c!--JS--\x3e",i.join(""))};const n=["https://cdn.jsdelivr.net/npm/d3@5","https://cdn.jsdelivr.net/npm/markmap-lib@0.7.8/dist/browser/view.min.js"].map(t=>({type:"script",data:{src:t}}))}));R(L);var O=L.fillTemplate;const{document:P}=D;function U(t){let a,n,C,S,D,V,B,T,R,q,H,L,O,U,z,A,F,G,_,N,X,Y,K,Q,W,tt,at,nt,et;function st(a){t[10].call(null,a)}function ot(a){t[11].call(null,a)}function it(a){t[12].call(null,a)}function rt(a){t[13].call(null,a)}let lt={content:t[2]};void 0!==t[1]&&(lt.el=t[1]),void 0!==t[3]&&(lt.onReset=t[3]),void 0!==t[4]&&(lt.onZoomIn=t[4]),void 0!==t[5]&&(lt.onZoomOut=t[5]);const ct=new Z({props:lt});return I.push(()=>J(ct,"el",st)),I.push(()=>J(ct,"onReset",ot)),I.push(()=>J(ct,"onZoomIn",it)),I.push(()=>J(ct,"onZoomOut",rt)),{c(){a=e(),n=s("div"),C=s("div"),S=e(),D=s("div"),V=s("div"),o(ct.$$.fragment),H=e(),L=s("div"),O=i("svg"),U=i("circle"),z=i("path"),A=e(),F=i("svg"),G=i("circle"),_=i("path"),N=e(),X=i("svg"),Y=i("circle"),K=i("path"),Q=e(),W=s("div"),tt=s("a"),at=r("Download as interactive HTML"),this.h()},l(t){l('[data-svelte="svelte-r18bnt"]',P.head).forEach(c),a=h(t),n=m(t,"DIV",{class:!0});var e=d(n);C=m(e,"DIV",{class:!0}),d(C).forEach(c),S=h(e),D=m(e,"DIV",{class:!0});var s=d(D);V=m(s,"DIV",{class:!0});var o=d(V);p(ct.$$.fragment,o),H=h(o),L=m(o,"DIV",{class:!0});var i=d(L);O=m(i,"svg",{width:!0,height:!0,viewBox:!0},1);var r=d(O);U=m(r,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,stroke:!0},1),d(U).forEach(c),z=m(r,"path",{fill:!0,"stroke-width":!0,stroke:!0,d:!0},1),d(z).forEach(c),r.forEach(c),A=h(i),F=m(i,"svg",{width:!0,height:!0,viewBox:!0},1);var f=d(F);G=m(f,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,stroke:!0},1),d(G).forEach(c),_=m(f,"path",{fill:!0,"stroke-width":!0,stroke:!0,d:!0},1),d(_).forEach(c),f.forEach(c),N=h(i),X=m(i,"svg",{width:!0,height:!0,viewBox:!0},1);var v=d(X);Y=m(v,"circle",{cx:!0,cy:!0,r:!0,fill:!0,"stroke-width":!0,stroke:!0},1),d(Y).forEach(c),K=m(v,"path",{fill:!0,"stroke-width":!0,stroke:!0,d:!0},1),d(K).forEach(c),v.forEach(c),i.forEach(c),o.forEach(c),Q=h(s),W=m(s,"DIV",{class:!0});var k=d(W);tt=m(k,"A",{});var w=d(tt);at=u(w,"Download as interactive HTML"),w.forEach(c),k.forEach(c),s.forEach(c),e.forEach(c),this.h()},h(){P.title="Try Markmap",f(C,"class","flex-1 min-w-0 border border-gray-300"),f(U,"cx","10"),f(U,"cy","10"),f(U,"r","9"),f(U,"fill","none"),f(U,"stroke-width","0.5"),f(U,"stroke","currentColor"),f(z,"fill","none"),f(z,"stroke-width","1"),f(z,"stroke","currentColor"),f(z,"d","M10 6 v8 M6 10 h8"),f(O,"width","20"),f(O,"height","20"),f(O,"viewBox","0 0 20 20"),f(G,"cx","10"),f(G,"cy","10"),f(G,"r","9"),f(G,"fill","none"),f(G,"stroke-width","0.5"),f(G,"stroke","currentColor"),f(_,"fill","none"),f(_,"stroke-width","1"),f(_,"stroke","currentColor"),f(_,"d","M6 10 h8"),f(F,"width","20"),f(F,"height","20"),f(F,"viewBox","0 0 20 20"),f(Y,"cx","10"),f(Y,"cy","10"),f(Y,"r","9"),f(Y,"fill","none"),f(Y,"stroke-width","0.5"),f(Y,"stroke","currentColor"),f(K,"fill","none"),f(K,"stroke-width","1"),f(K,"stroke","currentColor"),f(K,"d","M5 9 v-3 h3 M5 11 v3 h3 M15 9 v-3 h-3 M15 11 v3 h-3"),f(X,"width","20"),f(X,"height","20"),f(X,"viewBox","0 0 20 20"),f(L,"class","buttons absolute right-0 bottom-0 mr-2 mb-2"),f(V,"class","markmap-wrapper flex-1"),f(W,"class","p-2"),f(D,"class","flex-1 min-w-0 flex flex-col"),f(n,"class","repl")},m(e,s,o){v(e,a,s),v(e,n,s),k(n,C),t[9](C),k(n,S),k(n,D),k(D,V),w(ct,V,null),k(V,H),k(V,L),k(L,O),k(O,U),k(O,z),k(L,A),k(L,F),k(F,G),k(F,_),k(L,N),k(L,X),k(X,Y),k(X,K),k(D,Q),k(D,W),k(W,tt),k(tt,at),nt=!0,o&&g(et),et=[x(O,"click",(function(){b(t[4])&&t[4].apply(this,arguments)})),x(F,"click",(function(){b(t[5])&&t[5].apply(this,arguments)})),x(X,"click",(function(){b(t[3])&&t[3].apply(this,arguments)})),x(tt,"click",y(t[6]))]},p(a,[n]){t=a;const e={};4&n&&(e.content=t[2]),!B&&2&n&&(B=!0,e.el=t[1],$(()=>B=!1)),!T&&8&n&&(T=!0,e.onReset=t[3],$(()=>T=!1)),!R&&16&n&&(R=!0,e.onZoomIn=t[4],$(()=>R=!1)),!q&&32&n&&(q=!0,e.onZoomOut=t[5],$(()=>q=!1)),ct.$set(e)},i(t){nt||(E(ct.$$.fragment,t),nt=!0)},o(t){M(ct.$$.fragment,t),nt=!1},d(e){e&&c(a),e&&c(n),t[9](null),j(ct),g(et)}}}function z(t,a,n){let e,s,o,i,r,l,c;async function h(){const t=new URLSearchParams(window.location.hash.slice(1)).get("k");if(t){window.location.hash="";const a=await fetch("https://hs.gerald.win/mm/"+t),{data:n}=await a.json();o&&(o.setValue(n),update())}}return C(async()=>{const{default:t}=await import("./codemirror.06dc9677.js");function a(){n(2,i=o.getValue())}await import("./markdown.603846df.js"),o=t(e,{lineNumbers:!0,mode:"markdown",value:"# markmap-lib\n\n## Links\n\n- <https://markmap.js.org/>\n- [GitHub](https://github.com/gera2ld/markmap-lib)\n\n## Related\n\n- [coc-markmap](https://github.com/gera2ld/coc-markmap)\n- [gatsby-remark-markmap](https://github.com/gera2ld/gatsby-remark-markmap)\n\n## Features\n\n- links\n- **inline** ~~text~~ *styles*\n- multiline\n  text\n- `inline code`\n-\n    ```js\n    console.log('code block');\n    ```\n- MathJax - `\\(x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}\\)`\n"}),o.on("change",H(a,500)),a(),h()}),S(async()=>{o=null}),[e,s,i,r,l,c,function(){const t=q(i||""),a=O(t,{mathJax:!!s.querySelector(".MathJax"),prism:!!s.querySelector("pre[class*=language-]")});!function(t,a){const n=document.createElement("a");n.download=t,n.href=a,n.click()}("markmap.html","data:text/html;utf8,"+encodeURIComponent(a))},o,h,function(t){I[t?"unshift":"push"](()=>{n(0,e=t)})},function(t){s=t,n(1,s)},function(t){r=t,n(3,r)},function(t){l=t,n(4,l)},function(t){c=t,n(5,c)}]}export default class extends t{constructor(t){super(),a(this,t,z,U,n,{})}}