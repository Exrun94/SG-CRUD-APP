var e=Object.assign;import{r as t,H as r,i as a,d as n,a as i,F as o,Q as s,n as c,z as l,W as m,U as d,C as u,h as p,q as g,m as f,c as h,b,e as y,f as v,g as x,j as E,k as w,l as k}from"./vendor.be5eac9a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,i)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return r(self[t].moduleMap[o]);const s=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),c=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(s),onerror(){i(new Error(`Failed to import: ${e}`)),n(c)},onload(){r(self[t].moduleMap[o]),n(c)}});document.head.appendChild(c)})),self[t].moduleMap={}}}("/assets/");const P=t.createContext({}),C=({children:e})=>{const[r,a]=t.useState(!1),[n,i]=t.useState(!1),[o,s]=t.useState({});return t.createElement(P.Provider,{value:{isCreate:r,setIsCreate:a,isUpdate:n,setIsUpdate:i,updateData:o,setUpdateData:s}},e)},S=t.createContext({}),N=({children:e})=>{const[r,a]=t.useState(!1),[n,i]=t.useState(!1),[o,s]=t.useState(!1),[c,l]=t.useState(!1);return t.createElement(S.Provider,{value:{onCreatePermission:r,setOnCreatePermission:a,onReadPermission:n,setOnReadPermission:i,onUpdatePermission:o,setOnUpdatePermission:s,onDeletePermission:c,setOnDeletePermission:l}},e)},D=r.header`
  display: flex;
  gap: 2.1em;
  grid-area: head;
`,U=r("span")`
  position: relative;
  font-family: "Orbitron", sans-serif;
  font-size: 4em;
  animation: wave 1s forwards;
  bottom: -1em;
  opacity: 0;
  animation-delay: ${e=>e.animationDelay};

  &.active {
    color: var(--accent-dark-400) !important;
    font-size: 4.5em;
  }

  &:hover {
    cursor: pointer;
  }

  @keyframes wave {
    0% {
      bottom: -0.2em;
      opacity: 1;
      color: var(--accent-dark-800);
    }

    50% {
      bottom: 0.2em;
      color: var(--accent-dark-100);
    }

    100% {
      bottom: 0;
      opacity: 1;
      color: white;
    }
  }
`,F=n(a({apiKey:"AIzaSyDRryoq3HTmt6hNN4sQNk2Pug52KJLWKdY",authDomain:"crude-app-3ef78.firebaseapp.com",projectId:"crude-app-3ef78",storageBucket:"crude-app-3ef78.appspot.com",messagingSenderId:"257141066977",appId:"1:257141066977:web:16c0b50550eed048cd3ba0"})),j=()=>{const{setOnCreatePermission:e,setOnReadPermission:r,setOnUpdatePermission:a,setOnDeletePermission:n}=t.useContext(S);return{getPermissions:async()=>{try{const e=i(F,"Permissions","CRUD"),t=await o(e);return t.data()}catch(e){console.log(e)}},createPermission:async t=>{try{const r=i(F,"Permissions","CRUD");await s(r,{onCreate:t})}catch(r){console.log(r)}finally{e(t)}},readPermission:async e=>{try{const t=i(F,"Permissions","CRUD");await s(t,{onRead:e})}catch(t){console.log(t)}finally{r(e)}},updatePermission:async e=>{try{const t=i(F,"Permissions","CRUD");await s(t,{onUpdate:e})}catch(t){console.log(t)}finally{a(e)}},deletePermission:async e=>{try{const t=i(F,"Permissions","CRUD");await s(t,{onDelete:e})}catch(t){console.log(t)}finally{n(e)}}}},O=()=>{const{onCreatePermission:e,onUpdatePermission:r,onDeletePermission:a,onReadPermission:n}=t.useContext(S),{createPermission:i,readPermission:o,updatePermission:s,deletePermission:c}=j(),l=t=>{if(t.target){t.target.classList.toggle("active");switch(t.target.innerText){case"C":i(!e);break;case"R":o(!n);break;case"U":s(!r);break;case"D":c(!a)}}};return t.createElement(t.Fragment,null,t.createElement(D,null,["C","R","U","D"].map(((i,o)=>0===o&&e||1===o&&n||2===o&&r||3===o&&a?t.createElement(U,{key:o,animationDelay:.5+o/10+"s",onClick:l,className:"active"},i):t.createElement(U,{key:o,animationDelay:.5+o/10+"s",onClick:e=>l(e)},i)))))},R=()=>t.createElement(t.Fragment,null,t.createElement(O,null)),z=r.div`
  display: flex;
  flex-direction: column;
  grid-area: sidebar;
  background-color: var(--accent-dark-600);
