(this.webpackJsonpbrainiac=this.webpackJsonpbrainiac||[]).push([[0],{16:function(e,t,a){e.exports=a.p+"static/media/brain.6afe8ffa.png"},18:function(e,t,a){e.exports=a(35)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(11),s=a.n(i),o=(a(23),a(4)),l=a(5),c=a(7),m=a(6),u=a(8),d=a(14),p=a.n(d),g=a(3),h=a.n(g),f=function(e){var t=e.onRouteChange;return e.isSignedIn?r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3-l link dib pa3 ph4-l pointer black-80 ",onClick:function(){return t("signout")}}," Sign Out"))):r.a.createElement("div",null,r.a.createElement("nav",{style:{display:"flex",justifyContent:"flex-end"}},r.a.createElement("p",{className:"f3-l link dib pa3 ph4-l pointer black-80 ",onClick:function(){return t("signin")}}," Sign in"),r.a.createElement("p",{className:"f3-l link dib pa3 ph4-l pointer black-80 ",onClick:function(){return t("register")}}," Register")))},b=a(15),E=a.n(b),w=a(16),v=a.n(w),y=(a(24),function(){return r.a.createElement("div",{className:"ma4 mt0 center"},r.a.createElement(E.a,{className:"Tilt br2 shadow-2",options:{max:70},style:{height:150,width:150}},r.a.createElement("div",{className:"Tilt-inner pa3 "},r.a.createElement("img",{style:{paddingTop:"5px"},alt:"logo",src:v.a}))))}),N=(a(25),a(12)),C=function(e){var t=e.onInputChange,a=e.onButtonSubmit,n=e.handleOnDrop,i=e.progress,s=e.progress_show,o=e.acceptedFileTypes,l=e.imageMaxSize;return s?r.a.createElement("div",null,r.a.createElement("p",{className:"tc"},"This Magic Brain will deatect faces in your pictures. Give it a try."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center ma2 pa4 br3 shadow-5",style:{width:"800px"}},r.a.createElement("textarea",{style:{resize:"none"},className:"center pa1 w-70 ",placeholder:"https://www.example.com/images/dinosaur.jpg",type:"text",onChange:t}),r.a.createElement("button",{id:"detect",className:"w-30 grow f4 link ph3 pv2 dib white",style:{backgroundColor:"#f7797d"},onClick:a},"Detect"))),r.a.createElement("div",null,r.a.createElement(N.a,{accept:o,multiple:!1,maxSize:l,onDrop:n},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",t(),r.a.createElement("input",a()),r.a.createElement("br",null),r.a.createElement("label",{id:"drag",className:"center ma2 shadow-5"},"Drag 'n' drop some files here, or click to select files")))})),r.a.createElement("progress",{className:"progress",value:i,max:"100"}),r.a.createElement("br",null))):r.a.createElement("div",null,r.a.createElement("p",{className:"f3 center tc"},"This Magic Brain will detect faces in your pictures. Give it a try."),r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"center ma2 pa4 br3 shadow-5",style:{width:"800px"}},r.a.createElement("textarea",{style:{resize:"none"},className:"center pa1 w-70 ",placeholder:"https://www.example.com/images/dinosaur.jpg",type:"text",onChange:t}),r.a.createElement("button",{id:"detect",className:"w-30 grow f4 link ph3 pv2 dib white",style:{backgroundColor:"#f7797d"},onClick:a},"Detect"))),r.a.createElement(N.a,{accept:o,multiple:!1,maxSize:l,onDrop:n},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("section",null,r.a.createElement("div",t(),r.a.createElement("input",a()),r.a.createElement("br",null),r.a.createElement("label",{id:"drag",className:"center ma2 shadow-5"},"Drag 'n' drop some files here, or click to select files")))})))},S=function(e){var t=e.name,a=e.entries;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"f3 center"},"".concat(t,", your current entry count is...")),r.a.createElement("div",{className:"f2 center"},a))},k=(a(28),function(e){var t=e.imageUrl,a=e.box;return r.a.createElement("div",{className:"center ma"},r.a.createElement("div",{className:"absolute mt2"},r.a.createElement("a",{href:t||""},r.a.createElement("img",{id:"inputimage",alt:"",src:t||"https://via.placeholder.com/500x300?text=Brainiac+Face+Detect",width:"500",height:"auto"})),a.length?a.map((function(e,t){return r.a.createElement("div",{key:t,className:"bounding-box",style:{top:e.topRow,left:e.leftCol,bottom:e.bottomRow,right:e.rightCol}})})):""))}),j={particles:{number:{value:150,density:{enable:!0,value_area:1803.4120608655228}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:2,color:"#fffff"},polygon:{nb_sides:4},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4008530152163807,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:1.5,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:0,color:"#ffffff",opacity:.3687847739990702,width:.6413648243462091},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!1,mode:"bubble"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:100,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).isEmailValid=function(e){return null!=e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)},a.onEmailChange=function(e){a.setState({signInEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({signInPassword:e.target.value})},a.onSubmitSignIn=function(){var e=a.state.signInEmail;a.state.signInPassword.length<4||!a.isEmailValid(e)||fetch("https://brainiac-face-recognition.herokuapp.com/signin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.signInEmail,password:a.state.signInPassword})}).then((function(e){return e.json()})).then((function(e){e.id?(h.a.fire("Good job!","".concat(e.name," You Signin Sucessfully! Welcome."),"success"),a.props.loadUser(e),setTimeout((function(){return a.props.onRouteChange("home")}),1e3)):h.a.fire("Error","Wrong Credentials","error")})).catch((function(e){return console.log(e)}))},a.onEnterPress=function(e){13===e.keyCode&&a.onSubmitSignIn()},a.state={signInEmail:"",signInPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.onRouteChange;return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"center f1 fw6 ph0 mh0"},"Sign In"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 ba bg-transparent shadow-4 w-100",type:"email",name:"email-address",id:"email-address",required:!0})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 ba bg-transparent shadow-2 w-100",type:"password",minLength:"4",name:"password",id:"password",required:!0}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{id:"submit",onKeyDown:this.onEnterPress,onClick:this.onSubmitSignIn,className:"b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Sign in"})),r.a.createElement("div",{className:"lh-copy mt3 center"},r.a.createElement("p",{onClick:function(){return e("register")},className:"f6 link dim black db pointer"},"Register"))))))}}]),t}(r.a.Component),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onEmailChange=function(e){a.setState({registerEmail:e.target.value})},a.onPasswordChange=function(e){a.setState({resgisterPassword:e.target.value})},a.onNameChange=function(e){a.setState({resgisterName:e.target.value})},a.onSubmitRegister=function(){var e=a.state.resgisterName.toLowerCase(),t=a.state.registerEmail.toLowerCase(),n=a.state.resgisterPassword.toLowerCase();t.length<4||e.length<3||n.length<4||!1===t.includes("@")||fetch("https://brainiac-face-recognition.herokuapp.com/register",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:a.state.resgisterName.toLowerCase(),email:a.state.registerEmail.toLowerCase(),password:a.state.resgisterPassword})}).then((function(e){return e.json()})).then((function(n){n.includes("already exists")?h.a.fire("Error","Email already exists.","error"):n[0].email===t&&n[0].name===e?(a.props.loadUser(n[0]),h.a.fire("Good job!","".concat(e," You Register Sucessfully! Welcome. "),"success"),setTimeout((function(){return a.props.onRouteChange("home")}),1e3)):h.a.fire("Error","Sorry, Could Not Register.. ","error")})).catch((function(e){return console.log(e)}))},a.onEnterPress=function(e){13===e.keyCode&&document.getElementById("submit").click()},a.state={resgisterName:"",registerEmail:"",resgisterPassword:""},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()}},r.a.createElement("article",{className:"br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center"},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("div",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("legend",{className:"center f1 fw6 ph0 mh0"},"Register"),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"name"},"Name"),r.a.createElement("input",{onChange:this.onNameChange,className:"pa2 input-reset ba bg-transparent shadow-4 w-100",type:"text",name:"name",id:"name",minLength:"3",required:!0})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba bg-transparent shadow-4 w-100",type:"email",name:"email-address",id:"email-address",minLength:"4",required:!0})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPasswordChange,className:"b pa2 input-reset ba bg-transparent shadow-4 w-100",type:"password",name:"password",id:"password",minLength:"4",required:!0}))),r.a.createElement("div",{className:"center"},r.a.createElement("input",{onClick:this.onSubmitRegister,className:"b  ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib",type:"submit",value:"Register"}))))))}}]),t}(r.a.Component),_=(a(29),a(10)),R=a.n(_);a(36);R.a.initializeApp({apiKey:"AIzaSyD2_Ww5mf2mEskOQMa6IYVK6URF9GqMbUE",authDomain:"quickstart-1571266618401.firebaseapp.com",databaseURL:"https://quickstart-1571266618401.firebaseio.com",projectId:"quickstart-1571266618401",storageBucket:"quickstart-1571266618401.appspot.com",messagingSenderId:"496997080126",appId:"1:496997080126:web:8caa4fb9ce5e4204df456f",measurementId:"G-72E4NBCF0G"});var O=R.a.storage(),B=function(e){var t="image/x-png, image/png, image/jpg, image/jpeg, image/gif".split(",").map((function(e){return e.trim()}));if(e&&e.length>0){var a=e[0],n=a.type,r=a.size;return r>1e7?(h.a.fire("Error!","This file is not allowed. ".concat(r," bytes is too larg"),"error"),!1):!!t.includes(n)||(h.a.fire("Error!","This file is not allowed. Only images are allowed.","error"),!1)}},P={input:"",imageUrl:"",box:[],route:"signin",isSignedIn:!1,progress:0,progess_show:!1,user:{id:"",name:"",email:"",entries:0,joined:""}},U=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(c.a)(this,Object(m.a)(t).call(this))).loadUser=function(t){e.setState({user:{id:t.id,name:t.name,email:t.email,entries:t.entries,joined:t.joined}})},e.handleOnDrop=function(t,a){if((a&&a.length>0&&B(a),t&&t.length>0)&&B(t)){var n=t[0];e.setState({progress_show:!0}),document.getElementById("detect").disabled=!0,O.ref("images/".concat(n.name)).put(n).on("state_changed",(function(t){var a=Math.round(t.bytesTransferred/t.totalBytes*100);e.setState({progress:a})}),(function(e){console.log(e)}),(function(){O.ref("images").child(n.name).getDownloadURL().then((function(t){document.getElementById("detect").disabled=!1,e.setState({input:t}),e.SendRequest(e.state.input,"Bad Image")})),e.setState({image:null}),e.setState({input:""}),setInterval((function(){return e.setState({progress_show:!1})}),3e3)}))}},e.calculateFaceLocation=function(e){var t=[],a=document.getElementById("inputimage"),n=Number(a.width),r=Number(a.height),i=!0,s=!1,o=void 0;try{for(var l,c=e.outputs[0].data.regions[Symbol.iterator]();!(i=(l=c.next()).done);i=!0){var m=l.value;t.push({leftCol:m.region_info.bounding_box.left_col*n,topRow:m.region_info.bounding_box.top_row*r,rightCol:n-m.region_info.bounding_box.right_col*n,bottomRow:r-m.region_info.bounding_box.bottom_row*r})}}catch(u){s=!0,o=u}finally{try{i||null==c.return||c.return()}finally{if(s)throw o}}return t},e.displayFaceBox=function(t){e.setState({box:t})},e.onInputChange=function(t){e.setState({input:t.target.value})},e.isUrlValid=function(e){return!!e.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)},e.onButtonSubmit=function(){var t=e.state.input;t?e.isUrlValid(t)?e.SendRequest(e.state.input,"Could not process image"):h.a.fire("Error!","Bad Image URL","error"):h.a.fire("Error!","Blank Input","error")},e.SendRequest=function(t,a){fetch("https://brainiac-face-recognition.herokuapp.com/imageurl",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:t})}).then((function(e){return e.json()})).then((function(t){t.outputs[0].data.regions[0]&&(e.setState({imageUrl:e.state.input}),fetch("https://brainiac-face-recognition.herokuapp.com/image",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id,count:t.outputs[0].data.regions.length})}).then((function(e){return e.json()})).then((function(t){e.setState(Object.assign(e.state.user,{entries:t}))})),e.displayFaceBox(e.calculateFaceLocation(t)))})).catch((function(e){return h.a.fire("Error!",a,"error")}))},e.onRouteChange=function(t){"signout"===t?e.setState(P):"home"===t&&e.setState({isSignedIn:!0}),e.setState({route:t})},e.refreshEntries=function(){fetch("https://brainiac-face-recognition.herokuapp.com/entries",{method:"put",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e.state.user.id})}).then((function(e){return e.json()})).then((function(t){e.state.user.entries!==t&&e.setState(Object.assign(e.state.user,{entries:t}))}))},e.state=P,e}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.interval=setInterval((function(){""!==e.state.user.id&&e.refreshEntries()}),15e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.isSignedIn,a=e.imageUrl,n=e.route,i=e.box,s=e.progress,o=e.progress_show;return r.a.createElement(r.a.Fragment,null,r.a.createElement(p.a,{className:"particles",params:j}),r.a.createElement(f,{isSignedIn:t,onRouteChange:this.onRouteChange}),"home"===n?r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(S,{name:this.state.user.name,entries:this.state.user.entries}),r.a.createElement(C,{onInputChange:this.onInputChange,onButtonSubmit:this.onButtonSubmit,progress:s,progress_show:o,handleOnDrop:this.handleOnDrop,imageMaxSize:1e7,acceptedFileTypes:"image/x-png, image/png, image/jpg, image/jpeg, image/gif"}),r.a.createElement(k,{box:i,imageUrl:a})):"signin"===n?r.a.createElement(x,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}):r.a.createElement(I,{loadUser:this.loadUser,onRouteChange:this.onRouteChange}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(33),a(34);s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.777b911f.chunk.js.map