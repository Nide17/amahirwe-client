(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[3],{541:function(e,t,c){"use strict";c.r(t);c(1);var a=c(0);t.default=function(e){var t=e.slickJob,c=e.categories,n=c&&c.allCategories.find((function(e){return e.sub_category.find((function(e){return e._id===t.sub_category}))})),i=new Date,s=new Date(i.getTime()-864e5);return Object(a.jsxs)("div",{className:"slickItem-card card mx-auto my-0",children:[Object(a.jsx)("div",{className:"img-holder",children:Object(a.jsx)("img",{src:t.brand_image,alt:t.brand,className:"card-img-top img-fluid"})}),Object(a.jsxs)("div",{className:"card-body body-holder pt-2",children:[Object(a.jsx)("h6",{className:"card-text slickItem-description text-center mx-2 my-0 mx-lg-3",children:t.title}),Object(a.jsx)("div",{className:"card-body text-center py-1 mx-2 mx-lg-3",children:Object(a.jsxs)("p",{className:"card-text instructor",children:[Object(a.jsx)("span",{children:"at "}),Object(a.jsx)("a",{href:"#/",children:t.brand})]})}),Object(a.jsxs)("div",{className:"card-body text-center py-0 px-lg-4 d-flex justify-content-between",children:[Object(a.jsx)("span",{className:"card-link",children:Object(a.jsx)("small",{children:n&&n.sub_category.find((function(e){return e._id===t.sub_category})).name})}),Object(a.jsx)("span",{className:"card-link deadline",children:Object(a.jsxs)("small",{className:"text-".concat(new Date(t.deadline)<s?"danger":"primary"),children:["Deadline:\xa0","01/01/2025"===new Date(t.deadline).toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"})?"Ongoing":new Date(t.deadline)<s?"Closed":new Date(t.deadline).toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"})]})})]}),Object(a.jsxs)("div",{className:"card-body text-center pb-1",children:[Object(a.jsx)("a",{href:"/slickJob/".concat(t.slug),className:"slickItem-button card-link btn btn-primary",children:"View job"}),Object(a.jsxs)("span",{href:"/",className:"card-link ml-lg-5",children:["Posted on ",new Date(t.updatedAt).toLocaleString("en-GB",{year:"numeric",month:"2-digit",day:"2-digit"})]})]})]})]})}}}]);
//# sourceMappingURL=3.d9842759.chunk.js.map