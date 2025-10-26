var y=Object.defineProperty;var n=(e,t)=>y(e,"name",{value:t,configurable:!0});var D=n((e,t=12)=>{let r=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*r)/r},"round"),c=D;var S=n(e=>s(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var R=n(e=>typeof e=="number","isNumber"),p=n(e=>typeof e=="strin\
g","isString"),B=n(e=>s(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),s=n(e=>e!==null&&typeof e==
"object","isObject"),G=n(e=>{if(d(e)){let t=Iterator.from(["hsl",
"hwb","lab","lch","oklab","oklch","rgb"]);for(let r of t)if(r===e)
return!0}return!1},"isCAM"),k=n(e=>p(e)&&j.has(e),"isColorChannel\
Key"),$=n(e=>p(e)&&E.has(e),"isSpaceDimensionID"),d=n(e=>p(e)&&z.
has(e),"isSpaceID"),X=n(e=>s(e)&&"ident"in e&&d(e.ident)&&"CSYS"in
e&&s(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),
U=n(e=>s(e)&&"ident"in e&&$(e.ident)&&"short"in e&&k(e.short)&&"d\
omain"in e&&S(e.domain),"isSpaceDimension"),q=n(e=>s(e)&&e instanceof
Iterator&&"alpha"in e&&R(e.alpha),"isColorChannel"),E=new Set(["a\
bscissa","angle","applicate","blackness","blue-yellow","blue","ch\
roma","green","hue","lightness","ordinate","radius","green-red","\
red","saturation","whiteness"]),j=new Set(["a","b","B","C","c","G",
"g","h","L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),
z=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab",
"oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz",
"xyz-d50","xyz-d65"]);var M=n(e=>{let t=Object.getOwnPropertyNames(e);for(let r of t){let o=e[r];
s(o)&&M(o)}return Object.freeze(e)},"deepFreeze");var ne=n(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var se=n((e,t="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((o,i)=>r||0<i?o[0].toUpperCase().concat(o.slice(1)):o).join(t),
"toPascalCase");var g=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
h=`${g}${g}${g}(?:/${g})?`,l=String.raw`a-f\d`,N=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
P=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
m=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),C=new RegExp(
`^${N}\\(${h}\\)$`,"i"),b=new RegExp(`^color\\(${P} ${h}\\)$`,"i"),
A=`#?[${l}]{3}[${l}]?`,O=`#?[${l}]{6}([${l}]{2})?`,w=new RegExp(`\
[^#${l}]`,"gi"),x=new RegExp(`^${A}$|^${O}$`,"i"),I=n(e=>w.test(e)===
!1&&x.test(e),"isHEXColor"),V=n(e=>typeof e=="string"&&(I(e)||C.test(
e)||b.test(e)),"isCSSColor"),ce=n(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),ge=n(e=>{if(I(e))return T(e);if(V(e)){let t=(b.
test(e)?b.exec(e)?.slice(1):C.exec(e)?.slice(1))??Array.of("none",
"none","none",void 0),r=t.pop()??1;p(r)&&(r=f(r));let o=t.shift(),
i=o==="rgb",u=Iterator.from(t.map(a=>a?m.test(a)?H(a):i?f(a,255):
f(a):NaN));return[o,u,r]}throw new TypeError(`Expected a valid re\
presentation that defined as the <color> CSS data type, but passe\
d "${e}".`)},"parseCSSColor"),T=n(e=>{if(w.test(e)||!x.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let r=parseInt(e,16);return["rgb",Iterator.from([r>>16&
255,r>>8&255,r&255]),t]},"parseHEXColor");function H(e){let t=NaN;
if(m.test(e)){let r=m.exec(e).slice(1),o=r[1],i=o==="grad",u=o===
"rad",a=o==="turn";t=c(parseFloat(r[0])*(i?180/200:u?180/Math.PI:
a?360:1)),Math.abs(t)>360&&(t=c(t%360)),t<0&&(t+=360)}return t}n(
H,"parseCSSAngleValue");function f(e,t=1){if(e==="none")return NaN;
let r=parseFloat(e);return e.endsWith("%")&&(r=c(r*t/100)),r}n(f,
"parseCSSColorComponent");export{M as deepFreeze,G as isCAM,V as isCSSColor,ce as isCSSIdent,
q as isColorChannel,k as isColorChannelKey,X as isColorSpace,I as isHEXColor,
B as isIterableObject,R as isNumber,s as isObject,U as isSpaceDimension,
$ as isSpaceDimensionID,d as isSpaceID,p as isString,ge as parseCSSColor,
T as parseHEXColor,D as round,ne as toKebabCase,se as toPascalCase};
