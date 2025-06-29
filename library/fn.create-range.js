var s=Object.defineProperty;var n=(e,t)=>s(e,"name",{value:t,configurable:!0});var u=n(e=>typeof e=="number","isNumber");var m=n(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"isObject");var y=n(e=>m(e)&&Symbol.iterator in e&&"min"in e&&u(e.min)&&"max"in e&&u(e.max),"isRange");var o=n((e,t)=>Object.freeze({0:e,1:t,length:2,[Symbol.iterator]:function*(){yield this[0],yield this[1]}}),"parseRangeB\
uffer");function l(e=1,t){let r=o(t===void 0?0:e,t===void 0?e:t),[i,a]=[Math.min(...r),Math.max(...r)];return Object.create(
r,{from:{enumerable:!0,value:r[0]},min:{enumerable:!0,value:i},magnitude:{enumerable:!0,value:a-i},mediana:{enumerable:!0,
value:i+(a-i)/2},max:{enumerable:!0,value:a},to:{enumerable:!0,value:r[1]},allot:{value:f},clamp:{value:b},clone:{value:c},
test:{value:g},toString:{value:h}})}n(l,"createRange");function f(e){return e>this.max?(e-this.max)%this.magnitude+this.
min:this.max-(this.min-e)%this.magnitude}n(f,"allocateOuterValue");function b(e){return e<this.min?this.min:e>this.max?this.
max:e}n(b,"restrictOuterValue");function c(){return l(...this)}n(c,"makeDuplicate");function g(e){return this.min<=e&&e<=
this.max}n(g,"includes");function h(){return`{x \u2208 R; ${this.min} \u22DC x \u22DC ${this.max}}`}n(h,"serialize");export{l as createRange,l as default,y as isRange};
