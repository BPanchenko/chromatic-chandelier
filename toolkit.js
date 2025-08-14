var v=Object.defineProperty;var o=(e,n)=>v(e,"name",{value:n,configurable:!0});var T=o(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),S=T;function X(e){let[n,t,r]=e,a,s,i;return n<15&&(a="red"),n==15&&
(a="reddish"),n>15&&(a="orange"),n>45&&(a="yellow"),n>70&&(a=
"lime"),n>79&&(a="green"),n>163&&(a="cyan"),n>193&&(a="blue"),
n>240&&(a="indigo"),n>260&&(a="violet"),n>270&&(a="purple"),
n>291&&(a="magenta"),n>327&&(a="rose"),n>344&&(a="red"),t<10&&
(s="almost grey"),t>9&&(s="very unsaturated"),t>30&&(s="unsa\
turated"),t>60&&(s="rather saturated"),t>80&&(s="highly satu\
rated"),r<10&&(i="almost black"),r>9&&(i="very dark"),r>22&&
(i="dark"),r>30&&(i="normal"),r>60&&(i="light"),r>80&&(i="ve\
ry light"),r>94&&(i="almost white"),S([i,a,s].join(" "))}o(X,
"initColorIdent");function p(...e){let n=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[t,r]=n,a=r-t,s=t+a/2;return Object.
create(null,{from:{value:t},to:{value:r},minimum:{enumerable:!0,
value:t},maximum:{enumerable:!0,value:r},avg:{enumerable:!0,
value:s},value:{enumerable:!0,value:a},allot:{value:P},clamp:{
value:z},test:{value:o(i=>t<=i&&i<=r,"value")},toString:{value:o(
()=>String.raw`{x ∈ R; ${t} ⋜ x ⋜ ${r}}`,"value")},[Symbol.
iterator]:{value:o(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}o(p,"createRange");function P(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}o(P,"allocateOuterValu\
e");function z(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}o(z,"restrictOuterValue");var G=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var d=o(e=>y(e)&&G.has(e),"isSpaceID");var w=o(e=>l(e)&&"ident"in e&&d(e.ident)&&"CSYS"in e&&l(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),se=o(e=>l(
e)&&Symbol.iterator in e&&typeof e[Symbol.iterator]=="functi\
on","isIterableObject"),x=o(e=>typeof e=="number","isNumber"),
l=o(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,"\
isObject"),y=o(e=>typeof e=="string","isString");var C=new Map([["a98-rgb","#manual/space.srgb.js"],["display\
-p3","#manual/space.srgb.js"],["hsl","#manual/space.hsl.js"],
["hwb","#manual/space.hwb.js"],["lab","#manual/space.lab.js"],
["lch","#manual/space.lch.js"],["oklab","#manual/space.oklab\
.js"],["oklch","#manual/space.oklch.js"],["rgb","#manual/spa\
ce.rgb.js"],["srgb","#manual/space.srgb.js"],["srgb-linear",
"#manual/space.srgb.js"],["xyz","#manual/space.xyz.js"],["xy\
z-d50","#manual/space.xyz.js"],["xyz-d65","#manual/space.xyz\
.js"],["prophoto-rgb","#manual/space.srgb.js"],["rec2020","#\
manual/space.srgb.js"]]),f=new Map;async function g(e){if(f.has(e))return f.get(e);if(C.has(e)){
let t=await import(C.get(e)??"#manual"),r=Object.values(t).find(
a=>a.ident===e);if(w(r))return f.set(r.ident,r),r}throw new Error(
"The color space not found by passed argument: "+e)}o(g,"ini\
tColorSpaceById");var O=(t=>(t[t.InvalidPointOptions=0]="InvalidPointOptions",
t[t.ValueWithoutRange=1]="ValueWithoutRange",t))(O||{});function ue(e,...n){switch(e){case 0:return new TypeError("C\
annot make a point in <colorspace> use passed initial argume\
nts: "+JSON.stringify(n,null,2));case 1:{let[t,r]=n;return[a=>`\
Coordinate is ${a} but must be within ${t} and ${r}.`,RangeError]}default:
return new Error("Unknown Error")}}o(ue,"initException");var be=o((e,n="",t=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((r,a)=>t||0<a?r[0].toUpperCase().concat(r.slice(1)):
r).join(n),"toPascalCase");var de=p(0,360),ye=p(0,2*Math.PI),we=p(0,100),R=p(0,255),E=p(
0,1);var u=String.raw`none|-?[\d\.]+%?`,I=`(${u}) (${u}) (${u})(?\
: / (${u}))?`,m=String.raw`a-f\d`,M=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
$=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
D=new RegExp(`^(${M})\\(${I}\\)$`),b=new RegExp(`^color\\((${$}\
) ${I}\\)$`),_=`#?[${m}]{3}[${m}]?`,B=`#?[${m}]{6}([${m}]{2}\
)?`,j=new RegExp(`[^#${m}]`,"gi"),k=new RegExp(`^${_}$|^${B}\
$`,"i"),N=o(e=>D.test(e)||b.test(e),"isColorFunction"),A=o(e=>j.
test(e)===!1&&k.test(e),"isHEXColor"),Ie=o(e=>typeof e=="str\
ing"&&(A(e)||N(e)),"isCSSColor"),H=o(e=>{let n=0;return e===
void 0||!e?1:e==="none"?0:(n=parseFloat(e),e.charAt(-1)==="%"&&
(n/=100),Math.min(Math.max(n,0),1))},"parseCSSAlphaChannel"),
$e=o(async e=>{if(A(e)){let n=await g("rgb"),[t,r]=V(e);return[
n,t,r]}if(N(e)){let n=(b.test(e)?b.exec(e)?.slice(1):D.exec(
e)?.slice(1))??[,"none","none","none"],t=H(n.pop()),r=await g(
n.shift()??"rgb"),[a="none",s="none",i="none"]=n.map(c=>c!==
void 0&&/^[-.\d]+$/.test(c)?parseFloat(c):c);return[r,[a,s,i],
t]}throw new TypeError(`Expected a valid representation that\
 defined as the <color> CSS data type, but passed "${e}".`)},
"parseCSSColor");function V(e){if(j.test(e)||!k.test(e))throw new TypeError(
"Expected a valid hex string");let n=1;e=e.replace(/^#/,""),
e.length===8&&(n=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(n=Number.parseInt(e.slice(3,4).repeat(2),
16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+
e[2]+e[2]);let t=Number.parseInt(e,16),r=t>>16,a=t>>8&255,s=t&
255;return[[r,a,s],n]}o(V,"parseHEXColor");var De=o((e,n)=>{
let t=o(r=>R.clamp(Math.round(r*255)).toString(16).padStart(
2,"0"),"coord_to_hex");return"#"+[...e,n!==void 0&&E.test(n)?
n:1].map(r=>t(r)).join("")},"toHEX");function je(e,n=1){let t=(h=>h===
0?"none":h)("alpha"in e?e.alpha:n);if("magnitude"in e&&1>=Number(
e.magnitude))throw new Error("CSS input notation requires pa\
rameterized PinS");let[r,a,s]=e;return`lab(${r?r+"%":"none"}\
 ${a||"none"} ${s||"none"} / ${t})`}o(je,"toCSSLabColor");function ke(e,n=1){
let t=n<1?` / ${n===0?"none":n}`:"";return $.split("|").includes(
e.space.ident)?`color(${e.space.ident} ${[...e].join(" ")}${t}\
)`:`${e.space.ident}(${[...e].join(" ")}${t})`}o(ke,"toCSSCo\
lor");export{D as CSSCAMFunction,b as CSSColorFunction,O as ErrorCode,
X as initColorIdent,g as initColorSpaceById,ue as initException,
Ie as isCSSColor,N as isColorFunction,w as isColorSpace,A as isHEXColor,
se as isIterableObject,x as isNumber,l as isObject,y as isString,
$e as parseCSSColor,V as parseHEXColor,ke as toCSSColor,je as toCSSLabColor,
De as toHEX,T as toKebabCase,be as toPascalCase};
