var e = Object.assign;
import {
  H as t,
  r,
  i as a,
  d as n,
  a as i,
  F as o,
  Q as s,
  W as c,
  U as l,
  C as m,
  n as d,
  h as u,
  q as p,
  m as g,
  b as h,
  c as f,
  e as b,
  f as y,
  g as v,
  j as x,
  k as E,
  z as w,
  l as k,
} from "./vendor.0bcfbfe4.js";
!(function (e = ".", t = "__import__") {
  try {
    self[t] = new Function("u", "return import(u)");
  } catch (r) {
    const a = new URL(e, location),
      n = (e) => {
        URL.revokeObjectURL(e.src), e.remove();
      };
    (self[t] = (e) =>
      new Promise((r, i) => {
        const o = new URL(e, a);
        if (self[t].moduleMap[o]) return r(self[t].moduleMap[o]);
        const s = new Blob(
            [`import * as m from '${o}';`, `${t}.moduleMap['${o}']=m;`],
            { type: "text/javascript" }
          ),
          c = Object.assign(document.createElement("script"), {
            type: "module",
            src: URL.createObjectURL(s),
            onerror() {
              i(new Error(`Failed to import: ${e}`)), n(c);
            },
            onload() {
              r(self[t].moduleMap[o]), n(c);
            },
          });
        document.head.appendChild(c);
      })),
      (self[t].moduleMap = {});
  }
})("/assets/");
const C = t.div`
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
`,
  P = t.div`
    
    display: flex;
    width: 80%;
    grid-area: search;
    align-items: center;
    padding-bottom: 5em;
    border-bottom: 1px solid var(--primary-dark-400);

`,
  S = t.h1`
    color: var(--primary-dark-400);
    font-size: 2em;
    margin-top: 2em;
    overflow-wrap: break-word;
    text-align: center;
    margin-right: 10em;
`,
  N = r.createContext({}),
  D = ({ children: e }) => {
    const [t, a] = r.useState(!1),
      [n, i] = r.useState(!1),
      [o, s] = r.useState({});
    return r.createElement(
      N.Provider,
      {
        value: {
          isCreate: t,
          setIsCreate: a,
          isUpdate: n,
          setIsUpdate: i,
          updateData: o,
          setUpdateData: s,
        },
      },
      e
    );
  },
  U = r.createContext({}),
  F = ({ children: e }) => {
    const [t, a] = r.useState(!1),
      [n, i] = r.useState(!1),
      [o, s] = r.useState(!1),
      [c, l] = r.useState(!1);
    return r.createElement(
      U.Provider,
      {
        value: {
          onCreatePermission: t,
          setOnCreatePermission: a,
          onReadPermission: n,
          setOnReadPermission: i,
          onUpdatePermission: o,
          setOnUpdatePermission: s,
          onDeletePermission: c,
          setOnDeletePermission: l,
        },
      },
      e
    );
  },
  j = t.header`
    display: flex;
    gap: 2.1em;
    grid-area: head;
`,
  O = t("span")`
    position: relative;
    font-family: 'Orbitron', sans-serif;
    font-size: 4em;
    animation: wave 1s forwards;
    bottom: -1em;
    opacity: 0;
    animation-delay: ${(e) => e.animationDelay};

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
`,
  z = n(
    a({
      apiKey: "AIzaSyDRryoq3HTmt6hNN4sQNk2Pug52KJLWKdY",
      authDomain: "crude-app-3ef78.firebaseapp.com",
      projectId: "crude-app-3ef78",
      storageBucket: "crude-app-3ef78.appspot.com",
      messagingSenderId: "257141066977",
      appId: "1:257141066977:web:16c0b50550eed048cd3ba0",
    })
  ),
  L = () => {
    const {
      setOnCreatePermission: e,
      setOnReadPermission: t,
      setOnUpdatePermission: a,
      setOnDeletePermission: n,
    } = r.useContext(U);
    return {
      getPermissions: async () => {
        try {
          const e = i(z, "Permissions", "CRUD"),
            t = await o(e);
          return t.data();
        } catch (e) {
          console.log(e);
        }
      },
      createPermission: async (t) => {
        try {
          const r = i(z, "Permissions", "CRUD");
          await s(r, { onCreate: t });
        } catch (r) {
          console.log(r);
        } finally {
          e(t);
        }
      },
      readPermission: async (e) => {
        try {
          const r = i(z, "Permissions", "CRUD");
          await s(r, { onRead: e });
        } catch (r) {
          console.log(r);
        } finally {
          t(e);
        }
      },
      updatePermission: async (e) => {
        try {
          const t = i(z, "Permissions", "CRUD");
          await s(t, { onUpdate: e });
        } catch (t) {
          console.log(t);
        } finally {
          a(e);
        }
      },
      deletePermission: async (e) => {
        try {
          const t = i(z, "Permissions", "CRUD");
          await s(t, { onDelete: e });
        } catch (t) {
          console.log(t);
        } finally {
          n(e);
        }
      },
    };
  },
  R = () => {
    const {
        onCreatePermission: e,
        onUpdatePermission: t,
        onDeletePermission: a,
        onReadPermission: n,
      } = r.useContext(U),
      {
        createPermission: i,
        readPermission: o,
        updatePermission: s,
        deletePermission: c,
      } = L(),
      l = (r) => {
        if (r.target) {
          r.target.classList.toggle("active");
          switch (r.target.innerText) {
            case "C":
              i(!e);
              break;
            case "R":
              o(!n);
              break;
            case "U":
              s(!t);
              break;
            case "D":
              c(!a);
          }
        }
      };
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        j,
        null,
        ["C", "R", "U", "D"].map((i, o) =>
          (0 === o && e) || (1 === o && n) || (2 === o && t) || (3 === o && a)
            ? r.createElement(
                O,
                {
                  key: o,
                  animationDelay: 0.5 + o / 10 + "s",
                  onClick: l,
                  className: "active",
                },
                i
              )
            : r.createElement(
                O,
                {
                  key: o,
                  animationDelay: 0.5 + o / 10 + "s",
                  onClick: (e) => l(e),
                },
                i
              )
        )
      )
    );
  },
  q = () => r.createElement(r.Fragment, null, r.createElement(R, null)),
  B = t.div`
    display: flex;
    flex-direction: column;
    grid-area: sidebar;
    background-color: var(--accent-dark-600);
`,
  $ = t.div`
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
            content: '';
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

`,
  I = t.img`
    width: 30px;
    height: 30px;
    fill: white;
    content: url(${(e) => e.icon});

    &:hover {
        transform: scale(1.1);
    }
`;
const Y = r.createContext({}),
  T = ({ children: e }) => {
    const [t, a] = r.useState(!1),
      [n, i] = r.useState([]),
      [o, s] = r.useState("");
    return r.createElement(
      Y.Provider,
      {
        value: {
          onProductChange: t,
          setOnProductChange: a,
          productsList: n,
          setProductsList: i,
          onSearch: o,
          setOnSearch: s,
        },
      },
      e
    );
  },
  K = r.createContext({}),
  M = ({ children: e }) => {
    const [t, a] = r.useState("name");
    return r.createElement(
      K.Provider,
      { value: { sortBy: t, setSortBy: a } },
      e
    );
  },
  A = () => {
    const {
      sortByName: e,
      sortByPrice: t,
      sortByDate: a,
      activeName: n,
      activePrice: i,
      activeDate: o,
    } = (() => {
      const { productsList: e, setProductsList: t } = r.useContext(Y),
        { setSortBy: a } = r.useContext(K),
        [n, i] = r.useState(!0),
        [o, s] = r.useState(!1),
        [c, l] = r.useState(!1);
      return {
        sortByName: () => {
          const r = [...e].sort((e, t) =>
            e.productName.localeCompare(t.productName)
          );
          t(r), a("name"), i(!0), s(!1), l(!1);
        },
        sortByPrice: () => {
          const r = [...e].sort((e, t) => e.price - t.price);
          t(r), a("price"), i(!1), s(!0), l(!1);
        },
        sortByDate: () => {
          const r = [...e].sort((e, t) => e.date - t.date);
          t(r), a("date"), i(!1), s(!1), l(!0);
        },
        activeName: n,
        activePrice: o,
        activeDate: c,
      };
    })();
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        B,
        null,
        r.createElement(
          $,
          { onClick: e, className: n ? "active" : "" },
          r.createElement(I, { icon: "/assets/sort-asc.607100e7.svg" })
        ),
        r.createElement(
          $,
          { onClick: t, className: i ? "active" : "" },
          r.createElement(I, { icon: "/assets/sort-by-price.6934f5de.svg" })
        ),
        r.createElement(
          $,
          { onClick: a, className: o ? "active" : "" },
          r.createElement(I, { icon: "/assets/sort-by-date.0d4be211.svg" })
        )
      )
    );
  },
  H = () => r.createElement(r.Fragment, null, r.createElement(A, null)),
  V = () => {
    const { onProductChange: e, setOnProductChange: t } = r.useContext(Y),
      { setIsUpdate: a, setUpdateData: n } = r.useContext(N);
    return {
      onDelete: async (r) => {
        try {
          const a = i(z, "Products", r);
          await c(a), t(!e);
        } catch (a) {
          console.log(a);
        }
      },
      onUpdate: (e, t, r, i) => {
        a(!0), n({ id: e, productName: t, price: r, currency: i });
      },
      onUpdateData: async (r, a, n, o) => {
        try {
          const c = i(z, "Products", r),
            l = { productName: a, price: n, currency: o };
          await s(c, l), t(!e);
        } catch (c) {
          console.log(c);
        }
      },
      onFavorite: async (r, a) => {
        try {
          const n = i(z, "Products", r);
          await s(n, { favorite: !a }), t(!e);
        } catch (n) {
          console.log(n);
        }
      },
    };
  };
