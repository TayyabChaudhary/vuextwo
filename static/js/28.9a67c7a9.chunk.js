(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[28],{627:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(0),s=t.n(l),o=t(2),c=t.n(o),i=t(12),d=t.n(i),u=t(4),m=["className","cssModule","color","body","inverse","outline","tag","innerRef"],f={tag:u.k,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.color,o=e.body,c=e.inverse,i=e.outline,f=e.tag,p=e.innerRef,b=Object(n.a)(e,m),h=Object(u.h)(d()(a,"card",!!c&&"text-white",!!o&&"card-body",!!l&&(i?"border":"bg")+"-"+l),t);return s.a.createElement(f,Object(r.a)({},b,{className:h,ref:p}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},628:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(13),s=t(14),o=t(0),c=t.n(o),i=t(2),d=t.n(i),u=t(12),m=t.n(u),f=t(4),p=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],b={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.k,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},h=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(l.a)(t)),t.focus=t.focus.bind(Object(l.a)(t)),t}Object(s.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.type,s=e.bsSize,o=e.valid,i=e.invalid,d=e.tag,u=e.addon,b=e.plaintext,h=e.innerRef,g=Object(n.a)(e,p),E=["radio","checkbox"].indexOf(l)>-1,y=new RegExp("\\D","g"),v=d||("select"===l||"textarea"===l?l:"input"),O="form-control";b?(O+="-plaintext",v=d||"input"):"file"===l?O+="-file":"range"===l?O+="-range":E&&(O=u?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(f.n)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),s=g.size,delete g.size);var j=Object(f.h)(m()(a,i&&"is-invalid",o&&"is-valid",!!s&&"form-control-"+s,O),t);return("input"===v||d&&"function"===typeof d)&&(g.type=l),g.children&&!b&&"select"!==l&&"string"===typeof v&&"select"!==v&&(Object(f.n)('Input with a type of "'+l+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),c.a.createElement(v,Object(r.a)({},g,{ref:h,className:j,"aria-invalid":i}))},a}(c.a.Component);h.propTypes=b,h.defaultProps={type:"text"},a.a=h},629:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(0),s=t.n(l),o=t(2),c=t.n(o),i=t(12),d=t.n(i),u=t(4),m=["className","cssModule","row","disabled","check","inline","tag"],f={children:c.a.node,row:c.a.bool,check:c.a.bool,inline:c.a.bool,disabled:c.a.bool,tag:u.k,className:c.a.string,cssModule:c.a.object},p=function(e){var a=e.className,t=e.cssModule,l=e.row,o=e.disabled,c=e.check,i=e.inline,f=e.tag,p=Object(n.a)(e,m),b=Object(u.h)(d()(a,!!l&&"row",c?"form-check":"form-group",!(!c||!i)&&"form-check-inline",!(!c||!o)&&"disabled"),t);return"fieldset"===f&&(p.disabled=o),s.a.createElement(f,Object(r.a)({},p,{className:b}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},630:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(0),s=t.n(l),o=t(2),c=t.n(o),i=t(12),d=t.n(i),u=t(4),m=["className","cssModule","innerRef","tag"],f={tag:u.k,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},p=function(e){var a=e.className,t=e.cssModule,l=e.innerRef,o=e.tag,c=Object(n.a)(e,m),i=Object(u.h)(d()(a,"card-body"),t);return s.a.createElement(o,Object(r.a)({},c,{className:i,ref:l}))};p.propTypes=f,p.defaultProps={tag:"div"},a.a=p},631:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(0),s=t.n(l),o=t(2),c=t.n(o),i=t(12),d=t.n(i),u=t(4),m=["className","cssModule","widths","tag"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:f,offset:f})]),b={tag:u.k,xs:p,sm:p,md:p,lg:p,xl:p,className:c.a.string,cssModule:c.a.object,widths:c.a.array},h={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,l=e.widths,o=e.tag,c=Object(n.a)(e,m),i=[];l.forEach((function(a,r){var n=e[a];if(delete c[a],n||""===n){var l=!r;if(Object(u.f)(n)){var s,o=l?"-":"-"+a+"-",m=g(l,a,n.size);i.push(Object(u.h)(d()(((s={})[m]=n.size||""===n.size,s["order"+o+n.order]=n.order||0===n.order,s["offset"+o+n.offset]=n.offset||0===n.offset,s)),t))}else{var f=g(l,a,n);i.push(f)}}})),i.length||i.push("col");var f=Object(u.h)(d()(a,i),t);return s.a.createElement(o,Object(r.a)({},c,{className:f}))};E.propTypes=b,E.defaultProps=h,a.a=E},632:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(0),s=t.n(l),o=t(2),c=t.n(o),i=t(12),d=t.n(i),u=t(4),m=["className","cssModule","noGutters","tag","form","widths"],f=c.a.oneOfType([c.a.number,c.a.string]),p={tag:u.k,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:f,sm:f,md:f,lg:f,xl:f},b={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e){var a=e.className,t=e.cssModule,l=e.noGutters,o=e.tag,c=e.form,i=e.widths,f=Object(n.a)(e,m),p=[];i.forEach((function(a,t){var r=e[a];if(delete f[a],r){var n=!t;p.push(n?"row-cols-"+r:"row-cols-"+a+"-"+r)}}));var b=Object(u.h)(d()(a,l?"no-gutters":null,c?"form-row":"row",p),t);return s.a.createElement(o,Object(r.a)({},f,{className:b}))};h.propTypes=p,h.defaultProps=b,a.a=h},633:function(e,a,t){"use strict";var r=t(5),n=t(7),l=t(0),s=t.n(l),o=t(2),c=t.n(o),i=t(12),d=t.n(i),u=t(4),m=["className","cssModule","hidden","widths","tag","check","size","for"],f=c.a.oneOfType([c.a.number,c.a.string]),p=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:f,order:f,offset:f})]),b={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.k,className:c.a.string,cssModule:c.a.object,xs:p,sm:p,md:p,lg:p,xl:p,widths:c.a.array},h={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},E=function(e){var a=e.className,t=e.cssModule,l=e.hidden,o=e.widths,c=e.tag,i=e.check,f=e.size,p=e.for,b=Object(n.a)(e,m),h=[];o.forEach((function(a,r){var n=e[a];if(delete b[a],n||""===n){var l,s=!r;if(Object(u.f)(n)){var o,c=s?"-":"-"+a+"-";l=g(s,a,n.size),h.push(Object(u.h)(d()(((o={})[l]=n.size||""===n.size,o["order"+c+n.order]=n.order||0===n.order,o["offset"+c+n.offset]=n.offset||0===n.offset,o))),t)}else l=g(s,a,n),h.push(l)}}));var E=Object(u.h)(d()(a,!!l&&"sr-only",!!i&&"form-check-label",!!f&&"col-form-label-"+f,h,!!h.length&&"col-form-label"),t);return s.a.createElement(c,Object(r.a)({htmlFor:p},b,{className:E}))};E.propTypes=b,E.defaultProps=h,a.a=E},856:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return g}));var r=t(15),n=t(16),l=t(18),s=t(17),o=t(0),c=t.n(o),i=t(627),d=t(630),u=t(632),m=t(631),f=t(629),p=t(633),b=t(628),h=t(367),g=function(e){Object(l.a)(t,e);var a=Object(s.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return c.a.createElement(i.a,null,c.a.createElement(d.a,null,c.a.createElement("form",null,c.a.createElement(u.a,null,c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"(Calander)"),c.a.createElement(b.a,{type:"date",id:"",placeholder:"Enter (Calander)",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Name"),c.a.createElement(b.a,{type:"text",id:"",placeholder:"Enter Name",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Department/Uni/Board "),c.a.createElement(b.a,{type:"text",id:"",placeholder:"Enter Department/Uni/Board ",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Class/ Post "),c.a.createElement(b.a,{type:"text",id:"",placeholder:"Enter Class/ Post ",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""}," Only Online Fee (ByHand)"),c.a.createElement(b.a,{type:"number",id:"",placeholder:"Enter Only Online Fee (ByHand)",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Online Fee (EasyPaisa) "),c.a.createElement(b.a,{type:"text",id:"",placeholder:"Enter Online Fee (EasyPaisa)",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Complete Application By (Office Visiting) "),c.a.createElement(b.a,{type:"text",id:"",placeholder:"Enter Complete Application By (Office Visiting) ",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Complete Application By (EasyPaisa) "),c.a.createElement(b.a,{type:"text",id:"",placeholder:"Enter Complete Application By (EasyPaisa)",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Remarks "),c.a.createElement(b.a,{type:"number",id:"",placeholder:"Enter Remarks",required:!0}))),c.a.createElement(m.a,{lg:"6",md:"6",sm:"12"},c.a.createElement(f.a,null,c.a.createElement(p.a,{for:""},"Last Date (Calendar) "),c.a.createElement(b.a,{type:"date",id:"",placeholder:"Enter Last Date (Calendar)",required:!0})))),c.a.createElement(h.a.Ripple,{color:"primary",type:"submit"},"Submit "))))}}]),t}(o.Component)}}]);
//# sourceMappingURL=28.9a67c7a9.chunk.js.map