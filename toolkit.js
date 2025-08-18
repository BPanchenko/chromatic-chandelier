var v=Object.defineProperty;var r=(e,n)=>v(e,"name",{value:n,configurable:!0});var z=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),h=z;function Y(e){let[n,o,t]=e,a,s,i;return n<15&&(a="red"),n==15&&
(a="reddish"),n>15&&(a="orange"),n>45&&(a="yellow"),n>70&&(a=
"lime"),n>79&&(a="green"),n>163&&(a="cyan"),n>193&&(a="blue"),
n>240&&(a="indigo"),n>260&&(a="violet"),n>270&&(a="purple"),
n>291&&(a="magenta"),n>327&&(a="rose"),n>344&&(a="red"),o<10&&
(s="almost grey"),o>9&&(s="very unsaturated"),o>30&&(s="unsa\
turated"),o>60&&(s="rather saturated"),o>80&&(s="highly satu\
rated"),t<10&&(i="almost black"),t>9&&(i="very dark"),t>22&&
(i="dark"),t>30&&(i="normal"),t>60&&(i="light"),t>80&&(i="ve\
ry light"),t>94&&(i="almost white"),h([i,a,s].join(" "))}r(Y,
"initColorIdent");function c(...e){let n=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[o,t]=n,a=t-o,s=o+a/2;return Object.
create(null,{from:{value:o},to:{value:t},minimum:{enumerable:!0,
value:o},maximum:{enumerable:!0,value:t},avg:{enumerable:!0,
value:s},value:{enumerable:!0,value:a},allot:{value:G},clamp:{
value:P},test:{value:r(i=>o<=i&&i<=t,"value")},toString:{value:r(
()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${t}}`,"value")},[Symbol.
iterator]:{value:r(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}r(c,"createRange");function G(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}r(G,"allocateOuterValu\
e");function P(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}r(P,"restrictOuterValue");var T=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var x=r(e=>y(e)&&T.has(e),"isSpaceID");var w=r(e=>l(e)&&"ident"in e&&x(e.ident)&&"CSYS"in e&&l(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),ae=r(e=>l(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),d=r(e=>typeof e=="number","isNumber"),
l=r(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),y=r(e=>typeof e=="string","isString");var C=new Map([["a98-rgb","#manual/space.srgb.js"],["display\
-p3","#manual/space.srgb.js"],["hsl","#manual/space.hsl.js"],
["hwb","#manual/space.hwb.js"],["lab","#manual/space.lab.js"],
["lch","#manual/space.lch.js"],["oklab","#manual/space.oklab\
.js"],["oklch","#manual/space.oklch.js"],["rgb","#manual/spa\
ce.rgb.js"],["srgb","#manual/space.srgb.js"],["srgb-linear",
"#manual/space.srgb.js"],["xyz","#manual/space.xyz.js"],["xy\
z-d50","#manual/space.xyz.js"],["xyz-d65","#manual/space.xyz\
.js"],["prophoto-rgb","#manual/space.srgb.js"],["rec2020","#\
manual/space.srgb.js"]]),f=new Map;async function g(e){if(f.has(e))return f.get(e);if(C.has(e)){
let o=await import(C.get(e)??"#manual"),t=Object.values(o).find(
a=>a.ident===e);if(w(t))return f.set(t.ident,t),t}throw new Error(
"The color space not found by passed argument: "+e)}r(g,"ini\
tColorSpaceById");var me=r((e,n="",o=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((t,a)=>o||0<a?t[0].toUpperCase().concat(t.slice(1)):
t).join(n),"toPascalCase");var be=c(0,360),Se=c(0,2*Math.PI),he=c(0,100),R=c(0,255),I=c(
0,1);var u=String.raw`none|-?[\d\.]+%?`,D=`(${u}) (${u}) (${u})(?\
: / (${u}))?`,m=String.raw`a-f\d`,M=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
$=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
j=new RegExp(`^(${M})\\(${D}\\)$`),b=new RegExp(`^color\\((${$}\
) ${D}\\)$`),O=`#?[${m}]{3}[${m}]?`,_=`#?[${m}]{6}([${m}]{2}\
)?`,E=new RegExp(`[^#${m}]`,"gi"),k=new RegExp(`^${O}$|^${_}\
$`,"i"),N=r(e=>j.test(e)||b.test(e),"isColorFunction"),A=r(e=>E.
test(e)===!1&&k.test(e),"isHEXColor"),we=r(e=>typeof e=="str\
ing"&&(A(e)||N(e)),"isCSSColor"),B=r(e=>{let n=0;return e===
void 0||!e?1:e==="none"?0:(n=parseFloat(e),e.charAt(-1)==="%"&&
(n/=100),Math.min(Math.max(n,0),1))},"parseCSSAlphaChannel"),
Ce=r(async e=>{if(A(e)){let n=await g("rgb"),[o,t]=H(e);return[
n,o,t]}if(N(e)){let n=(b.test(e)?b.exec(e)?.slice(1):j.exec(
e)?.slice(1))??[,"none","none","none"],o=B(n.pop()),t=await g(
n.shift()??"rgb"),[a="none",s="none",i="none"]=n.map(p=>p!==
void 0&&/^[-.\d]+$/.test(p)?parseFloat(p):p);return[t,[a,s,i],
o]}throw new TypeError(`Expected a valid representation that\
 defined as the <color> CSS data type, but passed "${e}".`)},
"parseCSSColor");function H(e){if(E.test(e)||!k.test(e))throw new TypeError(
"Expected a valid hex string");let n=1;e=e.replace(/^#/,""),
e.length===8&&(n=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(n=Number.parseInt(e.slice(3,4).repeat(2),
16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+
e[2]+e[2]);let o=Number.parseInt(e,16),t=o>>16,a=o>>8&255,s=o&
255;return[[t,a,s],n]}r(H,"parseHEXColor");var Re=r((e,n)=>{
let o=r(t=>R.clamp(Math.round(t*255)).toString(16).padStart(
2,"0"),"coord_to_hex");return"#"+[...e,n!==void 0&&I.test(n)?
n:1].map(t=>o(t)).join("")},"toHEX");function Ie(e,n=1){let o=(S=>S===
0?"none":S)("alpha"in e?e.alpha:n);if("magnitude"in e&&1>=Number(
e.magnitude))throw new Error("CSS input notation requires pa\
rameterized PinS");let[t,a,s]=e;return`lab(${t?t+"%":"none"}\
 ${a||"none"} ${s||"none"} / ${o})`}r(Ie,"toCSSLabColor");function De(e,n=1){
let o=n<1?` / ${n===0?"none":n}`:"";return $.split("|").includes(
e.space.ident)?`color(${e.space.ident} ${[...e].join(" ")}${o}\
)`:`${e.space.ident}(${[...e].join(" ")}${o})`}r(De,"toCSSCo\
lor");export{j as CSSCAMFunction,b as CSSColorFunction,Y as initColorIdent,
g as initColorSpaceById,we as isCSSColor,N as isColorFunction,
w as isColorSpace,A as isHEXColor,ae as isIterableObject,d as isNumber,
l as isObject,y as isString,Ce as parseCSSColor,H as parseHEXColor,
De as toCSSColor,Ie as toCSSLabColor,Re as toHEX,z as toKebabCase,
me as toPascalCase};
