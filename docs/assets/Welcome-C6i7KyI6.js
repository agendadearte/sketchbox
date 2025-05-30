import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{useMDXComponents as r}from"./index-CQVlbuUN.js";import{M as i,S as n}from"./blocks-Cg3bwwE9.js";import{b as c}from"./buildPropName-tGa06a4p.js";import"./iframe-C6E4w6nI.js";import"./index-BaQCrR82.js";function s(t){const o={a:"a",br:"br",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",strong:"strong",...r(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Welcome"}),`
`,e.jsxs(o.h1,{id:"welcome-to-sketchboxthe-ui-library-for-agendadeartecom",children:["Welcome to Sketchbox,",e.jsx("br",{}),"the UI library for ",e.jsx(o.a,{href:"https://agendadearte.com",rel:"nofollow",children:"agendadearte.com"})]}),`
`,e.jsxs(o.p,{children:[`Sketchbox is an open source component library that implements the
`,e.jsx(o.a,{href:"https://agendadearte.com",rel:"nofollow",children:"agendadearte.com"})," website.",e.jsx(o.br,{}),`
`,`The library is free to use if it can help or inspire your own project:
`,e.jsx(o.a,{href:"https://github.com/agendadearte/sketchbox",rel:"nofollow",children:"GitHub"})," & ",e.jsx(o.a,{href:"https://www.npmjs.com/package/@agendadearte/sketchbox",rel:"nofollow",children:"npmJS"})]}),`
`,e.jsx(o.h2,{id:"installation",children:"Installation"}),`
`,e.jsx(n,{code:`
npm install @agendadearte/sketchbox
`}),`
`,e.jsx(o.h2,{id:"css-custom-properties",children:"CSS custom properties"}),`
`,e.jsx(o.p,{children:`Sketchbox includes many CSS custom properties in the styles of every componet
that allow you to modify the default styles. In the documentation of each
component you will find the list of supported CSS custom properties.`}),`
`,e.jsx(n,{code:`
.any-css-hash {
style-prop: var(${c("component","element","cssProp")}, style-fallback);
...
}
`}),`
`,e.jsx(o.h2,{id:"rubik-font",children:"Rubik font"}),`
`,e.jsxs(o.p,{children:["Sketchbox uses the ",e.jsx(o.a,{href:"https://fonts.google.com/specimen/Rubik",rel:"nofollow",children:"Rubik"})," font family and relies only on the ",e.jsx(o.strong,{children:"300"}),", ",e.jsx(o.strong,{children:"400"}),", and ",e.jsx(o.strong,{children:"500"}),` font weights.
You can add fonts to your project with npm via `,e.jsx(o.strong,{children:e.jsx(o.a,{href:"https://fontsource.org/",rel:"nofollow",children:"Fontsource"})}),", or with the ",e.jsx(o.strong,{children:"Google Fonts"})," CDN."]}),`
`,e.jsx(o.h4,{id:"fontsource",children:"Fontsource"}),`
`,e.jsx(n,{code:`
npm install @fontsource/rubik
`}),`
`,e.jsx(o.p,{children:"Then you can import it in your entry point like this:"}),`
`,e.jsx(n,{code:`
import '@fontsource/rubik/300.css';
import '@fontsource/rubik/400.css';
import '@fontsource/rubik/500.css';
`}),`
`,e.jsx(o.h4,{id:"google-web-fonts",children:"Google Web Fonts"}),`
`,e.jsxs(o.p,{children:["To install the Rubik font in your project using the Google Web Fonts CDN, add the following code snippet inside your project's ",e.jsx(o.code,{children:"<head />"})," tag:"]}),`
`,e.jsx(n,{code:`
<link
rel="stylesheet"
href="https://fonts.googleapis.com/css?family=Rubik:300,400,500,700&amp;display=swap"
/>
`})]})}function u(t={}){const{wrapper:o}={...r(),...t.components};return o?e.jsx(o,{...t,children:e.jsx(s,{...t})}):s(t)}export{u as default};
