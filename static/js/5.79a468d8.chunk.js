(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{135:function(e,t,a){e.exports={label:"Filter_label__1trRe",input:"Filter_input__3O-63"}},137:function(e,t,a){e.exports={container:"ContactList_container__a0Isl",list:"ContactList_list__3YuFF",title:"ContactList_title__riggL"}},139:function(e,t,a){e.exports={item:"ContactItem_item__1MR6U",text_name:"ContactItem_text_name__l90Ac",text:"ContactItem_text__26TC-",deleteBtn:"ContactItem_deleteBtn__2qtsd",btnText:"ContactItem_btnText__elb8f"}},141:function(e,t,a){e.exports={form:"ContactForm_form__3dUBa",label:"ContactForm_label__1hvse",input:"ContactForm_input__317W5",addBtn:"ContactForm_addBtn__ytAHF"}},143:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(135),l=a.n(c),m=a(9),o=a(44);var s=function(){var e=Object(m.b)();return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{className:l.a.label}," Find contact by name",r.a.createElement("input",{className:l.a.input,type:"text",name:"filter",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",onChange:function(t){return e(Object(o.c)(t.currentTarget.value.trim()))}})))},u=a(122),i=a(11),d=a(137),b=a.n(d),_=a(41),p=a(15),f=a(42),C=a.n(f),E=a(139),h=a.n(E),v=a(30);function g(e){var t=e.name,a=e.number,n=e.id,c=Object(m.b)();return r.a.createElement("li",{className:h.a.item},r.a.createElement(v.a,{style:{width:"100%"}},r.a.createElement("p",{className:h.a.text+" "+h.a.text_name},t),r.a.createElement("p",{className:h.a.text},a),r.a.createElement("button",{className:h.a.deleteBtn,type:"button",id:n,onClick:function(){return function(e){return C.a.success("The ".concat(t," was deleted!")),c(_.a.deleteContact(e))}(n)}},r.a.createElement("span",{className:h.a.btnText},"Delete "),r.a.createElement("span",{role:"img"},"\u274c"))))}var N=function(){var e=Object(m.c)(_.c.getContacts),t=Object(m.c)(o.b),a=Object(m.b)();Object(n.useEffect)(function(){a(p.a.fetchContacts())},[a]);var c=""===t.value?e:Object(i.a)(e).filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return r.a.createElement("div",{className:b.a.container},c.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:b.a.title}," Contact List "),r.a.createElement("ul",{className:b.a.list},c.map(function(e){var t=e.id,a=e.name,n=e.number;return r.a.createElement(g,{key:t,id:t,name:a,number:n})}))):r.a.createElement("h1",{className:b.a.title},"No contact was found"))},x=a(4),w=a(141),F=a.n(w),O=a(45),j=function(){var e=Object(n.useState)(""),t=Object(x.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(""),o=Object(x.a)(l,2),s=o[0],u=o[1],i=Object(m.c)(O.a.getContacts),d=Object(m.b)(),b=function(e){var t=e.target,a=t.name,n=t.value;switch(a){case"name":c(n);break;case"number":u(n);break;default:return}};return r.a.createElement("form",{className:F.a.form,onSubmit:function(e){e.preventDefault();var t={name:a,number:s};(function(e){var t=e.name.toLowerCase();return!i.some(function(e){return e.name.toLowerCase().includes(t)})||(C.a.error("".concat(e.name," is already in your contacts")),!1)})(t)&&(d(_.a.addContact(t)),C.a.success("".concat(a," was added to your contacts!")),c(""),u(""))}},r.a.createElement("label",{className:F.a.label,htmlFor:"name"}," Name",r.a.createElement("input",{className:F.a.input,id:"name",type:"text",name:"name",value:a,onChange:b,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"write the name with the use of letters, apostrophe, dash and spaces. For example, Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan, etc",placeholder:"Contact name",autoComplete:"off",required:!0})),r.a.createElement("label",{className:F.a.label,htmlFor:"number"}," Number",r.a.createElement("input",{className:F.a.input,id:"number",type:"tel",name:"number",value:s,onChange:b,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",minLength:"11",maxLength:"14",title:"use the numeric format for the phone number",placeholder:"Phone number",autoComplete:"off",required:!0})),r.a.createElement("button",{className:F.a.addBtn,type:"submit"},"Add contact"))},y=a(55);a.d(t,"default",function(){return A});var L={display:"block",alignItems:"center",margin:"auto",padding:"2rem 3rem 0"};function A(){var e=Object(m.c)(_.c.getLoading);return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement("title",null,"Contacts")),r.a.createElement("div",{style:L},e&&r.a.createElement(y.a,null),r.a.createElement(j,null),r.a.createElement(s,null),r.a.createElement(N,null)))}}}]);
//# sourceMappingURL=5.79a468d8.chunk.js.map