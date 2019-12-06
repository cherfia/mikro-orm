(window.webpackJsonp=window.webpackJsonp||[]).push([[130],{261:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return s}));var a=t(1),r=t(9),i=(t(0),t(288)),o={title:"Naming Strategy"},l=[{value:"Naming Strategy in mongo driver",id:"naming-strategy-in-mongo-driver",children:[]},{value:"Naming Strategy in SQL drivers",id:"naming-strategy-in-sql-drivers",children:[]},{value:"NamingStrategy API",id:"namingstrategy-api",children:[]}],m={rightToc:l},c="wrapper";function s(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(c,Object(a.a)({},m,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"When mapping your entities to database tables and columns, their names will be defined by naming\nstrategy. There are 2 basic naming strategies you can choose from:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"UnderscoreNamingStrategy")," - default of all SQL drivers"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"MongoNamingStrategy")," - default of ",Object(i.b)("inlineCode",{parentName:"li"},"MongoDriver"))),Object(i.b)("p",null,"You can override this when initializing ORM. You can also provide your own naming strategy, just\nimplement ",Object(i.b)("inlineCode",{parentName:"p"},"NamingStrategy")," interface and provide your implementation when bootstrapping ORM:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"class YourCustomNamingStrategy implements NamingStrategy {\n  ...\n}\n\nconst orm = await MikroORM.init({\n  ...\n  namingStrategy: YourCustomNamingStrategy,\n  ...\n});\n")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"You can also extend ",Object(i.b)("inlineCode",{parentName:"p"},"AbstractNamingStrategy")," which implements one method for you - ",Object(i.b)("inlineCode",{parentName:"p"},"getClassName()"),"\nthat is used to map entity file name to class name.")),Object(i.b)("h2",{id:"naming-strategy-in-mongo-driver"},"Naming Strategy in mongo driver"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MongoNamingStrategy")," will simply use all field names as they are defined. Collection names will\nbe translated into lower-cased dashed form:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MyCoolEntity")," will be translated into ",Object(i.b)("inlineCode",{parentName:"p"},"my-cool-entity")," collection name."),Object(i.b)("h2",{id:"naming-strategy-in-sql-drivers"},"Naming Strategy in SQL drivers"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"MySqlDriver")," defaults to ",Object(i.b)("inlineCode",{parentName:"p"},"UnderscoreNamingStrategy"),", which means your all your database tables and\ncolumns will be lower-cased and words divided by underscored:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE `author` (\n  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,\n  `created_at` datetime(3) DEFAULT NULL,\n  `updated_at` datetime(3) DEFAULT NULL,\n  `terms_accepted` tinyint(1) DEFAULT NULL,\n  `name` varchar(255) DEFAULT NULL,\n  `email` varchar(255) DEFAULT NULL,\n  `born` datetime DEFAULT NULL,\n  `favourite_book_id` int(11) DEFAULT NULL,\n  PRIMARY KEY (`id`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8;\n")),Object(i.b)("h2",{id:"namingstrategy-api"},"NamingStrategy API"),Object(i.b)("h4",{id:"namingstrategygetclassnamefile-string-separator-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.getClassName(file: string, separator?: string): string")),Object(i.b)("p",null,"Return a name of the class based on its file name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyclasstotablenameentityname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.classToTableName(entityName: string): string")),Object(i.b)("p",null,"Return a table name for an entity class."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategypropertytocolumnnamepropertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.propertyToColumnName(propertyName: string): string")),Object(i.b)("p",null,"Return a column name for a property."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyreferencecolumnname-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.referenceColumnName(): string")),Object(i.b)("p",null,"Return the default reference column name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjoincolumnnamepropertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinColumnName(propertyName: string): string")),Object(i.b)("p",null,"Return a join column name for a property."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjointablenamesourceentity-string-targetentity-string-propertyname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinTableName(sourceEntity: string, targetEntity: string, propertyName?: string): string")),Object(i.b)("p",null,"Return a join table name."),Object(i.b)("hr",null),Object(i.b)("h4",{id:"namingstrategyjoinkeycolumnnameentityname-string-referencedcolumnname-string-string"},Object(i.b)("inlineCode",{parentName:"h4"},"NamingStrategy.joinKeyColumnName(entityName: string, referencedColumnName?: string): string")),Object(i.b)("p",null,"Return the foreign key column name for the given parameters."),Object(i.b)("hr",null))}s.isMDXComponent=!0},288:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return b}));var a=t(0),r=t.n(a),i=r.a.createContext({}),o=function(e){var n=r.a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):Object.assign({},n,e)),t},l=function(e){var n=o(e.components);return r.a.createElement(i.Provider,{value:n},e.children)};var m="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=function(e,n){var t={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===n.indexOf(a)&&(t[a]=e[a]);return t}(e,["components","mdxType","originalType","parentName"]),s=o(t),b=a,g=s[l+"."+b]||s[b]||c[b]||i;return t?r.a.createElement(g,Object.assign({},{ref:n},m,{components:t})):r.a.createElement(g,Object.assign({},{ref:n},m))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=s;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var b=2;b<i;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);