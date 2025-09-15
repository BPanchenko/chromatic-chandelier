var I=Object.defineProperty;var n=(e,t)=>I(e,"name",{value:t,configurable:!0});var H=n((e,t=12)=>{let r=t?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*r)/r},"round");var b=n(e=>i(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var $=n(e=>typeof e=="number","isNumber"),g=n(e=>typeof e=="strin\
g","isString"),X=n(e=>i(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),i=n(e=>e!==null&&typeof e==
"object","isObject"),D=n(e=>g(e)&&M.has(e),"isColorChannelKey"),v=n(
e=>g(e)&&E.has(e),"isSpaceDimensionID"),k=n(e=>g(e)&&j.has(e),"is\
SpaceID"),U=n(e=>i(e)&&"ident"in e&&k(e.ident)&&"CSYS"in e&&i(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),_=n(e=>i(e)&&
"ident"in e&&v(e.ident)&&"short"in e&&D(e.short)&&"domain"in e&&b(
e.domain),"isSpaceDimension"),q=n(e=>i(e)&&e instanceof Iterator&&
"alpha"in e&&$(e.alpha),"isColorChannel"),E=new Set(["abscissa","\
angle","applicate","blackness","blue-yellow","blue","chroma","gre\
en","hue","lightness","ordinate","radius","green-red","red","satu\
ration","whiteness"]),M=new Set(["a","b","B","C","c","G","g","h",
"L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),j=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","\
prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50",
"xyz-d65"]);var O=n(e=>{let t=Object.getOwnPropertyNames(e);for(let r of t){let a=e[r];
i(a)&&O(a)}return Object.freeze(e)},"deepFreeze");var ne=n(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var ae=n((e,t="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((a,s)=>r||0<s?a[0].toUpperCase().concat(a.slice(1)):a).join(t),
"toPascalCase");function d(...e){let[t,r]=e.length===1?Array.of(0,e[0]):Array.of(
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
return this.from<=s&&s<=this.to},"value")}}),a}n(d,"initRange");var c=String.raw`none|-?[\d\.]+%?`,S=`(${c}) (${c}) (${c})(?: / (${c}\
))?`,p=String.raw`a-f\d`,P=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
z=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
x=new RegExp(`^(${P})\\(${S}\\)$`),m=new RegExp(`^color\\((${z}) ${S}\
\\)$`),T=`#?[${p}]{3}[${p}]?`,A=`#?[${p}]{6}([${p}]{2})?`,R=new RegExp(
`[^#${p}]`,"gi"),w=new RegExp(`^${T}$|^${A}$`,"i"),C=n(e=>x.test(
e)||m.test(e),"isColorFunction"),y=n(e=>R.test(e)===!1&&w.test(e),
"isHEXColor"),ue=n(e=>typeof e=="string"&&(y(e)||C(e)),"isCSSColo\
r"),ge=n(e=>{if(y(e))return["srgb",...F(e)];if(C(e)){let t=(m.test(
e)?m.exec(e)?.slice(1):x.exec(e)?.slice(1))??["none","none","none"],
r=N(t.pop()),a=t.shift()??"srgb",[s="none",o="none",u="none"]=t.map(
l=>l!==void 0&&/^[-.\d]+$/.test(l)?parseFloat(l):l);return[a,[s,o,
u],r]}throw new TypeError(`Expected a valid representation that d\
efined as the <color> CSS data type, but passed "${e}".`)},"parse\
CSSColor"),F=n(e=>{if(R.test(e)||!w.test(e))throw new TypeError("\
Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));let t=1;
e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.
length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(
0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(
2));let r=parseInt(e,16),a=r>>16&255,s=r>>8&255,o=r&255;return[[a,
s,o],t]},"parseHEXColor"),me=n(e=>{let t=NaN,r="deg";if(typeof e==
"number")t=e;else{let l=String.raw`deg|grad|rad|turn`,h=new RegExp(
`^(-?[d.]+)(${l})?$`,"i");if(h.test(e)){let f=h.exec(e)?.slice(1)??
["0","deg"];t=parseFloat(f[0]),r=f[1]}else if(e==="none")t=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,s]=r===
"grad"?[0,400]:r==="deg"?[0,360]:r==="rad"?[-Math.PI,Math.PI]:[0,
1],o=d(a,s);o.test(t)===!1&&(t=o.allot(t));let u=r==="grad"?180/200:
r==="rad"?180/Math.PI:r==="turn"?360:1;return t*u},"parseCSSAngle");
function N(e){let t=0;return e===void 0||!e?1:e==="none"?0:(t=parseFloat(
e),e.charAt(-1)==="%"&&(t/=100),Math.min(Math.max(t,0),1))}n(N,"p\
arseCSSAlphaChannel");export{x as CSSCAMFunction,m as CSSColorFunction,O as deepFreeze,
ue as isCSSColor,q as isColorChannel,D as isColorChannelKey,C as isColorFunction,
U as isColorSpace,y as isHEXColor,X as isIterableObject,$ as isNumber,
i as isObject,_ as isSpaceDimension,v as isSpaceDimensionID,k as isSpaceID,
g as isString,me as parseCSSAngle,ge as parseCSSColor,F as parseHEXColor,
H as round,ne as toKebabCase,ae as toPascalCase};