`,L=r.div`
  position: relative;
  width: 100%;
  height: 3em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;

  &:hover {
    cursor: pointer;
  }

  &.active {
    &:after {
      content: "";
      position: absolute;
      display: block;
      width: 0.7em;
      height: 2em;
      background-color: var(--primary-dark-800);
      left: 53px;
      border-top-left-radius: 0.6em;
      border-bottom-left-radius: 0.6em;
      z-index: 2;
    }
  }
`,$=r.img`
  width: 30px;
  height: 30px;
  fill: white;
  content: url(${e=>e.icon});

  &:hover {
    transform: scale(1.1);
  }
`;const B=t.createContext({}),q=({children:e})=>{const[r,a]=t.useState(!1),[n,i]=t.useState([]),[o,s]=t.useState("");return t.createElement(B.Provider,{value:{onProductChange:r,setOnProductChange:a,productsList:n,setProductsList:i,onSearch:o,setOnSearch:s}},e)},I=t.createContext({}),Y=({children:e})=>{const[r,a]=t.useState("name");return t.createElement(I.Provider,{value:{sortBy:r,setSortBy:a}},e)},M=()=>{const{sortByName:e,sortByPrice:r,sortByDate:a,activeName:n,activePrice:i,activeDate:o}=(()=>{const{productsList:e,setProductsList:r}=t.useContext(B),{setSortBy:a}=t.useContext(I),[n,i]=t.useState(!0),[o,s]=t.useState(!1),[c,l]=t.useState(!1);return{sortByName:()=>{const t=[...e].sort(((e,t)=>e.productName.localeCompare(t.productName)));r(t),a("name"),i(!0),s(!1),l(!1)},sortByPrice:()=>{const t=[...e].sort(((e,t)=>e.price-t.price));r(t),a("price"),i(!1),s(!0),l(!1)},sortByDate:()=>{const t=[...e].sort(((e,t)=>e.date-t.date));r(t),a("date"),i(!1),s(!1),l(!0)},activeName:n,activePrice:o,activeDate:c}})();return t.createElement(t.Fragment,null,t.createElement(z,null,t.createElement(L,{onClick:e,className:n?"active":""},t.createElement($,{icon:"/assets/sort-asc.607100e7.svg"})),t.createElement(L,{onClick:r,className:i?"active":""},t.createElement($,{icon:"/assets/sort-by-price.6934f5de.svg"})),t.createElement(L,{onClick:a,className:o?"active":""},t.createElement($,{icon:"/assets/sort-by-date.0d4be211.svg"}))))},T=()=>t.createElement(t.Fragment,null,t.createElement(M,null)),K=()=>{const{onProductChange:e,setOnProductChange:r}=t.useContext(B),{setIsUpdate:a,setUpdateData:n}=t.useContext(P),o=c(F,"Products");return{onDelete:async t=>{try{const a=i(F,"Products",t);await m(a),r(!e)}catch(a){console.log(a)}},onUpdate:(e,t,r,i)=>{a(!0),n({id:e,productName:t,price:r,currency:i})},onUpdateData:async(t,a,n,o)=>{try{const c=i(F,"Products",t),l={productName:a,price:n,currency:o};await s(c,l),r(!e)}catch(c){console.log(c)}},onFavorite:async(t,a)=>{try{const n=i(F,"Products",t);await s(n,{favorite:!a}),r(!e)}catch(n){console.log(n)}},saveProduct:async(t,a)=>{t.imgSrc=a,t.productName=t.productName.charAt(0).toUpperCase()+t.productName.slice(1),await l(o,t),r(!e)}}};const _=r.div`
  position: relative;
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fill, 23em);
  padding-top: 5em;
`,A=r.div`
  position: relative;
  top: -7em;
  text-align: center;
  opacity: 0;
  transition: 0.3s ease-in-out;
