(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[17],{627:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(2),c=t.n(l),i=t(12),u=t.n(i),d=t(4),f=["className","cssModule","color","body","inverse","outline","tag","innerRef"],m={tag:d.k,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.color,l=e.body,c=e.inverse,i=e.outline,m=e.tag,b=e.innerRef,p=Object(n.a)(e,f),g=Object(d.h)(u()(a,"card",!!c&&"text-white",!!l&&"card-body",!!r&&(i?"border":"bg")+"-"+r),t);return o.a.createElement(m,Object(s.a)({},p,{className:g,ref:b}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},628:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(13),o=t(14),l=t(0),c=t.n(l),i=t(2),u=t.n(i),d=t(12),f=t.n(d),m=t(4),b=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],p={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:m.k,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(o.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,o=e.bsSize,l=e.valid,i=e.invalid,u=e.tag,d=e.addon,p=e.plaintext,g=e.innerRef,h=Object(n.a)(e,b),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),O=u||("select"===r||"textarea"===r?r:"input"),j="form-control";p?(j+="-plaintext",O=u||"input"):"file"===r?j+="-file":"range"===r?j+="-range":v&&(j=d?null:"form-check-input"),h.size&&y.test(h.size)&&(Object(m.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),o=h.size,delete h.size);var E=Object(m.h)(f()(a,i&&"is-invalid",l&&"is-valid",!!o&&"form-control-"+o,j),t);return("input"===O||u&&"function"===typeof u)&&(h.type=r),h.children&&!p&&"select"!==r&&"string"===typeof O&&"select"!==O&&(Object(m.n)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(O,Object(s.a)({},h,{ref:g,className:E,"aria-invalid":i}))},a}(c.a.Component);g.propTypes=p,g.defaultProps={type:"text"},a.a=g},629:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(2),c=t.n(l),i=t(12),u=t.n(i),d=t(4),f=["className","cssModule","row","disabled","check","inline","tag"],m={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:d.k,className:c.a.string,cssModule:c.a.object},b=function(e){var a=e.className,t=e.cssModule,r=e.row,l=e.disabled,c=e.check,i=e.inline,m=e.tag,b=Object(n.a)(e,f),p=Object(d.h)(u()(a,!!r&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!l)&&"disabled"),t);return"fieldset"===m&&(b.disabled=l),o.a.createElement(m,Object(s.a)({},b,{className:p}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},630:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(2),c=t.n(l),i=t(12),u=t.n(i),d=t(4),f=["className","cssModule","innerRef","tag"],m={tag:d.k,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,l=e.tag,c=Object(n.a)(e,f),i=Object(d.h)(u()(a,"card-body"),t);return o.a.createElement(l,Object(s.a)({},c,{className:i,ref:r}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},631:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(2),c=t.n(l),i=t(12),u=t.n(i),d=t(4),f=["className","cssModule","widths","tag"],m=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:m,offset:m})]),p={tag:d.k,xs:b,sm:b,md:b,lg:b,xl:b,className:c.a.string,cssModule:c.a.object,widths:c.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.widths,l=e.tag,c=Object(n.a)(e,f),i=[];r.forEach((function(a,s){var n=e[a];if(delete c[a],n||""===n){var r=!s;if(Object(d.f)(n)){var o,l=r?"-":"-"+a+"-",f=h(r,a,n.size);i.push(Object(d.h)(u()(((o={})[f]=n.size||""===n.size,o["order"+l+n.order]=n.order||0===n.order,o["offset"+l+n.offset]=n.offset||0===n.offset,o)),t))}else{var m=h(r,a,n);i.push(m)}}})),i.length||i.push("col");var m=Object(d.h)(u()(a,i),t);return o.a.createElement(l,Object(s.a)({},c,{className:m}))};v.propTypes=p,v.defaultProps=g,a.a=v},632:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(2),c=t.n(l),i=t(12),u=t.n(i),d=t(4),f=["className","cssModule","noGutters","tag","form","widths"],m=c.a.oneOfType([c.a.number,c.a.string]),b={tag:d.k,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},p={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,l=e.tag,c=e.form,i=e.widths,m=Object(n.a)(e,f),b=[];i.forEach((function(a,t){var s=e[a];if(delete m[a],s){var n=!t;b.push(n?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var p=Object(d.h)(u()(a,r?"no-gutters":null,c?"form-row":"row",b),t);return o.a.createElement(l,Object(s.a)({},m,{className:p}))};g.propTypes=b,g.defaultProps=p,a.a=g},633:function(e,a,t){"use strict";var s=t(5),n=t(7),r=t(0),o=t.n(r),l=t(2),c=t.n(l),i=t(12),u=t.n(i),d=t(4),f=["className","cssModule","hidden","widths","tag","check","size","for"],m=c.a.oneOfType([c.a.number,c.a.string]),b=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:m,order:m,offset:m})]),p={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:d.k,className:c.a.string,cssModule:c.a.object,xs:b,sm:b,md:b,lg:b,xl:b,widths:c.a.array},g={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,l=e.widths,c=e.tag,i=e.check,m=e.size,b=e.for,p=Object(n.a)(e,f),g=[];l.forEach((function(a,s){var n=e[a];if(delete p[a],n||""===n){var r,o=!s;if(Object(d.f)(n)){var l,c=o?"-":"-"+a+"-";r=h(o,a,n.size),g.push(Object(d.h)(u()(((l={})[r]=n.size||""===n.size,l["order"+c+n.order]=n.order||0===n.order,l["offset"+c+n.offset]=n.offset||0===n.offset,l))),t)}else r=h(o,a,n),g.push(r)}}));var v=Object(d.h)(u()(a,!!r&&"sr-only",!!i&&"form-check-label",!!m&&"col-form-label-"+m,g,!!g.length&&"col-form-label"),t);return o.a.createElement(c,Object(s.a)({htmlFor:b},p,{className:v}))};v.propTypes=p,v.defaultProps=g,a.a=v},863:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var s=t(0),n=t.n(s),r=t(627),o=t(630),l=t(632),c=t(631),i=t(629),u=t(633),d=t(628),f=t(625),m=t(367);function b(){return n.a.createElement("div",null,n.a.createElement(r.a,null,n.a.createElement(o.a,null,n.a.createElement("form",null,n.a.createElement(l.a,null,n.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},n.a.createElement(i.a,null,n.a.createElement(u.a,null,"Booking Date "),n.a.createElement(d.a,{type:"date",placeholder:"Enter Date",required:!0}))),n.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},n.a.createElement(i.a,null,n.a.createElement(u.a,null,"Courier Company Name "),n.a.createElement(d.a,{type:"text",placeholder:"Enter Courier Company Name  ",required:!0}))),n.a.createElement(c.a,{lg:"6",md:"6",sm:"12"},n.a.createElement(i.a,null,n.a.createElement(u.a,{for:"customFile"},"Logo"),n.a.createElement(f.a,{type:"file",id:"exampleCustomFileBrowser",name:"customFile",required:!0}))))),n.a.createElement(m.a.Ripple,{color:"primary",type:"submit"},"Submit "))))}}}]);
//# sourceMappingURL=17.883c548d.chunk.js.map