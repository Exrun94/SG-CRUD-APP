var e=Object.assign;import{r as t,H as r,i as a,d as n,a as i,F as o,Q as c,n as s,z as l,W as m,U as d,C as u,h as p,q as g,m as f,c as h,b,e as y,f as v,g as x,j as E,k as w,l as k}from"./vendor.be5eac9a.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(r){const a=new URL(e,location),n=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((r,i)=>{const o=new URL(e,a);if(self[t].moduleMap[o])return r(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),s=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){i(new Error(`Failed to import: ${e}`)),n(s)},onload(){r(self[t].moduleMap[o]),n(s)}});document.head.appendChild(s)})),self[t].moduleMap={}}}("/assets/");const P=t.createContext({}),C=({children:e})=>{const[r,a]=t.useState(!1),[n,i]=t.useState(!1),[o,c]=t.useState({});return t.createElement(P.Provider,{value:{isCreate:r,setIsCreate:a,isUpdate:n,setIsUpdate:i,updateData:o,setUpdateData:c}},e)},S=t.createContext({}),N=({children:e})=>{const[r,a]=t.useState(!1),[n,i]=t.useState(!1),[o,c]=t.useState(!1),[s,l]=t.useState(!1);return t.createElement(S.Provider,{value:{onCreatePermission:r,setOnCreatePermission:a,onReadPermission:n,setOnReadPermission:i,onUpdatePermission:o,setOnUpdatePermission:c,onDeletePermission:s,setOnDeletePermission:l}},e)},D=r.header`
  display: flex;
  margin: 0 auto;
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
    text-decoration: underline;
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
`,F=n(a({apiKey:"AIzaSyDRryoq3HTmt6hNN4sQNk2Pug52KJLWKdY",authDomain:"crude-app-3ef78.firebaseapp.com",projectId:"crude-app-3ef78",storageBucket:"crude-app-3ef78.appspot.com",messagingSenderId:"257141066977",appId:"1:257141066977:web:16c0b50550eed048cd3ba0"})),j=()=>{const{setOnCreatePermission:e,setOnReadPermission:r,setOnUpdatePermission:a,setOnDeletePermission:n}=t.useContext(S);return{getPermissions:async()=>{try{const e=i(F,"Permissions","CRUD"),t=await o(e);return t.data()}catch(e){console.log(e)}},createPermission:async t=>{try{const r=i(F,"Permissions","CRUD");await c(r,{onCreate:t})}catch(r){console.log(r)}finally{e(t)}},readPermission:async e=>{try{const t=i(F,"Permissions","CRUD");await c(t,{onRead:e})}catch(t){console.log(t)}finally{r(e)}},updatePermission:async e=>{try{const t=i(F,"Permissions","CRUD");await c(t,{onUpdate:e})}catch(t){console.log(t)}finally{a(e)}},deletePermission:async e=>{try{const t=i(F,"Permissions","CRUD");await c(t,{onDelete:e})}catch(t){console.log(t)}finally{n(e)}}}},z=()=>{const{onCreatePermission:e,onUpdatePermission:r,onDeletePermission:a,onReadPermission:n}=t.useContext(S),{createPermission:i,readPermission:o,updatePermission:c,deletePermission:s}=j(),l=t=>{if(t.target){t.target.classList.toggle("active");switch(t.target.innerText){case"C":i(!e);break;case"R":o(!n);break;case"U":c(!r);break;case"D":s(!a)}}};return t.createElement(t.Fragment,null,t.createElement(D,null,["C","R","U","D"].map(((i,o)=>0===o&&e||1===o&&n||2===o&&r||3===o&&a?t.createElement(U,{key:o,animationDelay:.5+o/10+"s",onClick:l,className:"active"},i):t.createElement(U,{key:o,animationDelay:.5+o/10+"s",onClick:e=>l(e)},i)))))},O=()=>t.createElement(t.Fragment,null,t.createElement(z,null)),R=r.div`
  grid-area: nav;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 3em;
  background-color: var(--accent-dark-600);
  box-shadow: 0 8px 2px -2px rgba(0, 0, 0, 0.1);

