(this["webpackJsonpew370-react"]=this["webpackJsonpew370-react"]||[]).push([[1],{100:function(e,t,c){},101:function(e,t,c){},110:function(e,t,c){},111:function(e,t,c){},116:function(e,t,c){"use strict";c.r(t);var n=c(3),a=c(0),i=c.n(a),r=c(81),s=c.n(r),o=(c(99),c(4)),l=(c(100),c(130)),j=c(122),d=c(141),b=c(125),u=c(126),h=c(129),x=(c(101),c.p+"static/media/WRCLogo.b3c6aac4.png"),g=c(128),O=c(44),m=function(e){var t=e.toggleEdit,c=Object(a.useState)(""),i=Object(o.a)(c,2),r=i[0],s=i[1];return Object(a.useEffect)((function(){s(window.location.href.split("?").pop().split("mode=").pop())}),[]),Object(n.jsxs)(j.a,{boxShadow:"md",justify:"space-between",align:"center",bg:"blue.700",paddingX:4,paddingY:2,children:[Object(n.jsxs)(j.a,{justify:"left",align:"center",children:[Object(n.jsx)(O.b,{to:"/jodel",style:{textDecoration:"none"},children:Object(n.jsx)(d.a,{className:"nav-logo",height:"50px",src:x})}),Object(n.jsx)(b.a,{href:"https://www.usna.edu/Blackboard/simple.php",color:"white",ml:5,className:"header-link",isExternal:!0,children:"Blackboard"})]}),Object(n.jsxs)(j.a,{align:"center",children:["edit"===r&&Object(n.jsx)(u.a,{className:"header-editIcon",marginRight:5,color:"white",onClick:t,icon:Object(n.jsx)(g.a,{}),colorScheme:"teal"}),Object(n.jsx)(O.b,{to:"/",style:{textDecoration:"none"},children:Object(n.jsx)(h.a,{fontWeight:"300",textAlign:"right",letterSpacing:".3em",color:"white",size:"md",children:"EW370"})})]})]})},p=c(127),f=c(131),v=c(132);c(110);function y(e){var t=e.content,c=e.currLesson,a=e.setCurrLesson;return Object(n.jsx)(l.a,{borderRadius:"md",border:"1px",borderColor:"gray.200",boxShadow:"md",children:Object.keys(t).map((function(e,i){return isNaN(e)?Object(n.jsx)(l.a,{},"9999"):Object(n.jsxs)(l.a,{children:[Object(n.jsx)(l.a,{onClick:function(){window.localStorage.setItem("currLesson",e),a(e)},paddingY:3,className:e===c?"":"menu-item",bg:e===c?"teal.300":"",children:Object(n.jsx)(f.a,{fontWeight:e===c?"600":"400",children:t[e].title})}),Object(n.jsx)(v.a,{})]},e)}))})}function w(e){var t=e.title,c=e.url,a="url(".concat(c,")");return Object(n.jsx)(j.a,{w:"100%",minH:"175px",borderRadius:"md",boxShadow:"md",bgImage:a,align:"center",justify:"center",bgPosition:"center",bgRepeat:"no-repeat",bgSize:"cover",children:Object(n.jsx)(h.a,{size:"xl",color:"white",letterSpacing:".1em",fontWeight:"400",textShadow:"1px 1px 3px black",p:4,children:t})})}var S=c(133),k=c(134);c(111);function R(e){var t=e.title,c=e.url,a=e.description,i=e.imageURL,r=e.editOn,s=e.removeResource,o=e.editResource;"url(".concat(c,")");return Object(n.jsxs)(l.a,{marginY:3,maxW:"sm",borderWidth:"1px",borderRadius:"lg",overflow:"hidden",className:"card",bg:"white",children:[Object(n.jsxs)(b.a,{href:c,isExternal:!0,className:"card-link",children:[Object(n.jsx)(d.a,{src:i,alt:"image"}),Object(n.jsxs)(l.a,{p:"6",children:[Object(n.jsx)(l.a,{d:"flex",alignItems:"baseline"}),Object(n.jsx)(l.a,{mt:"1",fontWeight:"semibold",as:"h4",lineHeight:"tight",children:t}),Object(n.jsx)(l.a,{children:a})]})]}),r&&Object(n.jsxs)(l.a,{children:[Object(n.jsx)(u.a,{my:3,mx:2,size:"sm","aria-label":"Search database",colorScheme:"red",icon:Object(n.jsx)(S.a,{}),onClick:s}),Object(n.jsx)(u.a,{my:3,mx:2,size:"sm","aria-label":"Search database",colorScheme:"blue",icon:Object(n.jsx)(k.a,{}),onClick:o})]})]})}function C(e){var t=e.content,c=e.currLesson,a=e.removeResource,i=e.editOn,r=e.editResource,s=t[c],o=s.resources;return Object(n.jsxs)(j.a,{justify:"center",flexWrap:"wrap",height:"100%",children:[Object(n.jsx)(w,{title:s.title,url:s.image}),Object(n.jsx)(j.a,{flexWrap:"wrap",w:"100%",align:"flex-start",justify:"space-around",children:Object.keys(o).map((function(e,t){return Object(n.jsx)(R,{title:o[e].title,description:o[e].description,imageURL:o[e].image,url:o[e].link,removeResource:function(){a(c,e)},editResource:function(){r(c,e)},editOn:i},t)}))})]})}c(112);var L=c(28),W=c(13),E=c(42),I=c(137),D=c(135),U=c(87),J=(c(117),c(115),function(e){e.setImageURL;var t=Object(a.useState)(),c=Object(o.a)(t,2),i=(c[0],c[1]),r=Object(a.useState)(),s=Object(o.a)(r,2),j=(s[0],s[1]),d=Object(L.e)();return Object(n.jsx)(l.a,{children:Object(n.jsx)(D.a,{type:"file",accept:"image/png, image/jpeg, image/gif",onChange:function(t){var c=t.target.files[0],n=d.ref("images").child(c.name);i(n);var a=n.put(c);j(n.put(c)),a.then((function(){console.log("upload complete"),n.getDownloadURL().then((function(t){console.log(t),e.setImageURL(t)})),j()}))}})})}),N=function(e){var t=e.content,c=e.saveResource,i=e.currLesson,r=e.existingResource,s={title:"This is the title of your new resource",description:'Here is a description. Make sure you lead the link with http:// and use a full link to an image. Unsplash.com is a great place to get free pictures. Just right click on an image your like and select "copy image address"',link:"https://unsplash.com/photos/VBNb52J8Trk",image:"https://images.unsplash.com/photo-1460186136353-977e9d6085a1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",lesson:i},d=Object(a.useState)(s),b=Object(o.a)(d,2),u=b[0],x=b[1],g=function(e){var t=e.target.value,c=e.target.name;x(Object(E.a)(Object(E.a)({},u),{},Object(W.a)({},c,t)))};return Object(a.useEffect)((function(){if(console.log("ER",r),r){var e=r.lesson,c=r.resourceKey;x(Object(E.a)(Object(E.a)({},t[e].resources[c]),{},{lesson:i}))}else x(s)}),[r]),Object(n.jsx)(j.a,{justify:"center",p:4,children:Object(n.jsxs)(l.a,{justify:"center",boxShadow:"md",w:"90%",flexWrap:"wrap",padding:2,bg:"gray.50",p:5,children:[Object(n.jsx)(h.a,{w:"100%",size:"lg",children:"Add a new resource"}),Object(n.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(n.jsx)(f.a,{fontWeight:"500",m:1,textAlign:"left",children:"Lesson:"}),Object(n.jsx)(I.a,{value:u.lesson,name:"lesson",onChange:g,placeholder:"Select Lesson",mb:3,children:Object.keys(t).map((function(e,c){return Object(n.jsx)("option",{value:e,children:t[e].title},e)}))}),Object(n.jsx)(f.a,{fontWeight:"500",m:1,textAlign:"left",children:"Title:"}),Object(n.jsx)(D.a,{name:"title",placeholder:"Title",value:u.title,onChange:g,mb:3}),Object(n.jsx)(f.a,{fontWeight:"500",m:1,textAlign:"left",children:"Description:"}),Object(n.jsx)(D.a,{name:"description",placeholder:"Description",value:u.description,onChange:g,mb:3}),Object(n.jsx)(f.a,{fontWeight:"500",m:1,textAlign:"left",children:"Link URL:"}),Object(n.jsx)(D.a,{name:"link",placeholder:"Link https://link.com",value:u.link,onChange:g,mb:3}),Object(n.jsx)(f.a,{fontWeight:"500",m:1,textAlign:"left",children:"Image (Upload OR provide a URL):"}),Object(n.jsx)(l.a,{py:3,children:Object(n.jsx)(J,{setImageURL:function(e){x(Object(E.a)(Object(E.a)({},u),{},{image:e}))}})}),Object(n.jsx)(D.a,{name:"image",placeholder:"Image URL https://link.com/picture.png",value:u.image,onChange:g,mb:3}),Object(n.jsx)(j.a,{justify:"center",children:Object(n.jsx)(R,{title:u.title,description:u.description,imageURL:u.image,url:u.link})}),Object(n.jsx)(U.a,{colorScheme:"teal",onClick:function(){console.log(u),c(u)},children:"Save Resource"})]})]})})},z=function(e){var t=e.editOn,c=(e.toggleEdit,Object(L.c)().ref("content")),i=Object(L.d)(c).data,r=Object(a.useState)(!1),s=Object(o.a)(r,2),d=s[0],b=s[1],u=Object(a.useState)(0),h=Object(o.a)(u,2),x=h[0],g=h[1];Object(a.useEffect)((function(){if(i){var e=window.localStorage.getItem("currLesson");console.log(e),console.log(i),i.hasOwnProperty(e)&&g(e)}}),[i]);return i?Object(n.jsx)(L.b,{fallback:"loading....",children:Object(n.jsx)(l.a,{className:"Home",children:Object(n.jsxs)(j.a,{justify:"center",margin:4,flexWrap:["wrap","nowrap"],children:[Object(n.jsx)(l.a,{marginBottom:5,minW:"300px",height:"100%",marginRight:["0","4"],children:Object(n.jsx)(y,{content:i,currLesson:x,setCurrLesson:g})}),Object(n.jsxs)(l.a,{minW:"300px",w:"100%",height:"100%",children:[Object(n.jsx)(C,{removeResource:function(e,t){if(!t)return!1;c.child("".concat(e,"/resources/").concat(t)).remove()},editResource:function(e,t){if(!t)return!1;b({lesson:e,resourceKey:t}),console.log("edit",d)},editOn:t,content:i,currLesson:x}),t&&Object(n.jsx)(N,{content:i,currLesson:x,saveResource:function(e){var t=e.lesson,n=e.title,a=e.description,i=e.link,r=e.image;c.child("".concat(t,"/resources")).push().set({title:n,description:a,image:r,link:i}),g(t),b(!1)},existingResource:d})]})]})})}):Object(n.jsx)(j.a,{height:"100%",justify:"center",align:"center",children:Object(n.jsx)(p.a,{})})},A=c(14);function B(){return Object(n.jsx)("div",{children:"Welcome to computer vision!"})}var H=c(88),T=c(143),P=c(144),M=c(138);function F(e){var t=e.jodels,c=e.removeJodel,i=Object(a.useState)(""),r=Object(o.a)(i,2),s=r[0],d=r[1];return Object(a.useEffect)((function(){}),[s]),Object(n.jsx)(j.a,{justifyContent:"center",children:Object(n.jsx)(l.a,{bg:"gray.50",p:"3",borderRadius:"md",my:"4",mx:{base:"5",md:"200"},children:Object(n.jsxs)(l.a,{justifyContent:"center",children:[Object(n.jsx)(D.a,{m:"2",maxW:"200px",placeholder:"Filter Jodels",onChange:function(e){d(e.target.value)}}),Object(n.jsx)(M.a,{maxW:"500px",spacing:"3",children:Object.keys(t).reverse().map((function(e,a){return t[e].input?t[e].input.includes(s)?Object(n.jsx)(G,{jodel:t[e],removeJodel:function(){c(e)}},e):void 0:""}))})]})})})}var G=function(e){var t=e.jodel,c=e.removeJodel,i=Object(a.useState)(!1),r=Object(o.a)(i,2),s=r[0],l=r[1];return Object(n.jsxs)(M.b,{p:"2",bg:"happy"===t.output?"teal.200":"red.200",borderRadius:"md",textColor:"gray.700",fontWeight:"300",boxShadow:"lg",onClick:function(){l(!s)},children:[Object(n.jsx)(j.a,{justifyContent:"center",alignItems:"center",children:Object(n.jsx)(f.a,{children:t.input})}),s&&Object(n.jsx)(j.a,{justifyContent:"center",children:Object(n.jsxs)(U.a,{onClick:c,p:"3",my:"1",colorScheme:"gray",shadow:"lg",children:[Object(n.jsx)(S.a,{mr:"2",justifySelf:"flex-end",color:"red.500",textShadow:"lg"}),"Delete"]})})]})};function K(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],i=t[1],r=Object(a.useState)(""),s=Object(o.a)(r,2),d=s[0],b=s[1],u=Object(a.useState)(!0),x=Object(o.a)(u,2),g=x[0],O=x[1],m=Object(L.c)().ref("jodels"),v=Object(L.d)(m),y=v.status,w=v.data;return Object(n.jsxs)(l.a,{children:[Object(n.jsxs)(l.a,{bg:"gray.50",p:"2",borderRadius:"md",my:"2",mx:{base:"5",md:"60"},justifyContent:"center",children:[Object(n.jsx)(h.a,{letterSpacing:".1em",fontWeight:"200",color:"teal",children:"EW370 Jodel"}),Object(n.jsx)(D.a,{my:"5",name:"input",onChange:function(e){return i(e.target.value)},placeholder:"Jodel Text",value:c}),Object(n.jsx)(j.a,{justifyContent:"center",children:Object(n.jsx)(H.a,{my:"3",onChange:b,name:"output",value:d,children:Object(n.jsxs)(T.a,{spacing:"3",direction:"column",children:[Object(n.jsx)(P.a,{size:"lg",colorScheme:"green",value:"happy",children:"Happy"}),Object(n.jsx)(P.a,{size:"lg",colorScheme:"red",value:"sad",children:"Sad"})]})})}),Object(n.jsx)(U.a,{onClick:function(){m.push().set({input:c,output:d}),i(""),b(""),O(!0)},size:"md",isDisabled:!d||!(c.length>10),my:"3",colorScheme:"sad"===d?"red":"teal",children:Object(n.jsxs)(f.a,{fontWeight:"400",fontSize:"20px",children:["sad"===d?"\ud83d\ude25":"\ud83d\ude00"," Submit Jodel"]})})]}),g&&("loading"===y?Object(n.jsx)(p.a,{}):Object(n.jsx)(F,{jodels:w,removeJodel:function(e){m.child(e).remove()}}))]})}var X=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),c=t[0],i=t[1],r=function(){i(!c)};return Object(n.jsxs)(l.a,{className:"App",children:[Object(n.jsx)(m,{toggleEdit:r}),Object(n.jsxs)(A.c,{children:[Object(n.jsx)(A.a,{exact:!0,path:"/",render:function(){return Object(n.jsx)(z,{editOn:c,toggleEdit:r})}}),Object(n.jsx)(A.a,{exact:!0,path:"/cv",render:function(){return Object(n.jsx)(B,{})}}),Object(n.jsx)(A.a,{exact:!0,path:"/edit",render:function(){return Object(n.jsx)(z,{editOn:c,toggleEdit:r})}}),Object(n.jsx)(A.a,{exact:!0,path:"/jodel",render:function(){return Object(n.jsx)(K,{})}})]})]})},Y=function(e){e&&e instanceof Function&&c.e(11).then(c.bind(null,152)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))},V=c(140);s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(V.a,{children:Object(n.jsx)(L.a,{firebaseConfig:{apiKey:"AIzaSyDinZuBXMQbPuXTrEdl4DGRVH-EPZdK5ug",authDomain:"mlbrain-855e7.firebaseapp.com",databaseURL:"https://mlbrain-855e7.firebaseio.com",projectId:"mlbrain-855e7",storageBucket:"mlbrain-855e7.appspot.com",messagingSenderId:"465924632238",appId:"1:465924632238:web:70b361f129fe718078473f",measurementId:"G-T76ESPE2N6"},children:Object(n.jsx)(O.a,{children:Object(n.jsx)(X,{})})})})}),document.getElementById("root")),Y()},99:function(e,t,c){}},[[116,2,3]]]);
//# sourceMappingURL=main.973f7d27.chunk.js.map