`,H=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8em;
`,V=d`
    0% {
        opacity: 0;
        transform: scale(.3);
        filter: hue-rotate(180deg);
    }
    100% {
        opacity: 1;
        transform: scale(1);
        filter: hue-rotate(0deg);
    }
`,W=r.div`
  position: relative;
  width: 20em;
  height: 15em;
  background-color: var(--primary-dark-700);
  margin: 2em 0;
  padding: 1.5em 0.7em;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
  transition: 0.3s ease-in-out;
  border-radius: 1em;
  animation: ${V} 1s ease-out;
  animation-fill-mode: backwards;

  &:before {
    background: rgba(41, 41, 41, 0.2);
    backdrop-filter: blur(30px);
    -webkit-backdrop-filter: blur(30px);
  }

  &:hover {
    height: 18em;

    ${A} {
      margin-top: 2em;
      visibility: visible;
      opacity: 1;
      transition-delay: 0.2s;
    }

    ${H} {
      display: none;
      transition-delay: 0.2s;
    }
  }

  ${function(){let e="";for(let t=0;t<50;t++)e+=`\n            &:nth-child(${t+1}) {\n                animation-delay: ${100*t+"ms"};\n            }\n        `;return u`
    ${e}
  `}()}
`,J=r.div`
  position: relative;
  width: 17em;
  height: 16em;
  top: -40%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  filter: (0);
`,Q=r.img`
  width: 17em;
  height: 10em;
  border-radius: 1em;
`,G=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5em 0.5em 0.5em 0.5em;
  transition: 0.5s;
`,X=r.h3`
  font-size: 1.2em;
  font-weight: bold;
  color: var(--primary-dark-200);
  margin-bottom: 0.5em;
  transition: 0.5s;
  align-self: flex-start;
`,Z=r.h3`
  font-size: 1.2em;
  font-weight: bold;
  color: white;
  align-self: flex-end;
  background-color: var(--accent-dark-400);
  padding: 0.5em 1.5em;
  margin-bottom: 0.5em;
  border-radius: 0.7em;

  sup {
    font-size: 0.5em;
  }
`,ee=r.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: var(--accent-dark-400);
`,te=r.p`
  font-size: 0.7em;
  color: var(--primary-dark-100);
`,re=r.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  margin-top: 1em;
`,ae=r.img`
  width: 20px;
  height: 20px;
  content: url(${"/assets/edit.3793897c.svg"});

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`,ne=r.img`
  width: 20px;
  height: 20px;
  content: url(${"/assets/delete.34daf394.svg"});
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
`,ie=r.p`
  font-size: 0.7em;
  color: white;
  margin: 0.5em 0 0.5em 0;

  span {
    color: var(--accent-dark-400);
  }
`,oe=()=>{const{onProductChange:r,productsList:a,onSearch:n,setProductsList:i}=t.useContext(B),{sortBy:o}=t.useContext(I),{onUpdatePermission:s,onDeletePermission:l}=t.useContext(S),{onDelete:m,onUpdate:d}=K(),u=c(F,"Products");return t.useEffect((()=>{(async()=>{const t=(await g(u)).docs.map((t=>e(e({},t.data()),{id:t.id})));if("name"===o){const e=t.sort(((e,t)=>e.productName.localeCompare(t.productName)));i(e)}else if("price"===o){const e=t.sort(((e,t)=>e.price-t.price));i(e)}else if("date"===o){const e=t.sort(((e,t)=>e.date-t.date));i(e)}})()}),[r]),t.createElement(t.Fragment,null,t.createElement(_,null,a.filter((e=>e.productName.toLocaleLowerCase().includes(n.toLocaleLowerCase()))).map((e=>t.createElement(W,{key:e.id},t.createElement(J,null,t.createElement(Q,{src:e.imgSrc})),t.createElement(H,null,t.createElement(ee,null,e.productName),t.createElement(G,null,t.createElement(Z,null,e.price.toFixed(2)," ",t.createElement("sup",null,e.currency.toUpperCase())))),t.createElement(A,null,t.createElement(X,null,"Description"),t.createElement(ie,null,"Date:"," ",t.createElement("span",null,p(e.date).format("DD/MM/YYYY HH:mm"))),t.createElement(te,null,e.description),t.createElement(re,null,s&&t.createElement(ae,{onClick:()=>d(e.id,e.productName,e.price,e.currency)}),l&&t.createElement(ne,{onClick:()=>m(e.id)}))))))))},se=()=>t.createElement(t.Fragment,null,t.createElement(oe,null)),ce=r.input`
  background-color: transparent;
  border: 1px solid var(--accent-dark-400);
  border-radius: 4px;
  outline: none;
  padding: 8px;
  width: 30%;
  color: var(--primary-dark-200);

  &:focus {
    border-color: var(--accent-dark-100);
  }
`,le=()=>{const{setOnSearch:e}=t.useContext(B);return t.createElement(t.Fragment,null,t.createElement(ce,{onChange:t=>e(t.target.value),placeholder:"Search..."}))},me=r.button`
  color: var(--accent-dark-400);
  background-color: transparent;
  margin-left: auto;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: var(--accent-dark-400);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1000ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: var(--accent-dark-400);
    color: white;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
  }