const W = t.div`
    position: relative;
    display: grid;
    grid-row-gap: 2em;
    grid-template-columns: repeat(auto-fill, 23em);
    padding-top: 5em;

`,
  _ = t.div`
    position: relative;
    top: -7em;
    text-align: center;
    opacity: 0;
    transition: 0.3s ease-in-out;
`,
  J = t.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 8em;

`,
  Q = l`
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
`,
  G = t.div`
    position: relative;
    width: 20em;
    height: 15em;  
    background-color: var(--primary-dark-700);
    margin: 2em 0;
    padding: 1.5em .7em;
    display: flex;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 5px 20px rgba(0,0,0,0.5);
    transition: 0.3s ease-in-out;
    border-radius: 1em;
    animation: ${Q} 1s ease-out;
    animation-fill-mode: backwards;

    &:before {
        background: rgba(41, 41, 41, 0.2);
    backdrop-filter: blur(30px);
   -webkit-backdrop-filter: blur(30px);
    }


    &:hover {
        height: 18em;
        
        ${_} {
            margin-top: 2em;
            visibility: visible;
            opacity: 1;
            transition-delay: 0.2s;
        }

        ${J} {
            display: none;
            transition-delay: 0.2s;
        }
    }

    ${(function () {
      let e = "";
      for (let t = 0; t < 50; t++)
        e += `\n            &:nth-child(${
          t + 1
        }) {\n                animation-delay: ${
          100 * t + "ms"
        };\n            }\n        `;
      return m`${e}`;
    })()}

