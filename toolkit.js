var k=Object.defineProperty;var r=(e,t)=>k(e,"name",{value:t,configurable:!0});var E=r((e,t=12)=>{let n=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*n)/n},"round"),l=E;function _(e,t){if(!e)throw t??"Exception: something unexpected h\
appened."}r(_,"assert");var m=r(e=>typeof e=="number"||e instanceof Number,"isNumber");var h=r(e=>u(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var C=r(e=>e===!0||e===!1||e==="true"||e==="on"||e==="off","isBoo\
lean"),x=r(e=>u(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function","isIterableObject"),u=r(e=>e!==null&&typeof e=="object",
"isObject"),c=r(e=>typeof e=="string","isString"),oe=r(e=>e===!0||
e==="true"||e==="on","isTruthy"),S=r(e=>{if(P(e)){let t=Iterator.
from(["hsl","hwb","lab","lch","oklab","oklch","rgb"]);for(let n of t)
if(n===e)return!0}return!1},"isCAM"),M=r(e=>c(e)&&N.has(e),"isCol\
orChannelKey"),j=r(e=>c(e)&&v.has(e),"isSpaceDimensionID"),P=r(e=>c(
e)&&A.has(e),"isSpaceID"),ie=r(e=>u(e)&&"ident"in e&&P(e.ident)&&
"CSYS"in e&&u(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isCo\
lorSpace"),se=r(e=>u(e)&&"ident"in e&&j(e.ident)&&"short"in e&&M(
e.short)&&"domain"in e&&h(e.domain),"isSpaceDimension"),ae=r(e=>u(
e)&&e instanceof Iterator&&"alpha"in e&&m(e.alpha),"isColorChanne\
l"),v=new Set(["abscissa","angle","applicate","blackness","blue-y\
ellow","blue","chroma","green","hue","lightness","ordinate","radi\
us","green-red","red","saturation","whiteness"]),N=new Set(["a","\
b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y",
"z","rho","phi"]),A=new Set(["a98-rgb","display-p3","hsl","hwb","\
lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]);function ce(){let e=r(o=>C(o)||m(o)||c(o)||x(o)||o===null,"isVali\
dValue"),t=r(o=>u(o)&&Object.values(o).every(s=>e(s)),"isAditiona\
lProperties"),n=!0,i=Array.from(arguments).filter(o=>e(o)),a={};return Object.
entries(Iterator.from(arguments).filter(o=>t(o)).next().value??{}).
forEach(([o,s])=>a[o]={enumerable:n,value:s}),Object.defineProperties(
i,a)}r(ce,"createTuple");var O=r(e=>{let t=Object.getOwnPropertyNames(e);for(let n of t){let i=e[n];
u(i)&&O(i)}return Object.freeze(e)},"deepFreeze");var z=(p=>(p.Rd="red",p.YlRd="yellow-red",p.Yl="yellow",p.GrYl="g\
reen-yellow",p.Gr="green",p.CyGr="cyan-green",p.Cy="cyan",p.BlCy=
"blue-cyan",p.Bl="blue",p.PrBl="purple-blue",p.Pr="purple",p.RdPr=
"red-purple",p))(z||{}),he=r(e=>{let t=Math.PI/6,n=Math.trunc(e/t),
i=l(e-n*t);n<0&&(n+=12),n>12&&(n-=12);let a=Iterator.from(["red",
"yellow-red","yellow","green-yellow","green","cyan-green","cyan",
"blue-cyan","blue","purple-blue","purple","red-purple"]).drop(n).
next().value,o=l(e/(2*Math.PI),9);return o<0&&(o+=1),o>1&&(o=l(o%
1,9)),Object.defineProperties(new Number(e),{angle:{enumerable:!0,
value:Object.create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.
PI-e%Math.PI):e},unsigned:{enumerable:!0,value:e<0?2*Math.PI+e:e},
unit:{enumerable:!0,value:"rad"}})},as:{enumerable:!0,value:Object.
create(null,{deg:{enumerable:!0,value:l(360*o,2)},grad:{enumerable:!0,
value:l(400*o,2)},rad:{enumerable:!0,value:l(e,9)},turn:{enumerable:!0,
value:l(o,9)}})},deviation:{enumerable:!0,value:i},family:{enumerable:!0,
value:a},toString:{value:r(function(){return this.angle.signed+this.
angle.unit},"value")}})},"makeHueAttribute");var Se=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var ye=r((e,t="",n=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((i,a)=>n||0<a?i[0].toUpperCase().concat(i.slice(1)):i).join(t),
"toPascalCase");var f=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
I=`${f}${f}${f}(?:/${f})?`,T=String.raw`a-f\d`,B=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
H=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
b=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),y=new RegExp(
`^${B}\\(${I}\\)$`,"i"),g=new RegExp(`^color\\(${H} ${I}\\)$`,"i"),
V=`#?[${T}]{3}[${T}]?`,Y=`#?[${T}]{6}([${T}]{2})?`,R=new RegExp(`\
[^#${T}]`,"gi"),w=new RegExp(`^${V}$|^${Y}$`,"i"),D=r(e=>R.test(e)===
!1&&w.test(e),"isHEXColor"),G=r(e=>typeof e=="string"&&(D(e)||y.test(
e)||g.test(e)),"isCSSColor"),ke=r(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),Ee=r((e,t=[NaN,NaN,NaN],n=1)=>{let i=n<1?" \
/ "+(n<1e-4?"none":n):"",[a,o,s]=t.map($=>$.toString());return S(
e)?`${e}(${a} ${o} ${s}${i})`:`color(${e} ${a} ${o} ${s}${i})`},"\
makeCSSColor"),Me=r(e=>{if(D(e))return Q(e);if(G(e)){let t=(g.test(
e)?g.exec(e)?.slice(1):y.exec(e)?.slice(1))??Array.of("none","non\
e","none",void 0),n=t.pop()??1;c(n)&&(n=d(n));let i=t.shift(),a=i===
"rgb",o=Iterator.from(t.map(s=>s?b.test(s)?F(s):a?d(s,255):d(s):NaN));
return[i,o,n]}throw new TypeError(`Expected a valid representatio\
n that defined as the <color> CSS data type, but passed "${e}".`)},
"parseCSSColor"),Q=r(e=>{if(R.test(e)||!w.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let n=parseInt(e,16);return["rgb",Iterator.from([n>>16&
255,n>>8&255,n&255]),t]},"parseHEXColor");function F(e){let t=NaN;
if(b.test(e)){let n=b.exec(e).slice(1),i=n[1],a=i==="grad",o=i===
"rad",s=i==="turn";t=l(parseFloat(n[0])*(a?180/200:o?180/Math.PI:
s?360:1)),Math.abs(t)>360&&(t=l(t%360)),t<0&&(t+=360)}return t}r(
F,"parseCSSAngleValue");function d(e,t=1){if(e==="none")return NaN;
let n=parseFloat(e);return e.endsWith("%")&&(n=l(n*t/100)),n}r(d,
"parseCSSColorComponent");export{z as Family,_ as assert,ce as createTuple,O as deepFreeze,
C as isBoolean,S as isCAM,G as isCSSColor,ke as isCSSIdent,ae as isColorChannel,
M as isColorChannelKey,ie as isColorSpace,D as isHEXColor,x as isIterableObject,
m as isNumber,u as isObject,h as isRange,se as isSpaceDimension,j as isSpaceDimensionID,
P as isSpaceID,c as isString,oe as isTruthy,Ee as makeCSSColor,he as makeHueAttribute,
Me as parseCSSColor,Q as parseHEXColor,E as round,ce as toEnrichTriplet,
Se as toKebabCase,ye as toPascalCase};
