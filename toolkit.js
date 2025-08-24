var v=Object.defineProperty;var r=(e,t)=>v(e,"name",{value:t,configurable:!0});var z=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),h=z;function Y(e){let[t,o,n]=e,s,a,i;return t<15&&(s="red"),t==15&&
(s="reddish"),t>15&&(s="orange"),t>45&&(s="yellow"),t>70&&(s=
"lime"),t>79&&(s="green"),t>163&&(s="cyan"),t>193&&(s="blue"),
t>240&&(s="indigo"),t>260&&(s="violet"),t>270&&(s="purple"),
t>291&&(s="magenta"),t>327&&(s="rose"),t>344&&(s="red"),o<10&&
(a="almost grey"),o>9&&(a="very unsaturated"),o>30&&(a="unsa\
turated"),o>60&&(a="rather saturated"),o>80&&(a="highly satu\
rated"),n<10&&(i="almost black"),n>9&&(i="very dark"),n>22&&
(i="dark"),n>30&&(i="normal"),n>60&&(i="light"),n>80&&(i="ve\
ry light"),n>94&&(i="almost white"),h([i,s,a].join(" "))}r(Y,
"initColorIdent");function c(...e){let t=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[o,n]=t,s=n-o,a=o+s/2;return Object.
create(null,{from:{value:o},to:{value:n},minimum:{enumerable:!0,
value:o},maximum:{enumerable:!0,value:n},avg:{enumerable:!0,
value:a},value:{enumerable:!0,value:s},allot:{value:G},clamp:{
value:P},test:{value:r(i=>o<=i&&i<=n,"value")},toString:{value:r(
()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${n}}`,"value")},[Symbol.
iterator]:{value:r(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}r(c,"createRange");function G(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}r(G,"allocateOuterValu\
e");function P(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}r(P,"restrictOuterValue");var T=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var x=r(e=>y(e)&&T.has(e),"isSpaceID");var w=r(e=>l(e)&&"ident"in e&&x(e.ident)&&"CSYS"in e&&l(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),se=r(e=>l(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),d=r(e=>typeof e=="number","isNumber"),
l=r(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),y=r(e=>typeof e=="string","isString");var C=new Map([["a98-rgb","#space/rgb.js"],["display-p3","#s\
pace/rgb.js"],["hsl","#space/hsl.js"],["hwb","#space/hwb.js"],
["lab","#space/lab.js"],["lch","#space/lch.js"],["oklab","#s\
pace/oklab.js"],["oklch","#space/oklch.js"],["rgb","#space/r\
gb.js"],["srgb","#space/rgb.js"],["srgb-linear","#space/rgb.\
js"],["xyz","#space/xyz.js"],["xyz-d50","#space/xyz.js"],["x\
yz-d65","#space/xyz.js"],["prophoto-rgb","#space/rgb.js"],["\
rec2020","#space/rgb.js"]]),f=new Map;async function g(e){if(f.has(e))return f.get(e);if(C.has(e)){
let o=await import(C.get(e)??"lib.manual"),n=Object.values(o).
find(s=>s.ident===e);if(w(n))return f.set(n.ident,n),n}throw new Error(
"The color space not found by passed argument: "+e)}r(g,"ini\
tColorSpaceById");var me=r((e,t="",o=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((n,s)=>o||0<s?n[0].toUpperCase().concat(n.slice(1)):
n).join(t),"toPascalCase");var be=c(0,360),Se=c(0,2*Math.PI),he=c(0,100),R=c(0,255),I=c(
0,1);var u=String.raw`none|-?[\d\.]+%?`,D=`(${u}) (${u}) (${u})(?\
: / (${u}))?`,m=String.raw`a-f\d`,M=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
$=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
j=new RegExp(`^(${M})\\(${D}\\)$`),b=new RegExp(`^color\\((${$}\
) ${D}\\)$`),O=`#?[${m}]{3}[${m}]?`,_=`#?[${m}]{6}([${m}]{2}\
)?`,E=new RegExp(`[^#${m}]`,"gi"),k=new RegExp(`^${O}$|^${_}\
$`,"i"),N=r(e=>j.test(e)||b.test(e),"isColorFunction"),A=r(e=>E.
test(e)===!1&&k.test(e),"isHEXColor"),we=r(e=>typeof e=="str\
ing"&&(A(e)||N(e)),"isCSSColor"),B=r(e=>{let t=0;return e===
void 0||!e?1:e==="none"?0:(t=parseFloat(e),e.charAt(-1)==="%"&&
(t/=100),Math.min(Math.max(t,0),1))},"parseCSSAlphaChannel"),
Ce=r(async e=>{if(A(e)){let t=await g("rgb"),[o,n]=H(e);return[
t,o,n]}if(N(e)){let t=(b.test(e)?b.exec(e)?.slice(1):j.exec(
e)?.slice(1))??[,"none","none","none"],o=B(t.pop()),n=await g(
t.shift()??"rgb"),[s="none",a="none",i="none"]=t.map(p=>p!==
void 0&&/^[-.\d]+$/.test(p)?parseFloat(p):p);return[n,[s,a,i],
o]}throw new TypeError(`Expected a valid representation that\
 defined as the <color> CSS data type, but passed "${e}".`)},
"parseCSSColor");function H(e){if(E.test(e)||!k.test(e))throw new TypeError(
"Expected a valid hex string");let t=1;e=e.replace(/^#/,""),
e.length===8&&(t=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=Number.parseInt(e.slice(3,4).repeat(2),
16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+
e[2]+e[2]);let o=Number.parseInt(e,16),n=o>>16,s=o>>8&255,a=o&
255;return[[n,s,a],t]}r(H,"parseHEXColor");var Re=r((e,t)=>{
let o=r(n=>R.clamp(Math.round(n*255)).toString(16).padStart(
2,"0"),"coord_to_hex");return"#"+[...e,t!==void 0&&I.test(t)?
t:1].map(n=>o(n)).join("")},"toHEX");function Ie(e,t=1){let o=(S=>S===
0?"none":S)("alpha"in e?e.alpha:t);if("magnitude"in e&&1>=Number(
e.magnitude))throw new Error("CSS input notation requires pa\
rameterized PinS");let[n,s,a]=e;return`lab(${n?n+"%":"none"}\
 ${s||"none"} ${a||"none"} / ${o})`}r(Ie,"toCSSLabColor");function De(e,t=1){
let o=t<1?` / ${t===0?"none":t}`:"";return $.split("|").includes(
e.space.ident)?`color(${e.space.ident} ${[...e].join(" ")}${o}\
)`:`${e.space.ident}(${[...e].join(" ")}${o})`}r(De,"toCSSCo\
lor");export{j as CSSCAMFunction,b as CSSColorFunction,Y as initColorIdent,
g as initColorSpaceById,we as isCSSColor,N as isColorFunction,
w as isColorSpace,A as isHEXColor,se as isIterableObject,d as isNumber,
l as isObject,y as isString,Ce as parseCSSColor,H as parseHEXColor,
De as toCSSColor,Ie as toCSSLabColor,Re as toHEX,z as toKebabCase,
me as toPascalCase};
