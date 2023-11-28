import{a as r,j as n}from"./buildPropName-thQp1VjH.js";import{s as t,b as l}from"./buildCustomProps-vbauxOPy.js";const o="card",d={author:{color:"hsla(200, 10%, 0%, 1)",fontFamily:"Rubik, sans-serif",fontSize:"1.5rem",fontWeight:400},title:{color:"hsla(200, 10%, 40%, 1)",fontFamily:"Rubik, sans-serif",fontSize:"1.2rem",fontWeight:400},dates:{color:"hsla(200, 10%, 20%, 1)",fontFamily:"Rubik, sans-serif",fontSize:"1rem",fontWeight:400}},h=t({padding:".4rem"}),f=t({marginTop:0,marginBottom:0,...l(o,"author",d)}),_=t({marginTop:0,marginBottom:".4rem",...l(o,"title",d)}),y=t({marginBottom:".4rem",...l(o,"dates",d)}),S=t({display:"block",width:"100%"}),s=({author:i,title:p,dates:a,images:m})=>r("article",{className:h,children:[n("h1",{className:f,children:i}),n("h2",{className:_,children:p}),r("div",{className:y,"data-testid":"dateTime",children:["Del ",r("time",{dateTime:a.initialUTF,children:[a.initialString,"."]})," al"," ",r("time",{dateTime:a.finalUTF,children:[a.finalString,"."]})]}),m.length&&n("img",{className:S,src:m[0],alt:""})]});try{s.displayName="Card",s.__docgenInfo={description:"",displayName:"Card",props:{author:{defaultValue:null,description:"",name:"author",required:!0,type:{name:"string"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},dates:{defaultValue:null,description:"",name:"dates",required:!0,type:{name:"{ initialString: string; initialUTF: string; finalString: string; finalUTF: string; }"}},images:{defaultValue:null,description:"",name:"images",required:!0,type:{name:"string[]"}}}}}catch{}const T={title:"Components/Card",component:s,tags:[],decorators:[i=>n("div",{style:{width:"20rem"},children:i()})]},e={args:{author:"Eduardo Chillida",title:"Berlín",dates:{initialString:"21 Feb",initialUTF:"2022-21-02",finalString:"16 Mar",finalUTF:"2022-16-03"},images:["https://upload.wikimedia.org/wikipedia/commons/d/d0/Chillida_berlin_Bundeskanzleramt.jpg"]}};var c,u,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const b=["Default"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:e,__namedExportsOrder:b,default:T},Symbol.toStringTag,{value:"Module"}));export{k as C,d as a,o as c};
//# sourceMappingURL=Card.stories-HTOZ6RX2.js.map
