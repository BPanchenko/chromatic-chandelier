var E=Object.defineProperty;var t=(e,n)=>E(e,"name",{value:n,configurable:!0});var x=t(e=>s(e)&&Symbol.iterator in e&&"minimum"in e&&p(e.minimum)&&
"maximum"in e&&p(e.maximum)&&"value"in e&&p(e.value)&&e.value>0,"\
isRange");function w(...e){let n=e.length===1?Array.of(0,e[0]):Array.of(Math.
min(...e),Math.max(...e)),[r,a]=n,o=a-r,i=r+o/2;return Object.create(
null,{from:{value:r},to:{value:a},minimum:{enumerable:!0,value:r},
maximum:{enumerable:!0,value:a},avg:{enumerable:!0,value:i},value:{
enumerable:!0,value:o},allot:{value:v},clamp:{value:z},test:{value:t(
l=>r<=l&&l<=a,"value")},toString:{value:t(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:t(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}t(w,"createRange");function v(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.from:
this.to-(this.from-e)%this.value}t(v,"allocateOuterValue");function z(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}t(z,
"restrictOuterValue");var p=t(e=>typeof e=="number","isNumber"),g=t(e=>typeof e=="strin\
g","isString"),q=t(e=>s(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),s=t(e=>e!==null&&typeof e==
"object","isObject"),M=t(e=>g(e)&&A.has(e),"isColorChannelKey"),O=t(
e=>g(e)&&T.has(e),"isSpaceDimensionID"),P=t(e=>g(e)&&F.has(e),"is\
SpaceID"),y=t(e=>s(e)&&"ident"in e&&P(e.ident)&&"CSYS"in e&&s(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),J=t(e=>s(e)&&
"ident"in e&&O(e.ident)&&"short"in e&&M(e.short)&&"domain"in e&&x(
e.domain),"isSpaceDimension"),Q=t(e=>s(e)&&e instanceof Iterator&&
"alpha"in e&&p(e.alpha),"isColorChannel");var T=new Set(["abscissa","angle","applicate","blackness","blue-y\
ellow","blue","chroma","green","hue","lightness","ordinate","radi\
us","green-red","red","saturation","whiteness"]),A=new Set(["a","\
b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y",
"z","rho","phi"]),F=new Set(["a98-rgb","display-p3","hsl","hwb","\
lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]);var V=t(e=>{let n=Object.getOwnPropertyNames(e);for(let r of n){let a=e[r];
s(a)&&V(a)}return Object.freeze(e)},"deepFreeze");var ae=t(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var ie=t((e,n="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((a,o)=>r||0<o?a[0].toUpperCase().concat(a.slice(1)):a).join(n),
"toPascalCase");var C=new Map([["a98-rgb","#space/rgb.js"],["display-p3","#space/\
rgb.js"],["hsl","#space/hsl.js"],["hwb","#space/hwb.js"],["lab","\
#space/lab.js"],["lch","#space/lch.js"],["oklab","#space/oklab.js"],
["oklch","#space/oklch.js"],["rgb","#space/rgb.js"],["srgb","#spa\
ce/rgb.js"],["srgb-linear","#space/rgb.js"],["xyz","#space/xyz.js"],
["xyz-d50","#space/xyz.js"],["xyz-d65","#space/xyz.js"],["prophot\
o-rgb","#space/rgb.js"],["rec2020","#space/rgb.js"]]),b=new Map;async function f(e){if(b.has(e))return b.get(e);if(C.has(e)){let r=await import(C.
get(e)??"lib.manual"),a=Object.values(r).find(o=>o.ident===e);if(y(
a))return b.set(a.ident,a),a}throw new Error("The color space not\
 found by passed argument: "+e)}t(f,"initColorSpaceById");var m=String.raw`none|-?[\d\.]+%?`,R=`(${m}) (${m}) (${m})(?: / (${m}\
))?`,u=String.raw`a-f\d`,B=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
H=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
j=new RegExp(`^(${B})\\(${R}\\)$`),h=new RegExp(`^color\\((${H}) ${R}\
\\)$`),N=`#?[${u}]{3}[${u}]?`,K=`#?[${u}]{6}([${u}]{2})?`,D=new RegExp(
`[^#${u}]`,"gi"),I=new RegExp(`^${N}$|^${K}$`,"i"),k=t(e=>j.test(
e)||h.test(e),"isColorFunction"),$=t(e=>D.test(e)===!1&&I.test(e),
"isHEXColor"),fe=t(e=>typeof e=="string"&&($(e)||k(e)),"isCSSColo\
r"),he=t(async e=>{if($(e)){let n=await f("rgb"),[r,a]=G(e);return[
n,r,a]}if(k(e)){let n=(h.test(e)?h.exec(e)?.slice(1):j.exec(e)?.slice(
1))??["none","none","none"],r=Y(n.pop()),a=await f(n.shift()??"sr\
gb"),[o="none",i="none",l="none"]=n.map(c=>c!==void 0&&/^[-.\d]+$/.
test(c)?parseFloat(c):c);return[a,[o,i,l],r]}throw new TypeError(
`Expected a valid representation that defined as the <color> CSS \
data type, but passed "${e}".`)},"parseCSSColor"),G=t(e=>{if(D.test(
e)||!I.test(e))throw new TypeError("Expected a valid hex string");
e.startsWith("#")&&(e=e.slice(1));let n=1;e.length===8&&(n=parseInt(
e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(n=parseInt(e.
slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0].
repeat(2)+e[1].repeat(2)+e[2].repeat(2));let r=parseInt(e,16),a=r>>
16&255,o=r>>8&255,i=r&255;return[[a,o,i],n]},"parseHEXColor"),Se=t(
e=>{let n=NaN,r="deg";if(typeof e=="number")n=e;else{let c=String.
raw`deg|grad|rad|turn`,S=new RegExp(`^(-?[d.]+)(${c})?$`,"i");if(S.
test(e)){let d=S.exec(e)?.slice(1)??["0","deg"];n=parseFloat(d[0]),
r=d[1]}else if(e==="none")n=NaN;else throw new TypeError("Expecte\
d a valid <angle> string")}let[a,o]=r==="grad"?[0,400]:r==="deg"?
[0,360]:r==="rad"?[-Math.PI,Math.PI]:[0,1],i=w(a,o);i.test(n)===!1&&
(n=i.allot(n));let l=r==="grad"?180/200:r==="rad"?180/Math.PI:r===
"turn"?360:1;return n*l},"parseCSSAngle");function Y(e){let n=0;return e===
void 0||!e?1:e==="none"?0:(n=parseFloat(e),e.charAt(-1)==="%"&&(n/=
100),Math.min(Math.max(n,0),1))}t(Y,"parseCSSAlphaChannel");export{j as CSSCAMFunction,h as CSSColorFunction,V as deepFreeze,
fe as isCSSColor,Q as isColorChannel,M as isColorChannelKey,k as isColorFunction,
y as isColorSpace,$ as isHEXColor,q as isIterableObject,p as isNumber,
s as isObject,x as isRange,J as isSpaceDimension,O as isSpaceDimensionID,
P as isSpaceID,g as isString,Se as parseCSSAngle,he as parseCSSColor,
G as parseHEXColor,ae as toKebabCase,ie as toPascalCase};
