(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{160:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"rightToc",(function(){return i})),t.d(n,"default",(function(){return s}));t(52),t(25),t(20),t(21),t(53),t(0);var r=t(288);function o(){return(o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var a={title:"Debugging"},i=[{value:"Custom Logger",id:"custom-logger",children:[]},{value:"Logger Namespaces",id:"logger-namespaces",children:[]}],c={rightToc:i},l="wrapper";function s(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,["components"]);return Object(r.b)(l,o({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"For development purposes it might come handy to enable logging and debug mode:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: true,\n});\n")),Object(r.b)("p",null,"By doing this ",Object(r.b)("inlineCode",{parentName:"p"},"MikroORM")," will start using ",Object(r.b)("inlineCode",{parentName:"p"},"console.log()")," function to dump all queries:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"[query] select `e0`.* from `author` as `e0` where `e0`.`name` = ? limit ? [took 2 ms]\n[query] begin [took 1 ms]\n[query] insert into `author` (`name`, `email`, `created_at`, `updated_at`, `terms_accepted`) values (?, ?, ?, ?, ?) [took 2 ms]\n[query] commit [took 2 ms]\n")),Object(r.b)("p",null,"It is also useful for debugging problems with entity discovery, as you will see information\nabout every processed entity:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"[discovery] ORM entity discovery started\n[discovery] - processing entity Author\n[discovery] - using cached metadata for entity Author\n[discovery] - processing entity Book\n[discovery] - processing entity BookTag\n[discovery] - entity discovery finished after 13 ms\n")),Object(r.b)("h2",{id:"custom-logger"},"Custom Logger"),Object(r.b)("p",null,"You can also provide your own logger via ",Object(r.b)("inlineCode",{parentName:"p"},"logger")," option. "),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: true,\n  logger: msg => myCustomLogger.log(msg),\n});\n")),Object(r.b)("h2",{id:"logger-namespaces"},"Logger Namespaces"),Object(r.b)("p",null,"There are multiple Logger Namespaces that you can specifically request, while omitting the rest.\nJust specify array of them via the ",Object(r.b)("inlineCode",{parentName:"p"},"debug")," option:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"return MikroORM.init({\n  debug: ['query'], // now only queries will be logged\n});\n")),Object(r.b)("p",null,"Currently there are 3 namespaces \u2013 ",Object(r.b)("inlineCode",{parentName:"p"},"query"),", ",Object(r.b)("inlineCode",{parentName:"p"},"discovery")," and ",Object(r.b)("inlineCode",{parentName:"p"},"info"),"."))}s.isMDXComponent=!0},288:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return u}));var r=t(0),o=t.n(r),a=o.a.createContext({}),i=function(e){var n=o.a.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},c=function(e){var n=i(e.components);return o.a.createElement(a.Provider,{value:n},e.children)};var l="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},p=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===n.indexOf(r)&&(t[r]=e[r]);return t}(e,["components","mdxType","originalType","parentName"]),p=i(t),u=r,g=p[c+"."+u]||p[u]||s[u]||a;return t?o.a.createElement(g,Object.assign({},{ref:n},l,{components:t})):o.a.createElement(g,Object.assign({},{ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[l]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);