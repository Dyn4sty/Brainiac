(this.webpackJsonpbrainiac=this.webpackJsonpbrainiac||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/brain.6afe8ffa.png"},34:function(e,t,a){e.exports=a(81)},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},79:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(10),o=a.n(r),l=(a(39),a(25)),c=a(26),s=a(32),m=a(27),u=a(33),d=(a(40),a(28)),p=a.n(d),b=function(e){var t=e.onRouteChange;return i.a.createElement("div",null,i.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},i.a.createElement("p",{className:"f3-l link dib pa3 ph4-l pointer black-80 ",onClick:function(){return t("signin")}}," Sign Out")))},h=a(29),g=a.n(h),f=a(30),v=a.n(f),w=(a(41),function(){return i.a.createElement("div",{className:"ma4 mt0 center"},i.a.createElement(g.a,{className:"Tilt br2 shadow-2",options:{max:70},style:{height:150,width:150}},i.a.createElement("div",{className:"Tilt-inner pa3 "},i.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:v.a}))))}),E=a(11),y=a.n(E),N=function(e){var t=e.onInputChange,a=e.onButtonSubmit;return i.a.createElement("div",null,i.a.createElement("p",{className:"f3 center"},"This Magic Brain will detect faces in your pictures. Give it a try."),i.a.createElement("div",{className:"center"},i.a.createElement("div",{className:"center ma2 pa4 br3 shadow-5",style:{width:"800px"}},i.a.createElement("input",{className:"f4 center pa2 w-70 ",type:"text",onChange:t}),i.a.createElement("button",{className:"w-30 grow f4 link ph3 pv2 dib white",style:{backgroundColor:"#f7797d"},onClick:a},"Detect"))))},k=(a(79),function(e){var t=e.imageUrl,a=e.box;return i.a.createElement("div",{className:"center ma"},i.a.createElement("div",{className:"absolute mt2"},i.a.createElement("img",{id:"inputimage",alt:"",src:t,width:"500px",heigh:"auto"}),i.a.createElement("div",{className:"bounding-box",style:{top:a.topRow,right:a.rightCol,bottom:a.bottomRow,left:a.leftCol}})))}),C={particles:{number:{value:150,density:{enable:!0,value_area:1803.4120608655228}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#fffff"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1.5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:0,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},_=function(e){var t=e.onRouteChange;return i.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},i.a.createElement("main",{className:"pa4 black-80"},i.a.createElement("div",{className:"measure"},i.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},i.a.createElement("legend",{className:"f1 fw6 ph0 mh0"},"Sign In"),i.a.createElement("div",{className:"mt3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),i.a.createElement("input",{className:"pa2 ba bg-transparent hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",required:!0})),i.a.createElement("div",{className:"mv3"},i.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),i.a.createElement("input",{className:"b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",required:!0}))),i.a.createElement("div",{className:"center"},i.a.createElement("input",{onClick:function(){return t("home")},className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),i.a.createElement("div",{className:"lh-copy mt3 center"},i.a.createElement("p",{className:"f6 link dim black db pointer"},"Register")))))},x=a(31),R=a.n(x),S=new y.a.App({apiKey:"165546baa7c245d68b76d4bb42ab8a01"}),B=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).calculateFaceLocation=function(e){var t=e.outputs[0].data.regions[0].region_info.bounding_box,a=document.getElementById("inputimage"),n=Number(a.width),i=Number(a.height);return{leftCol:t.left_col*n,topRow:t.top_row*i,rightCol:n-t.right_col*n,bottomRow:i-t.bottom_row*i}},e.displayFaceBox=function(t){console.log(t),e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.onButtonSubmit=function(){e.setState({imageUrl:e.state.input}),S.models.predict(y.a.FACE_DETECT_MODEL,e.state.input).then((function(t){return e.displayFaceBox(e.calculateFaceLocation(t))})).catch((function(e){return R.a.fire("Error!","Invaild URL","error")}))},e.onRouteChange=function(t){e.setState({route:t})},e.state={input:"",imageUrl:"",box:{},route:"signin"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{className:"particles",params:C}),i.a.createElement(b,{onRouteChange:this.onRouteChange}),"signin"===this.state.route?i.a.createElement(_,{onRouteChange:this.onRouteChange}):i.a.createElement(i.a.Fragment,null,i.a.createElement(w,null),i.a.createElement(N,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit}),i.a.createElement(k,{box:this.state.box,imageUrl:this.state.imageUrl})))}}]),t}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(80);o.a.render(i.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.ed602e8d.chunk.js.map