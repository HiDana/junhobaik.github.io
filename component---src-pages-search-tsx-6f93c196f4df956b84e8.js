(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{Tl1Y:function(e,t,n){},YuTi:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},"l/wD":function(e,t,n){},pcw8:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return s}));var a=n("q1tI"),l=n("IP2g"),c=n("wHSu"),r=n("VXBa"),o=n("H8eV"),u=n("uP4m"),s=(n("Tl1Y"),"3613285653");t.default=function(e){var t=e.data.allMarkdownRemark.edges,n=Object(a.useState)(""),s=n[0],i=n[1],d=Object(a.useState)(!0),m=d[0],p=d[1],f=t.filter((function(e){var t=e.node,n=t.frontmatter,a=t.rawMarkdownBody,l=n.title,c=s.toLocaleLowerCase();return!(m||!a.toLocaleLowerCase().includes(c))||l.toLocaleLowerCase().includes(c)}));return a.createElement(r.a,null,a.createElement(o.a,{title:"Search"}),a.createElement("div",{id:"Search"},a.createElement("div",{className:"search-inner-wrap"},a.createElement("div",{className:"input-wrap"},a.createElement(l.a,{icon:c.l}),a.createElement("input",{type:"text",name:"search",id:"searchInput",value:s,placeholder:"Search",autoComplete:"off",autoFocus:!0,onChange:function(e){i(e.currentTarget.value)}}),a.createElement("div",{className:"search-toggle"},a.createElement("span",{style:{opacity:m?.8:.15},onClick:function(){p(!0)}},"in Title"),a.createElement("span",{style:{opacity:m?.15:.8},onClick:function(){p(!1)}},"in Title+Content"))),""===s||f.length?null:a.createElement("span",{className:"no-result"},"No search results"),a.createElement(u.a,{posts:""===s?t:f}))))}},uP4m:function(e,t,n){"use strict";var a=n("KQm4"),l=n("q1tI"),c=n("Wbzz"),r=n("LvDl");n("l/wD");t.a=function(e){var t=e.posts,n=Object(l.useState)(0),o=n[0],u=n[1],s=Object(l.useState)([]),i=s[0],d=s[1],m=Object(l.useCallback)(Object(r.throttle)((function(){window.outerHeight>document.querySelector(".post-list").getBoundingClientRect().bottom&&u((function(e){return e>=t.length?e:e+10}))}),250),[]),p=Object(l.useCallback)((function(e){var t=e.map((function(e){var t=e.node,n=t.excerpt,a=t.fields,r=t.frontmatter,o=a.slug,u=r.date,s=r.title,i=r.tags,d=r.update;1===Number(d.split(",")[1])&&(d=null);var m=i.map((function(e){if("undefined"!==e)return l.createElement("div",{key:o+"-"+e,className:"tag"},l.createElement("span",null,l.createElement(c.Link,{to:"/tags#"+e},"#"+e)))}));return l.createElement("li",{key:o,className:"post"},l.createElement("article",null,l.createElement("h2",{className:"title"},l.createElement(c.Link,{to:o},s)),l.createElement("div",{className:"info"},l.createElement("div",{className:"date-wrap"},l.createElement("span",{className:"date"},u),d?l.createElement("span",{className:"update"}," ","(Updated: "+d+")"):null),i.length&&"undefined"!==i[0]?l.createElement("span",{className:"info-dot"},"·"):null,l.createElement("ul",{className:"tag-list"},m)),l.createElement("span",{className:"excerpt"},l.createElement(c.Link,{to:o},n))))}));d((function(e){return[].concat(Object(a.a)(e),Object(a.a)(t))}))}),[]);return Object(l.useEffect)((function(){p(t.slice(i.length,o))}),[o]),Object(l.useEffect)((function(){return t.sort((function(e,t){var n=e.node.frontmatter,a=t.node.frontmatter,l=new Date(n.update.includes("0001")?n.date:n.update),c=new Date(a.update.includes("0001")?a.date:a.update);return l<c?1:l>c?-1:0})),u(10),window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[]),l.createElement("div",{className:"post-list"},l.createElement("ul",null,i))}}}]);
//# sourceMappingURL=component---src-pages-search-tsx-6f93c196f4df956b84e8.js.map