`,de=()=>{const{setIsCreate:e}=t.useContext(P),{onCreatePermission:r}=t.useContext(S);return t.createElement(t.Fragment,null,t.createElement(me,{disabled:!r,onClick:()=>e(!0)},"Add Product"))},ue={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},pe=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`,ge=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`,fe=r(f.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 5em;
  min-height: 10em;
  width: 50em;
  height: 45em;
  /* background-color: var(--primary-dark-700); */
  background: rgba(41, 41, 41, 0.2);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 25px;
  border-radius: 0.8em;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2em;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`,he=r.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
`,be=({children:e})=>t.createElement(t.Fragment,null,t.createElement(pe,null,t.createElement(ge,null,t.createElement(fe,{variants:ue,initial:"hidden",animate:"visible",exit:"exit"},t.createElement(he,null,"Enter Product 🔥"),e)))),ye=h().shape({productName:b().max(25,"Too Long!").required("Product name is required"),price:y().min(1,"Price must be greater than 0").max(1e6,"What are you Jeff Bezos??").required("Price is required"),currency:b().max(3,"Invalid currency, must be 3 characters").required("Currency is required")}),ve=r(v)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`,xe=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`,Ee=r(x)`
  all: unset;
  display: inline-block;
  width: 20em;
  padding: 0.7em;
  border: 3px solid transparent;
  border-radius: 2px;
  background: var(--primary-dark-800);
  color: var(--primary-dark-100);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  letter-spacing: 1px;

  &:focus {
    border-right: 4px solid green;
  }

  &:invalid {
    border-right: 4px solid red;
  }
`,we=r.label`
  color: var(--accent-dark-200);
`,ke=r.div`
  color: #f44444;
  font-size: 0.8em;
  margin-top: 0.5em;
  visibility: ${e=>e.visible?"visible":"hidden"};
`,Pe=r.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  gap: 12px;
`,Ce=r.button`
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  font-size: 16px;
  font-weight: 400;
  line-height: 45px;
  margin: 0 0 2em;
  max-width: 160px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  border: 0 solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
  outline: 1px solid;
  outline-color: #ffffff7f;
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: ${e=>e.fill};
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #6400e7;
  }
`,Se=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: 1em;
`,Ne=r.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.8em;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &.active {
    transform: scale(1.1);
    border: 2px solid var(--accent-dark-400);
    box-shadow: 0 0 10px var(--accent-dark-400);
  }
`;r.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
  margin-bottom: 0.5em;
