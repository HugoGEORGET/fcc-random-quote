(this["webpackJsonpfcc-random-quote"]=this["webpackJsonpfcc-random-quote"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(4),c=n.n(r),i=(n(11),n(1)),u=n.n(i),s=n(5),m=n(2);n(13);var l=function(){var e=Object(o.useState)(""),t=Object(m.a)(e,2),n=t[0],r=t[1],c=Object(o.useState)(""),i=Object(m.a)(c,2),l=i[0],p=i[1];function f(){return h.apply(this,arguments)}function h(){return(h=Object(s.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://programming-quotes-api.herokuapp.com/quotes/random",{method:"GET"});case 2:e.sent.json().then((function(e){r(e.en),p(e.author)})).catch((function(e){console.error(e)}));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(o.useEffect)((function(){n||l||f()})),a.a.createElement("div",{className:"App"},a.a.createElement("main",{id:"quote-box"},a.a.createElement("section",{className:"quote"},a.a.createElement("p",{id:"text"},n),a.a.createElement("span",{id:"author"},l)),a.a.createElement("section",{className:"quote-options"},a.a.createElement("button",{id:"new-quote",className:"quote-button",onClick:function(){return f()}},"New Quote"),a.a.createElement("a",{id:"tweet-quote",href:encodeURI('https://twitter.com/intent/tweet?text="'+n+'"  - '+l),target:"_blank",rel:"noopener noreferrer"},"Tweet quote"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(l,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,n){e.exports=n(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.33cb7349.chunk.js.map