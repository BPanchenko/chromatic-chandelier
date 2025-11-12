var y=Object.defineProperty;var r=(e,t)=>y(e,"name",{value:t,configurable:!0});var D=r((e,t=12)=>{let n=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*n)/n},"round"),u=D;function L(e,t){if(!e)throw t??"Exception: something unexpected h\
appened."}r(L,"assert");var b=r(e=>p(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var h=r(e=>e===!0||e===!1||e==="true"||e==="on"||e==="off","isBoo\
lean"),S=r(e=>p(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function","isIterableObject"),m=r(e=>typeof e=="number","isNumbe\
r"),p=r(e=>e!==null&&typeof e=="object","isObject"),l=r(e=>typeof e==
"string","isString"),q=r(e=>e===!0||e==="true"||e==="on","isTruth\
y"),J=r(e=>{if(x(e)){let t=Iterator.from(["hsl","hwb","lab","lch",
"oklab","oklch","rgb"]);for(let n of t)if(n===e)return!0}return!1},
"isCAM"),k=r(e=>l(e)&&j.has(e),"isColorChannelKey"),E=r(e=>l(e)&&
$.has(e),"isSpaceDimensionID"),x=r(e=>l(e)&&O.has(e),"isSpaceID"),
Z=r(e=>p(e)&&"ident"in e&&x(e.ident)&&"CSYS"in e&&p(e.CSYS)&&"len\
gth"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),ee=r(e=>p(e)&&"i\
dent"in e&&E(e.ident)&&"short"in e&&k(e.short)&&"domain"in e&&b(e.
domain),"isSpaceDimension"),re=r(e=>p(e)&&e instanceof Iterator&&
"alpha"in e&&m(e.alpha),"isColorChannel"),$=new Set(["abscissa","\
angle","applicate","blackness","blue-yellow","blue","chroma","gre\
en","hue","lightness","ordinate","radius","green-red","red","satu\
ration","whiteness"]),j=new Set(["a","b","B","C","c","G","g","h",
"L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),O=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","\
prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50",
"xyz-d65"]);function ie(){let e=r(o=>h(o)||m(o)||l(o)||S(o)||o===null,"isVali\
dValue"),t=r(o=>p(o)&&Object.values(o).every(s=>e(s)),"isAditiona\
lProperties"),n=!0,i=Array.from(arguments).filter(o=>e(o)),a={};return Object.
entries(Iterator.from(arguments).filter(o=>t(o)).next().value??{}).
forEach(([o,s])=>a[o]={enumerable:n,value:s}),Object.defineProperties(
i,a)}r(ie,"createTuple");var z=r(e=>{let t=Object.getOwnPropertyNames(e);for(let n of t){let i=e[n];
p(i)&&z(i)}return Object.freeze(e)},"deepFreeze");var ue=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var fe=r((e,t="",n=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((i,a)=>n||0<a?i[0].toUpperCase().concat(i.slice(1)):i).join(t),
"toPascalCase");var T=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
C=`${T}${T}${T}(?:/${T})?`,c=String.raw`a-f\d`,M=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
A=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
d=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),I=new RegExp(
`^${M}\\(${C}\\)$`,"i"),g=new RegExp(`^color\\(${A} ${C}\\)$`,"i"),
N=`#?[${c}]{3}[${c}]?`,V=`#?[${c}]{6}([${c}]{2})?`,P=new RegExp(`\
[^#${c}]`,"gi"),R=new RegExp(`^${N}$|^${V}$`,"i"),w=r(e=>P.test(e)===
!1&&R.test(e),"isHEXColor"),Q=r(e=>typeof e=="string"&&(w(e)||I.test(
e)||g.test(e)),"isCSSColor"),Se=r(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),xe=r(e=>{if(w(e))return H(e);if(Q(e)){let t=(g.
test(e)?g.exec(e)?.slice(1):I.exec(e)?.slice(1))??Array.of("none",
"none","none",void 0),n=t.pop()??1;l(n)&&(n=f(n));let i=t.shift(),
a=i==="rgb",o=Iterator.from(t.map(s=>s?d.test(s)?v(s):a?f(s,255):
f(s):NaN));return[i,o,n]}throw new TypeError(`Expected a valid re\
presentation that defined as the <color> CSS data type, but passe\
d "${e}".`)},"parseCSSColor"),H=r(e=>{if(P.test(e)||!R.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let n=parseInt(e,16);return["rgb",Iterator.from([n>>16&
255,n>>8&255,n&255]),t]},"parseHEXColor");function v(e){let t=NaN;
if(d.test(e)){let n=d.exec(e).slice(1),i=n[1],a=i==="grad",o=i===
"rad",s=i==="turn";t=u(parseFloat(n[0])*(a?180/200:o?180/Math.PI:
s?360:1)),Math.abs(t)>360&&(t=u(t%360)),t<0&&(t+=360)}return t}r(
v,"parseCSSAngleValue");function f(e,t=1){if(e==="none")return NaN;
let n=parseFloat(e);return e.endsWith("%")&&(n=u(n*t/100)),n}r(f,
"parseCSSColorComponent");export{L as assert,ie as createTuple,z as deepFreeze,h as isBoolean,
J as isCAM,Q as isCSSColor,Se as isCSSIdent,re as isColorChannel,
k as isColorChannelKey,Z as isColorSpace,w as isHEXColor,S as isIterableObject,
m as isNumber,p as isObject,ee as isSpaceDimension,E as isSpaceDimensionID,
x as isSpaceID,l as isString,q as isTruthy,xe as parseCSSColor,H as parseHEXColor,
D as round,ie as toEnrichTriplet,ue as toKebabCase,fe as toPascalCase};
