(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(8),o=n.n(r),c=(n(14),n(15),n(1)),s=n(2),u=n(4),l=n(3),m=n(6),p=n(5),h=(n(16),function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Cidade: ",this.props.city),i.a.createElement("h2",null,"Clima: ",this.props.description),i.a.createElement("h2",null,"Temperatura Atual: ",this.props.temp),i.a.createElement("h2",null,"Temperatura max: ",this.props.temp_max),i.a.createElement("h2",null,"Temperatura min: ",this.props.temp_min),i.a.createElement("h2",null,"Humidade: ",this.props.humidity),i.a.createElement("img",{src:this.props.icon}))}}]),t}(a.Component)),d=function(e){function t(e){return Object(c.a)(this,t),Object(u.a)(this,Object(l.a)(t).call(this))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,this.props.erro))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this))).handleKeyPress=function(e){"Enter"===e.key&&n.consulta()},n.state={search:"",validKey:!1,temp:0,temp_min:0,temp_max:0,city:"",humidity:0,description:"",icon:"",isVisorActive:!1,erro:""},n.consulta=n.consulta.bind(Object(m.a)(n)),n.handleKeyPress=n.handleKeyPress.bind(Object(m.a)(n)),n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"ajustadoEncodeURIComponent",value:function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16)}))}},{key:"consulta",value:function(){var e=this,t=this.ajustadoEncodeURIComponent(this.state.search),n="https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&appid=").concat("e8aec5dd17aedfa681482bd986fbead9","&units=metric&lang=pt_br");fetch(n).then((function(e){return e.json()})).then((function(t){var n=t.weather[0].description,a="http://openweathermap.org/img/w/".concat(t.weather[0].icon,".png"),i=t.name,r=t.main,o=r.temp,c=r.temp_min,s=r.temp_max,u=r.humidity;e.setState({city:i,description:n,temp:o,temp_max:s,temp_min:c,humidity:u,icon:a,isVisorActive:!0,erro:""})})).catch((function(){e.setState({erro:"Por favor pesquise uma cidade valida",isVisorActive:!1})}))}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("h2",null,"Previs\xe3o do tempo"),i.a.createElement("p",null,"Exemplo: S\xe3o Paulo"),i.a.createElement("input",{type:"text",onKeyPress:this.handleKeyPress,onChange:function(t){e.setState({search:t.target.value})}}),i.a.createElement("input",{type:"button",value:"Enter",onClickCapture:this.consulta}),this.state.isVisorActive?i.a.createElement(h,{city:this.state.city,description:this.state.description,temp:this.state.temp,temp_max:this.state.temp_max,temp_min:this.state.temp_min,humidity:this.state.humidity,icon:this.state.icon}):i.a.createElement(d,{erro:this.state.erro}))}}]),t}(a.Component);var v=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(f,{city:"Sao_Paulo"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.7fef9066.chunk.js.map