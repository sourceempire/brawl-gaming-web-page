(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(26).concat([function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,function(e,t,a){e.exports=a(66)},,,,,function(e,t,a){},function(e,t,a){},,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),o=a.n(s),i=a(2),l=a(3),c=a(12),m=(a(37),a(7)),u=a(14),d=a(15),g=a(17),p=a(16),h=a(18),v=(a(38),a(1));function f(e){return new Promise(function(t,a){e.headers.has("X-XSRF-TOKEN")&&sessionStorage.setItem("XSRF-TOKEN",e.headers.get("X-XSRF-TOKEN")),e.json().then(function(n){e.ok&&!0===n.succeeded?t(n):a(Object(v.a)({jsError:new Error(e.statusText)},n))})})}function E(e,t){var a=new URLSearchParams;for(var n in t){var r=t[n];Array.isArray(r)?a.append(n,JSON.stringify(r)):"object"===typeof r?a.append(n,JSON.stringify(r)):a.append(n,r)}return e.includes("?")?e+"&"+a.toString():e+"?"+a.toString()}function b(e){var t=Object(v.a)({"Content-Type":"application/json"},e.headers);return sessionStorage.getItem("XSRF-TOKEN")&&(t["X-XSRF-TOKEN"]=sessionStorage.getItem("XSRF-TOKEN")),t}var w={get:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(E(e,t),Object(v.a)({},a,{method:"GET",credentials:"include",headers:b(a)})).then(f)},post:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(e,Object(v.a)({},a,{method:"POST",credentials:"include",body:JSON.stringify(t),headers:b(a)})).then(f)},delete:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return fetch(E(e,t),Object(v.a)({},a,{method:"DELETE",credentials:"include",headers:b(a)})).then(f)}},y="https://brawl-gaming-server.herokuapp.com/",N=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={active:!1,user:{},loggedIn:!1,username:"",password:"",usertag:""},a.handleClick=function(e){if(a.state.active&&!e.target.closest(".login :not(.signup)")&&!e.target.closest(".login .form"))return a.setState({active:!1}),e.preventDefault(),e.stopPropagation(),!1},a.toggleClass=function(){var e=a.state.active;a.setState({active:!e})},a.onSubmit=function(e){e.preventDefault(),w.get(y+"login/validate",{}).then(function(e){return w.get(y+"api/logout",{})}).then(function(e){return w.post(y+"login",{username:a.state.username,password:a.state.password})}).catch(function(){return w.post(y+"login",{username:a.state.username,password:a.state.password})}).then(function(){return w.get(y+"api/user")}).then(function(e){a.setState({user:e,loggedIn:!0,active:!1})}).catch(function(e){return console.log(e)})},a.logout=function(e){e.preventDefault(),w.post(y+"api/logout",{}).then(function(){return a.setState({loggedIn:!1,active:!1})})},a.onChange=function(e){a.setState(Object(m.a)({},e.target.name,e.target.value))},a.login=function(){a.props.checkAuth()},a.scrollToTop=function(){window.scrollTo(0,0)},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.get(y+"login/validate",{}).then(function(){return w.get(y+"api/user")}).then(function(t){e.setState({user:t,loggedIn:!0})}).catch(function(){}),document.addEventListener("click",this.handleClick)}},{key:"render",value:function(){return this.state.loggedIn?r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"button",onClick:this.toggleClass},this.state.user.usertag),r.a.createElement("div",{className:"menu",style:{display:"".concat(this.state.active?"flex":"none")}},r.a.createElement("input",{type:"submit",value:"Log out",onClick:this.logout}))):r.a.createElement("div",{className:"login"},r.a.createElement("div",{className:"button",onClick:this.toggleClass},"Log in"),r.a.createElement(l.c,{to:"/signup",className:"signup",onClick:function(){}},"Sign up"),this.state.active&&r.a.createElement("form",{onSubmit:this.onSubmit,className:this.state.active?"form":null,style:{display:"".concat(this.state.active?"flex":"none")}},r.a.createElement("input",{type:"email",placeholder:"Brawl email address",name:"username",value:this.state.username,onChange:this.onChange,required:!0}),r.a.createElement("input",{value:this.state.password,onChange:this.onChange,name:"password",type:"password",placeholder:"Password",required:!0}),r.a.createElement("input",{type:"submit",value:"Log in"}),r.a.createElement("span",null,r.a.createElement(l.b,{to:"/signup",onClick:function(){}},"Sign up here"),r.a.createElement(l.b,{to:"/",onClick:function(){}},"Forgot password?"))))}}]),t}(n.Component),k=function(e){var t=e.loggedIn,a=e.setLoggedIn,n=function(){window.scrollTo(0,0)};return r.a.createElement("div",{className:"navigation"},r.a.createElement("div",{className:"logo"},r.a.createElement(l.c,{exact:!0,to:"/"},r.a.createElement("div",{className:"logo-wrapper"},r.a.createElement("img",{src:"/images/logo.png",alt:"logo"}),r.a.createElement("div",{className:"text"},r.a.createElement("h4",null,"Brawl Gaming")))),r.a.createElement("div",{className:"mobile"},r.a.createElement(N,{loggedIn:t,setLoggedIn:a})),r.a.createElement("div",{className:"is-mobile"},r.a.createElement(N,{loggedIn:t,setLoggedIn:a}))),r.a.createElement("div",{className:"menu"},r.a.createElement(l.c,{className:"nav-text",exact:!0,to:"/",onClick:function(){return n()}},"Home"),r.a.createElement(l.c,{className:"nav-text",to:"/download",onClick:function(){return n()}},"Download"),r.a.createElement(l.c,{className:"nav-text",to:"/concept",onClick:function(){return n()}},"Concept"),r.a.createElement(l.c,{className:"nav-text",to:"/games",onClick:function(){return n()}},"Games"),r.a.createElement(l.c,{className:"nav-text",to:"/faq",onClick:function(){return n()}},"FAQ"),r.a.createElement("div",{className:"not-mobile"},r.a.createElement(N,{loggedIn:t,setLoggedIn:a}))))},O=(a(47),a(48),a(49),function(e){var t=e.icon,a=e.label,n=e.labelcolor,s=e.color,o=e.navigationTo;return r.a.createElement(l.b,{className:"BigButton",to:"/".concat(o),style:{background:s,color:n},onClick:function(){window.scrollTo(0,0)}},r.a.createElement("img",{src:t,alt:"icon"}),r.a.createElement("div",{className:"line",style:{background:n}}),r.a.createElement("h3",{style:{color:n}},a))}),j=function(){return r.a.createElement("div",{className:"section1"},r.a.createElement("div",{className:"content-wrapper"},r.a.createElement("div",{className:"left-content"},r.a.createElement("div",{className:"RBB"},r.a.createElement("h1",null,"Ready."),r.a.createElement("h1",null,"Bet."),r.a.createElement("h1",null,"Brawl.")),r.a.createElement("div",{className:"RBB-small"},r.a.createElement("h1",null,"Ready Bet Brawl"))),r.a.createElement("div",{className:"right-content"},r.a.createElement("div",{className:"computerDiv1"},r.a.createElement("img",{className:"computer",src:"/images/dator.svg",alt:"computer"}),r.a.createElement("video",{className:"clientImg",loop:!0,autoPlay:!0,muted:!0,playsInline:!0},r.a.createElement("source",{src:"/videos/bg.mp4",type:"video/mp4"}),"Your browser does not support the video tag."))),r.a.createElement("div",{className:"threeButtons"},r.a.createElement(O,{className:"conceptButton",icon:"/images/concept.svg",navigationTo:"concept",labelcolor:"#f2eae0",label:"Concept",color:"linear-gradient(#32322F,#171715)"}),r.a.createElement(O,{className:"registerButton",icon:"/images/Register.svg",navigationTo:"signup",labelcolor:"#f2eae0",label:"Register",color:"linear-gradient(#66b62d, #457c1e)"}),r.a.createElement(O,{className:"loginButton",icon:"/images/Download.svg",navigationTo:"download",labelcolor:"black",label:"Download",color:"linear-gradient(#FFFFFF, #EDE4D7)"}))),r.a.createElement("img",{className:"arrow",src:"/images/angle-double-down-solid.svg",alt:"downarrow",onClick:function(){return window.scrollTo(0,840)}}))},S=(a(50),a(51),function(e){var t=e.label,a=e.navigationTo;return r.a.createElement("div",null,r.a.createElement(l.b,{className:"MediumButton",to:"/".concat(a)},r.a.createElement("h3",null,t)))}),C=(a(52),function(e){var t=e.image,a=e.label,n=e.text;return r.a.createElement("div",{className:"box"},r.a.createElement("img",{className:"rbbIcon",src:t,alt:"icon"}),r.a.createElement("div",{className:"textUnder"},r.a.createElement("div",{className:"label"},r.a.createElement("h1",null,a)),r.a.createElement("p",null,n)))}),x=function(){return r.a.createElement("section",{className:"HTB-container"},r.a.createElement("div",{className:"HTB"},r.a.createElement("h1",null,"How To Brawl")),r.a.createElement("div",{className:"content-container"},r.a.createElement("div",{className:"steps"},r.a.createElement(C,{image:"/images/user.svg",label:"Ready",text:"Choose your game and game mode. Invite your friends or play solo."})),r.a.createElement("div",{className:"steps-arrow"},r.a.createElement("img",{className:"arrow",src:"/images/Arrow.svg",alt:"Arrow"})),r.a.createElement("div",{className:"steps-arrow-small"},r.a.createElement("img",{className:"arrow-small",src:"/images/ArrowSmall.svg",alt:"Arrow"})),r.a.createElement("div",{className:"steps"},r.a.createElement(C,{image:"/images/Dollars.svg",label:"Bet",text:"Bet money on yourself or your team, and match with others who are betting the same amount."})),r.a.createElement("div",{className:"steps-arrow"},r.a.createElement("img",{className:"arrow",src:"/images/Arrow.svg",alt:"Arrow"})),r.a.createElement("div",{className:"steps-arrow-small"},r.a.createElement("img",{className:"arrow-small",src:"/images/ArrowSmall.svg",alt:"Arrow"})),r.a.createElement("div",{className:"steps"},r.a.createElement(C,{image:"/images/brawl.svg",label:"Brawl",text:"Play against opponents worldwide, and the winners gets the whole pot instantly after the match!"}))),r.a.createElement(S,{className:"read-more",label:"Read more",navigationTo:"concept"}))},I=a(4),A=a.n(I),B=a(6),T=(a(55),a(56),function(e){return e.charAt(0).toUpperCase()+e.slice(1)}),R=function(e){var t=e.img_back,a=e.img_front,n=e.title,s=e.contests;return r.a.createElement("div",{className:"gameBox"},r.a.createElement("div",{className:"gameImage",style:{backgroundImage:"url(/images/game-images/".concat(t,")")}},r.a.createElement("img",{className:"frontImage",src:"/images/game-images/"+a,alt:"front img"}),r.a.createElement("div",{className:"gamemodes"},r.a.createElement("div",{className:"textInImage"},Object.entries(s).map(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("h1",null,T(a)),r.a.createElement("hr",null),Object.entries(n).map(function(e){var t=Object(i.a)(e,2),a=t[0];return t[1],r.a.createElement("h3",{key:a},T(a))}))})))),r.a.createElement("div",{className:"label"},r.a.createElement("h2",null,n)))},D=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],o=function(){var e=Object(B.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.get("https://brawl-gaming-server.herokuapp.com/api/public/games",{}).then(function(e){s(e.games)}).catch(function(e){s([]),console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){o()},[]);var l=function(e){if("4747a477-3445-4b0a-9db9-bf0e68238208"===e)return"csgo_"};return r.a.createElement("section",{className:"PG-container"},r.a.createElement("div",{className:"PG"},r.a.createElement("h1",null,"Popular Games")),r.a.createElement("div",{className:"games-container"},Object.entries(a).map(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(R,{key:a,title:n.name,img_back:l(a)+"back.png",img_front:l(a)+"front.png",contests:n.contests})}),r.a.createElement(R,{img_back:"Brawl-MoreCommingSoon-Back.png",img_front:"Brawl-MoreCommingSoon-Front.png",contests:[]})),r.a.createElement(S,{className:"see-more",label:"Read more",navigationTo:"concept"}))},F=function(){return r.a.createElement("div",{className:"home"},r.a.createElement(j,null),r.a.createElement(x,null),r.a.createElement(D,null))},M=(a(57),function(){var e=Object(n.useState)("windows"),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)("/images/mslogo.png"),l=Object(i.a)(o,2),c=l[0],m=l[1],u=Object(n.useState)("/images/applelogo.png"),d=Object(i.a)(u,2),g=d[0],p=d[1];return Object(n.useEffect)(function(){/Mac/.test(navigator.platform)&&(s("osx"),m("/images/applelogo.png"),p("/images/mslogo.png"))},[]),r.a.createElement("div",{className:"download"},r.a.createElement("div",{className:"download-wrapper"},r.a.createElement("div",{className:"left-container"},r.a.createElement("div",{className:"left-download-content"},r.a.createElement("div",{className:"logoDiv"},r.a.createElement("img",{id:"logo",src:"/images/logo.png",alt:"logo"}),r.a.createElement("div",{id:"logoText"},r.a.createElement("h4",null,"Brawl"),r.a.createElement("h4",null,"Gaming"))),r.a.createElement("p",{id:"slogan"},"Brawl Gaming is the ultimate way to earn money while gaming."),r.a.createElement("button",{id:"dlBtn",onClick:function(){var e;e="windows"===a?"Downloading windows client":"Downloading OSX client",alert(e)}},r.a.createElement("h3",{id:"dlText"},"Download"),r.a.createElement("img",{className:"dlBtnImg",src:c,alt:"current os"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("p",{className:"overlay-content"},"SOON AVAILABLE FOR",r.a.createElement("img",{className:"dlBtnImg",src:c,alt:"current os"})))),r.a.createElement("button",{id:"dlBtn-secondary",onClick:function(){var e;e="windows"===a?"Downloading OSX client":"Downloading Windows client",alert(e)}},r.a.createElement("h3",{id:"dlText"},"Download"),r.a.createElement("img",{className:"dlBtnImg",src:g,alt:"current os"}),r.a.createElement("div",{className:"overlay"},r.a.createElement("p",{className:"overlay-content"},"SOON AVAILABLE FOR",r.a.createElement("img",{className:"dlBtnImg",src:g,alt:"current os"})))))),r.a.createElement("div",{className:"right-container"},r.a.createElement("div",{className:"right-download-content"},r.a.createElement("img",{className:"computer",src:"/images/dator.svg",alt:"computer"}),r.a.createElement("video",{className:"clientImg",loop:!0,autoPlay:!0,muted:!0,playsInline:!0},r.a.createElement("source",{src:"/videos/bg.mp4",type:"video/mp4"}),"Your browser does not support the video tag.")))))}),L=(a(58),function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],s=t[1],o=function(){var e=Object(B.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:w.get("https://brawl-gaming-server.herokuapp.com/api/public/games",{}).then(function(e){s(e.games)}).catch(function(e){s([]),console.log(e)});case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)(function(){o()},[]);var l=function(e){if("4747a477-3445-4b0a-9db9-bf0e68238208"===e)return"csgo_"};return r.a.createElement("section",{className:"available-games-container"},r.a.createElement("div",{className:"games"},r.a.createElement("h1",null,"Popular Games")),r.a.createElement("div",{className:"game-container"},Object.entries(a).map(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement(R,{key:a,title:n.name,img_back:l(a)+"back.png",img_front:l(a)+"front.png",contests:n.contests})}),r.a.createElement(R,{img_back:"Brawl-MoreCommingSoon-Back.png",img_front:"Brawl-MoreCommingSoon-Front.png",contests:[]})))}),V=(a(59),function(e){var t=e.links,a=e.active,n=e.onClick;return r.a.createElement("div",{className:"sideNav"},t.map(function(e,t){return r.a.createElement("div",{key:e.key,className:a===t?"link active":"link",onClick:function(){return n(t)}},e.header)}))}),P=[{id:1,left:!0,header:"About Brawl Gaming",text:"Brawl gaming is a desktop client that lets gamers bet money on their own performance and play against other people worldwide. You can play with your friends against others, or challenge your friends directly. The games are hosted on our dedicated servers, and our automatic match verification instantly gets the match result and rewards the winners. No manual match reporting needed!",img:"/images/logo.png",key:"about"},{id:2,left:!1,header:"Register Account",text:"To register an account, fill in our registration form. To make sure our matchmaking always is fair, each person is only able to have one Brawl Gaming account. To prevent users from creating multiple accounts, you need to enter your personal number. We at Brawl Gaming take security very seriously, and we can assure you that your personal information is secure with us.",img:"/images/register_icon.svg",key:"register"},{id:3,left:!0,header:"Getting started",text:"After making an account and downloading the client, you choose your preferred game and game mode. Then you can invite friends to your team, or you can choose to queue up solo and get matched with both teammates and opponents. ",img:"/images/concept-images/client_start.png",key:"started"},{id:4,left:!1,header:"Making bets",text:"After adding money to your account, you can place bets on you or your team winning the game. You choose the bet amount you want to play for, and you get matched with players that play for the same amount. You can choose multiple bet options to increase your chances of quickly finding a match. The creator of the lobby choose the bet amount, and everyone in the lobby have to accept the bet amount before you can queue up.",img:"/images/concept-images/client_bet.png",key:"bets"},{id:5,left:!0,header:"Matchmaking",text:"Our queue system matches you with players of similar skill level using a ranking system. If you play with friends, our queue system matches you against another party with similar individual skill levels. After the game is over, the winner is awarded the prize pot instantly. Since the match is played on our own server, our automatic match verification knows who won and eliminates the need to manually report a match score.",img:"/images/concept-images/client_matchmaking.png",key:"matchmaking"}],G=function(){var e=Object(n.useState)(-1),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useRef)(),l=Object(n.useRef)(),c=[o,Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)(),Object(n.useRef)()];return Object(n.useEffect)(function(){-1!==a&&window.scrollTo(0,c[a].current.offsetTop-80)},[a]),r.a.createElement("section",{className:"concept",ref:l},P.map(function(e,t){return r.a.createElement("div",{key:e.key,ref:c[t],className:"wrappers"},r.a.createElement("div",{className:"container",style:{gridTemplateAreas:"".concat(e.left?"'text img'":"'img text'"),gridTemplateColumns:"".concat(e.left?"50% 40%":"40% 50%")}},r.a.createElement("div",{className:"text"},r.a.createElement("h1",null,e.header),r.a.createElement("br",null),r.a.createElement("p",null,e.text)),r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:e.img,alt:e.key}))))}),r.a.createElement(V,{links:P,active:a,onClick:s}))},_=(a(60),a(61),function(e){var t=e.setPhrase,a=e.onSearch,s=Object(n.useRef)(""),o=function(){var e=Object(B.a)(A.a.mark(function e(n){var r;return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:n.preventDefault(),r=s.current.value.toLowerCase(),w.get("https://brawl-gaming-server.herokuapp.com/api/public/faq/",{title:r}).then(function(e){delete e.succeeded,t(r),a(e)}).catch(function(e){return console.log(e)}),a([]);case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("form",{className:"searchbar",onSubmit:function(e){return o(e)}},r.a.createElement("input",{type:"text",ref:s,placeholder:"Enter a keyword",minLength:"2",maxLength:"50"}),r.a.createElement("button",{type:"submit"},r.a.createElement("img",{src:"/images/search.svg",alt:"search"})))}),$=(a(26),function(e){var t=e.question,a=e.answer,s=Object(n.useState)(!0),o=Object(i.a)(s,2),l=o[0],c=o[1],m=l?"scaleY(-1)":"scaleY(1)";return r.a.createElement("div",{className:"result"},r.a.createElement("span",{onClick:function(){return c(!l)}},r.a.createElement("h4",null,t),r.a.createElement("img",{src:"/images/chevron.svg",alt:"arrow",style:{transform:m}})),r.a.createElement("p",{hidden:l},a))}),q=function(e){var t=e.title,a=e.list;return r.a.createElement("div",{className:"results"},r.a.createElement("h1",null,0===Object.keys(a).length?"":t),Object.entries(a).map(function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];return r.a.createElement($,{question:a,answer:n,key:a})}))},z=(a(27),function(e){var t=e.category,a=e.setCategory,n=e.setCategoryResults,s=function(){var e=Object(B.a)(A.a.mark(function e(r){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),w.get("https://brawl-gaming-server.herokuapp.com/api/public/faq/",{title:t.label.toLowerCase()}).then(function(e){delete e.succeeded,a(t.label),n(e)}).catch(function(e){a("Not able to find category right now."),n([]),console.log(e)});case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement("div",{className:"category"},r.a.createElement("img",{src:t.icon,alt:t.label}),r.a.createElement("h3",null,t.label),t.top.map(function(e){return r.a.createElement("p",{key:Math.random()},e)}),r.a.createElement("div",{className:"button-wrapper"},r.a.createElement("button",{onClick:function(e){return s(e)}},"Show more")))}),W=function(e){var t=e.list,a=e.setCategory,n=e.setCategoryResults;return r.a.createElement("div",{className:"categories"},r.a.createElement("h1",null,"Categories"),r.a.createElement("div",{className:"container"},t.map(function(e){return r.a.createElement(z,{key:e.id,category:e,setCategory:a,setCategoryResults:n})})))},H=[{id:1,icon:"/images/cogs.svg",label:"General",top:["What is Brawl Gaming?","Is Brawl Gaming secure?","What am I downloading?"]},{id:2,icon:"/images/games.svg",label:"Games",top:["What games can you play?","Are there coming more games?","What type of games is there?"]},{id:3,icon:"/images/matches.svg",label:"Matches",top:["How do I play a match?","How does the matchmaking work?","What happens if someone disconnects?"]},{id:4,icon:"/images/payments.svg",label:"Payments",top:["How does the betting work?","Why does it cost more than my bet?","What is the minimum amount I can bet?"]},{id:5,icon:"/images/account.svg",label:"Account",top:["How do I edit my account?","How do I add money to my account?","How do I take money from my account?"]},{id:6,icon:"/images/client.svg",label:"Client",top:["My Client is not starting, what do I do?","Why has my download stopped?","How do I invite friends?"]}],Z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)([]),l=Object(i.a)(o,2),c=l[0],m=l[1],u=Object(n.useState)(""),d=Object(i.a)(u,2),g=d[0],p=d[1],h=Object(n.useState)(H),v=Object(i.a)(h,2),f=v[0],E=(v[1],Object(n.useState)([])),b=Object(i.a)(E,2),w=b[0],y=b[1],N=Object(n.useRef)(),k=Object(n.useState)(0),O=Object(i.a)(k,2),j=(O[0],O[1]);return Object(n.useEffect)(function(){},[c]),Object(n.useEffect)(function(){function e(){return(e=Object(B.a)(A.a.mark(function e(){return A.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(w.length>0)){e.next=6;break}return e.next=3,j(100);case 3:window.scrollTo(0,N.current.offsetTop-80),e.next=8;break;case 6:return e.next=8,j(0);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}!function(){e.apply(this,arguments)}()},[w]),Object(n.useEffect)(function(){}),r.a.createElement("section",{className:"faq"},r.a.createElement("h1",{className:"title"},"How can we help you?"),r.a.createElement("div",{className:"searchbar-wrapper"},r.a.createElement(_,{setPhrase:s,onSearch:m})),0!==c.length?r.a.createElement(q,{title:'Search results for: "'.concat(a,'"'),list:c}):r.a.createElement(q,{id:"categoryResult",title:g,list:w}),r.a.createElement(W,{list:f,setCategory:p,setCategoryResults:y}))},X=(a(62),a(20)),U=a.n(X),K=(a(63),"https://brawl-gaming-server.herokuapp.com/"),Y=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(g.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={submitFormActive:!1,loading:!1,loadingDone:!1,inputError:!1,registrated:!1,registerFormShown:!0,done:void 0,doneLoadingText:"",inputs:{usertag:{value:"",valid:"",error:"",regex:RegExp(/^[a-zA-Z0-9\xe0\xe1\xe2\xe4\xe3\xe5\u0105\u010d\u0107\u0119\xe8\xe9\xea\xeb\u0117\u012f\xec\xed\xee\xef\u0142\u0144\xf2\xf3\xf4\xf6\xf5\xf8\xf9\xfa\xfb\xfc\u0173\u016b\xff\xfd\u017c\u017a\xf1\xe7\u010d\u0161\u017e\xc0\xc1\xc2\xc4\xc3\xc5\u0104\u0106\u010c\u0116\u0118\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\u012e\u0141\u0143\xd2\xd3\xd4\xd6\xd5\xd8\xd9\xda\xdb\xdc\u0172\u016a\u0178\xdd\u017b\u0179\xd1\xdf\xc7\u0152\xc6\u010c\u0160\u017d\u2202\xf0 ,.'-_]{5,128}$/)},email:{value:"",valid:"",error:"",regex:RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},password:{value:"",valid:"",error:"",regex:RegExp(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=\S+$).{8,}/)},confirmpassword:{value:"",valid:"",error:"",regex:RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)},alphakey:{value:"",valid:"",error:"",regex:RegExp(/^(?!\s*$).+/)}}},a.onInputChange=function(e){a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e.target.name,Object(v.a)({},a.state.inputs[e.target.name],{value:e.target.value})))},function(){a.checkConfirmPass(),a.checkToken()})},a.formIsValid=function(){var e=[];["usertag","email","password","confirmpassword","alphakey"].forEach(function(t){e.push(a.state.inputs[t].valid)}),a.setState({submitFormActive:!(e.includes("invalid")||e.includes(""))})},a.setErrorMsgAndInvalid=function(e,t){a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e,Object(v.a)({},a.state.inputs[e],{valid:"invalid",error:t})))},function(){a.formIsValid()})},a.setInputsValid=function(e,t){a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e,Object(v.a)({},a.state.inputs[e],{valid:"valid",error:""})))},function(){a.formIsValid()})},a.checkToken=function(){""!==a.state.inputs.alphakey.value?a.setState({inputs:Object(v.a)({},a.state.inputs,{alphakey:Object(v.a)({},a.state.inputs.alphakey,{valid:"valid",error:""})})},function(){return a.formIsValid()}):""===a.state.inputs.alphakey.value&&a.setState({inputs:Object(v.a)({},a.state.inputs,{alphakey:Object(v.a)({},a.state.inputs.alphakey,{valid:"",error:""})})},function(){return a.formIsValid()})},a.setAndgetAlphaKey=function(e){var t=e.match(/.?alpha-key=([A-Za-z0-9]+\.[A-Za-z0-9]+\.?[A-Za-z0-9-_.+=]*$)/i);if(null!==t){var n=t[1];a.setState({inputs:Object(v.a)({},a.state.inputs,{alphakey:Object(v.a)({},a.state.inputs.alphakey,{value:n,valid:"valid"})})})}else a.setState({inputs:Object(v.a)({},a.state.inputs,{alphakey:Object(v.a)({},a.state.inputs.alphakey,{value:""})})})},a.liveValidation=function(e){"confirmpassword"!==e.target.name?""===e.target.value?a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e.target.name,Object(v.a)({},a.state.inputs[e.target.name],{valid:"",error:""})))},function(){a.formIsValid()}):a.state.inputs[e.target.name].regex.test(e.target.value)?"usertag"===e.target.name?a.setInputsValid(e.target.name,""):"email"===e.target.name?a.setInputsValid(e.target.name,""):"password"===e.target.name?a.setInputsValid(e.target.name,""):"alphakey"===e.target.name&&a.setInputsValid(e.target.name,""):"usertag"===e.target.name?a.setErrorMsgAndInvalid(e.target.name,"Username must be longer than 5 characters"):"email"===e.target.name?a.setErrorMsgAndInvalid(e.target.name,"Email must contain @ and ."):"password"===e.target.name?a.setErrorMsgAndInvalid(e.target.name,"Password must contain upper case and number"):"alphakey"===e.target.name&&a.setErrorMsgAndInvalid(e.target.name,"Wrong alpha key"):""===e.target.value?a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e.target.name,Object(v.a)({},a.state.inputs[e.target.name],{valid:""})))},function(){a.formIsValid()}):e.target.value===a.state.inputs.password.value&&"valid"===a.state.inputs.password.valid?a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e.target.name,Object(v.a)({},a.state.inputs[e.target.name],{valid:"valid"})))},function(){a.formIsValid()}):a.setState({inputs:Object(v.a)({},a.state.inputs,Object(m.a)({},e.target.name,Object(v.a)({},a.state.inputs[e.target.name],{valid:"invalid"})))},function(){a.formIsValid()})},a.onEmailSubmit=function(e){e.preventDefault(),w.get(K+"login/validate").then(function(e){}).catch(function(e){w.post(K+"registeralpha",{username:a.state.inputs.email.value,password:a.state.inputs.password.value,usertag:a.state.inputs.usertag.value,"alpha-key":a.state.inputs.alphakey.value}).then(function(){a.setState({registered:!0,loading:!1,loadingDone:!0,doneloadingtext:"ACCOUNT CREATED"}),a.state.done.play(),a.props.history("/")}).catch(function(e){"Not valid jwt"===e.error?a.setState({registered:!1,loading:!1,loadingDone:!1,inputs:Object(v.a)({},a.state.inputs,{alphakey:Object(v.a)({},a.state.inputs.alphakey,{error:"Wrong alpha key",valid:"invalid"})})}):"User already exists"===e.error&&a.setState({registered:!1,loading:!1,loadingDone:!1,inputs:Object(v.a)({},a.state.inputs,{email:Object(v.a)({},a.state.inputs.email,{error:"Email already exists",valid:"invalid"})})})})})},a.clearState=function(){a.setState({registered:!1,registerFormShown:!0,inputs:{usertag:{value:"",valid:"",error:"",regex:RegExp(/^[a-zA-Z0-9\xe0\xe1\xe2\xe4\xe3\xe5\u0105\u010d\u0107\u0119\xe8\xe9\xea\xeb\u0117\u012f\xec\xed\xee\xef\u0142\u0144\xf2\xf3\xf4\xf6\xf5\xf8\xf9\xfa\xfb\xfc\u0173\u016b\xff\xfd\u017c\u017a\xf1\xe7\u010d\u0161\u017e\xc0\xc1\xc2\xc4\xc3\xc5\u0104\u0106\u010c\u0116\u0118\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\u012e\u0141\u0143\xd2\xd3\xd4\xd6\xd5\xd8\xd9\xda\xdb\xdc\u0172\u016a\u0178\xdd\u017b\u0179\xd1\xdf\xc7\u0152\xc6\u010c\u0160\u017d\u2202\xf0 ,.'-_]{5,128}$/)},email:{value:"",valid:"",error:"",regex:RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)},password:{value:"",valid:"",error:"",regex:RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)},confirmpassword:{value:"",valid:"",error:"",regex:RegExp(/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/)},alphakey:{value:"",valid:"",error:""}},loadingDone:!1,submitFormActive:!1})},a}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.get(K+"login/validate").then(function(t){e.props.history.push("/")}).catch(function(e){}),U.a.loadAnimation({container:document.getElementById("loading"),renderer:"svg",loop:!0,autoplay:!0,path:"loading.json"});var t=U.a.loadAnimation({container:document.getElementById("loadingDone"),renderer:"svg",loop:!1,autoplay:!1,path:"done.json"});this.setState({done:t}),this.setAndgetAlphaKey(window.location.href)}},{key:"checkConfirmPass",value:function(){var e=this;this.state.inputs.confirmpassword.value===this.state.inputs.password.value&&"valid"===this.state.inputs.password.valid?this.setState({inputs:Object(v.a)({},this.state.inputs,{confirmpassword:Object(v.a)({},this.state.inputs.confirmpassword,{valid:"valid",error:""})})},function(){return e.formIsValid()}):this.state.inputs.confirmpassword.value!==this.state.inputs.password.value&&"valid"===this.state.inputs.confirmpassword.valid&&""!==this.state.inputs.password.value?this.setState({inputs:Object(v.a)({},this.state.inputs,{confirmpassword:Object(v.a)({},this.state.inputs.confirmpassword,{valid:"invalid",error:"Must match password"})})}):(this.state.inputs.confirmpassword.value!==this.state.inputs.password.value&&""===this.state.inputs.password.value||""===this.state.inputs.confirmpassword)&&this.setState({inputs:Object(v.a)({},this.state.inputs,{confirmpassword:Object(v.a)({},this.state.inputs.confirmpassword,{valid:"",error:""})})})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"registration-form-container"},r.a.createElement("div",{id:"loading",className:"loading "+(this.state.loading?"active":"")}),r.a.createElement("div",{id:"loadingDone",className:"loadingDone "+(this.state.loadingDone?"active":"")}),this.state.registered?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"done-loading-container"},r.a.createElement("p",{className:"interest-text"},this.state.doneloadingtext),r.a.createElement("button",{className:"register-new-button",onClick:function(){e.state.done.stop(),e.clearState()}},"Let\xb4s Brawl"))):r.a.createElement("div",{className:"form-container "+(this.state.loading?"inactive":"")},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"input-container-reg"},r.a.createElement("input",{className:"form-input "+("valid"===this.state.inputs.usertag.valid?"valid":"")+("invalid"===this.state.inputs.usertag.valid?"invalid":""),id:"usertag-input",type:"text",name:"usertag",placeholder:"Username",onChange:this.onInputChange,onBlur:this.liveValidation,autoComplete:"off",value:this.state.inputs.usertag.value}),r.a.createElement("span",{className:"errorMessage"},this.state.inputs.usertag.error)),r.a.createElement("div",{className:"input-container-reg"},r.a.createElement("input",{className:"form-input "+("valid"===this.state.inputs.email.valid?"valid":"")+("invalid"===this.state.inputs.email.valid?"invalid":""),id:"email-input",type:"text",name:"email",placeholder:"E-mail",onChange:this.onInputChange,onBlur:this.liveValidation,autoComplete:"off",value:this.state.inputs.email.value}),r.a.createElement("span",{className:"errorMessage"},this.state.inputs.email.error)),r.a.createElement("div",{className:"input-container-reg"},r.a.createElement("input",{className:"form-input "+("valid"===this.state.inputs.password.valid?"valid":"")+("invalid"===this.state.inputs.password.valid?"invalid":""),id:"password-input",type:"password",name:"password",placeholder:"Password",onChange:this.onInputChange,onBlur:this.liveValidation,autoComplete:"off",value:this.state.inputs.password.value}),r.a.createElement("span",{className:"errorMessage"},this.state.inputs.password.error)),r.a.createElement("div",{className:"input-container-reg"},r.a.createElement("input",{className:"form-input "+("valid"===this.state.inputs.confirmpassword.valid?"valid":"")+("invalid"===this.state.inputs.confirmpassword.valid?"invalid":""),id:"confirm-password-input",type:"password",name:"confirmpassword",placeholder:"Confirm Password",onChange:this.onInputChange,onBlur:this.liveValidation,automplete:"off",value:this.state.inputs.confirmpassword.value}),r.a.createElement("span",{className:"errorMessage"},this.state.inputs.confirmpassword.error)),r.a.createElement("div",{className:"input-container-reg"},r.a.createElement("input",{className:"form-input "+("valid"===this.state.inputs.alphakey.valid?"valid":"")+("invalid"===this.state.inputs.alphakey.valid?"invalid":""),id:"api-key-input",type:"text",name:"alphakey",placeholder:"API-KEY",onChange:this.onInputChange,onBlur:this.liveValidation,autoComplete:"off",value:this.state.inputs.alphakey.value}),r.a.createElement("span",{className:"errorMessage"},this.state.inputs.alphakey.error)),r.a.createElement("div",{className:"input-container-reg-button"},r.a.createElement("button",{id:"form-submit",className:this.state.submitFormActive?"active":"",onClick:this.state.submitFormActive?function(t){e.onEmailSubmit(t),e.setState({loading:!0})}:function(){}},"Create Account")))))}}]),t}(n.Component),J=function(e){var t=e.history;return r.a.createElement("section",{className:"register"},r.a.createElement("div",{className:"register-content-wrapper"},r.a.createElement("div",{className:"left-register-content"},r.a.createElement("div",{className:"SU"},r.a.createElement("h1",null,"Register"),r.a.createElement("p",null,"Why join Brawl Gaming?"),r.a.createElement("ul",null,r.a.createElement("li",null,"Ready up and join the Brawl Community"),r.a.createElement("li",null,"Bet on yourself with or against your friends"),r.a.createElement("li",null,"Brawl for the pot")))),r.a.createElement("div",{className:"right-register-content"},r.a.createElement(Y,{history:t}))))},Q=(a(64),function(){var e=function(){window.scrollTo(0,0)};return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"context-container"},r.a.createElement("h4",null,"Contact"),r.a.createElement("p",null,"Source Empire AB"),r.a.createElement("p",null,"Tvistev\xe4gen 47"),r.a.createElement("p",null,"907 29 UME\xc5"),r.a.createElement("a",{href:"mailto:info@sourceempire.io"},"info@sourceempire.io"))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"context-container"},r.a.createElement("h4",null,"Links"),r.a.createElement(l.b,{to:"/",onClick:function(){return e()}},"Home"),r.a.createElement(l.b,{to:"/download",onClick:function(){return e()}},"Download"),r.a.createElement(l.b,{to:"/concept",onClick:function(){return e()}},"Concept"),r.a.createElement(l.b,{to:"/games",onClick:function(){return e()}},"Games"),r.a.createElement(l.b,{to:"/faq",onClick:function(){return e()}},"FAQ"))),r.a.createElement("div",{className:"box"},r.a.createElement("div",{className:"context-container"},r.a.createElement("h4",null,"Follow"),r.a.createElement("a",{href:"https://www.linkedin.com/company/source-empire/about/"},"LinkedIn"),r.a.createElement("a",{href:"https://www.instagram.com/brawlgaming/"},"Instagram"))),r.a.createElement("p",{className:"copyright"},"\xa9 Source Empire AB 2019")))}),ee=(a(65),a(28),a(21));function te(){ee.a.initialize("UA-147561487-1"),ee.a.pageview("/")}var ae=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1];return console.log("production"),Object(n.useEffect)(te,[]),r.a.createElement(l.a,null,r.a.createElement("div",{className:"app"},r.a.createElement(k,{loggedIn:a,setLoggedIn:s}),r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/",component:F}),r.a.createElement(c.b,{path:"/download",component:M}),r.a.createElement(c.b,{path:"/games",component:L}),r.a.createElement(c.b,{path:"/concept",component:G}),r.a.createElement(c.b,{path:"/faq",component:Z}),r.a.createElement(c.b,{path:"/signup",component:J}),r.a.createElement(c.a,{from:"*",to:"/",component:F})),r.a.createElement(Q,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(ae,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[32,1,2]]]);
//# sourceMappingURL=main.bf635411.chunk.js.map