`,
  X = t.div`
    position: relative;
    width: 17em;
    height: 16em;
    top: -40%;
    box-shadow: 0 5px 20px rgba(0,0,0,0.2);
    filter: (0);
    
`,
  Z = t.img`
    width: 17em;
    height: 10em;
    border-radius: 1em;
`,
  ee = t.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 1.5em .5em .5em .5em;
    transition: 0.5s;

`,
  te = t.h3`
    font-size: 1.2em;
    font-weight: bold;
    color: var(--primary-dark-200);
    margin-bottom: .5em;
    transition: 0.5s;
    align-self: flex-start;

`,
  re = t.h3`
    font-size: 1.2em;
    font-weight: bold;
    color: white;
    align-self: flex-end;
    background-color: var(--accent-dark-400);
    padding: .5em 1.5em;
    margin-bottom: .5em;
    border-radius: .7em;

    sup {
        font-size: 0.5em;
    }
`,
  ae = t.h3`
    font-size: 1.2em;
    font-weight: bold;
    margin-bottom: .5em;
    color: var(--accent-dark-400);
`,
  ne = t.p`
    font-size: .7em;
    color: var(--primary-dark-100);

`,
  ie = t.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1em;
    margin-top: 1em;
`,
  oe = t.img`
    width: 20px;
    height: 20px;
    content: url(${"/assets/edit.3793897c.svg"});

    &:hover {
        cursor: pointer;
        transform: scale(1.2);
    }
`,
  se = t.img`
    width: 20px;
    height: 20px;
    content: url(${"/assets/delete.34daf394.svg"});
    transition-duration: 0.3s;
    transition-property: transform;

    &:hover {
        cursor: pointer;
        transform: rotate(90deg);
    }
`,
  ce = t.p`
    font-size: .7em;
    color: white;
    margin: .5em 0 .5em 0;

    span {
        color: var(--accent-dark-400)
    }
