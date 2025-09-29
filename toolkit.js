var D=Object.defineProperty;var n=(e,t)=>D(e,"name",{value:t,configurable:!0});var H=n((e,t=12)=>{let r=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*r)/r},"round");var f=n(e=>i(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var $=n(e=>typeof e=="number","isNumber"),g=n(e=>typeof e=="strin\
g","isString"),X=n(e=>i(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),i=n(e=>e!==null&&typeof e==
"object","isObject"),U=n(e=>{if(d(e)){let t=Iterator.from(["hsl",
"hwb","lab","lch","oklab","oklch","rgb"]);for(let r of t)if(r===e)
return!0}return!1},"isCAM"),k=n(e=>g(e)&&M.has(e),"isColorChannel\
Key"),v=n(e=>g(e)&&E.has(e),"isSpaceDimensionID"),d=n(e=>g(e)&&P.
has(e),"isSpaceID"),_=n(e=>i(e)&&"ident"in e&&d(e.ident)&&"CSYS"in
e&&i(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),
q=n(e=>i(e)&&"ident"in e&&v(e.ident)&&"short"in e&&k(e.short)&&"d\
omain"in e&&f(e.domain),"isSpaceDimension"),J=n(e=>i(e)&&e instanceof
Iterator&&"alpha"in e&&$(e.alpha),"isColorChannel"),E=new Set(["a\
bscissa","angle","applicate","blackness","blue-yellow","blue","ch\
roma","green","hue","lightness","ordinate","radius","green-red","\
red","saturation","whiteness"]),M=new Set(["a","b","B","C","c","G",
"g","h","L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),
P=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab",
"oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz",
"xyz-d50","xyz-d65"]);var T=n(e=>{let t=Object.getOwnPropertyNames(e);for(let r of t){let a=e[r];
i(a)&&T(a)}return Object.freeze(e)},"deepFreeze");var re=n(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var se=n((e,t="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((a,s)=>r||0<s?a[0].toUpperCase().concat(a.slice(1)):a).join(t),
"toPascalCase");function S(...e){let[t,r]=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),a=Object.create(null,{0:{value:t},
1:{value:r},[Symbol.iterator]:{value:n(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:n(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(a,{from:{
enumerable:!0,value:t},to:{enumerable:!0,value:r},allot:{value:n(
function(o){return this.test(o)?o:o>this.from?(o-this.to)%this.value+
this.from:this.to-(this.from-o)%this.value},"allocateOuterValue")},
clamp:{value:n(function(o){return this.test(o)?o:Math.max(Math.min(
o,this.to),this.from)},"restrictOuterValue")},test:{value:n(function(s){
return this.from<=s&&s<=this.to},"value")}}),a}n(S,"initRange");var c=String.raw`none|-?[\d\.]+%?`,x=`(${c}) (${c}) (${c})(?: / (${c}\
))?`,p=String.raw`a-f\d`,j=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
A=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
w=new RegExp(`^(${j})\\(${x}\\)$`),m=new RegExp(`^color\\((${A}) ${x}\
\\)$`),O=`#?[${p}]{3}[${p}]?`,z=`#?[${p}]{6}([${p}]{2})?`,y=new RegExp(
`[^#${p}]`,"gi"),C=new RegExp(`^${O}$|^${z}$`,"i"),R=n(e=>w.test(
e)||m.test(e),"isColorFunction"),I=n(e=>y.test(e)===!1&&C.test(e),
"isHEXColor"),ge=n(e=>typeof e=="string"&&(I(e)||R(e)),"isCSSColo\
r"),me=n(e=>{if(I(e))return["srgb",...F(e)];if(R(e)){let t=(m.test(
e)?m.exec(e)?.slice(1):w.exec(e)?.slice(1))??["none","none","none"],
r=N(t.pop()),a=t.shift()??"srgb",[s="none",o="none",u="none"]=t.map(
l=>l!==void 0&&/^[-.\d]+$/.test(l)?parseFloat(l):l);return[a,[s,o,
u],r]}throw new TypeError(`Expected a valid representation that d\
efined as the <color> CSS data type, but passed "${e}".`)},"parse\
CSSColor"),F=n(e=>{if(y.test(e)||!C.test(e))throw new TypeError("\
Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));let t=1;
e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.
length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(
0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(
2));let r=parseInt(e,16),a=r>>16&255,s=r>>8&255,o=r&255;return[[a,
s,o],t]},"parseHEXColor"),he=n(e=>{let t=NaN,r="deg";if(typeof e==
"number")t=e;else{let l=String.raw`deg|grad|rad|turn`,h=new RegExp(
`^(-?[d.]+)(${l})?$`,"i");if(h.test(e)){let b=h.exec(e)?.slice(1)??
["0","deg"];t=parseFloat(b[0]),r=b[1]}else if(e==="none")t=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,s]=r===
"grad"?[0,400]:r==="deg"?[0,360]:r==="rad"?[-Math.PI,Math.PI]:[0,
1],o=S(a,s);o.test(t)===!1&&(t=o.allot(t));let u=r==="grad"?180/200:
r==="rad"?180/Math.PI:r==="turn"?360:1;return t*u},"parseCSSAngle");
function N(e){let t=0;return e===void 0||!e?1:e==="none"?0:(t=parseFloat(
e),e.charAt(-1)==="%"&&(t/=100),Math.min(Math.max(t,0),1))}n(N,"p\
arseCSSAlphaChannel");export{w as CSSCAMFunction,m as CSSColorFunction,T as deepFreeze,
U as isCAM,ge as isCSSColor,J as isColorChannel,k as isColorChannelKey,
R as isColorFunction,_ as isColorSpace,I as isHEXColor,X as isIterableObject,
$ as isNumber,i as isObject,q as isSpaceDimension,v as isSpaceDimensionID,
d as isSpaceID,g as isString,he as parseCSSAngle,me as parseCSSColor,
F as parseHEXColor,H as round,re as toKebabCase,se as toPascalCase};
