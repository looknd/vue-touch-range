webpackJsonp([0],[,,function(e,t,a){"use strict";var n=a(12);t.a={components:{TouchRange:n.a},data:function(){return{code:'<TouchRange\n  :min="min"\n  :max="max"\n  :step="step"\n  :disabled="disabled"\n  v-model="value"\n/>\n',min:20,max:200,value:50,disabled:!1}}}},function(e,t,a){"use strict";t.a={name:"TouchRange",props:{value:{type:Number,default:0},min:{type:Number,default:0},max:{type:Number,default:1},step:{type:[Number,String],default:"any"},disabled:{type:Boolean,default:!1}},computed:{range:function(){return this.max-this.min}},methods:{emit:function(e){this.$emit("input",Number(e))},touchmove:function(e){e.preventDefault();var t=e.target.clientWidth,a=Math.max(0,Math.min(t,e.touches[0].pageX-e.target.offsetLeft))/t;this.emit(a*this.range+this.min)}}}},function(e,t,a){e.exports=a(5)},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(6),i=a(10);new n.a({el:"#app",render:function(e){return e(i.a)}})},,,,,function(e,t,a){"use strict";function n(e){a(11)}var i=a(2),r=a(14),s=a(1),u=n,d=s(i.a,r.a,!1,u,null,null);t.a=d.exports},function(e,t){},function(e,t,a){"use strict";var n=a(3),i=a(13),r=a(1),s=r(n.a,i.a,!1,null,null,null);t.a=s.exports},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;return(e._self._c||t)("input",{attrs:{type:"range",step:e.step,min:e.min,max:e.max,disabled:e.disabled},domProps:{value:e.value},on:{input:function(t){e.emit(t.target.value)},touchmove:e.touchmove,touchstart:e.touchmove}})},i=[],r={render:n,staticRenderFns:i};t.a=r},function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.0.0/css/bootstrap-reboot.min.css"}}),e._v(" "),e._m(0),e._v(" "),a("section",[a("h2",[e._v("Example")]),e._v(" "),a("div",[a("h3",[e._v("touch range")]),e._v(" "),a("TouchRange",{staticClass:"slider",attrs:{min:e.min,max:e.max,disabled:e.disabled},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),e._v(" "),a("div",[a("h3",[e._v("Vanilla input-range (Not support touch on track)")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model.number",value:e.value,expression:"value",modifiers:{number:!0}}],staticClass:"slider",attrs:{type:"range",min:e.min,max:e.max,disabled:e.disabled},domProps:{value:e.value},on:{__r:function(t){e.value=e._n(t.target.value)},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),a("div",[a("div",[e._v("\n        min:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.min,expression:"min"}],attrs:{type:"number"},domProps:{value:e.min},on:{input:function(t){t.target.composing||(e.min=t.target.value)}}})]),e._v(" "),a("div",[e._v("\n        max:\n        "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.max,expression:"max"}],attrs:{type:"number"},domProps:{value:e.max},on:{input:function(t){t.target.composing||(e.max=t.target.value)}}})]),e._v(" "),a("div",[e._v("\n        disabled:"),a("input",{directives:[{name:"model",rawName:"v-model",value:e.disabled,expression:"disabled"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.disabled)?e._i(e.disabled,null)>-1:e.disabled},on:{change:function(t){var a=e.disabled,n=t.target,i=!!n.checked;if(Array.isArray(a)){var r=e._i(a,null);n.checked?r<0&&(e.disabled=a.concat([null])):r>-1&&(e.disabled=a.slice(0,r).concat(a.slice(r+1)))}else e.disabled=i}}})]),e._v(" "),a("div",[e._v("\n        Value: "+e._s(e.value.toFixed(1))+"\n      ")])])]),e._v(" "),a("section",[a("h2",[e._v("Usage")]),e._v(" "),a("div",[a("pre",[a("code",[e._v(e._s(e.code))])])])]),e._v(" "),e._m(1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",[a("h1",[e._v("\n      Vue touch range\n    ")]),e._v(" "),a("p",[e._v("\n      Touch extension of input-range element\n    ")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("section",[a("h2",[e._v("Props")]),e._v(" "),a("h3",[e._v("[Optional]")]),e._v(" "),a("dl",[a("dt",[e._v("value: Number")]),e._v(" "),a("dd",[e._v("(default: 0)")]),e._v(" "),a("dt",[e._v("min: Number")]),e._v(" "),a("dd",[e._v("(default: 0)")]),e._v(" "),a("dt",[e._v("max: Number")]),e._v(" "),a("dd",[e._v("(default: 1)")]),e._v(" "),a("dt",[e._v("step: Number | String")]),e._v(" "),a("dd",[e._v("(default: any)")]),e._v(" "),a("dt",[e._v("disabled: Boolean")]),e._v(" "),a("dd",[e._v("(default: false)")])])])}],r={render:n,staticRenderFns:i};t.a=r}],[4]);
//# sourceMappingURL=client.f4bb8785.js.map