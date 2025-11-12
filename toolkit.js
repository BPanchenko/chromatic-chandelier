var z=Object.defineProperty;var t=(e,r)=>z(e,"name",{value:r,configurable:!0});var M=t((e,r=12)=>{let n=r>0?10**r:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*n)/n},"round"),T=M;function q(e,r){if(!e)throw r??"Exception: something unexpected h\
appened."}t(q,"assert");var I=t(e=>i(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(r=>r in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(r=>r in e&&typeof e[r]=="fun\
ction"),"isRange");var y=t(e=>e===!0||e===!1||e==="true"||e==="on"||e==="off","isBoo\
lean"),w=t(e=>i(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function","isIterableObject"),g=t(e=>typeof e=="number","isNumbe\
r"),i=t(e=>e!==null&&typeof e=="object","isObject"),l=t(e=>typeof e==
"string","isString"),oe=t(e=>e===!0||e==="true"||e==="on","isTrut\
hy"),se=t(e=>{if(P(e)){let r=Iterator.from(["hsl","hwb","lab","lc\
h","oklab","oklch","rgb"]);for(let n of r)if(n===e)return!0}return!1},
"isCAM"),A=t(e=>l(e)&&v.has(e),"isColorChannelKey"),N=t(e=>l(e)&&
V.has(e),"isSpaceDimensionID"),P=t(e=>l(e)&&H.has(e),"isSpaceID"),
ie=t(e=>i(e)&&"ident"in e&&P(e.ident)&&"CSYS"in e&&i(e.CSYS)&&"le\
ngth"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),ae=t(e=>i(e)&&"\
ident"in e&&N(e.ident)&&"short"in e&&A(e.short)&&"domain"in e&&I(
e.domain),"isSpaceDimension"),pe=t(e=>i(e)&&e instanceof Iterator&&
"alpha"in e&&g(e.alpha),"isColorChannel"),V=new Set(["abscissa","\
angle","applicate","blackness","blue-yellow","blue","chroma","gre\
en","hue","lightness","ordinate","radius","green-red","red","satu\
ration","whiteness"]),v=new Set(["a","b","B","C","c","G","g","h",
"L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),H=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","\
prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50",
"xyz-d65"]);function Te(e,r,n,o,c){let p=t(s=>y(s)||g(s)||l(s)||w(s)||s===null,
"isValidValue"),a=t(s=>i(s)&&Object.values(s).every(m=>p(m)),"isA\
ditionalProperties"),h=Iterator.from((function*(){yield e,yield r,
p(n)&&(yield n),p(o)&&(yield o)})()),j=h.toArray().length,C=!0,x={
length:{enumerable:C,value:j}},O=Object.entries(Iterator.from(arguments).
filter(s=>a(s)).next().value??{});for(let[s,m]of O)x[s]={enumerable:C,
value:m};return Object.defineProperties(h,x)}t(Te,"createTuple");var B=t(e=>{let r=Object.getOwnPropertyNames(e);for(let n of r){let o=e[n];
i(o)&&B(o)}return Object.freeze(e)},"deepFreeze");var Se=t(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var xe=t((e,r="",n=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((o,c)=>n||0<c?o[0].toUpperCase().concat(o.slice(1)):o).join(r),
"toPascalCase");var f=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
R=`${f}${f}${f}(?:/${f})?`,u=String.raw`a-f\d`,F=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
K=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
b=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),k=new RegExp(
`^${F}\\(${R}\\)$`,"i"),S=new RegExp(`^color\\(${K} ${R}\\)$`,"i"),
_=`#?[${u}]{3}[${u}]?`,G=`#?[${u}]{6}([${u}]{2})?`,D=new RegExp(`\
[^#${u}]`,"gi"),E=new RegExp(`^${_}$|^${G}$`,"i"),$=t(e=>D.test(e)===
!1&&E.test(e),"isHEXColor"),L=t(e=>typeof e=="string"&&($(e)||k.test(
e)||S.test(e)),"isCSSColor"),Re=t(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),ke=t(e=>{if($(e))return Q(e);if(L(e)){let r=(S.
test(e)?S.exec(e)?.slice(1):k.exec(e)?.slice(1))??Array.of("none",
"none","none",void 0),n=r.pop()??1;l(n)&&(n=d(n));let o=r.shift(),
c=o==="rgb",p=Iterator.from(r.map(a=>a?b.test(a)?W(a):c?d(a,255):
d(a):NaN));return[o,p,n]}throw new TypeError(`Expected a valid re\
presentation that defined as the <color> CSS data type, but passe\
d "${e}".`)},"parseCSSColor"),Q=t(e=>{if(D.test(e)||!E.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let r=1;e.length===8&&(r=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(r=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let n=parseInt(e,16);return["rgb",Iterator.from([n>>16&
255,n>>8&255,n&255]),r]},"parseHEXColor");function W(e){let r=NaN;
if(b.test(e)){let n=b.exec(e).slice(1),o=n[1],c=o==="grad",p=o===
"rad",a=o==="turn";r=T(parseFloat(n[0])*(c?180/200:p?180/Math.PI:
a?360:1)),Math.abs(r)>360&&(r=T(r%360)),r<0&&(r+=360)}return r}t(
W,"parseCSSAngleValue");function d(e,r=1){if(e==="none")return NaN;
let n=parseFloat(e);return e.endsWith("%")&&(n=T(n*r/100)),n}t(d,
"parseCSSColorComponent");export{q as assert,Te as createTuple,B as deepFreeze,y as isBoolean,
se as isCAM,L as isCSSColor,Re as isCSSIdent,pe as isColorChannel,
A as isColorChannelKey,ie as isColorSpace,$ as isHEXColor,w as isIterableObject,
g as isNumber,i as isObject,ae as isSpaceDimension,N as isSpaceDimensionID,
P as isSpaceID,l as isString,oe as isTruthy,ke as parseCSSColor,Q as parseHEXColor,
M as round,Te as toEnrichTriplet,Se as toKebabCase,xe as toPascalCase};
