(this["webpackJsonptsx-app"]=this["webpackJsonptsx-app"]||[]).push([[0],{54:function(e,t,a){e.exports=a(74)},59:function(e,t,a){},60:function(e,t,a){},67:function(e,t,a){e.exports=a.p+"static/media/cat-bar.26961ae6.jpeg"},68:function(e,t,a){e.exports=a.p+"static/media/cat-bathtub.b079e743.jpeg"},69:function(e,t,a){e.exports=a.p+"static/media/cat-dashboard.5d72b192.jpeg"},70:function(e,t,a){e.exports=a.p+"static/media/cat-lap.9a3373a2.jpeg"},71:function(e,t,a){e.exports=a.p+"static/media/cat-tongue.185011ae.jpeg"},72:function(e,t,a){e.exports=a.p+"static/media/cat-upsidedown.7c4ea786.jpeg"},73:function(e,t,a){e.exports=a.p+"static/media/code.bf3121ad.svg"},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(10),o=a.n(l),c=(a(59),a(18)),i=a(7),s=(a(60),a(27)),m=a(28),u=a(31),p=a(32),h=a(99),d=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).defaultProps={bgcolor:"background.default",borderColor:"text.primary",m:1,border:1,style:{width:"25rem",height:"25rem"}},e}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,Object.assign({borderRadius:15},this.defaultProps),this.props.content)}}]),a}(r.a.Component),E=a(94),g=a(103),f=Object(E.a)((function(e){return Object(g.a)({root:{display:"flex",flexWrap:"wrap",justifyContent:"space-evenly",overflow:"hidden",backgroundColor:e.palette.background.paper,margin:"25px"},gridList:{justifyContent:"space-evenly"},title:{color:"#602cc9"},hover:{"&:hover":{opacity:.5}},avatarSize:{width:"250px",height:"250px",margin:e.spacing(.5)}})})),v=a(95),b=a(96);var w=function(){var e=f();return r.a.createElement("div",null,r.a.createElement(v.a,{className:e.gridList,spacing:10},r.a.createElement(d,{content:r.a.createElement("div",null,r.a.createElement("h1",null,"About Us"),r.a.createElement("p",null,"Hello! My name is Michelle."),r.a.createElement("p",null,"I'm creating this personal website to learn more about web development."),r.a.createElement("p",null,"Fun fact: My original goal for this project was just to learn how to deploy a site using GitHub Pages."),r.a.createElement("p",null,"However, I've learned a lot more since then!"),r.a.createElement("i",null,"See",r.a.createElement(b.a,{component:c.b,to:"/learn"},"Learn"),"for progress updates."))}),r.a.createElement(d,{content:r.a.createElement("div",null,r.a.createElement("h1",null,"Site Goals"),r.a.createElement("p",null,"Create a React TypeScript app without outside expectaions or deadlines (hobby, not work)."),r.a.createElement("p",null,"Incremental research: Experiment with different libraries and frameworks for React."),r.a.createElement("p",null,"Incremental site development: Add something new or interesting to the site, hopefully a few times a week."),r.a.createElement("p",null,"Improve user experience: Learn about UI/UX and create mockups for the site."),r.a.createElement("p",null,"Brainstorm more content for the site, outside of the typical personal bio and resume."))})))};var y=function(){return r.a.createElement("div",null,r.a.createElement("p",null,"Error: Sorry, page does not exist! x_x "))},x=a(45),C=a(46),j=a(100),k=a(102),S=a(97),O=function(e){Object(p.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).tileContent=void 0,n.classes=void 0,n.tilePopover=function(e){return r.a.createElement(C.a,{id:"popover-positioned-top",title:"Popover top",className:n.classes.title},r.a.createElement("strong",null,e.title))},n.tileContent=e.tileContent,n.classes=e.classes,n}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement(k.a,{key:this.tileContent.img},r.a.createElement(S.a,{"aria-label":"info about ".concat(this.tileContent.title),className:this.classes.hover,href:this.tileContent.url},r.a.createElement(x.a,{placement:"bottom",delay:{show:150,hide:200},overlay:this.tilePopover(this.tileContent)},r.a.createElement(j.a,{alt:this.tileContent.title,src:this.tileContent.img,variant:"circle",className:this.classes.avatarSize}))))}}]),a}(r.a.Component),A=[{img:a(67),title:"Cat Bar",url:"https://www.google.com"},{img:a(68),title:"Cat Bathtub",url:"https://www.mozilla.org/en-US/firefox/new"},{img:a(69),title:"Cat Dashboard",url:"https://support.apple.com/downloads/safari"},{img:a(70),title:"Cat Lap",url:"https://www.microsoft.com/en-us/edge"},{img:a(71),title:"Cat Tongue",url:"https://support.microsoft.com/en-us/help/17621/internet-explorer-downloads"},{img:a(72),title:"Cat Upsidedown",url:"https://www.opera.com/download"}];var R=function(){var e=f();return r.a.createElement("div",null,r.a.createElement("h1",null,"Home"),r.a.createElement("div",{className:e.root},r.a.createElement(v.a,{className:e.gridList,spacing:10},A.map((function(t){return r.a.createElement(O,{tileContent:t,classes:e})})))))};var P=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Learn More"),r.a.createElement("br",null),r.a.createElement("h2",null,"Progress Updates"),r.a.createElement("h3",null,"2020"),r.a.createElement("h4",null,"September"),r.a.createElement("h5",null,"v4. Create new pages (including the one you're reading now) and navigate to them using react-router"),r.a.createElement("h6",null,"(We're no longer stuck on the home page!)"),r.a.createElement("h5",null,"v3. Refactor App into separate React components"),r.a.createElement("h6",null,"(There's more site content now, so no more adding all code to the same file)"),r.a.createElement("h4",null,"August"),r.a.createElement("h5",null,"v2. Experiment with material-ui, bootstrap, and styling"),r.a.createElement("h5",null,"v1. Site creation using create-react-app for TypeScript and deployment with GitHub Pages"),r.a.createElement("h6",null,"(After hours of trial and error from following many tutorials...)"),r.a.createElement("h2",null,"<Code/>"),r.a.createElement("h5",null,r.a.createElement("a",{href:"https://github.com/micheung7/tsx-app"},"GitHub Repository")),r.a.createElement("h2",null,"Research"),r.a.createElement("h5",null,r.a.createElement("a",{href:"https://github.com/gitname/react-gh-pages"},"Deploying a React App to GitHub Pages tutorial")),r.a.createElement("h5",null,r.a.createElement("a",{href:"https://create-react-app.dev/docs/documentation-intro"},"Create React App documentation")),r.a.createElement("h5",null,r.a.createElement("a",{href:"https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html"},"React Router navigation")),r.a.createElement("h5",null,r.a.createElement("a",{href:"https://stackoverflow.com"},"Stack Overflow")),r.a.createElement("h2",null,"Image Attributions"),r.a.createElement("h5",null,"Code Icon made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")))};var I=function(){return r.a.createElement("div",null,r.a.createElement(c.b,{to:"/"},"Home"),r.a.createElement(c.b,{to:"/about"},"About"),r.a.createElement(c.b,{to:"/learn"},"Learn"))},H=a(98);var L=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(I,null),r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/",component:R,exact:!0}),r.a.createElement(i.a,{path:"/about",component:w}),r.a.createElement(i.a,{path:"/learn",component:P}),r.a.createElement(i.a,{component:y}))),r.a.createElement("br",null),r.a.createElement(b.a,{component:c.b,to:"/learn",variant:"outlined"},r.a.createElement(H.a,{component:"div"},"Site Development"),r.a.createElement("img",{src:a(73),alt:"code",width:"30",height:"30"}),r.a.createElement(H.a,{component:"div"},"...Work in Progress..."))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[54,1,2]]]);
//# sourceMappingURL=main.4b432b6a.chunk.js.map