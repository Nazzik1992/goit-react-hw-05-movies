"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[802],{802:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var r=n(439),i=n(155),c=n(791),a=n(184),s=function(t){var e=t.setSearchParams,n=(0,c.useState)(""),i=(0,r.Z)(n,2),s=i[0],o=i[1];return(0,a.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(""!==s?{query:s}:{})},children:[(0,a.jsx)("input",{type:"text",onChange:function(t){return o(t.target.value)}}),(0,a.jsx)("button",{type:"submit",children:"Search"})]})},o=n(87),u=n(471),v=function(){var t=(0,o.lr)(),e=(0,r.Z)(t,2),n=e[0],v=e[1],f=(0,c.useState)([]),m=(0,r.Z)(f,2),l=m[0],h=m[1];return(0,c.useEffect)((function(){var t,e=null!==(t=n.get("query"))&&void 0!==t?t:"";e&&(0,u.z1)(e).then((function(t){return h(t.data.results)}))}),[n]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s,{setSearchParams:v}),(0,a.jsx)(i.O,{movies:l})]})}},155:function(t,e,n){n.d(e,{O:function(){return v}});var r=n(689),i=n(87),c="MoviesList_box__bcJK5",a="MoviesList_item__eePYv",s="MoviesList_img__v4jFC",o="MoviesList_title__PB2c8",u=n(184),v=function(t){var e=t.movies,n=(0,r.TH)();return e&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("ul",{className:c,children:e.map((function(t){var e=t.id,r=t.title,c=t.original_name,v=t.poster_path;return(0,u.jsx)("li",{className:a,children:(0,u.jsxs)(i.OL,{to:"/movies/".concat(e),state:{from:n},children:[(0,u.jsx)("img",{className:s,src:v?"https://image.tmdb.org/t/p/w500/"+v:"https://svgsilh.com/svg_v2/1363011.svg",alt:"Foto"}),(0,u.jsx)("p",{className:o,children:null!==r&&void 0!==r?r:c})]})},e)}))})," "]})}},471:function(t,e,n){n.d(e,{Hg:function(){return c},TP:function(){return s},tx:function(){return u},z1:function(){return a},zv:function(){return o}});var r=n(243),i=new URLSearchParams({api_key:"76cdf71b1889ea17fa7152ba0e3e3fa5"});r.Z.defaults.baseURL="https://api.themoviedb.org/3";var c=function(){return r.Z.get("/trending/movie/week?".concat(i))},a=function(t){return r.Z.get("/search/movie?".concat(i,"&query=").concat(t))},s=function(t){return r.Z.get("/movie/".concat(t,"?").concat(i))},o=function(t){return r.Z.get("/movie/".concat(t,"/credits?").concat(i))},u=function(t){return r.Z.get("/movie/".concat(t,"/reviews?").concat(i))}}}]);
//# sourceMappingURL=802.532ec7b8.chunk.js.map