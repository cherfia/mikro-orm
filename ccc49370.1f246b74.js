(window.webpackJsonp=window.webpackJsonp||[]).push([[127,3],{287:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(293),o=t(302),m=t(291);var c=function(e){var a=e.nextItem,t=e.prevItem;return n.a.createElement("nav",{className:"pagination-nav"},n.a.createElement("div",{className:"pagination-nav__item"},t&&n.a.createElement(m.a,{className:"pagination-nav__link",to:t.permalink},n.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Previous Post"),n.a.createElement("h4",{className:"pagination-nav__link--label"},"\xab ",t.title))),n.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.a.createElement(m.a,{className:"pagination-nav__link",to:a.permalink},n.a.createElement("h5",{className:"pagination-nav__link--sublabel"},"Next Post"),n.a.createElement("h4",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=e.metadata,r=a.frontMatter;return n.a.createElement(l.a,{title:t.title,description:t.description},a&&n.a.createElement("div",{className:"container margin-vert--xl"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col col--8 col--offset-2"},n.a.createElement(o.a,{frontMatter:r,metadata:t,isBlogPostPage:!0},n.a.createElement(a,null)),(t.nextItem||t.prevItem)&&n.a.createElement("div",{className:"margin-vert--xl"},n.a.createElement(c,{nextItem:t.nextItem,prevItem:t.prevItem}))))))}},296:function(e,a,t){"use strict";t(52),t(25),t(20),t(21),t(53);var r=t(0),n=t.n(r),l=t(290),o=t.n(l),m=t(291),c=t(289),i=t(292),s=t(127),u=t.n(s);function v(){return(v=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function g(e){var a=e.to,t=e.href,r=e.label,l=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["to","href","label"]),o=Object(i.a)(a);return n.a.createElement(m.a,v({className:"footer__link-item"},t?{target:"_blank",rel:"noopener noreferrer",href:t}:{to:o},l),r)}var f=function(e){var a=e.url,t=e.alt;return n.a.createElement("img",{className:"footer__logo",alt:t,src:a})};a.a=function(){var e=Object(c.a)().siteConfig,a=(void 0===e?{}:e).themeConfig,t=(void 0===a?{}:a).footer,r=t||{},l=r.copyright,m=r.links,s=void 0===m?[]:m,v=r.logo,E=void 0===v?{}:v,_=Object(i.a)(E.src);return t?n.a.createElement("footer",{className:o()("footer",{"footer--dark":"dark"===t.style})},n.a.createElement("div",{className:"container"},s&&s.length>0&&n.a.createElement("div",{className:"row footer__links"},s.map((function(e,a){return n.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?n.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?n.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,a){return e.html?n.a.createElement("div",{key:a,dangerouslySetInnerHTML:{__html:e.html}}):n.a.createElement("li",{key:e.href||e.to,className:"footer__item"},n.a.createElement(g,e))}))):null)}))),(E||l)&&n.a.createElement("div",{className:"text--center"},E&&E.src&&n.a.createElement("div",{className:"margin-bottom--sm"},E.href?n.a.createElement("a",{href:E.href,target:"_blank",rel:"noopener noreferrer",className:u.a.footerLogoLink},n.a.createElement(f,{alt:E.alt,url:_})):n.a.createElement(f,{alt:E.alt,url:_})),l,"Icons made by ",n.a.createElement("a",{href:"https://www.flaticon.com/authors/surang",title:"surang"},"surang")," and ",n.a.createElement("a",{href:"https://www.flaticon.com/authors/skyclick",title:"Skyclick"},"Skyclick"),"."))):null}},302:function(e,a,t){"use strict";t(75);var r=t(0),n=t.n(r),l=t(290),o=t.n(l),m=t(288),c=t(291),i=t(303),s=t(131),u=t.n(s),v=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,r,l,s,g=e.children,f=e.frontMatter,E=e.metadata,_=e.truncated,h=e.isBlogPostPage,p=void 0!==h&&h,d=E.date,N=E.permalink,b=E.tags,k=f.author,y=f.title,w=f.author_url||f.authorURL,I=f.author_title||f.authorTitle,x=f.author_image_url||f.authorImageURL;return n.a.createElement("article",{className:p?void 0:"margin-bottom--xl"},(a=p?"h1":"h2",t=d.substring(0,10).split("-"),r=t[0],l=v[parseInt(t[1],10)-1],s=parseInt(t[2],10),n.a.createElement("header",null,n.a.createElement(a,{className:o()("margin-bottom--sm",u.a.blogPostTitle)},p?y:n.a.createElement(c.a,{to:N},y)),n.a.createElement("div",{className:"margin-bottom--sm"},n.a.createElement("time",{dateTime:d,className:u.a.blogPostDate},l," ",s,", ",r)),n.a.createElement("div",{className:"avatar margin-bottom--md"},x&&n.a.createElement("a",{className:"avatar__photo-link",href:w,target:"_blank",rel:"noreferrer noopener"},n.a.createElement("img",{className:"avatar__photo",src:x,alt:k})),n.a.createElement("div",{className:"avatar__intro"},k&&n.a.createElement(n.a.Fragment,null,n.a.createElement("h4",{className:"avatar__name"},n.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},k)),n.a.createElement("small",{className:"avatar__subtitle"},I)))))),n.a.createElement("section",{className:"markdown"},n.a.createElement(m.a,{components:i.a},g)),(b.length>0||_)&&n.a.createElement("footer",{className:"row margin-vert--lg"},b.length>0&&n.a.createElement("div",{className:"col"},n.a.createElement("strong",null,"Tags:"),b.map((function(e){var a=e.label,t=e.permalink;return n.a.createElement(c.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),_&&n.a.createElement("div",{className:"col text--right"},n.a.createElement(c.a,{to:E.permalink,"aria-label":"Read more about "+y},n.a.createElement("strong",null,"Read More")))))}}}]);