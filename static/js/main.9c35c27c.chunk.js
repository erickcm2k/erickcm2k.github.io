(this["webpackJsonpnew-portfolio"]=this["webpackJsonpnew-portfolio"]||[]).push([[0],{23:function(e,t,a){e.exports={container:"Container_container__ehhwE"}},24:function(e,t,a){e.exports={projectSection:"ProjectCardContainer_projectSection__1meAH"}},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a(1),n=a(10),i=a.n(n),o=a(2),s=(a(31),a(19)),l=a(25),d=a(23),b=a.n(d),u=function(e){var t=e.children,a=Object(l.a)(e,["children"]);return Object(c.jsx)("div",Object(s.a)(Object(s.a)({className:b.a.container},a),{},{children:t}))},m=(a(32),a.p+"static/media/resume.d8bbe560.pdf"),j=Object(r.createContext)(),p=function(){var e=Object(r.useContext)(j);if(!e)throw new Error("useThemeContext must be used within ThemeProvider.");return e},h=function(e){var t=e.children,a=Object(r.useState)("light"),n=Object(o.a)(a,2),i=n[0],s=n[1],l=[i,function(){s("light"===i?"dark":"light")}];return Object(c.jsx)(j.Provider,{value:l,children:t})},A=(a(33),a(18)),g=function(){var e=p(),t=Object(o.a)(e,1)[0],a=Object(r.useRef)();return Object(r.useEffect)((function(){var e=a.current;A.a.apply(void 0,[e].concat([1e3,"I'm a Computer Engineering Student \ud83d\udda5",1e3,"I'm a React Developer",1e3,"I'm a Star wars fan \ud83c\udf7f"],[A.a]))}),[]),Object(c.jsx)("div",{className:"about-me__whatiam about-me__whatiam--".concat(t),children:Object(c.jsx)("div",{ref:a,className:"typical-wrapper about-me__whatiam__text about-me__whatiam__text--".concat(t)})})},q=function(){var e=p(),t=Object(o.a)(e,1)[0];return Object(c.jsx)("div",{children:Object(c.jsxs)("article",{className:"hero__container",children:[Object(c.jsxs)("div",{className:"about-me",children:[Object(c.jsxs)("div",{className:"about-me__name about-me__name--".concat(t),children:["Hi, I\u2019m"," ",Object(c.jsx)("span",{className:"about-me__whatiam__text about-me__whatiam__text--".concat(t),children:"Erick Casta\xf1eda"}),"!"]}),Object(c.jsx)(g,{}),Object(c.jsx)("button",{className:"about-me__button about-me__button--".concat(t),onClick:function(){return window.open(m)},children:"View my CV"})]}),Object(c.jsx)("div",{className:"picture-container",children:Object(c.jsx)("figure",{className:"picture"})})]})})},f=(a(35),function(){var e=p(),t=Object(o.a)(e,1)[0];return Object(c.jsx)("div",{children:Object(c.jsxs)("article",{className:"description",children:[Object(c.jsx)("div",{className:"description__icon-container",children:Object(c.jsxs)("ul",{className:"description__icon-container__list",children:[Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/erickcm2k",target:"_blank",rel:"noopener noreferrer",className:"description__icon-container__list__item description__icon-container__list__item--".concat(t),children:Object(c.jsx)("i",{className:"fab fa-github fa-3x px-md-1"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://www.linkedin.com/in/erickcastanedamartinez/",target:"_blank",rel:"noopener noreferrer",className:"description__icon-container__list__item description__icon-container__list__item--".concat(t),children:Object(c.jsx)("i",{className:"fab fa-linkedin-in fa-3x px-md-1"})})}),Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://telegram.me/erickcm2k",target:"_blank",rel:"noopener noreferrer",className:"description__icon-container__list__item description__icon-container__list__item--".concat(t),children:Object(c.jsx)("i",{className:"fab fa-telegram fa-3x px-md-1"})})})]})}),Object(c.jsxs)("div",{className:"message message--".concat(t),children:[Object(c.jsx)("p",{children:"Constantly trying to become the best version of myself."}),Object(c.jsxs)("p",{children:["Currently learning how to build web apps using the"," ",Object(c.jsx)("span",{className:"nodeish",children:"ME"}),Object(c.jsx)("span",{className:"reactish",children:"R"}),Object(c.jsx)("span",{className:"nodeish",children:"N"})," stack."]})]})]})})}),V=function(){var e=p(),t=Object(o.a)(e,1)[0];return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("section",{className:"hero hero--".concat(t),children:Object(c.jsxs)(u,{children:[Object(c.jsx)(q,{}),Object(c.jsx)(f,{})]})})})},v=a(6),O=(a(46),function(e){var t=p(),a=Object(o.a)(t,2),r=a[0],n=a[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("div",{className:"Link Link--".concat(r),children:Object(c.jsx)("i",{className:"light"===r?"fas fa-moon":"fas fa-sun",onClick:n})}),Object(c.jsx)(v.Link,{className:"Link Link--".concat(r),spy:!0,to:"hero",smooth:!0,duration:500,offset:-50,onClick:e.closeDrawer,children:"Contact"}),Object(c.jsx)(v.Link,{className:"Link Link--".concat(r),spy:!0,to:"project-section",smooth:!0,duration:500,offset:-50,onClick:e.closeDrawer,children:"Projects"})]})}),C=(a(47),function(e){var t=p(),a=Object(o.a)(t,1)[0];return Object(c.jsx)("nav",{className:"side-drawer ".concat(e.show&&"open"),children:Object(c.jsxs)("ul",{className:"side-drawer__menu side-drawer__menu--".concat(a),children:[Object(c.jsx)("li",{className:"side-drawer__menu__close-button side-drawer__menu__close-button--".concat(a),onClick:e.closeButtonAction,children:Object(c.jsx)("i",{className:"fas fa-times"})}),Object(c.jsx)(O,{closeDrawer:e.closeDrawer})]})})}),x=(a(48),function(e){return Object(c.jsx)("div",{className:"backdrop",onClick:e.click})});a(49);var N=function(){var e=p(),t=Object(o.a)(e,1)[0],a=function(){var e=Object(r.useState)({width:void 0,height:void 0}),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){c({width:window.innerWidth,height:window.innerHeight})};return window.addEventListener("resize",e),e(),function(){return window.removeEventListener("resize",e)}}),[]),a}(),n=Object(r.useState)(!1),i=Object(o.a)(n,2),s=i[0],l=i[1],d=function(){l(!s)};return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)("nav",{className:"Navbar Navbar--".concat(t),children:Object(c.jsxs)(u,{children:[Object(c.jsx)(C,{closeDrawer:function(){return l(!1)},closeButtonAction:d,show:s}),s&&Object(c.jsx)(x,{click:d}),Object(c.jsxs)("ul",{className:"Navbar__List Navbar__List--".concat(t),children:[Object(c.jsx)("li",{className:"Navbar__List__Logo Navbar__List__Logo--".concat(t),children:"Erick Casta\xf1eda"}),a.width>768&&Object(c.jsx)(O,{}),Object(c.jsx)("li",{className:"Navbar__List__Toggle Navbar__List__Toggle--".concat(t),onClick:d,children:Object(c.jsx)("i",{className:"fas fa-bars fa-2x"})})]})]})})})},W=(a(50),a(51),function(e){var t=p(),a=Object(o.a)(t,1)[0],r=function(e){window.open(e)},n=e.projectImage;return Object(c.jsxs)("article",{className:"Card Card--".concat(a),children:[Object(c.jsx)("figure",{className:"Card__projectImageContainer",children:Object(c.jsx)("img",{style:{backgroundImage:n},src:e.projectImage,alt:e.projectName,className:"Card__projectImageContainer__projectImage"})}),Object(c.jsxs)("div",{className:"Card__cardBody",children:[Object(c.jsx)("h2",{className:"Card__cardBody__projectName Card__cardBody__projectName--".concat(a),children:e.projectName}),Object(c.jsx)("p",{className:"Card__cardBody__date Card__cardBody__date--".concat(a),children:e.date}),Object(c.jsx)("p",{className:"Card__cardBody__description Card__cardBody__description--".concat(a),children:e.description}),Object(c.jsx)("div",{className:"Card__cardBody__technologiesContainer",children:e.technologies.map((function(e){return Object(c.jsx)("p",{className:"Card__cardBody__technologiesContainer__technologie Card__cardBody__technologiesContainer__technologie--".concat(a),children:e},e)}))}),Object(c.jsxs)("div",{className:"Card__cardBody__buttonContainer",children:[e.github&&Object(c.jsxs)("button",{onClick:function(){return r(e.github)},className:"Card__cardBody__buttonContainer__githubButton",children:["Source ",Object(c.jsx)("i",{className:"fab fa-github fa-1x"})]}),e.url&&Object(c.jsx)("button",{onClick:function(){return r(e.url)},className:"Card__cardBody__buttonContainer__visitButton Card__cardBody__buttonContainer__visitButton--".concat(a),children:"Visit"})]})]})]})}),y=a(24),_=a.n(y),w=a.p+"static/media/calculadora.12aa4016.png",k=a.p+"static/media/biblioteca.c8631cb9.png",S=a.p+"static/media/knn.c50858cd.png",I=a.p+"static/media/nfa-validator.7a134ba5.png",K=a.p+"static/media/career-quiz.8811d242.png",F=a.p+"static/media/coronaimage.fdc28cbd.png",L=a.p+"static/media/covid-19-tracker.85fafe6b.png",X=[{projectName:"Longest Common Subsequence",date:"January 2021",description:"Web application designed for getting and visualizing an animation of the longest common subsequence of 2 given strings.   ",github:"https://github.com/erickcm2k/longest-common-subsequence",url:"https://longest-common-subsequence.netlify.app/",projectImage:a.p+"static/media/lcs.8ab8c52c.png",technologies:["React","ChakraUI"]},{projectName:"CoronAImage",date:"December 2020",description:"I depeloved the frontend of this web application where users can upload a chest radiography, it connects with a Flask backend and tells you whether the patient is COVID19 positive or not using machine learning algorithms.",github:"https://github.com/erickcm2k/OODesignAndAnalysis",url:"https://coronaimage.vercel.app/",projectImage:F,technologies:["React","ChakraUI","CSS"]},{projectName:"Covid 19 Tracker",date:"September 2020",description:"Created as a personal challenge project when I started learning web development. Allows the user to track COVID-19 worlwide status and search by an specific country. Built using Google Maps API and COVID 19 API.",github:"https://github.com/erickcm2k/covid-19-tracker",projectImage:L,technologies:["HTML","CSS","Javascript"]},{projectName:"Library Manager",date:"June 2020",description:"Created as final project for Object Oriented Programming. Allows the user to manage a library collection using an intuitive GUI.",github:"https://github.com/erickcm2k/proyectoPOO",projectImage:k,technologies:["Java","MySQL"]},{projectName:"KNN Simulator",date:"March 2020",description:"Another challenge for Theory of Computation. A graphic representation for KNN (K Nearest Neighbors) pattern-recognition algorithm using Matplotlib.",github:"https://github.com/erickcm2k/TeoriaComputacional/tree/master/knnAlgorithm",projectImage:S,technologies:["Python"]},{projectName:"NFA String Validator",date:"February 2020",description:"Created as a challenge for Theory of Computation. Allows the user to validate character strings receiving their NFA state-transition table.",github:"https://github.com/erickcm2k/TeoriaComputacional/tree/master/validarCadenaAFN",projectImage:I,technologies:["C++"]},{projectName:"Sales System",date:"December 2019",description:"Console application for Data Structures & Algorithms. Simulates a sales system, receiving product names and allowing the user to find it by its code. Uses linked lists and an AVL Tree, not the most optimal implementation.",github:"https://github.com/erickcm2k/ProyectoEstructuras",projectImage:"data:image/png;base64,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",technologies:["C"]},{projectName:"Derivatives & Integrals Calculator",date:"November 2019",description:"Challenge for One Variable Calculus. Calculates some derivative and integrals, receiving a symbolic string as argument. Uses Sympy and PyQt libraries.",github:"https://github.com/erickcm2k/Calculo",projectImage:w,technologies:["Python"]},{projectName:"Career Quiz",date:"May 2018",description:"Made during High School (CECyT 12 from IPN), this was my very first tech project. Its purpose was to help my classmates to choose a technical carreer, giving a carrer quiz and information about the technical education offered by the school.",github:"https://github.com/erickcm2k/ProyectoVocacional",projectImage:K,technologies:["HTML","CSS","Javascript"]}],U=function(){return Object(c.jsx)("section",{className:_.a.projectSection,children:X.map((function(e){return Object(c.jsx)(W,{projectImage:e.projectImage,projectName:e.projectName,date:e.date,description:e.description,url:e.url,technologies:e.technologies,github:e.github},e.projectName)}))})},P=function(){var e=p(),t=Object(o.a)(e,1)[0];return Object(c.jsxs)("section",{id:"project-section",className:"projectSection projectSection__background--".concat(t),children:[Object(c.jsx)("h1",{className:"projectSection__title projectSection__title--".concat(t),children:"Projects"}),Object(c.jsx)(u,{children:Object(c.jsx)(U,{})})]})},J=(a(52),function(){var e=Object(r.useState)({y:window.pageYOffset,x:window.pageXOffset}),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){var e=function(){c({y:window.pageYOffset,x:window.pageXOffset})};return window.addEventListener("scroll",e),e(),function(){return window.removeEventListener("scroll",e)}}),[]),a}),B=function(){var e=p(),t=Object(o.a)(e,1)[0],a=J();return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(v.Link,{className:a.y>=800?"".concat("BackToTopContainer BackToTopContainer--".concat(t)," ","Visible"):"".concat("BackToTopContainer BackToTopContainer--".concat(t)," "),spy:!0,to:"hero",smooth:!0,duration:500,offset:-50,children:Object(c.jsx)("i",{style:{fontSize:"4rem"},className:"fas fa-arrow-circle-up"})})})},Q=(a(53),function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)(h,{children:[Object(c.jsx)(N,{}),Object(c.jsx)(V,{}),Object(c.jsx)(P,{}),Object(c.jsx)(B,{})]})})});i.a.render(Object(c.jsx)(Q,{}),document.getElementById("root"))}},[[54,1,2]]]);
//# sourceMappingURL=main.9c35c27c.chunk.js.map