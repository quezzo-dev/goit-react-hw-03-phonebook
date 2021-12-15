(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={label:"Filter_label__19jWm",input:"Filter_input__2CEsa"}},13:function(t,e,n){t.exports={item:"ContactsList_item__3sEFV"}},14:function(t,e,n){t.exports={btn:"ContactsItem_btn__9Kz33"}},2:function(t,e,n){t.exports={form:"Form_form__1rzz1",input:"Form_input__2o61r",label:"Form_label__tpriE",btn:"Form_btn__25CTF"}},22:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(11),r=n.n(c),s=n(15),o=n(12),i=n(4),l=n(5),u=n(8),m=n(7),b=n(16),d=n(3),h=n(6),j=n(2),p=n.n(j),f=n(0),O=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){var n=Object(h.a)(t),a=n.props,c=n.reset,r=n.state;e.preventDefault(),a.onSubmit(r),c()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleChange;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("form",{onSubmit:this.handleSubmit,className:p.a.form,children:[Object(f.jsxs)("label",{className:p.a.label,children:["Name",Object(f.jsx)("input",{className:p.a.input,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",value:e,onChange:a,required:!0})]}),Object(f.jsxs)("label",{className:p.a.label,children:["Number",Object(f.jsx)("input",{className:p.a.input,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",value:n,onChange:a,required:!0})]}),Object(f.jsx)("button",{type:"submit",className:p.a.btn,children:"Add contact"})]})})}}]),n}(a.Component),v=O,x=n(13),g=n.n(x),C=n(14),_=n.n(C),y=function(t){var e=t.name,n=t.number,a=t.id,c=t.onDeleteContact;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("p",{children:e+": "+n}),Object(f.jsx)("button",{type:"button",onClick:function(){return c(a)},className:_.a.btn,children:"Delete"})]})},S=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)("ul",{children:e.map((function(t){var e=t.name,a=t.number,c=t.id;return Object(f.jsx)("li",{className:g.a.item,children:Object(f.jsx)(y,{name:e,number:a,id:c,onDeleteContact:n})},c)}))})})},N=n(10),F=n.n(N),k=function(t){var e=t.value,n=t.changefilter;return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("label",{className:F.a.label,children:["Find contacts by name",Object(f.jsx)("input",{className:F.a.input,type:"text",value:e,onChange:n})]})})},A=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.map((function(t){return t.name})).includes(e.name))alert("".concat(e.name," is already in contacts "));else{var n=Object(o.a)({id:Object(b.a)()},e);t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(s.a)(e))}}))}},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.changefilter=function(e){t.setState({filter:e.target.value})},t.getVisibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;console.log(t),console.log(e),n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.state.filter,e=this.formSubmitHandler,n=this.deleteContact,a=this.changefilter,c=(0,this.getVisibleContacts)();return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Phonebook"}),Object(f.jsx)(v,{onSubmit:e}),Object(f.jsx)("h2",{children:"Contacts"}),Object(f.jsx)(k,{value:t,changefilter:a}),Object(f.jsx)(S,{contacts:c,onDeleteContact:n})]})}}]),n}(a.Component),w=A;r.a.render(Object(f.jsx)(w,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.186f8656.chunk.js.map