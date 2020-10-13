(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{161:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(1),n=r(6),i=(r(0),r(329)),o={slug:"mikro-orm-4-1-released",title:"MikroORM 4.1: Let\u2019s talk about performance",author:"Martin Ad\xe1mek",authorTitle:"Author of MikroORM",authorURL:"https://github.com/B4nan",authorImageURL:"https://avatars1.githubusercontent.com/u/615580?s=460&v=4",authorTwitter:"B4nan",tags:["typescript","javascript","node","sql"]},s={permalink:"/blog/mikro-orm-4-1-released",source:"@site/blog/2020-10-13-mikro-orm-4-1-lets-talk-about-performance.md",description:"I just shipped version 4.1 of MikroORM, the TypeScript ORM for Node.js, and I feel like this particular release deserves a bit more attention than a regular feature release.",date:"2020-10-13T00:00:00.000Z",tags:[{label:"typescript",permalink:"/blog/tags/typescript"},{label:"javascript",permalink:"/blog/tags/javascript"},{label:"node",permalink:"/blog/tags/node"},{label:"sql",permalink:"/blog/tags/sql"}],title:"MikroORM 4.1: Let\u2019s talk about performance",readingTime:2.94,truncated:!1,nextItem:{title:"MikroORM 4: Filling the Gaps",permalink:"/blog/mikro-orm-4-released"}},c=[{value:"In case you don\u2019t know\u2026",id:"in-case-you-dont-know",children:[]},{value:"So what changed?",id:"so-what-changed",children:[]},{value:"Batch inserts, updates and deletes",id:"batch-inserts-updates-and-deletes",children:[]},{value:"JIT compilation",id:"jit-compilation",children:[]},{value:"Results",id:"results",children:[]},{value:"Acknowledgement",id:"acknowledgement",children:[]}],l={rightToc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"I just shipped version 4.1 of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),"MikroORM"),", the TypeScript ORM for Node.js, and I feel like this particular release deserves a bit more attention than a regular feature release."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/725/0*R2CETMgg1344gf0V.jpg",alt:null}))),Object(i.b)("h3",{id:"in-case-you-dont-know"},"In case you don\u2019t know\u2026"),Object(i.b)("p",null,"If you never heard of ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),"MikroORM"),", it\u2019s a TypeScript data-mapper ORM with Unit of Work and Identity Map. It supports MongoDB, MySQL, PostgreSQL and SQLite drivers currently. Key features of the ORM are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm#implicit-transactions"}),"Implicit transactions")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/mikro-orm/mikro-orm#changeset-based-persistence"}),"ChangeSet based persistence")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://mikro-orm.io/docs/identity-map/"}),"Identity map"))),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1024/0*zPahC74XliMguexT.png",alt:null}))),Object(i.b)("p",null,"You can read the full ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://medium.com/dailyjs/introducing-mikro-orm-typescript-data-mapper-orm-with-identity-map-9ba58d049e02"}),"introductory article here")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/"}),"browse through the docs"),"."),Object(i.b)("h3",{id:"so-what-changed"},"So what changed?"),Object(i.b)("p",null,"This release had only one clear goal in mind\u200a\u2014\u200athe performance. It all started with ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm/issues/732"}),"an issue")," pointing out that flushing 10k entities in a single unit of work is very slow. While this kind of use case was never a target for me, I started to see all the possibilities the Unit of Work pattern offers."),Object(i.b)("h3",{id:"batch-inserts-updates-and-deletes"},"Batch inserts, updates and deletes"),Object(i.b)("p",null,"The biggest performance killer was the amount of queries\u200a\u2014\u200aeven if the query is as simple and optimised as possible, firing 10k of those will be always quite slow. For inserts and deletes, it was quite trivial to group all the queries. A bit more challenging were the updates\u200a\u2014\u200ato batch those, MikroORM now uses case statements."),Object(i.b)("p",null,"As a result, when you now flush changes made to one entity type, only one query per given operation (create/update/delete) will be executed. This brings significant difference, as we are now executing fixed number of queries (in fact the changes are batched in chunks of 300 items)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"for (let i = 1; i <= 5; i++) {\n  const u = new User(`Peter ${i}`, `peter+${i}@foo.bar`);\n  em.persist(u);\n}\n\nawait em.flush();\n\n// insert into `user` (`name`, `email`) values\n//   ('Peter 1', 'peter+1@foo.bar'),\n//   ('Peter 2', 'peter+2@foo.bar'),\n//   ('Peter 3', 'peter+3@foo.bar'),\n//   ('Peter 4', 'peter+4@foo.bar'),\n//   ('Peter 5', 'peter+5@foo.bar');\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"for (const user of users) {\n  user.name += ' changed!';\n}\n\nawait em.flush();\n\n// update `user` set\n//   `name` = case \n//     when (`id` = 1) then 'Peter 1 changed!' \n//     when (`id` = 2) then 'Peter 2 changed!' \n//     when (`id` = 3) then 'Peter 3 changed!' \n//     when (`id` = 4) then 'Peter 4 changed!' \n//     when (`id` = 5) then 'Peter 5 changed!' \n//     else `priority` end \n//   where `id` in (1, 2, 3, 4, 5)\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"em.remove(users);\nawait em.flush();\n\n// delete from `user` where `id` in (1, 2, 3, 4, 5)\n")),Object(i.b)("h3",{id:"jit-compilation"},"JIT compilation"),Object(i.b)("p",null,"Second important change in 4.1 is JIT compilation. Under the hood, MikroORM now first generates simple functions for comparing and hydrating entities, that are tailored to their metadata definition. The main difference is that those generated functions are accessing the object properties directly (e.g. o.name), instead of dynamically (e.g. o","[prop.name]","), as all the information from metadata are inlined there. This allows V8 to better understand the code so it is able to run it faster."),Object(i.b)("h3",{id:"results"},"Results"),Object(i.b)("p",null,"Here are the results for a simple 10k entities benchmark:"),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/1024/1*aROevToSrzcQdPsPzXYnSQ.png",alt:null}))),Object(i.b)("p",null,"In average, inserting 10k entities takes around 70ms with sqlite, updates are a tiny bit slower. You can see results for other drivers here: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/benchmark"}),"https://github.com/mikro-orm/benchmark"),"."),Object(i.b)("p",null,Object(i.b)("img",Object(a.a)({parentName:"p"},{src:"https://cdn-images-1.medium.com/max/400/0*2WaopAkejC3T6213.jpg",alt:null}))),Object(i.b)("h3",{id:"acknowledgement"},"Acknowledgement"),Object(i.b)("p",null,"Kudos to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/marcj"}),"Marc J. Schmidt"),", the author of the initial issue, as without his help this would probably never happen, or at least not in near future. Thanks a lot!"),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("em",{parentName:"p"},"Like")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://mikro-orm.io/"}),Object(i.b)("em",{parentName:"a"},"MikroORM")),Object(i.b)("em",{parentName:"p"},"? \u2b50\ufe0f")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/mikro-orm/mikro-orm"}),Object(i.b)("em",{parentName:"a"},"Star it"))," ",Object(i.b)("em",{parentName:"p"},"on GitHub and share this article with your friends. If you want to support the project financially, you can do so via")," ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/sponsors/B4nan"}),Object(i.b)("em",{parentName:"a"},"GitHub Sponsors")),Object(i.b)("em",{parentName:"p"},"."))))}p.isMDXComponent=!0},329:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=n.a.createContext({}),p=function(e){var t=n.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=p(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(r),u=a,h=m["".concat(o,".").concat(u)]||m[u]||b[u]||i;return r?n.a.createElement(h,s(s({ref:t},l),{},{components:r})):n.a.createElement(h,s({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);