`,L=r.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 2em;
  margin-right: 2em;
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
      width: 2em;
      height: 2em;
      background-color: var(--primary-dark-800);
      bottom: -3.5em;
      border-top-left-radius: 50%;
      border-top-right-radius: 50%;
      z-index: 2;
    }
  }
`,$=r.img`
  margin-top: 1.5em;
  width: 30px;
  height: 30px;
  fill: white;
  content: url(${e=>e.icon});

  &:hover {
    transform: scale(1.1);
  }
`,B=r.span`
  color: black;
  font-size: 8px;
  font-weight: bold;
  margin-top: 1em;

`;const q=t.createContext({}),I=({children:e})=>{const[r,a]=t.useState(!1),[n,i]=t.useState([]),[o,c]=t.useState("");return t.createElement(q.Provider,{value:{onProductChange:r,setOnProductChange:a,productsList:n,setProductsList:i,onSearch:o,setOnSearch:c}},e)},Y=t.createContext({}),M=({children:e})=>{const[r,a]=t.useState("name");return t.createElement(Y.Provider,{value:{sortBy:r,setSortBy:a}},e)},T=()=>{const{sortByName:e,sortByPrice:r,sortByDate:a,activeName:n,activePrice:i,activeDate:o}=(()=>{const{productsList:e,setProductsList:r}=t.useContext(q),{setSortBy:a}=t.useContext(Y),[n,i]=t.useState(!0),[o,c]=t.useState(!1),[s,l]=t.useState(!1);return{sortByName:()=>{const t=[...e].sort(((e,t)=>e.productName.localeCompare(t.productName)));r(t),a("name"),i(!0),c(!1),l(!1)},sortByPrice:()=>{const t=[...e].sort(((e,t)=>e.price-t.price));r(t),a("price"),i(!1),c(!0),l(!1)},sortByDate:()=>{const t=[...e].sort(((e,t)=>e.date-t.date));r(t),a("date"),i(!1),c(!1),l(!0)},activeName:n,activePrice:o,activeDate:s}})();return t.createElement(t.Fragment,null,t.createElement(R,null,t.createElement(L,{onClick:e,className:n?"active":""},t.createElement($,{icon:"/assets/sort-asc.607100e7.svg"}),t.createElement(B,null,"Sort by name")),t.createElement(L,{onClick:r,className:i?"active":""},t.createElement($,{icon:"/assets/sort-by-price.aaee17cd.svg"}),t.createElement(B,null,"Sort by price")),t.createElement(L,{onClick:a,className:o?"active":""},t.createElement($,{icon:"/assets/sort-by-date.0d4be211.svg"}),t.createElement(B,null,"Sort by date"))))},H=()=>t.createElement(t.Fragment,null,t.createElement(T,null)),K=()=>{const{onProductChange:e,setOnProductChange:r}=t.useContext(q),{setIsUpdate:a,setUpdateData:n}=t.useContext(P),o=s(F,"Products");return{onDelete:async t=>{try{const a=i(F,"Products",t);await m(a),r(!e)}catch(a){console.log(a)}},onUpdate:(e,t,r,i)=>{a(!0),n({id:e,productName:t,price:r,currency:i})},onUpdateData:async(t,a,n,o)=>{try{const s=i(F,"Products",t),l={productName:a,price:n,currency:o};await c(s,l),r(!e)}catch(s){console.log(s)}},onFavorite:async(t,a)=>{try{const n=i(F,"Products",t);await c(n,{favorite:!a}),r(!e)}catch(n){console.log(n)}},saveProduct:async(t,a)=>{t.imgSrc=a,t.productName=t.productName.charAt(0).toUpperCase()+t.productName.slice(1),await l(o,t),r(!e)}}};const _=r.div`
  position: relative;
  height: 100%;
  display: grid;
  grid-row-gap: 2em;
  grid-template-columns: repeat(auto-fill, 23em);
  padding-top: 3em;
  justify-content: center;

`,A=r.div`
  position: relative;
  top: -7em;
  text-align: center;
  opacity: 0;
  transition: 0.3s ease-in-out;
`,V=r.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 8em;
`,W=d`
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
`,J=r.div`
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
  animation: ${W} 1s ease-out;
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

    ${V} {
      display: none;
      transition-delay: 0.2s;
    }
  }

  ${function(){let e="";for(let t=0;t<50;t++)e+=`\n            &:nth-child(${t+1}) {\n                animation-delay: ${100*t+"ms"};\n            }\n        `;return u`
    ${e}
  `}()}
