var U=Object.defineProperty;var n=(e,a)=>U(e,"name",{value:a,configurable:!0});var f=Object.freeze([0,360]),x=Object.freeze([0,2*Math.PI]),g=Object.freeze([0,100]),R=Object.freeze([-128,127]),_=Object.
freeze([0,255]),b=Object.freeze([0,65535]),E=Object.freeze([0,1]),l=Object.freeze([-1,1]),B=[.3457/.3585,1,(1-.3457-.3585)/
.3585],O=[.3127/.329,1,(1-.3127-.329)/.329];var S=216/24389;var z=24389/27;var d=n((e,a)=>Object.freeze({0:e,1:a,length:2,[Symbol.iterator]:function*(){yield this[0],yield this[1]}}),"parseRangeB\
uffer");function r(e=1,a){let o=d(a===void 0?0:e,a===void 0?e:a),[i,s]=[Math.min(...o),Math.max(...o)];return Object.create(
o,{from:{enumerable:!0,value:o[0]},min:{enumerable:!0,value:i},magnitude:{enumerable:!0,value:s-i},mediana:{enumerable:!0,
value:i+(s-i)/2},max:{enumerable:!0,value:s},to:{enumerable:!0,value:o[1]},allot:{value:L},clamp:{value:P},clone:{value:A},
test:{value:G},toString:{value:j}})}n(r,"createRange");function L(e){return e>this.max?(e-this.max)%this.magnitude+this.
min:this.max-(this.min-e)%this.magnitude}n(L,"allocateOuterValue");function P(e){return e<this.min?this.min:e>this.max?this.
max:e}n(P,"restrictOuterValue");function A(){return r(...this)}n(A,"makeDuplicate");function G(e){return this.min<=e&&e<=
this.max}n(G,"includes");function j(){return`{x \u2208 R; ${this.min} \u22DC x \u22DC ${this.max}}`}n(j,"serialize");var X=r(...f),Y=r(...x),T=r(...g),Z=r(...R),$=r(..._),W=r(...b),N=r(...E),q=r(...l);function v(e=T,a=N){let[o,i]=a,[s,c]=e,[u,m]=[i-o,c-s];function I(t){return typeof t=="string"&&(t=parseFloat(t)),p.domain.
test(t)===!1&&(t=t>i?(t-i)%u+o:i-(o-t)%u),m*(t-o)/u+s}n(I,"invert");function p(t){return typeof t=="string"&&(t=parseFloat(
t)),p.range.test(t)===!1&&(t=t>c?(t-c)%m+s:c-(s-t)%m),u*(t-s)/m+o}return n(p,"calculator"),Object.defineProperties(p,{domain:{
enumerable:!0,value:r(o,i)},range:{enumerable:!0,value:r(s,c)},invert:{enumerable:!0,value:I}})}n(v,"initScale");export{v as default,v as initScale};