`,
  le = () => {
    const {
        onProductChange: t,
        productsList: a,
        onSearch: n,
        setProductsList: i,
      } = r.useContext(Y),
      { sortBy: o } = r.useContext(K),
      { onUpdatePermission: s, onDeletePermission: c } = r.useContext(U),
      { onDelete: l, onUpdate: m } = V(),
      g = d(z, "Products");
    return (
      r.useEffect(() => {
        (async () => {
          const t = (await p(g)).docs.map((t) =>
            e(e({}, t.data()), { id: t.id })
          );
          if ("name" === o) {
            const e = t.sort((e, t) =>
              e.productName.localeCompare(t.productName)
            );
            i(e);
          } else if ("price" === o) {
            const e = t.sort((e, t) => e.price - t.price);
            i(e);
          } else if ("date" === o) {
            const e = t.sort((e, t) => e.date - t.date);
            i(e);
          }
        })();
      }, [t]),
      r.createElement(
        r.Fragment,
        null,
        r.createElement(
          W,
          null,
          a
            .filter((e) =>
              e.productName.toLocaleLowerCase().includes(n.toLocaleLowerCase())
            )
            .map((e) =>
              r.createElement(
                G,
                { key: e.id },
                r.createElement(X, null, r.createElement(Z, { src: e.imgSrc })),
                r.createElement(
                  J,
                  null,
                  r.createElement(ae, null, e.productName),
                  r.createElement(
                    ee,
                    null,
                    r.createElement(
                      re,
                      null,
                      e.price.toFixed(2),
                      " ",
                      r.createElement("sup", null, e.currency.toUpperCase())
                    )
                  )
                ),
                r.createElement(
                  _,
                  null,
                  r.createElement(te, null, "Description"),
                  r.createElement(
                    ce,
                    null,
                    "Date: ",
                    r.createElement(
                      "span",
                      null,
                      u(e.date).format("DD/MM/YYYY HH:mm")
                    )
                  ),
                  r.createElement(ne, null, e.description),
                  r.createElement(
                    ie,
                    null,
                    s &&
                      r.createElement(oe, {
                        onClick: () =>
                          m(e.id, e.productName, e.price, e.currency),
                      }),
                    c && r.createElement(se, { onClick: () => l(e.id) })
                  )
                )
              )
            )
        )
      )
    );
  },
  me = () => r.createElement(r.Fragment, null, r.createElement(le, null)),
  de = t.input`
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
`,
  ue = () => {
    const { setOnSearch: e } = r.useContext(Y);
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(de, {
        onChange: (t) => e(t.target.value),
        placeholder: "Search...",
      })
    );
  },
  pe = t.button`
    color: var(--accent-dark-400);
    background-color: transparent;
    margin-left: auto;
    cursor: pointer;
    font-size:16px;
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
`,
  ge = () => {
    const { setIsCreate: e } = r.useContext(N),
      { onCreatePermission: t } = r.useContext(U);
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(pe, { disabled: !t, onClick: () => e(!0) }, "Add Product")
    );
  },
  he = {
    hidden: { y: "-100vh", opacity: 0 },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: { y: "100vh", opacity: 0 },
  },
  fe = t.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 2;
`,
  be = t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: center;
`,
  ye = t(g.div)`
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
  border-radius: .8em;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 2em;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }

`,
  ve = t.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
`,
  xe = ({ children: e }) =>
    r.createElement(
      r.Fragment,
      null,
      r.createElement(
        fe,
        null,
        r.createElement(
          be,
          null,
          r.createElement(
            ye,
            {
              variants: he,
              initial: "hidden",
              animate: "visible",
              exit: "exit",
            },
            r.createElement(ve, null, "Enter Product 🔥"),
            e
          )
        )
      )
    ),
  Ee = t(h)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
`,
  we = t.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
`,
  ke = t(f)`
    all: unset;
    display: inline-block;
    width: 20em;
    padding: .7em;
    border: 3px solid transparent;
    border-radius: 2px;
    background: var(--primary-dark-800);
    color: var(--primary-dark-100);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    letter-spacing: 1px;

    &:focus {
        border-right: 4px solid green;
    }

    &:invalid {
      border-right: 4px solid red;
    }

`,
  Ce = t.label`
  color: var(--accent-dark-200);
`,
  Pe = t.div`
  color: #F44444;
  font-size: .8em;
  margin-top: .5em;
  visibility: ${(e) => (e.visible ? "visible" : "hidden")};
`,
  Se = t.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 24px;
  gap: 12px;
`,
  Ne = t.button`
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  font-size:16px;
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
    background-color: ${(e) => e.fill};
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px #6400e7;
  }