`,Q=r.div`
  position: relative;
  width: 17em;
  height: 16em;
  top: -40%;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
  filter: (0);
`,G=r.img`
  width: 17em;
  height: 10em;
  border-radius: 1em;
`,X=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 1.5em 0.5em 0.5em 0.5em;
  transition: 0.5s;
`,Z=r.h3`
  font-size: 1.2em;
  font-weight: bold;
  color: var(--primary-dark-200);
  margin-bottom: 0.5em;
  transition: 0.5s;
  align-self: flex-start;
`,ee=r.h3`
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
`,te=r.h3`
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 0.5em;
  color: var(--accent-dark-400);
`,re=r.p`
  font-size: 0.7em;
  color: var(--primary-dark-100);
`,ae=r.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1em;
  margin-top: 1em;
`,ne=r.img`
  width: 20px;
  height: 20px;
  content: url(${"/assets/edit.3793897c.svg"});

  &:hover {
    cursor: pointer;
    transform: scale(1.2);
  }
`,ie=r.img`
  width: 20px;
  height: 20px;
  content: url(${"/assets/delete.34daf394.svg"});
  transition-duration: 0.3s;
  transition-property: transform;

  &:hover {
    cursor: pointer;
    transform: rotate(90deg);
  }
`,oe=r.p`
  font-size: 0.7em;
  color: white;
  margin: 0.5em 0 0.5em 0;

  span {
    color: var(--accent-dark-400);
  }
