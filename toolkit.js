var I=Object.defineProperty;var t=(e,n)=>I(e,"name",{value:n,configurable:!0});var b=t(e=>i(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(n=>n in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(n=>n in e&&typeof e[n]=="fun\
ction"),"isRange");var $=t(e=>typeof e=="number","isNumber"),g=t(e=>typeof e=="strin\
g","isString"),Y=t(e=>i(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),i=t(e=>e!==null&&typeof e==
"object","isObject"),D=t(e=>g(e)&&j.has(e),"isColorChannelKey"),v=t(
e=>g(e)&&E.has(e),"isSpaceDimensionID"),k=t(e=>g(e)&&M.has(e),"is\
SpaceID"),L=t(e=>i(e)&&"ident"in e&&k(e.ident)&&"CSYS"in e&&i(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),W=t(e=>i(e)&&
"ident"in e&&v(e.ident)&&"short"in e&&D(e.short)&&"domain"in e&&b(
e.domain),"isSpaceDimension"),X=t(e=>i(e)&&e instanceof Iterator&&
"alpha"in e&&$(e.alpha),"isColorChannel"),E=new Set(["abscissa","\
angle","applicate","blackness","blue-yellow","blue","chroma","gre\
en","hue","lightness","ordinate","radius","green-red","red","satu\
ration","whiteness"]),j=new Set(["a","b","B","C","c","G","g","h",
"L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),M=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","\
prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50",
"xyz-d65"]);var O=t(e=>{let n=Object.getOwnPropertyNames(e);for(let r of n){let a=e[r];
i(a)&&O(a)}return Object.freeze(e)},"deepFreeze");var Z=t(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"-"),
"toKebabCase");var ne=t((e,n="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((a,s)=>r||0<s?a[0].toUpperCase().concat(a.slice(1)):a).join(n),
"toPascalCase");function d(...e){let[n,r]=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),a=Object.create(null,{0:{value:n},
1:{value:r},[Symbol.iterator]:{value:t(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:t(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(a,{from:{
enumerable:!0,value:n},to:{enumerable:!0,value:r},allot:{value:t(
function(o){return this.test(o)?o:o>this.from?(o-this.to)%this.value+
this.from:this.to-(this.from-o)%this.value},"allocateOuterValue")},
clamp:{value:t(function(o){return this.test(o)?o:Math.max(Math.min(
o,this.to),this.from)},"restrictOuterValue")},test:{value:t(function(s){
return this.from<=s&&s<=this.to},"value")}}),a}t(d,"initRange");var c=String.raw`none|-?[\d\.]+%?`,S=`(${c}) (${c}) (${c})(?: / (${c}\
))?`,p=String.raw`a-f\d`,z=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
P=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
x=new RegExp(`^(${z})\\(${S}\\)$`),m=new RegExp(`^color\\((${P}) ${S}\
\\)$`),T=`#?[${p}]{3}[${p}]?`,A=`#?[${p}]{6}([${p}]{2})?`,w=new RegExp(
`[^#${p}]`,"gi"),R=new RegExp(`^${T}$|^${A}$`,"i"),C=t(e=>x.test(
e)||m.test(e),"isColorFunction"),y=t(e=>w.test(e)===!1&&R.test(e),
"isHEXColor"),le=t(e=>typeof e=="string"&&(y(e)||C(e)),"isCSSColo\
r"),pe=t(e=>{if(y(e))return["srgb",...F(e)];if(C(e)){let n=(m.test(
e)?m.exec(e)?.slice(1):x.exec(e)?.slice(1))??["none","none","none"],
r=V(n.pop()),a=n.shift()??"srgb",[s="none",o="none",u="none"]=n.map(
l=>l!==void 0&&/^[-.\d]+$/.test(l)?parseFloat(l):l);return[a,[s,o,
u],r]}throw new TypeError(`Expected a valid representation that d\
efined as the <color> CSS data type, but passed "${e}".`)},"parse\
CSSColor"),F=t(e=>{if(w.test(e)||!R.test(e))throw new TypeError("\
Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));let n=1;
e.length===8&&(n=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.
length===4&&(n=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(
0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(
2));let r=parseInt(e,16),a=r>>16&255,s=r>>8&255,o=r&255;return[[a,
s,o],n]},"parseHEXColor"),ce=t(e=>{let n=NaN,r="deg";if(typeof e==
"number")n=e;else{let l=String.raw`deg|grad|rad|turn`,h=new RegExp(
`^(-?[d.]+)(${l})?$`,"i");if(h.test(e)){let f=h.exec(e)?.slice(1)??
["0","deg"];n=parseFloat(f[0]),r=f[1]}else if(e==="none")n=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,s]=r===
"grad"?[0,400]:r==="deg"?[0,360]:r==="rad"?[-Math.PI,Math.PI]:[0,
1],o=d(a,s);o.test(n)===!1&&(n=o.allot(n));let u=r==="grad"?180/200:
r==="rad"?180/Math.PI:r==="turn"?360:1;return n*u},"parseCSSAngle");
function V(e){let n=0;return e===void 0||!e?1:e==="none"?0:(n=parseFloat(
e),e.charAt(-1)==="%"&&(n/=100),Math.min(Math.max(n,0),1))}t(V,"p\
arseCSSAlphaChannel");export{x as CSSCAMFunction,m as CSSColorFunction,O as deepFreeze,
le as isCSSColor,X as isColorChannel,D as isColorChannelKey,C as isColorFunction,
L as isColorSpace,y as isHEXColor,Y as isIterableObject,$ as isNumber,
i as isObject,W as isSpaceDimension,v as isSpaceDimensionID,k as isSpaceID,
g as isString,ce as parseCSSAngle,pe as parseCSSColor,F as parseHEXColor,
Z as toKebabCase,ne as toPascalCase};
