var D=Object.defineProperty;var r=(e,t)=>D(e,"name",{value:t,configurable:!0});var k=r((e,t=12)=>{let n=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*n)/n},"round"),a=k;function L(e,t){if(!e)throw t??"Exception: something unexpected h\
appened."}r(L,"assert");var m=r(e=>typeof e=="number"||e instanceof Number,"isNumber");var h=r(e=>l(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var x=r(e=>e===!0||e===!1||e==="true"||e==="on"||e==="off","isBoo\
lean"),C=r(e=>l(e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]==
"function","isIterableObject"),l=r(e=>e!==null&&typeof e=="object",
"isObject"),c=r(e=>typeof e=="string","isString"),te=r(e=>e===!0||
e==="true"||e==="on","isTruthy"),ne=r(e=>{if(S(e)){let t=Iterator.
from(["hsl","hwb","lab","lch","oklab","oklch","rgb"]);for(let n of t)
if(n===e)return!0}return!1},"isCAM"),E=r(e=>c(e)&&v.has(e),"isCol\
orChannelKey"),$=r(e=>c(e)&&j.has(e),"isSpaceDimensionID"),S=r(e=>c(
e)&&M.has(e),"isSpaceID"),oe=r(e=>l(e)&&"ident"in e&&S(e.ident)&&
"CSYS"in e&&l(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isCo\
lorSpace"),ie=r(e=>l(e)&&"ident"in e&&$(e.ident)&&"short"in e&&E(
e.short)&&"domain"in e&&h(e.domain),"isSpaceDimension"),se=r(e=>l(
e)&&e instanceof Iterator&&"alpha"in e&&m(e.alpha),"isColorChanne\
l"),j=new Set(["abscissa","angle","applicate","blackness","blue-y\
ellow","blue","chroma","green","hue","lightness","ordinate","radi\
us","green-red","red","saturation","whiteness"]),v=new Set(["a","\
b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y",
"z","rho","phi"]),M=new Set(["a98-rgb","display-p3","hsl","hwb","\
lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]);function ue(){let e=r(o=>x(o)||m(o)||c(o)||C(o)||o===null,"isVali\
dValue"),t=r(o=>l(o)&&Object.values(o).every(p=>e(p)),"isAditiona\
lProperties"),n=!0,i=Array.from(arguments).filter(o=>e(o)),u={};return Object.
entries(Iterator.from(arguments).filter(o=>t(o)).next().value??{}).
forEach(([o,p])=>u[o]={enumerable:n,value:p}),Object.defineProperties(
i,u)}r(ue,"createTuple");var O=r(e=>{let t=Object.getOwnPropertyNames(e);for(let n of t){let i=e[n];
l(i)&&O(i)}return Object.freeze(e)},"deepFreeze");var A=(s=>(s.Rd="red",s.YlRd="yellow-red",s.Yl="yellow",s.GrYl="g\
reen-yellow",s.Gr="green",s.CyGr="cyan-green",s.Cy="cyan",s.BlCy=
"blue-cyan",s.Bl="blue",s.PrBl="purple-blue",s.Pr="purple",s.RdPr=
"red-purple",s))(A||{}),ge=r(e=>{let t=Math.PI/6,n=Math.trunc(e/t),
i=a(e-n*t);n<0&&(n+=12),n>12&&(n-=12);let u=Iterator.from(["red",
"yellow-red","yellow","green-yellow","green","cyan-green","cyan",
"blue-cyan","blue","purple-blue","purple","red-purple"]).drop(n).
next().value,o=a(e/(2*Math.PI),9);return o<0&&(o+=1),o>1&&(o=a(o%
1,9)),Object.defineProperties(new Number(e),{angle:{enumerable:!0,
value:Object.create(null,{signed:{enumerable:!0,value:e>Math.PI?-(Math.
PI-e%Math.PI):e},unsigned:{enumerable:!0,value:e<0?2*Math.PI+e:e},
unit:{enumerable:!0,value:"rad"}})},as:{enumerable:!0,value:Object.
create(null,{deg:{enumerable:!0,value:a(360*o,2)},grad:{enumerable:!0,
value:a(400*o,2)},rad:{enumerable:!0,value:a(e,9)},turn:{enumerable:!0,
value:a(o,9)}})},deviation:{enumerable:!0,value:i},family:{enumerable:!0,
value:u},toString:{value:r(function(){return this.angle.signed+this.
angle.unit},"value")}})},"makeHueAttribute");var Ce=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var Pe=r((e,t="",n=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((i,u)=>n||0<u?i[0].toUpperCase().concat(i.slice(1)):i).join(t),
"toPascalCase");var f=String.raw`\s?(-?[\d]+\.?[\d]{0,}(?:deg|rad|grad|turn|%)?|none)\s?`,
I=`${f}${f}${f}(?:/${f})?`,T=String.raw`a-f\d`,N=String.raw`(hsl|hwb|lab|lch|lch|oklab|oklch|rgb)`,
z=String.raw`(srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65)`,
b=new RegExp("^(-?[d]+.?[d]{0,})(deg|grad|rad|turn)?$","i"),P=new RegExp(
`^${N}\\(${I}\\)$`,"i"),g=new RegExp(`^color\\(${z} ${I}\\)$`,"i"),
B=`#?[${T}]{3}[${T}]?`,H=`#?[${T}]{6}([${T}]{2})?`,y=new RegExp(`\
[^#${T}]`,"gi"),R=new RegExp(`^${B}$|^${H}$`,"i"),w=r(e=>y.test(e)===
!1&&R.test(e),"isHEXColor"),V=r(e=>typeof e=="string"&&(w(e)||P.test(
e)||g.test(e)),"isCSSColor"),ke=r(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),Ee=r(e=>{if(w(e))return Y(e);if(V(e)){let t=(g.
test(e)?g.exec(e)?.slice(1):P.exec(e)?.slice(1))??Array.of("none",
"none","none",void 0),n=t.pop()??1;c(n)&&(n=d(n));let i=t.shift(),
u=i==="rgb",o=Iterator.from(t.map(p=>p?b.test(p)?G(p):u?d(p,255):
d(p):NaN));return[i,o,n]}throw new TypeError(`Expected a valid re\
presentation that defined as the <color> CSS data type, but passe\
d "${e}".`)},"parseCSSColor"),Y=r(e=>{if(y.test(e)||!R.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let n=parseInt(e,16);return["rgb",Iterator.from([n>>16&
255,n>>8&255,n&255]),t]},"parseHEXColor");function G(e){let t=NaN;
if(b.test(e)){let n=b.exec(e).slice(1),i=n[1],u=i==="grad",o=i===
"rad",p=i==="turn";t=a(parseFloat(n[0])*(u?180/200:o?180/Math.PI:
p?360:1)),Math.abs(t)>360&&(t=a(t%360)),t<0&&(t+=360)}return t}r(
G,"parseCSSAngleValue");function d(e,t=1){if(e==="none")return NaN;
let n=parseFloat(e);return e.endsWith("%")&&(n=a(n*t/100)),n}r(d,
"parseCSSColorComponent");export{A as Family,L as assert,ue as createTuple,O as deepFreeze,
x as isBoolean,ne as isCAM,V as isCSSColor,ke as isCSSIdent,se as isColorChannel,
E as isColorChannelKey,oe as isColorSpace,w as isHEXColor,C as isIterableObject,
m as isNumber,l as isObject,h as isRange,ie as isSpaceDimension,$ as isSpaceDimensionID,
S as isSpaceID,c as isString,te as isTruthy,ge as makeHueAttribute,
Ee as parseCSSColor,Y as parseHEXColor,k as round,ue as toEnrichTriplet,
Ce as toKebabCase,Pe as toPascalCase};
