(this.webpackJsonpvafn=this.webpackJsonpvafn||[]).push([[0],{41:function(e,t,n){},48:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),i=n(15),a=n.n(i),r=(n(41),n(36)),s=n(33),l=n(34),d=(n.p,n(20),n(18)),j=n(22),h=n(19),b=n(17),u=n(13),x=n(2),O=[{builtin:"Picovoice",sensitivity:.65}];var p=function(e){var t=Object(c.useState)(!1),n=Object(r.a)(t,2),o=n[0],i=n[1],a=function(){return i(!1)},p=sessionStorage.getItem("contact"),f=(sessionStorage.getItem("details"),sessionStorage.getItem("medical"));console.log(f);var m=Object(l.a)(s.a,{keywords:O,start:!0},(function(e){console.log("Porcupine detected ".concat(e)),i(!0)}));return m.isLoaded,m.isListening,m.isError,m.errorMessage,m.start,m.resume,m.pause,Object(x.jsxs)("div",{children:[Object(x.jsx)(u.b,{to:"/contact",children:Object(x.jsx)("li",{children:Object(x.jsx)(j.a,{className:"back"})})}),Object(x.jsx)(d.a,{children:Object(x.jsx)("h1",{children:"Voice Activated Family Notification"})}),Object(x.jsxs)(h.a,{show:o,onHide:a,children:[Object(x.jsx)(h.a.Header,{children:Object(x.jsx)(h.a.Title,{children:"Thank you"})}),Object(x.jsx)(h.a.Body,{children:Object(x.jsxs)("p",{children:["`Your information about ",f," has been sent to  ",p,"`"]})}),Object(x.jsx)(h.a.Footer,{children:Object(x.jsx)(b.a,{variant:"secondary",onClick:a,children:"Close"})})]})]})},f=n(16),m=n(7),v=(n(48),n(8));var g=function(){var e=Object(v.g)(),t=(e.path,e.url,document.querySelector("#formBasicPassword")),n=document.querySelector("#showPW");return Object(x.jsxs)(f.a,{fluid:!0,children:[Object(x.jsx)(d.a,{children:Object(x.jsx)("h1",{children:"Voice Activated Family Notification"})}),Object(x.jsx)(f.a,{children:Object(x.jsxs)(m.a,{children:[Object(x.jsxs)("ul",{children:[Object(x.jsx)("li",{children:Object(x.jsx)("h2",{children:"Log in"})}),Object(x.jsx)("li",{children:"or sign up"})]}),Object(x.jsxs)(m.a.Group,{controlId:"formBasicEmail",children:[Object(x.jsx)(m.a.Label,{children:"Email address"}),Object(x.jsx)(m.a.Control,{type:"email",placeholder:"Enter email"})]}),Object(x.jsxs)(m.a.Group,{controlId:"formBasicPassword",children:[Object(x.jsx)(m.a.Label,{children:"Password"}),Object(x.jsx)(m.a.Control,{type:"password",placeholder:"Password"})]}),Object(x.jsxs)(m.a.Group,{controlId:"formBasicCheckbox",children:[Object(x.jsx)(m.a.Check,{type:"checkbox",id:"showPW",label:"Show password",onChange:function(){n.checked?t.type="text":t.type="password"}}),Object(x.jsx)(m.a.Check,{type:"checkbox",label:"Keep me logged in"})]}),Object(x.jsx)(u.b,{to:"/contact",children:Object(x.jsx)(b.a,{variant:"primary",type:"submit",id:"login",children:"Log in"})})]})})]})};n(50);var w=function(){return sessionStorage.clear(),Object(x.jsxs)(f.a,{id:"contactForm",children:[Object(x.jsx)(u.b,{to:"/",children:Object(x.jsx)("li",{children:Object(x.jsx)(j.a,{className:"back"})})}),Object(x.jsxs)(m.a,{children:[Object(x.jsxs)(m.a.Group,{controlId:"formContactPerson",children:[Object(x.jsx)("strong",{children:Object(x.jsx)(m.a.Label,{children:"Contact Person"})}),Object(x.jsx)(m.a.Control,{type:"text",placeholder:"Please enter name of contact person"})]}),Object(x.jsxs)(m.a.Group,{controlId:"formContactDetails",children:[Object(x.jsx)("strong",{children:Object(x.jsx)(m.a.Label,{children:"Contact Details"})}),Object(x.jsx)(m.a.Control,{type:"telephone",placeholder:"enter details of your nominated contact"})]}),Object(x.jsxs)(m.a.Group,{controlId:"formMedicalConditions",children:[Object(x.jsx)("strong",{children:Object(x.jsx)(m.a.Label,{children:"Your Medical Conditions"})}),Object(x.jsx)(m.a.Control,{type:"text",placeholder:"enter details of any medical conditions"})]}),Object(x.jsx)(u.b,{to:"/submit",children:Object(x.jsx)(b.a,{onClick:function(e){var t=document.querySelector("#formContactPerson").value,n=document.querySelector("#formContactDetails").value,c=document.querySelector("#formMedicalConditions").value;""==t||""==n||""==c?e.preventDefault():(sessionStorage.setItem("contact",t),sessionStorage.setItem("details",n),sessionStorage.setItem("medical",c))},variant:"primary",type:"submit",id:"login",children:"Submit"})})]})]})};n(51);var y=function(){var e=Object(v.f)();return setTimeout((function(){e.push("/speech")}),6e3),Object(x.jsx)("div",{className:"updated",children:Object(x.jsxs)("div",{id:"submit",children:[Object(x.jsx)("h1",{children:"Contact Details Updated"}),Object(x.jsx)("br",{}),Object(x.jsx)("p",{children:"Your nominated contacts as well as your medical details have been updated. You don't need to do anything else. The phone will send the information when you use the activation phrase."})]})})};var C=function(){return Object(x.jsx)("div",{className:"component",children:Object(x.jsx)(u.a,{children:Object(x.jsxs)(v.c,{children:[Object(x.jsx)(v.a,{exact:!0,path:"/",component:g,children:Object(x.jsx)(g,{})}),Object(x.jsx)(v.a,{path:"/contact",component:w}),Object(x.jsx)(v.a,{path:"/submit",component:y}),Object(x.jsx)(v.a,{path:"/speech",component:p,children:Object(x.jsx)(p,{})})]})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))},S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all "),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(C,{})}),document.getElementById("root")),k(),function(e){if("serviceWorker"in navigator){if(new URL("/vafn",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/vafn","/service-worker.js");S?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var c=n.headers.get("content-type");404===n.status||null!=c&&-1===c.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service ")}))):I(t,e)}))}}()}},[[52,1,2]]]);
//# sourceMappingURL=main.b97b3ad5.chunk.js.map