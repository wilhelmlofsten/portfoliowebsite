(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[977],{8386:(e,t,r)=>{Promise.resolve().then(r.bind(r,6914))},6914:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>m});var s=r(5155),a=r(2115),l=r(5565),n=r(7849);let c=(0,a.createContext)(void 0),i=e=>{let{children:t,className:r,containerClassName:l}=e,i=(0,a.useRef)(null),[o,d]=(0,a.useState)(!1);return(0,s.jsx)(c.Provider,{value:[o,d],children:(0,s.jsx)("div",{className:(0,n.cn)("py-20 flex items-center justify-center",l),style:{perspective:"1000px"},children:(0,s.jsx)("div",{ref:i,onMouseEnter:e=>{if(d(!0),!i.current)return},onMouseMove:e=>{if(!i.current)return;let{left:t,top:r,width:s,height:a}=i.current.getBoundingClientRect(),l=(e.clientX-t-s/2)/25,n=(e.clientY-r-a/2)/25;i.current.style.transform="rotateY(".concat(l,"deg) rotateX(").concat(n,"deg)")},onMouseLeave:e=>{i.current&&(d(!1),i.current.style.transform="rotateY(0deg) rotateX(0deg)")},className:(0,n.cn)("flex items-center justify-center relative transition-all duration-200 ease-linear",r),style:{transformStyle:"preserve-3d"},children:t})})})},o=e=>{let{children:t,className:r}=e;return(0,s.jsx)("div",{className:(0,n.cn)("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]",r),children:t})},d=e=>{let{as:t="div",children:r,className:l,translateX:c=0,translateY:i=0,translateZ:o=0,rotateX:d=0,rotateY:u=0,rotateZ:h=0,...x}=e,m=(0,a.useRef)(null),[v]=f();(0,a.useEffect)(()=>{g()},[v]);let g=()=>{m.current&&(v?m.current.style.transform="translateX(".concat(c,"px) translateY(").concat(i,"px) translateZ(").concat(o,"px) rotateX(").concat(d,"deg) rotateY(").concat(u,"deg) rotateZ(").concat(h,"deg)"):m.current.style.transform="translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)")};return(0,s.jsx)(t,{ref:m,className:(0,n.cn)("w-fit transition duration-200 ease-linear",l),...x,children:r})},f=()=>{let e=(0,a.useContext)(c);if(void 0===e)throw Error("useMouseEnter must be used within a MouseEnterProvider");return e};var u=r(4128);let h=e=>{let t,r,l,c,i,o,d,{children:f,className:h,containerClassName:x,colors:m,waveWidth:v,backgroundFill:g,blur:w=10,speed:y="fast",waveOpacity:p=.5,...j}=e,N=(0,u.Cf)(),b=(0,a.useRef)(null),k=()=>{switch(y){case"slow":default:return .001;case"fast":return .002}},E=()=>{t=(o=b.current.getContext("2d")).canvas.width=window.innerWidth,r=o.canvas.height=window.innerHeight,o.filter="blur(".concat(w,"px)"),l=0,window.onresize=function(){t=o.canvas.width=window.innerWidth,r=o.canvas.height=window.innerHeight,o.filter="blur(".concat(w,"px)")},Z()},C=null!=m?m:["#38bdf8","#e879f9","#22d3ee","#8288fa","#c296ed"],P=e=>{for(l+=k(),c=0;c<e;c++){for(o.beginPath(),o.lineWidth=v||50,o.strokeStyle=C[c%C.length],i=0;i<t;i+=5){var s=100*N(i/800,.3*c,l);o.lineTo(i,s+.5*r)}o.stroke(),o.closePath()}},Z=()=>{o.fillStyle=g||"black",o.globalAlpha=p||.5,o.fillRect(0,0,t,r),P(5),d=requestAnimationFrame(Z)};(0,a.useEffect)(()=>(E(),()=>{cancelAnimationFrame(d)}),[]);let[_,M]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{M(navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome"))},[]),(0,s.jsxs)("div",{className:(0,n.cn)("h-screen flex flex-col items-center justify-center overflow-x-hidden",x),children:[(0,s.jsx)("canvas",{className:"absolute inset-0 z-0 w-full",ref:b,id:"canvas",style:{..._?{filter:"blur(".concat(w,"px)")}:{}}}),(0,s.jsx)("div",{className:(0,n.cn)("relative z-10",h),...j,children:f})]})};var x=r(1536);function m(){return(0,a.useEffect)(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow=""}),[]),(0,s.jsx)("div",{className:"w-full h-screen overflow-hidden",children:(0,s.jsxs)(h,{className:"max-w-6xl mx-auto pb-20 w-full",children:[(0,s.jsx)("div",{className:"text-center text-white mb-8",children:(0,s.jsx)("h1",{className:"text-4xl md:text-6xl font-bold",children:"Contact Me!"})}),(0,s.jsx)("div",{className:"flex justify-center items-center mb-8",children:(0,s.jsx)(i,{className:"inter-var",children:(0,s.jsx)(o,{className:"bg-gray-800 relative group/card dark:hover:shadow-2xl   dark:hover:shadow-emerald-500/[0.1] dark:bg-gray-800 dark:border-gray-700   border-gray-600 w-[38rem] h-[18rem] rounded-xl p-6 border",children:(0,s.jsxs)("div",{className:"flex h-full items-center [transform-style:preserve-3d]",children:[(0,s.jsxs)("div",{className:"flex flex-col space-y-4 w-2/3 [transform-style:preserve-3d]",children:[(0,s.jsxs)(d,{translateZ:20,className:"flex items-center space-x-4 py-2",children:[(0,s.jsx)("div",{className:"p-2 bg-gray-700 rounded-full flex items-center justify-center",children:(0,s.jsx)(x.hL4,{size:30,className:"text-gray-300 dark:text-white"})}),(0,s.jsx)("a",{href:"https://github.com/wilhelmlofsten",target:"_blank",className:"text-lg font-medium text-gray-300 hover:text-white",children:"wilhelmlofsten"})]}),(0,s.jsxs)(d,{translateZ:50,className:"flex items-center space-x-4 py-2",children:[(0,s.jsx)("div",{className:"p-2 bg-gray-700 rounded-full flex items-center justify-center",children:(0,s.jsx)(x.QEs,{size:30,className:"text-gray-300 dark:text-white"})}),(0,s.jsx)("a",{href:"https://www.linkedin.com/in/wilhelm-l%C3%B6fsten-oscarsson/",target:"_blank",className:"text-lg font-medium text-gray-300 hover:text-white",children:"Wilhelm L\xf6fsten Oscarsson"})]}),(0,s.jsxs)(d,{translateZ:30,className:"flex items-center space-x-4 py-2",children:[(0,s.jsx)("div",{className:"p-2 bg-gray-700 rounded-full flex items-center justify-center",children:(0,s.jsx)(x.maD,{size:30,className:"text-gray-300 dark:text-white"})}),(0,s.jsx)("a",{href:"mailto:wilhelm.oscarsson@gmail.com",className:"text-lg font-medium text-gray-300 hover:text-white",children:"wilhelm.oscarsson@gmail.com"})]})]}),(0,s.jsx)("div",{className:"flex items-center justify-center w-1/3 [transform-style:preserve-3d]",children:(0,s.jsx)(d,{translateZ:70,className:"w-[175px] h-[175px] bg-gray-700 rounded-full   overflow-hidden border-4 border-gray-600 flex-shrink-0",children:(0,s.jsx)(l.default,{src:"./profilepicture.jpg",alt:"Profile Picture",width:175,height:175,className:"object-cover"})})})]})})})})]})})}},7849:(e,t,r)=>{"use strict";r.d(t,{cn:()=>l});var s=r(3463),a=r(9795);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.QP)((0,s.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[711,612,30,441,517,358],()=>t(8386)),_N_E=e.O()}]);