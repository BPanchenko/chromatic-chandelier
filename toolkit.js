var v=Object.defineProperty;var r=(e,n)=>v(e,"name",{value:n,configurable:!0});var A=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),d=A;function q(e){let[n,o,t]=e,a,s,i;return n<15&&(a="red"),n==15&&
(a="reddish"),n>15&&(a="orange"),n>45&&(a="yellow"),n>70&&(a=
"lime"),n>79&&(a="green"),n>163&&(a="cyan"),n>193&&(a="blue"),
n>240&&(a="indigo"),n>260&&(a="violet"),n>270&&(a="purple"),
n>291&&(a="magenta"),n>327&&(a="rose"),n>344&&(a="red"),o<10&&
(s="almost grey"),o>9&&(s="very unsaturated"),o>30&&(s="unsa\
turated"),o>60&&(s="rather saturated"),o>80&&(s="highly satu\
rated"),t<10&&(i="almost black"),t>9&&(i="very dark"),t>22&&
(i="dark"),t>30&&(i="normal"),t>60&&(i="light"),t>80&&(i="ve\
ry light"),t>94&&(i="almost white"),d([i,a,s].join(" "))}r(q,
"initColorIdent");var T=r((e,n)=>Object.create(null,{0:{enumerable:!0,value:e},
1:{enumerable:!0,value:n},length:{value:2},[Symbol.iterator]:{
value:r(function*(){yield this[0],yield this[1]},"value")}}),
"createDataView");function p(e=1,n){let o=T(n===void 0?0:e,n===void 0?e:n),[t,
a]=o,s=Math.sqrt(a**2+t**2),i=t+s/2;return Object.defineProperties(
o,{from:{enumerable:!0,value:t},to:{enumerable:!0,value:a},span:{
enumerable:!0,value:s},avg:{enumerable:!0,value:i},allot:{value:z},
clamp:{value:G},clone:{value:O},test:{value:r(u=>t<=u&&u<=a,
"value")},toString:{value:r(()=>String.raw`{x ∈ R; ${t} ⋜ x ⋜ ${a}}`,
"value")}})}r(p,"createRange");function z(e){return this.test(
e)?e:e>this.from?(e-this.to)%this.span+this.from:this.to-(this.
from-e)%this.span}r(z,"allocateOuterValue");function G(e){return this.
test(e)?e:Math.max(Math.min(e,this.to),this.from)}r(G,"restr\
ictOuterValue");function O(){return p(...this)}r(O,"makeDupl\
icate");var M=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch",
"oklab","oklch","prophoto-rgb","rec2020","rec2100-pq","rec21\
00-hlg","rec2100-linear","srgb-linear","srgb","rgb","xyz","x\
yz-d50","xyz-d65"]);var w=r(e=>y(e)&&M.has(e),"isSpaceID");var x=r(e=>typeof e=="number","isNumber"),y=r(e=>typeof e=="\
string","isString"),l=r(e=>e!==null&&typeof e=="object"&&Array.
isArray(e)===!1,"isObject"),f=r(e=>l(e)&&"ident"in e&&w(e.ident)&&
"CSYS"in e&&l(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,
"isColorSpace");var C=new Map([["a98-rgb","#manual/space.srgb.js"],["display\
-p3","#manual/space.srgb.js"],["hsl","#manual/space.hsl.js"],
["hwb","#manual/space.hwb.js"],["lab","#manual/space.lab.js"],
["lch","#manual/space.lch.js"],["oklab","#manual/space.oklab\
.js"],["oklch","#manual/space.oklch.js"],["srgb","#manual/sp\
ace.srgb.js"],["srgb-linear","#manual/space.srgb.js"],["xyz",
"#manual/space.xyz.js"],["xyz-d50","#manual/space.xyz.js"],[
"xyz-d65","#manual/space.xyz.js"],["prophoto-rgb","#manual/s\
pace.srgb.js"],["rec2020","#manual/space.srgb.js"]]),g=new Map;async function b(e){if(g.has(e))return g.get(e);if(C.has(e)){
let o=await import(C.get(e)??"#manual"),t=Object.values(o).find(
a=>a.ident===e);if(f(t))return g.set(t.ident,t),t}throw new Error(
"The color space not found by passed argument: "+e)}r(b,"ini\
tColorSpaceById");var _=(o=>(o[o.InvalidPointOptions=0]="InvalidPointOptions",
o[o.ValueWithoutRange=1]="ValueWithoutRange",o))(_||{});function fe(e,...n){switch(e){case 0:return new TypeError("C\
annot make a point in <colorspace> use passed initial argume\
nts: "+JSON.stringify(n,null,2));case 1:{let[o,t]=n;return[a=>`\
Coordinate is ${a} but must be within ${o} and ${t}.`,RangeError]}default:
return new Error("Unknown Error")}}r(fe,"initException");var he=r((e,n="",o=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((t,a)=>o||0<a?t[0].toUpperCase().concat(t.slice(1)):
t).join(n),"toPascalCase");var we=p(0,360),ye=p(0,2*Math.PI),Ce=p(0,100),I=p(0,255),E=p(
0,1);var m=String.raw`none|-?[\d\.]+%?`,R=`(${m}) (${m}) (${m})(?\
: / (${m}))?`,B=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch`,
c=String.raw`a-f\d`,D=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
$=new RegExp(`^(${B})\\(${R}\\)$`),h=new RegExp(`^color\\((${D}\
) ${R}\\)$`),H=`#?[${c}]{3}[${c}]?`,V=`#?[${c}]{6}([${c}]{2}\
)?`,j=new RegExp(`[^#${c}]`,"gi"),k=new RegExp(`^${H}$|^${V}\
$`,"i"),N=r(e=>$.test(e)||h.test(e),"isColorFunction"),P=r(e=>j.
test(e)===!1&&k.test(e),"isHEXColor"),De=r(e=>typeof e=="str\
ing"&&(P(e)||N(e)),"isCSSColor"),F=r(e=>{let n=0;return e===
void 0||!e?1:e==="none"?0:(n=parseFloat(e),e.charAt(-1)==="%"&&
(n/=100),Math.min(Math.max(n,0),1))},"parseCSSAlphaChannel"),
$e=r(async e=>{if(P(e)){let n=await b("rgb"),[o,t]=K(e);return[
n,o,t]}if(N(e)){let n=(h.test(e)?h.exec(e)?.slice(1):$.exec(
e)?.slice(1))??[,"none","none","none"],o=F(n.pop()),t=await b(
n.shift()??"rgb"),[a="none",s="none",i="none"]=n;return[t,[a,
s,i],o]}throw new TypeError(`Expected a valid representation\
 that defined as the <color> CSS data type, but passed "${e}\
".`)},"parseCSSColor");function K(e){if(j.test(e)||!k.test(e))
throw new TypeError("Expected a valid hex string");let n=1;e=
e.replace(/^#/,""),e.length===8&&(n=Number.parseInt(e.slice(
6,8),16)/255,e=e.slice(0,6)),e.length===4&&(n=Number.parseInt(
e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&
(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let o=Number.parseInt(e,16),
t=o>>16,a=o>>8&255,s=o&255;return[[t,a,s],n]}r(K,"parseHEXCo\
lor");var je=r((e,n)=>{let o=r(t=>I.clamp(Math.round(t*255)).
toString(16).padStart(2,"0"),"coord_to_hex");return"#"+[...e,
n!==void 0&&E.test(n)?n:1].map(t=>o(t)).join("")},"toHEX");function ke(e,n=1){
let o=(S=>S===0?"none":S)("alpha"in e?e.alpha:n);if("magnitu\
de"in e&&1>=Number(e.magnitude))throw new Error("CSS input n\
otation requires parameterized PinS");let[t,a,s]=e;return`la\
b(${t?t+"%":"none"} ${a||"none"} ${s||"none"} / ${o})`}r(ke,
"toCSSLabColor");function Ne(e,n=1){let o=n<1?` / ${n===0?"n\
one":n}`:"";return D.split("|").includes(e.space.ident)?`col\
or(${e.space.ident} ${[...e].join(" ")}${o})`:`${e.space.ident}\
(${[...e].join(" ")}${o})`}r(Ne,"toCSSColor");export{_ as ErrorCode,q as initColorIdent,b as initColorSpaceById,
fe as initException,De as isCSSColor,N as isColorFunction,f as isColorSpace,
P as isHEXColor,x as isNumber,l as isObject,y as isString,$e as parseCSSColor,
K as parseHEXColor,Ne as toCSSColor,ke as toCSSLabColor,je as toHEX,
A as toKebabCase,he as toPascalCase};