`,ce=()=>{const{onProductChange:r,productsList:a,onSearch:n,setProductsList:i}=t.useContext(q),{sortBy:o}=t.useContext(Y),{onUpdatePermission:c,onDeletePermission:l}=t.useContext(S),{onDelete:m,onUpdate:d}=K(),u=s(F,"Products");return t.useEffect((()=>{(async()=>{const t=(await g(u)).docs.map((t=>e(e({},t.data()),{id:t.id})));if("name"===o){const e=t.sort(((e,t)=>e.productName.localeCompare(t.productName)));i(e)}else if("price"===o){const e=t.sort(((e,t)=>e.price-t.price));i(e)}else if("date"===o){const e=t.sort(((e,t)=>e.date-t.date));i(e)}})()}),[r]),t.createElement(t.Fragment,null,t.createElement(_,null,a.filter((e=>e.productName.toLocaleLowerCase().includes(n.toLocaleLowerCase()))).map((e=>t.createElement(J,{key:e.id},t.createElement(Q,null,t.createElement(G,{src:e.imgSrc})),t.createElement(V,null,t.createElement(te,null,e.productName),t.createElement(X,null,t.createElement(ee,null,e.price.toFixed(2)," ",t.createElement("sup",null,e.currency.toUpperCase())))),t.createElement(A,null,t.createElement(Z,null,"Description"),t.createElement(oe,null,"Date:"," ",t.createElement("span",null,p(e.date).format("DD/MM/YYYY HH:mm"))),t.createElement(re,null,e.description),t.createElement(ae,null,c&&t.createElement(ne,{onClick:()=>d(e.id,e.productName,e.price,e.currency)}),l&&t.createElement(ie,{onClick:()=>m(e.id)}))))))))},se=()=>t.createElement(t.Fragment,null,t.createElement(ce,null)),le=r.input`
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
`,me=()=>{const{setOnSearch:e}=t.useContext(q);return t.createElement(t.Fragment,null,t.createElement(le,{onChange:t=>e(t.target.value),placeholder:"Search..."}))},de=r.button`
  color: var(--accent-dark-400);
  background-color: transparent;
  /* margin-left: auto; */
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
`,ue=()=>{const{setIsCreate:e}=t.useContext(P),{onCreatePermission:r}=t.useContext(S);return t.createElement(t.Fragment,null,t.createElement(de,{disabled:!r,onClick:()=>e(!0)},"Add Product"))},pe={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},ge=r.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`,fe=r.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`,he=r(f.div)`
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
`,be=r.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
`,ye=({children:e})=>t.createElement(t.Fragment,null,t.createElement(ge,null,t.createElement(fe,null,t.createElement(he,{variants:pe,initial:"hidden",animate:"visible",exit:"exit"},t.createElement(be,null,"Enter Product 🔥"),e)))),ve=h().shape({productName:b().max(25,"Too Long!").required("Product name is required"),price:y().min(1,"Price must be greater than 0").max(1e6,"What are you Jeff Bezos??").required("Price is required"),currency:b().max(3,"Invalid currency, must be 3 characters").required("Currency is required")}),xe=r(v)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4em;
`,Ee=r.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
`,we=r(x)`
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
`,ke=r.label`
  color: var(--accent-dark-200);
`,Pe=r.div`
  color: #f44444;
  font-size: 0.8em;
  margin-top: 0.5em;
  visibility: ${e=>e.visible?"visible":"hidden"};
`,Ce=r.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  gap: 12px;
`,Se=r.button`
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
`,Ne=r.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: 1em;
`,De=r.img`
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
`;const Ue=()=>{const{setIsUpdate:e,updateData:r}=t.useContext(P),{onUpdateData:a}=K(),n={id:r.id,productName:r.productName,price:r.price,currency:r.currency,date:Date.now(),imgSrc:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut"};return t.createElement(t.Fragment,null,t.createElement(E,{initialValues:n,validationSchema:ve,onSubmit:(t,{setSubmitting:r})=>{setTimeout((()=>{a(t.id,t.productName,t.price,t.currency),r(!1),e(!1)}),400)}},(({isSubmitting:r,errors:a,touched:n})=>t.createElement(xe,null,t.createElement(Ee,null,t.createElement(ke,{htmlFor:"productName"}),t.createElement(we,{name:"productName",type:"text",required:!0}),a.productName&&n.productName?t.createElement(Pe,{visible:!0},"*",a.productName):t.createElement(Pe,{visible:!1})),t.createElement(Ee,null,t.createElement(ke,{htmlFor:"price"}),t.createElement(we,{name:"price",type:"number",required:!0,min:"0.1",step:".01"}),a.price&&n.price?t.createElement(Pe,{visible:!0},"*",a.price):t.createElement(Pe,{visible:!1})),t.createElement(Ee,null,t.createElement(ke,{htmlFor:"currency"}),t.createElement(we,{name:"currency",type:"text",required:!0}),a.currency&&n.currency?t.createElement(Pe,{visible:!0},"*",a.currency):t.createElement(Pe,{visible:!1})),t.createElement(Ce,null,t.createElement(Se,{fill:"#10B981",type:"submit",disabled:r},"Update"),t.createElement(Se,{fill:"#F44444",type:"submit",disabled:r,onClick:()=>e(!1)},"Cancel"))))))},Fe={id:"",productName:"",price:0,currency:"",date:Date.now(),imgSrc:"",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut"},je=w({accessKey:"viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs"}),ze=d`
    100% {
        transform: rotate(360deg);
    }
`,Oe=r.button`
    height: 40px;
    width: 40px;
    background: rgba(51, 51, 51, 0);
    border-radius: 50%;
    border-top: 2px solid var(--accent-dark-400);
    border-right: 2px solid transparent;
    border-bottom:none;
    border-left:none;
    animation: ${ze} 700ms linear infinite;
`,Re=()=>{const[e,r]=t.useState([]),[a,n]=t.useState("https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"),[i,o]=t.useState(""),[c,s]=t.useState(null),[l,m]=t.useState(!1),{setIsCreate:d}=t.useContext(P),{saveProduct:u}=K();t.useEffect((()=>{(async()=>{const e=await(async e=>{var t;const r=await je.search.getPhotos({query:e,orientation:"landscape"});return null==(t=null==r?void 0:r.response)?void 0:t.results})(i);r(e.map((e=>e.urls.regular)))})()}),[i]);const p=e=>{const t=e.target;m(!0),t.className.includes("target")&&setTimeout((()=>{o(t.value),m(!1)}),2e3)};return t.createElement(t.Fragment,null,t.createElement(E,{initialValues:Fe,validationSchema:ve,onSubmit:(e,{setSubmitting:t})=>{setTimeout((()=>{u(e,a),t(!1),d(!1)}),400)}},(({isSubmitting:r,errors:a,touched:i})=>t.createElement(xe,{onChange:p},t.createElement(Ee,null,t.createElement(ke,{htmlFor:"productName"}),t.createElement(we,{name:"productName",type:"text",required:!0,placeholder:"Enter Product",className:"target"}),a.productName&&i.productName?t.createElement(Pe,{visible:!0},"*",a.productName):t.createElement(Pe,{visible:!1})),t.createElement(Ee,null,t.createElement(ke,{htmlFor:"price"}),t.createElement(we,{name:"price",type:"number",required:!0,min:"0.1",step:".01",placeholder:"Enter Price"}),a.price&&i.price?t.createElement(Pe,{visible:!0},"*",a.price):t.createElement(Pe,{visible:!1})),t.createElement(Ee,null,t.createElement(ke,{htmlFor:"currency"}),t.createElement(we,{name:"currency",type:"text",placeholder:"Example: 'USD'",required:!0}),a.currency&&i.currency?t.createElement(Pe,{visible:!0},"*",a.currency):t.createElement(Pe,{visible:!1})),l?t.createElement(Oe,null):t.createElement(Ne,null,e.map(((e,r)=>t.createElement(De,{key:e,src:e,className:c===r?"active":"",onClick:e=>{((e,t)=>{const r=e.target;r.classList.toggle("active"),n(r.src),s(t)})(e,r)}})))),t.createElement(Ce,null,t.createElement(Se,{fill:"#10B981",type:"submit",disabled:r},"Create"),t.createElement(Se,{fill:"#F44444",type:"submit",disabled:r,onClick:()=>d(!1)},"Cancel"))))))},Le=r.div`
  display: grid;
  height: 100%;
  overflow: auto;
  justify-content: center;
  z-index: -2;
  background-color: var(--primary-dark-800);
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 0.2fr, 1fr;
  gap: 2em 4em;
  grid-template-areas:
    "nav"
    "head"
    "search"
    "productHeader"
    "main";
`,$e=r.h1`
  grid-area: productHeader;
  font-size: 2.5em;
  font-weight: bold;
  color: white;
  margin-top: 1em;
  text-align: center;

  span {
    color: var(--accent-dark-400);
  }
`,Be=r.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  grid-area: search;
  padding-bottom: 5em;
`,qe=r.h1`
  color: var(--primary-dark-400);
  font-size: 2em;
  margin-top: 2em;
  overflow-wrap: break-word;
  text-align: center;
`,Ie=()=>{const{setOnCreatePermission:e,setOnReadPermission:r,setOnUpdatePermission:a,setOnDeletePermission:n,onReadPermission:i}=t.useContext(S),{getPermissions:o}=j(),{isCreate:c,isUpdate:s}=t.useContext(P);return t.useEffect((()=>{(async()=>{const t=await o();t&&(e(t.onCreate),r(t.onRead),a(t.onUpdate),n(t.onDelete))})()}),[]),t.createElement(t.Fragment,null,t.createElement(Le,null,t.createElement(O,null),t.createElement(H,null),t.createElement(Be,null,t.createElement(me,null),t.createElement(ue,null)),i&&t.createElement($e,null,t.createElement("span",null,"Product")," Showcase"),c&&t.createElement(ye,{children:t.createElement(Re,null)}),s&&t.createElement(ye,{children:t.createElement(Ue,null)}),i?t.createElement(se,null):t.createElement(qe,null,"You don't have permissions to view products! ",t.createElement("br",null),"Toggle ON/OFF permissions by clicking corresponding letter in the CRUD logo")))};function Ye(){return t.createElement(t.Fragment,null,t.createElement(M,null,t.createElement(I,null,t.createElement(C,null,t.createElement(N,null,t.createElement(Ie,null))))))}k.render(t.createElement(t.StrictMode,null,t.createElement(Ye,null)),document.getElementById("root"));
