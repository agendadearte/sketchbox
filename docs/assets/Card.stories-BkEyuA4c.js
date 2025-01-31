import{j as e}from"./jsx-runtime-CLpGMVip.js";import{s as t,b as a}from"./buildCustomProps-Dp38_bXo.js";const s="card",o={author:{color:"hsla(200, 10%, 0%, 1)",fontFamily:"Rubik, sans-serif",fontSize:"1.5rem",fontWeight:400},title:{color:"hsla(200, 10%, 40%, 1)",fontFamily:"Rubik, sans-serif",fontSize:"1.2rem",fontWeight:400},dates:{color:"hsla(200, 10%, 20%, 1)",fontFamily:"Rubik, sans-serif",fontSize:"1rem",fontWeight:400}},p=t({padding:".4rem"}),h=t({marginTop:0,marginBottom:0,...a(s,"author",o)}),f=t({marginTop:0,marginBottom:".4rem",...a(s,"title",o)}),T=t({marginBottom:".4rem",...a(s,"dates",o)}),y=t({display:"block",width:"100%"}),u=({author:n,title:g,dates:r,images:l})=>e.jsxs("article",{className:p,children:[e.jsx("h1",{className:h,children:n}),e.jsx("h2",{className:f,children:g}),e.jsxs("div",{className:T,"data-testid":"dateTime",children:["Del ",e.jsxs("time",{dateTime:r.initialUTF,children:[r.initialString,"."]})," al"," ",e.jsxs("time",{dateTime:r.finalUTF,children:[r.finalString,"."]})]}),l.length&&e.jsx("img",{className:y,src:l[0],alt:""})]});u.__docgenInfo={description:"",methods:[],displayName:"Card",props:{author:{required:!0,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},dates:{required:!0,tsType:{name:"signature",type:"object",raw:`{
  initialString: string;
  initialUTF: string;
  finalString: string;
  finalUTF: string;
}`,signature:{properties:[{key:"initialString",value:{name:"string",required:!0}},{key:"initialUTF",value:{name:"string",required:!0}},{key:"finalString",value:{name:"string",required:!0}},{key:"finalUTF",value:{name:"string",required:!0}}]}},description:""},images:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const S={title:"Components/Card",component:u,tags:[],decorators:[n=>e.jsx("div",{style:{width:"20rem"},children:n()})]},i={args:{author:"Eduardo Chillida",title:"Berlín",dates:{initialString:"21 Feb",initialUTF:"2022-21-02",finalString:"16 Mar",finalUTF:"2022-16-03"},images:["https://upload.wikimedia.org/wikipedia/commons/d/d0/Chillida_berlin_Bundeskanzleramt.jpg"]}};var d,m,c;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    author: "Eduardo Chillida",
    title: "Berlín",
    dates: {
      initialString: "21 Feb",
      initialUTF: "2022-21-02",
      finalString: "16 Mar",
      finalUTF: "2022-16-03"
    },
    images: ["https://upload.wikimedia.org/wikipedia/commons/d/d0/Chillida_berlin_Bundeskanzleramt.jpg"]
  }
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const j=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:i,__namedExportsOrder:j,default:S},Symbol.toStringTag,{value:"Module"}));export{k as C,o as a,s as c};
