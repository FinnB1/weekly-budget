(this["webpackJsonpweekly-budget"]=this["webpackJsonpweekly-budget"]||[]).push([[0],{166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(55),l=a.n(s),o=(a(64),a(11)),i=a(12),c=a(26),u=a(14),m=a(13),d=(a(65),a(27),a(66),a(5)),h=a(6),p=a(9),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).multiplier=!1,n.state={groceries:0,drinks:0,transport:0},n}return Object(i.a)(a,[{key:"multiplyBudget",value:function(e,t){var a=this.props.handler;"all"===e?this.setState({groceries:2*this.state.groceries,drinks:2*this.state.drinks},(function(){a(this.state)})):"undo-all"===e?this.setState({groceries:.5*this.state.groceries,drinks:.5*this.state.drinks},(function(){a(this.state)})):"supermarket"===e?this.setState({groceries:2*this.state.groceries},(function(){a(this.state)})):"frequency"===e?this.setState({drinks:2*this.state.drinks},(function(){a(this.state)})):"drinks"===e&&this.setState({drinks:Math.round(this.state.drinks*t)},(function(){a(this.state)}))}},{key:"checkMultiplier",value:function(e){this.multiplier&&this.multiplyBudget(e)}},{key:"modifyBudget",value:function(e,t){var a=this.props.handler;switch(e){case"supermarket":this.setState({groceries:t},(function(){a(this.state),this.checkMultiplier("supermarket")}));break;case"frequency":this.setState({drinks:t},(function(){a(this.state),this.checkMultiplier("frequency")}));break;case"location":"1"===t?(this.multiplyBudget("all"),this.multiplier=!0):"1"!==t&&!0===this.multiplier&&this.multiplyBudget("undo-all");break;case"strength":this.multiplyBudget("drinks",t);break;case"transport":this.setState({transport:t},(function(){a(this.state)}))}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(d.a,{variant:"flush",className:"main-list"},r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{as:p.a,className:"form-row"},"I will shop at",r.a.createElement(h.a.Control,{as:"select",className:"dropdown mx-3 mt-2",defaultValue:"...",onChange:function(t){return e.modifyBudget("supermarket",t.target.value)}},r.a.createElement("option",null,"..."),r.a.createElement("option",{value:"15"},"Lidl or Aldi"),r.a.createElement("option",{value:"25"},"Tesco or Sainsburys"),r.a.createElement("option",{value:"35"},"Waitrose or M&S")))),r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{as:p.a,className:"form-row"},"I will go out",r.a.createElement(h.a.Control,{as:"select",className:"dropdown mx-3 mt-2",defaultValue:"...",onChange:function(t){return e.modifyBudget("frequency",t.target.value)}},r.a.createElement("option",null,"..."),r.a.createElement("option",{value:"8"},"once"),r.a.createElement("option",{value:"15"},"twice"),r.a.createElement("option",{value:"30"},"three times or more")),"a week.")),r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{as:p.a,className:"form-row"},"I'll be living in",r.a.createElement(h.a.Control,{as:"select",className:"dropdown mx-3 mt-2",defaultValue:"...",onChange:function(t){return e.modifyBudget("location",t.target.value)}},r.a.createElement("option",null,"..."),r.a.createElement("option",{value:"1"},"in London"),r.a.createElement("option",{value:"2"},"Elsewhere")))),r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{as:p.a,className:"form-row"},"I'm",r.a.createElement(h.a.Control,{as:"select",className:"dropdown mx-3 mt-2",defaultValue:"...",onChange:function(t){return e.modifyBudget("strength",t.target.value)}},r.a.createElement("option",null,"..."),r.a.createElement("option",{value:"0.75"},"a lightweight"),r.a.createElement("option",{value:"1"},"average"),r.a.createElement("option",{value:"1.5"},"a heavyweight")))),r.a.createElement(d.a.Item,null,r.a.createElement(h.a.Group,{as:p.a,className:"form-row"},"I'm also",r.a.createElement(h.a.Control,{as:"select",className:"dropdown mx-3 mt-2",defaultValue:"...",onChange:function(t){return e.modifyBudget("transport",t.target.value)}},r.a.createElement("option",null,"..."),r.a.createElement("option",{value:"0"},"within walking distance or using a bus/train pass"),r.a.createElement("option",{value:"15"},"driving my own car"),r.a.createElement("option",{value:"20"},"commuting by bus or train without pass"))))),this.state.button)}}]),a}(r.a.Component),f=a(58),E=a(18),v=a(56),k=a(57),b=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){return Object(o.a)(this,a),t.call(this,e)}return Object(i.a)(a,[{key:"setValue",value:function(e,t){this.setState(Object(v.a)({},e,t))}},{key:"render",value:function(){var e;return e={datasets:[{label:"\xa3 per week",data:[this.props.data.groceries,this.props.data.drinks,this.props.data.transport,5],backgroundColor:["rgba(255, 99, 132, 0.8)","rgba(54, 162, 235, 0.8)","rgba(255, 206, 86, 0.8)"]}],labels:["Groceries","Drinks","Transport","Other Costs"]},r.a.createElement("div",null,r.a.createElement(k.Doughnut,{data:e}))}}]),a}(r.a.Component),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).handler=function(e){console.log(e),n.setState({groceries:e.groceries,drinks:e.drinks,transport:e.transport})},n.state={groceries:0,drinks:0,transport:0},n.handler=n.handler.bind(Object(c.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(f.a,{className:"App"},r.a.createElement(d.a,{variant:"flush",className:"main-list-group"},r.a.createElement(d.a.Item,{className:"title"},"Weekly Budget Calculator \ud83d\udcb8"),r.a.createElement(d.a.Item,null,r.a.createElement(p.a,{noGutters:"true"},r.a.createElement(E.a,null,r.a.createElement(g,{handler:this.handler})),r.a.createElement(E.a,{className:"piechart-container"},r.a.createElement(b,{data:{groceries:this.state.groceries,drinks:this.state.drinks,transport:this.state.transport}}))))))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},27:function(e,t,a){},59:function(e,t,a){e.exports=a(166)},64:function(e,t,a){},65:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"}},[[59,1,2]]]);
//# sourceMappingURL=main.2520b91e.chunk.js.map