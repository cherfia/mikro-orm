(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{211:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return c}));n(52),n(25),n(20),n(21),n(53),n(0);var a=n(288);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var r={title:"Smart Nested Populate"},i=[{value:"Using EntityLoader manually",id:"using-entityloader-manually",children:[]}],l={rightToc:i},s="wrapper";function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["components"]);return Object(a.b)(s,o({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"MikroORM")," is capable of loading large nested structures while maintaining good\nperformance, querying each database table only once. Imagine you have this nested\nstructure:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Book")," has one ",Object(a.b)("inlineCode",{parentName:"li"},"Publisher")," (M:1), one ",Object(a.b)("inlineCode",{parentName:"li"},"Author")," (M:1) and many ",Object(a.b)("inlineCode",{parentName:"li"},"BookTag"),"s (M:N)"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"Publisher")," has many ",Object(a.b)("inlineCode",{parentName:"li"},"Test"),"s (M:N)")),Object(a.b)("p",null,"When you use nested populate while querying all ",Object(a.b)("inlineCode",{parentName:"p"},"BookTag"),"s, this is what happens in\nthe background:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"const tags = await orm.em.findAll(BookTag, ['books.publisher.tests', 'books.author']);\nconsole.log(tags[0].books[0].publisher.tests[0].name); // prints name of nested test\nconsole.log(tags[0].books[0].author.name); // prints name of nested author\n")),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Load all ",Object(a.b)("inlineCode",{parentName:"li"},"BookTag"),"s"),Object(a.b)("li",{parentName:"ol"},"Load all ",Object(a.b)("inlineCode",{parentName:"li"},"Book"),"s associated with previously loaded ",Object(a.b)("inlineCode",{parentName:"li"},"BookTag"),"s"),Object(a.b)("li",{parentName:"ol"},"Load all ",Object(a.b)("inlineCode",{parentName:"li"},"Publisher"),"s associated with previously loaded ",Object(a.b)("inlineCode",{parentName:"li"},"Book"),"s"),Object(a.b)("li",{parentName:"ol"},"Load all ",Object(a.b)("inlineCode",{parentName:"li"},"Test"),"s associated with previously loaded ",Object(a.b)("inlineCode",{parentName:"li"},"Publisher"),"s"),Object(a.b)("li",{parentName:"ol"},"Load all ",Object(a.b)("inlineCode",{parentName:"li"},"Author"),"s associated with previously loaded ",Object(a.b)("inlineCode",{parentName:"li"},"Book"),"s")),Object(a.b)("p",null,"For SQL drivers with pivot tables this means:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-sql"}),"SELECT `e0`.* FROM `book_tag` AS `e0`;\n\nSELECT `e0`.*, `e1`.`book_id`, `e1`.`book_tag_id`\n  FROM `book` AS `e0` LEFT JOIN `book_to_book_tag` AS `e1` ON `e0`.`id` = `e1`.`book_id`\n  WHERE `e1`.`book_tag_id` IN (?, ?, ?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `publisher` AS `e0` WHERE `e0`.`id` IN (?, ?, ?);\n\nSELECT `e0`.*, `e1`.`test_id`, `e1`.`publisher_id`\n  FROM `test` AS `e0` LEFT JOIN `publisher_to_test` AS `e1` ON `e0`.`id` = `e1`.`test_id`\n  WHERE `e1`.`publisher_id` IN (?, ?, ?)\n  ORDER BY `e1`.`id` ASC;\n\nSELECT `e0`.* FROM `author` AS `e0` WHERE `e0`.`id` IN (?);\n")),Object(a.b)("p",null,"For mongo driver its even simpler as no pivot tables are involved:"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),'db.getCollection("book-tag").find({}).toArray();\ndb.getCollection("book").find({"tags":{"$in":[...]}}).toArray();\ndb.getCollection("publisher").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("test").find({"_id":{"$in":[...]}}).toArray();\ndb.getCollection("author").find({"_id":{"$in":[...]}}).toArray();\n')),Object(a.b)("h2",{id:"using-entityloader-manually"},"Using EntityLoader manually"),Object(a.b)("p",null,"Under the hood, EntityManager uses EntityLoader to populate other entities. You can use it\nmanually if you already have list of entities (e.g. queried via QueryBuilder):"),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{className:"language-typescript"}),"import { EntityLoader } from 'mikro-orm';\n\nconst loader = new EntityLoader(orm.em);\nconst res = await orm.em.createQueryBuilder(Author).select('*').execute();\nconst authors = res.map(data => orm.em.merge(Author, data));\nawait loader.populate(Author, authors, ['books.tags']);\n\n// now your Author entities will have `books` collections populated, \n// as well as they will have their `tags` collections populated.\nconsole.log(authors[0].books[0].tags[0]); // initialized BookTag\n")),Object(a.b)("p",null,Object(a.b)("a",o({parentName:"p"},{href:"/docs/v2/index#table-of-contents"}),"\u2190"," Back to table of contents")))}c.isMDXComponent=!0},288:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return p}));var a=n(0),o=n.n(a),r=o.a.createContext({}),i=function(e){var t=o.a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):Object.assign({},t,e)),n},l=function(e){var t=i(e.components);return o.a.createElement(r.Provider,{value:t},e.children)};var s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}(e,["components","mdxType","originalType","parentName"]),b=i(n),p=a,u=b[l+"."+p]||b[p]||c[p]||r;return n?o.a.createElement(u,Object.assign({},{ref:t},s,{components:n})):o.a.createElement(u,Object.assign({},{ref:t},s))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);