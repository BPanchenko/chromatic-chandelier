var D=Object.defineProperty;var r=(e,t)=>D(e,"name",{value:t,configurable:!0});var k=r((e,t=12)=>{let n=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*n)/n},"round"),u=k;function W(e,t){if(!e)throw t??"Exception: something unexpected h\
appened."}r(W,"assert");var h=r(e=>p(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var C=r(e=>e===!0||e===!1||e==="true"||e==="on"||e==="off","isBoo\
lean"),x=r(e=>p(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function","isIterableObject"),d=r(e=>typeof e=="number","isNumbe\
r"),p=r(e=>e!==null&&typeof e=="object","isObject"),c=r(e=>typeof e==
"string","isString"),ee=r(e=>e===!0||e==="true"||e==="on","isTrut\
hy"),re=r(e=>{if(P(e)){let t=Iterator.from(["hsl","hwb","lab","lc\
h","oklab","oklch","rgb"]);for(let n of t)if(n===e)return!0}return!1},
"isCAM"),E=r(e=>c(e)&&j.has(e),"isColorChannelKey"),v=r(e=>c(e)&&
$.has(e),"isSpaceDimensionID"),P=r(e=>c(e)&&M.has(e),"isSpaceID"),
te=r(e=>p(e)&&"ident"in e&&P(e.ident)&&"CSYS"in e&&p(e.CSYS)&&"le\
ngth"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),ne=r(e=>p(e)&&"\
ident"in e&&v(e.ident)&&"short"in e&&E(e.short)&&"domain"in e&&h(
e.domain),"isSpaceDimension"),oe=r(e=>p(e)&&e instanceof Iterator&&
"alpha"in e&&d(e.alpha),"isColorChannel"),$=new Set(["abscissa","\
angle","applicate","blackness","blue-yellow","blue","chroma","gre\
en","hue","lightness","ordinate","radius","green-red","red","satu\
ration","whiteness"]),j=new Set(["a","b","B","C","c","G","g","h",
"L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),M=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","oklch","\
prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz","xyz-d50",
"xyz-d65"]);function pe(){let e=r(o=>C(o)||d(o)||c(o)||x(o)||o===null,"isVali\
dValue"),t=r(o=>p(o)&&Object.values(o).every(s=>e(s)),"isAditiona\
lProperties"),n=!0,a=Array.from(arguments).filter(o=>e(o)),l={};return Object.
entries(Iterator.from(arguments).filter(o=>t(o)).next().value??{}).
forEach(([o,s])=>l[o]={enumerable:n,value:s}),Object.defineProperties(
a,l)}r(pe,"createTuple");var B=r(e=>{let t=Object.getOwnPropertyNames(e);for(let n of t){let a=e[n];
p(a)&&B(a)}return Object.freeze(e)},"deepFreeze");var O=(i=>(i.Rd="vermilion",i.YlRd="orange",i.Yl="yellow",i.GrYl=
"chartreuse",i.Gr="green",i.CyGr="aquamarine",i.Cy="cyan",i.BlCy=
"azure",i.Bl="blue",i.PrBl="ultramarine",i.Pr="violet",i.RdPr="ma\
genta",i))(O||{}),A=(i=>(i.Rd="red",i.YlRd="yellow-red",i.Yl="yel\
low",i.GrYl="green-yellow",i.Gr="green",i.CyGr="cyan-green",i.Cy=
"cyan",i.BlCy="blue-cyan",i.Bl="blue",i.PrBl="purple-blue",i.Pr="\
purple",i.RdPr="red-purple",i))(A||{}),fe=r(e=>{let t=Math.PI/6,n=Math.
trunc(e/t);n<0&&(n+=12);let[a,l]=Iterator.from([["red","vermilion"],
["yellow-red","orange"],["yellow","yellow"],["green-yellow","char\
treuse"],["green","green"],["cyan-green","aquamarine"],["cyan","c\
yan"],["blue-cyan","azure"],["blue","blue"],["purple-blue","ultra\
marine"],["purple","violet"],["red-purple","magenta"]]).drop(n).next().
value,o=u(e/(2*Math.PI),9);return o<0&&(o+=1),o>1&&(o=u(o%1)),Object.
defineProperties(new Number(e),{angle:{enumerable:!0,value:Object.
create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.PI-e%Math.
PI):e},unsigned:{enumerable:!0,value:e<0?2*Math.PI+e:e},unit:{enumerable:!0,
value:"rad"}})},as:{enumerable:!0,value:Object.create(null,{deg:{
enumerable:!0,value:u(360*o,2)},grad:{enumerable:!0,value:u(400*o,
2)},rad:{enumerable:!0,value:e},turn:{enumerable:!0,value:o}})},family:{
enumerable:!0,value:a},pigment:{enumerable:!0,value:l},toString:{
value:r(function(){return this.valueOf()+this.angle.unit},"value")}})},
"makeHueAttribute");var he=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var Pe=r((e,t="",n=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((a,l)=>n||0<l?a[0].toUpperCase().concat(a.slice(1)):a).join(t),
"toPascalCase");var m=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
S=`${m}${m}${m}(?:/${m})?`,T=String.raw`a-f\d`,Y=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
G=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
b=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),y=new RegExp(
`^${Y}\\(${S}\\)$`,"i"),g=new RegExp(`^color\\(${G} ${S}\\)$`,"i"),
z=`#?[${T}]{3}[${T}]?`,H=`#?[${T}]{6}([${T}]{2})?`,I=new RegExp(`\
[^#${T}]`,"gi"),R=new RegExp(`^${z}$|^${H}$`,"i"),w=r(e=>I.test(e)===
!1&&R.test(e),"isHEXColor"),N=r(e=>typeof e=="string"&&(w(e)||y.test(
e)||g.test(e)),"isCSSColor"),we=r(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),De=r(e=>{if(w(e))return V(e);if(N(e)){let t=(g.
test(e)?g.exec(e)?.slice(1):y.exec(e)?.slice(1))??Array.of("none",
"none","none",void 0),n=t.pop()??1;c(n)&&(n=f(n));let a=t.shift(),
l=a==="rgb",o=Iterator.from(t.map(s=>s?b.test(s)?Q(s):l?f(s,255):
f(s):NaN));return[a,o,n]}throw new TypeError(`Expected a valid re\
presentation that defined as the <color> CSS data type, but passe\
d "${e}".`)},"parseCSSColor"),V=r(e=>{if(I.test(e)||!R.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let n=parseInt(e,16);return["rgb",Iterator.from([n>>16&
255,n>>8&255,n&255]),t]},"parseHEXColor");function Q(e){let t=NaN;
if(b.test(e)){let n=b.exec(e).slice(1),a=n[1],l=a==="grad",o=a===
"rad",s=a==="turn";t=u(parseFloat(n[0])*(l?180/200:o?180/Math.PI:
s?360:1)),Math.abs(t)>360&&(t=u(t%360)),t<0&&(t+=360)}return t}r(
Q,"parseCSSAngleValue");function f(e,t=1){if(e==="none")return NaN;
let n=parseFloat(e);return e.endsWith("%")&&(n=u(n*t/100)),n}r(f,
"parseCSSColorComponent");export{A as Family,O as Ink,W as assert,pe as createTuple,B as deepFreeze,
C as isBoolean,re as isCAM,N as isCSSColor,we as isCSSIdent,oe as isColorChannel,
E as isColorChannelKey,te as isColorSpace,w as isHEXColor,x as isIterableObject,
d as isNumber,p as isObject,ne as isSpaceDimension,v as isSpaceDimensionID,
P as isSpaceID,c as isString,ee as isTruthy,fe as makeHueAttribute,
De as parseCSSColor,V as parseHEXColor,k as round,pe as toEnrichTriplet,
he as toKebabCase,Pe as toPascalCase};
