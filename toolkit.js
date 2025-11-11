var I=Object.defineProperty;var r=(e,t)=>I(e,"name",{value:t,configurable:!0});var T=r((e,t=12)=>{let n=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*n)/n},"round"),u=T;function Q(e,t){if(!e)throw t??"Exception: something unexpected h\
appened."}r(Q,"assert");function W(e,t,n,o){let s=Object.create(null,{[Symbol.iterator]:{
value:r(function*(){yield this[0],yield this[1],this[2]!==void 0&&
(yield this[2]),this[3]!==void 0&&(yield this[3])},"value")},0:{enumerable:!0,
value:e},1:{enumerable:!0,value:t}});return n!=null&&Object.defineProperty(
s,2,{enumerable:!0,value:n}),n!=null&&o!=null?Object.defineProperties(
s,{2:{enumerable:!0,value:n},3:{enumerable:!0,value:o},length:{enumerable:!0,
value:4}}):n!=null?Object.defineProperties(s,{2:{enumerable:!0,value:n},
length:{enumerable:!0,value:3}}):Object.defineProperties(s,{length:{
enumerable:!0,value:2}})}r(W,"createTuple");var d=r(e=>a(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var y=r(e=>typeof e=="number","isNumber"),l=r(e=>typeof e=="strin\
g","isString"),J=r(e=>a(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),a=r(e=>e!==null&&typeof e==
"object","isObject"),Z=r(e=>{if(S(e)){let t=Iterator.from(["hsl",
"hwb","lab","lch","oklab","oklch","rgb"]);for(let n of t)if(n===e)
return!0}return!1},"isCAM"),D=r(e=>l(e)&&$.has(e),"isColorChannel\
Key"),R=r(e=>l(e)&&k.has(e),"isSpaceDimensionID"),S=r(e=>l(e)&&E.
has(e),"isSpaceID"),ee=r(e=>a(e)&&"ident"in e&&S(e.ident)&&"CSYS"in
e&&a(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),
te=r(e=>a(e)&&"ident"in e&&R(e.ident)&&"short"in e&&D(e.short)&&"\
domain"in e&&d(e.domain),"isSpaceDimension"),re=r(e=>a(e)&&e instanceof
Iterator&&"alpha"in e&&y(e.alpha),"isColorChannel"),k=new Set(["a\
bscissa","angle","applicate","blackness","blue-yellow","blue","ch\
roma","green","hue","lightness","ordinate","radius","green-red","\
red","saturation","whiteness"]),$=new Set(["a","b","B","C","c","G",
"g","h","L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),
E=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab",
"oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz",
"xyz-d50","xyz-d65"]);var j=r(e=>{let t=Object.getOwnPropertyNames(e);for(let n of t){let o=e[n];
a(o)&&j(o)}return Object.freeze(e)},"deepFreeze");var le=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var ce=r((e,t="",n=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((o,s)=>n||0<s?o[0].toUpperCase().concat(o.slice(1)):o).join(t),
"toPascalCase");var c=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
h=`${c}${c}${c}(?:/${c})?`,p=String.raw`a-f\d`,v=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
O=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
b=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),P=new RegExp(
`^${v}\\(${h}\\)$`,"i"),g=new RegExp(`^color\\(${O} ${h}\\)$`,"i"),
z=`#?[${p}]{3}[${p}]?`,M=`#?[${p}]{6}([${p}]{2})?`,x=new RegExp(`\
[^#${p}]`,"gi"),C=new RegExp(`^${z}$|^${M}$`,"i"),w=r(e=>x.test(e)===
!1&&C.test(e),"isHEXColor"),N=r(e=>typeof e=="string"&&(w(e)||P.test(
e)||g.test(e)),"isCSSColor"),de=r(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),Se=r(e=>{if(w(e))return A(e);if(N(e)){let t=(g.
test(e)?g.exec(e)?.slice(1):P.exec(e)?.slice(1))??Array.of("none",
"none","none",void 0),n=t.pop()??1;l(n)&&(n=f(n));let o=t.shift(),
s=o==="rgb",m=Iterator.from(t.map(i=>i?b.test(i)?V(i):s?f(i,255):
f(i):NaN));return[o,m,n]}throw new TypeError(`Expected a valid re\
presentation that defined as the <color> CSS data type, but passe\
d "${e}".`)},"parseCSSColor"),A=r(e=>{if(x.test(e)||!C.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let n=parseInt(e,16);return["rgb",Iterator.from([n>>16&
255,n>>8&255,n&255]),t]},"parseHEXColor");function V(e){let t=NaN;
if(b.test(e)){let n=b.exec(e).slice(1),o=n[1],s=o==="grad",m=o===
"rad",i=o==="turn";t=u(parseFloat(n[0])*(s?180/200:m?180/Math.PI:
i?360:1)),Math.abs(t)>360&&(t=u(t%360)),t<0&&(t+=360)}return t}r(
V,"parseCSSAngleValue");function f(e,t=1){if(e==="none")return NaN;
let n=parseFloat(e);return e.endsWith("%")&&(n=u(n*t/100)),n}r(f,
"parseCSSColorComponent");export{Q as assert,W as createTuple,j as deepFreeze,Z as isCAM,N as isCSSColor,
de as isCSSIdent,re as isColorChannel,D as isColorChannelKey,ee as isColorSpace,
w as isHEXColor,J as isIterableObject,y as isNumber,a as isObject,
te as isSpaceDimension,R as isSpaceDimensionID,S as isSpaceID,l as isString,
Se as parseCSSColor,A as parseHEXColor,T as round,le as toKebabCase,
ce as toPascalCase};