`,
  De = t.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(8em, 1fr));
  grid-gap: 1em;
`,
  Ue = t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: .8em;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  &.active {
    transform: scale(1.1);
    border: 2px solid var(--accent-dark-400);
    box-shadow: 0 0 10px var(--accent-dark-400);

  }
`;
t.h1`
  font-size: 2em;
  font-weight: 400;
  color: var(--primary-dark-200);
  margin-bottom: .5em;
`,
  b({ accessKey: "viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs" });
const Fe = () => {
    const { setIsUpdate: e, updateData: t } = r.useContext(N),
      { onUpdateData: a } = V(),
      n = {
        id: t.id,
        productName: t.productName,
        price: t.price,
        currency: t.currency,
        date: Date.now(),
        imgSrc: "",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut",
      },
      i = y().shape({
        productName: v()
          .max(25, "Too Long!")
          .required("Product name is required"),
        price: x()
          .min(1, "Price must be greater than 0")
          .max(1e6, "What are you Jeff Bezos??")
          .required("Price is required"),
        currency: v()
          .max(3, "Invalid currency, must be 3 characters")
          .required("Currency is required"),
      });
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        E,
        {
          initialValues: n,
          validationSchema: i,
          onSubmit: (t, { setSubmitting: r }) => {
            setTimeout(() => {
              a(t.id, t.productName, t.price, t.currency), r(!1), e(!1);
            }, 400);
          },
        },
        ({ isSubmitting: t, errors: a, touched: n }) =>
          r.createElement(
            Ee,
            null,
            r.createElement(
              we,
              null,
              r.createElement(Ce, { htmlFor: "productName" }),
              r.createElement(ke, {
                name: "productName",
                type: "text",
                required: !0,
              }),
              a.productName && n.productName
                ? r.createElement(Pe, { visible: !0 }, "*", a.productName)
                : r.createElement(Pe, { visible: !1 })
            ),
            r.createElement(
              we,
              null,
              r.createElement(Ce, { htmlFor: "price" }),
              r.createElement(ke, {
                name: "price",
                type: "number",
                required: !0,
                min: "0.1",
                step: ".01",
              }),
              a.price && n.price
                ? r.createElement(Pe, { visible: !0 }, "*", a.price)
                : r.createElement(Pe, { visible: !1 })
            ),
            r.createElement(
              we,
              null,
              r.createElement(Ce, { htmlFor: "currency" }),
              r.createElement(ke, {
                name: "currency",
                type: "text",
                required: !0,
              }),
              a.currency && n.currency
                ? r.createElement(Pe, { visible: !0 }, "*", a.currency)
                : r.createElement(Pe, { visible: !1 })
            ),
            r.createElement(
              Se,
              null,
              r.createElement(
                Ne,
                { fill: "#10B981", type: "submit", disabled: t },
                "Update"
              ),
              r.createElement(
                Ne,
                {
                  fill: "#F44444",
                  type: "submit",
                  disabled: t,
                  onClick: () => e(!1),
                },
                "Cancel"
              )
            )
          )
      )
    );
  },
  je = b({ accessKey: "viKl522r1TKUcjWViY0-y6Sp0788bYjYAIHkvJgnVxs" }),
  Oe = () => {
    const [e, t] = r.useState([]),
      [a, n] = r.useState(
        "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg?20200913095930"
      ),
      [i, o] = r.useState(""),
      [s, c] = r.useState(null),
      { setIsCreate: l } = r.useContext(N),
      { onProductChange: m, setOnProductChange: u } = r.useContext(Y),
      p = d(z, "Products"),
      g = {
        id: "",
        productName: "",
        price: 0,
        currency: "",
        date: Date.now(),
        imgSrc: "",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, dignissimos voluptates laudantium exercitationem voluptatem debitis delectus corporis beatae ut",
      };
    r.useEffect(() => {
      (async () => {
        const e = await (async (e) => {
          var t;
          const r = await je.search.getPhotos({
            query: e,
            orientation: "landscape",
          });
          return null == (t = null == r ? void 0 : r.response)
            ? void 0
            : t.results;
        })(i);
        console.log(e), t(e.map((e) => e.urls.regular));
      })();
    }, [i]);
    const h = (e) => {
        const t = e.target;
        t.className.includes("target") &&
          setTimeout(() => {
            o(t.value);
          }, 2e3);
      },
      f = y().shape({
        productName: v()
          .max(25, "Too Long!")
          .required("Product name is required"),
        price: x()
          .min(1, "Price must be greater than 0")
          .max(1e6, "What are you Jeff Bezos??")
          .required("Price is required"),
        currency: v()
          .max(3, "Invalid currency, must be 3 characters")
          .required("Currency is required"),
      });
    return r.createElement(
      r.Fragment,
      null,
      r.createElement(
        E,
        {
          initialValues: g,
          validationSchema: f,
          onSubmit: (e, { setSubmitting: t }) => {
            setTimeout(() => {
              (async (e) => {
                (e.imgSrc = a),
                  (e.productName =
                    e.productName.charAt(0).toUpperCase() +
                    e.productName.slice(1)),
                  await w(p, e),
                  u(!m);
              })(e),
                t(!1),
                l(!1);
            }, 400);
          },
        },
        ({ isSubmitting: t, errors: a, touched: i }) =>
          r.createElement(
            Ee,
            { onChange: h },
            r.createElement(
              we,
              null,
              r.createElement(Ce, { htmlFor: "productName" }),
              r.createElement(ke, {
                name: "productName",
                type: "text",
                required: !0,
                placeholder: "Enter Product",
                className: "target",
              }),
              a.productName && i.productName
                ? r.createElement(Pe, { visible: !0 }, "*", a.productName)
                : r.createElement(Pe, { visible: !1 })
            ),
            r.createElement(
              we,
              null,
              r.createElement(Ce, { htmlFor: "price" }),
              r.createElement(ke, {
                name: "price",
                type: "number",
                required: !0,
                min: "0.1",
                step: ".01",
                placeholder: "Enter Price",
              }),
              a.price && i.price
                ? r.createElement(Pe, { visible: !0 }, "*", a.price)
                : r.createElement(Pe, { visible: !1 })
            ),
            r.createElement(
              we,
              null,
              r.createElement(Ce, { htmlFor: "currency" }),
              r.createElement(ke, {
                name: "currency",
                type: "text",
                placeholder: "Example: 'USD'",
                required: !0,
              }),
              a.currency && i.currency
                ? r.createElement(Pe, { visible: !0 }, "*", a.currency)
                : r.createElement(Pe, { visible: !1 })
            ),
            r.createElement(
              De,
              null,
              e.map((e, t) =>
                r.createElement(Ue, {
                  key: e,
                  src: e,
                  className: s === t ? "active" : "",
                  onClick: (e) => {
                    ((e, t) => {
                      const r = e.target;
                      r.classList.toggle("active"), n(r.src), c(t);
                    })(e, t);
                  },
                })
              )
            ),
            r.createElement(
              Se,
              null,
              r.createElement(
                Ne,
                { fill: "#10B981", type: "submit", disabled: t },
                "Create"
              ),
              r.createElement(
                Ne,
                {
                  fill: "#F44444",
                  type: "submit",
                  disabled: t,
                  onClick: () => l(!1),
                },
                "Cancel"
              )
            )
          )
      )
    );
  },
  ze = () => {
    const {
        setOnCreatePermission: e,
        setOnReadPermission: t,
        setOnUpdatePermission: a,
        setOnDeletePermission: n,
        onReadPermission: i,
      } = r.useContext(U),
      { isCreate: o, isUpdate: s } = r.useContext(N),
      { getPermissions: c } = L();
    return (
      r.useEffect(() => {
        (async () => {
          const r = await c();
          r && (e(r.onCreate), t(r.onRead), a(r.onUpdate), n(r.onDelete));
        })();
      }, []),
      r.createElement(
        r.Fragment,
        null,
        r.createElement(
          C,
          null,
          r.createElement(q, null),
          r.createElement(H, null),
          r.createElement(
            P,
            null,
            r.createElement(ue, null),
            r.createElement(ge, null)
          ),
          o && r.createElement(xe, { children: r.createElement(Oe, null) }),
          s && r.createElement(xe, { children: r.createElement(Fe, null) }),
          i
            ? r.createElement(me, null)
            : r.createElement(
                S,
                null,
                "You don't have permissions to view products! ",
                r.createElement("br", null),
                "Toggle ON/OFF permissions by clicking corresponding letter in the CRUD logo"
              )
        )
      )
    );
  };
function Le() {
  return r.createElement(
    r.Fragment,
    null,
    r.createElement(
      M,
      null,
      r.createElement(
        T,
        null,
        r.createElement(
          D,
          null,
          r.createElement(F, null, r.createElement(ze, null))
        )
      )
    )
  );
}
k.render(
  r.createElement(r.StrictMode, null, r.createElement(Le, null)),
  document.getElementById("root")
);