`;const De=()=>{const{setIsUpdate:e,updateData:r}=t.useContext(P),{onUpdateData:a}=K(),n={id:r.id,productName:r.productName,price:r.price,currency:r.currency,date:Date.now(),imgSrc:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut"};return t.createElement(t.Fragment,null,t.createElement(E,{initialValues:n,validationSchema:ye,onSubmit:(t,{setSubmitting:r})=>{setTimeout((()=>{a(t.id,t.productName,t.price,t.currency),r(!1),e(!1)}),400)}},(({isSubmitting:r,errors:a,touched:n})=>t.createElement(ve,null,t.createElement(xe,null,t.createElement(we,{htmlFor:"productName"}),t.createElement(Ee,{name:"productName",type:"text",required:!0}),a.productName&&n.productName?t.createElement(ke,{visible:!0},"*",a.productName):t.createElement(ke,{visible:!1})),t.createElement(xe,null,t.createElement(we,{htmlFor:"price"}),t.createElement(Ee,{name:"price",type:"number",required:!0,min:"0.1",step:".01"}),a.price&&n.price?t.createElement(ke,{visible:!0},"*",a.price):t.createElement(ke,{visible:!1})),t.createElement(xe,null,t.createElement(we,{htmlFor:"currency"}),t.createElement(Ee,{name:"currency",type:"text",required:!0}),a.currency&&n.currency?t.createElement(ke,{visible:!0},"*",a.currency):t.createElement(ke,{visible:!1})),t.createElement(Pe,null,t.createElement(Ce,{fill:"#10B981",type:"submit",disabled:r},"Update"),t.createElement(Ce,{fill:"#F44444",type:"submit",disabled:r,onClick:()=>e(!1)},"Cancel"))))))},Ue={id:"",productName:"",price:0,currency:"",date:Date.now(),imgSrc:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut"},Fe=w({accessKey:"viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs"}),je=()=>{const[e,r]=t.useState([]),[a,n]=t.useState("https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"),[i,o]=t.useState(""),[s,c]=t.useState(null),{setIsCreate:l}=t.useContext(P),{saveProduct:m}=K();t.useEffect((()=>{(async()=>{const e=await(async e=>{var t;const r=await Fe.search.getPhotos({query:e,orientation:"landscape"});return null==(t=null==r?void 0:r.response)?void 0:t.results})(i);r(e.map((e=>e.urls.regular)))})()}),[i]);const d=e=>{const t=e.target;t.className.includes("target")&&setTimeout((()=>{o(t.value)}),2e3)};return t.createElement(t.Fragment,null,t.createElement(E,{initialValues:Ue,validationSchema:ye,onSubmit:(e,{setSubmitting:t})=>{setTimeout((()=>{m(e,a),t(!1),l(!1)}),400)}},(({isSubmitting:r,errors:a,touched:i})=>t.createElement(ve,{onChange:d},t.createElement(xe,null,t.createElement(we,{htmlFor:"productName"}),t.createElement(Ee,{name:"productName",type:"text",required:!0,placeholder:"Enter Product",className:"target"}),a.productName&&i.productName?t.createElement(ke,{visible:!0},"*",a.productName):t.createElement(ke,{visible:!1})),t.createElement(xe,null,t.createElement(we,{htmlFor:"price"}),t.createElement(Ee,{name:"price",type:"number",required:!0,min:"0.1",step:".01",placeholder:"Enter Price"}),a.price&&i.price?t.createElement(ke,{visible:!0},"*",a.price):t.createElement(ke,{visible:!1})),t.createElement(xe,null,t.createElement(we,{htmlFor:"currency"}),t.createElement(Ee,{name:"currency",type:"text",placeholder:"Example: 'USD'",required:!0}),a.currency&&i.currency?t.createElement(ke,{visible:!0},"*",a.currency):t.createElement(ke,{visible:!1})),t.createElement(Se,null,e.map(((e,r)=>t.createElement(Ne,{key:e,src:e,className:s===r?"active":"",onClick:e=>{((e,t)=>{const r=e.target;r.classList.toggle("active"),n(r.src),c(t)})(e,r)}})))),t.createElement(Pe,null,t.createElement(Ce,{fill:"#10B981",type:"submit",disabled:r},"Create"),t.createElement(Ce,{fill:"#F44444",type:"submit",disabled:r,onClick:()=>l(!1)},"Cancel"))))))},Oe=r.div`
  display: grid;
  height: 100vh;
  overflow: auto;
  justify-content: center;
  z-index: -2;
  background-color: var(--primary-dark-800);
  grid-template-columns: 60px 1fr;
  grid-template-rows: 0.2fr 0.2fr 1fr;
  /* grid-template-columns: minmax(60px, 1fr);  */
  gap: 2em 4em;
  grid-template-areas:
    "sidebar head"
    "sidebar search"
    "sidebar main";
`,Re=r.div`
  display: flex;
  width: 80%;
  grid-area: search;
  align-items: center;
  padding-bottom: 5em;
  border-bottom: 1px solid var(--primary-dark-400);
`,ze=r.h1`
  color: var(--primary-dark-400);
  font-size: 2em;
  margin-top: 2em;
  overflow-wrap: break-word;
  text-align: center;
  margin-right: 10em;
`,Le=()=>{const{setOnCreatePermission:e,setOnReadPermission:r,setOnUpdatePermission:a,setOnDeletePermission:n,onReadPermission:i}=t.useContext(S),{isCreate:o,isUpdate:s}=t.useContext(P),{getPermissions:c}=j();return t.useEffect((()=>{(async()=>{const t=await c();t&&(e(t.onCreate),r(t.onRead),a(t.onUpdate),n(t.onDelete))})()}),[]),t.createElement(t.Fragment,null,t.createElement(Oe,null,t.createElement(R,null),t.createElement(T,null),t.createElement(Re,null,t.createElement(le,null),t.createElement(de,null)),o&&t.createElement(be,{children:t.createElement(je,null)}),s&&t.createElement(be,{children:t.createElement(De,null)}),i?t.createElement(se,null):t.createElement(ze,null,"You don't have permissions to view products! ",t.createElement("br",null),"Toggle ON/OFF permissions by clicking corresponding letter in the CRUD logo")))};function $e(){return t.createElement(t.Fragment,null,t.createElement(Y,null,t.createElement(q,null,t.createElement(C,null,t.createElement(N,null,t.createElement(Le,null))))))}k.render(t.createElement(t.StrictMode,null,t.createElement($e,null)),document.getElementById("root"));
