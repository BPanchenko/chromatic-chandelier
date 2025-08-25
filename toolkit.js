var P=Object.defineProperty;var r=(e,n)=>P(e,"name",{value:n,configurable:!0});var z=r(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),w=z;function Q(e){let[n,t,o]=e,a,s,i;return n<15&&(a="red"),n==15&&
(a="reddish"),n>15&&(a="orange"),n>45&&(a="yellow"),n>70&&(a=
"lime"),n>79&&(a="green"),n>163&&(a="cyan"),n>193&&(a="blue"),
n>240&&(a="indigo"),n>260&&(a="violet"),n>270&&(a="purple"),
n>291&&(a="magenta"),n>327&&(a="rose"),n>344&&(a="red"),t<10&&
(s="almost grey"),t>9&&(s="very unsaturated"),t>30&&(s="unsa\
turated"),t>60&&(s="rather saturated"),t>80&&(s="highly satu\
rated"),o<10&&(i="almost black"),o>9&&(i="very dark"),o>22&&
(i="dark"),o>30&&(i="normal"),o>60&&(i="light"),o>80&&(i="ve\
ry light"),o>94&&(i="almost white"),w([i,a,s].join(" "))}r(Q,
"initColorIdent");var C=r(e=>p(e)&&Symbol.iterator in e&&"minimum"in e&&u(e.minimum)&&
"maximum"in e&&u(e.maximum)&&"value"in e&&u(e.value)&&e.value>
0,"isRange");function c(...e){let n=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[t,o]=n,a=o-t,s=t+a/2;return Object.
create(null,{from:{value:t},to:{value:o},minimum:{enumerable:!0,
value:t},maximum:{enumerable:!0,value:o},avg:{enumerable:!0,
value:s},value:{enumerable:!0,value:a},allot:{value:M},clamp:{
value:G},test:{value:r(i=>t<=i&&i<=o,"value")},toString:{value:r(
()=>String.raw`{x ∈ R; ${t} ⋜ x ⋜ ${o}}`,"value")},[Symbol.
iterator]:{value:r(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}r(c,"createRange");function M(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}r(M,"allocateOuterValu\
e");function G(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}r(G,"restrictOuterValue");var u=r(e=>typeof e=="number","isNumber"),h=r(e=>typeof e=="\
string","isString"),ae=r(e=>p(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),p=r(e=>e!==null&&typeof e==
"object"&&Array.isArray(e)===!1,"isObject"),T=r(e=>h(e)&&H.has(
e),"isColorChannelKey"),_=r(e=>h(e)&&O.has(e),"isSpaceDimens\
ionID"),B=r(e=>h(e)&&F.has(e),"isSpaceID"),R=r(e=>p(e)&&"ide\
nt"in e&&B(e.ident)&&"CSYS"in e&&p(e.CSYS)&&"length"in e.CSYS&&
e.CSYS.length===3,"isColorSpace"),se=r(e=>p(e)&&"ident"in e&&
_(e.ident)&&"short"in e&&T(e.short)&&"domain"in e&&C(e.domain),
"isSpaceDimension"),ie=r(e=>p(e)&&e instanceof Iterator&&"al\
pha"in e&&u(e.alpha),"isColorChannel");var O=new Set(["abscissa","angle","applicate","blackness","b\
lue-yellow","blue","chroma","green","hue","lightness","ordin\
ate","radius","green-red","red","saturation","whiteness"]),H=new Set(
["a","b","B","C","c","G","g","h","L","phi","R","r","rho","S",
"W","x","y","z","rho","phi"]),F=new Set(["a98-rgb","display-\
p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","\
rec2020","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-l\
inear","srgb","rgb","xyz","xyz-d50","xyz-d65"]);var y=new Map([["a98-rgb","#space/rgb.js"],["display-p3","#s\
pace/rgb.js"],["hsl","#space/hsl.js"],["hwb","#space/hwb.js"],
["lab","#space/lab.js"],["lch","#space/lch.js"],["oklab","#s\
pace/oklab.js"],["oklch","#space/oklch.js"],["rgb","#space/r\
gb.js"],["srgb","#space/rgb.js"],["srgb-linear","#space/rgb.\
js"],["xyz","#space/xyz.js"],["xyz-d50","#space/xyz.js"],["x\
yz-d65","#space/xyz.js"],["prophoto-rgb","#space/rgb.js"],["\
rec2020","#space/rgb.js"]]),S=new Map;async function d(e){if(S.has(e))return S.get(e);if(y.has(e)){
let t=await import(y.get(e)??"lib.manual"),o=Object.values(t).
find(a=>a.ident===e);if(R(o))return S.set(o.ident,o),o}throw new Error(
"The color space not found by passed argument: "+e)}r(d,"ini\
tColorSpaceById");var ge=r((e,n="",t=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((o,a)=>t||0<a?o[0].toUpperCase().concat(o.slice(1)):
o).join(n),"toPascalCase");var Se=c(0,360),de=c(0,2*Math.PI),xe=c(0,100),I=c(0,255),$=c(
0,1);var f=String.raw`none|-?[\d\.]+%?`,E=`(${f}) (${f}) (${f})(?\
: / (${f}))?`,g=String.raw`a-f\d`,K=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
j=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
D=new RegExp(`^(${K})\\(${E}\\)$`),x=new RegExp(`^color\\((${j}\
) ${E}\\)$`),V=`#?[${g}]{3}[${g}]?`,L=`#?[${g}]{6}([${g}]{2}\
)?`,k=new RegExp(`[^#${g}]`,"gi"),N=new RegExp(`^${V}$|^${L}\
$`,"i"),A=r(e=>D.test(e)||x.test(e),"isColorFunction"),v=r(e=>k.
test(e)===!1&&N.test(e),"isHEXColor"),Ie=r(e=>typeof e=="str\
ing"&&(v(e)||A(e)),"isCSSColor"),U=r(e=>{let n=0;return e===
void 0||!e?1:e==="none"?0:(n=parseFloat(e),e.charAt(-1)==="%"&&
(n/=100),Math.min(Math.max(n,0),1))},"parseCSSAlphaChannel"),
$e=r(async e=>{if(v(e)){let n=await d("rgb"),[t,o]=X(e);return[
n,t,o]}if(A(e)){let n=(x.test(e)?x.exec(e)?.slice(1):D.exec(
e)?.slice(1))??["none","none","none"],t=U(n.pop()),o=await d(
n.shift()??"rgb"),[a="none",s="none",i="none"]=n.map(l=>l!==
void 0&&/^[-.\d]+$/.test(l)?parseFloat(l):l);return[o,[a,s,i],
t]}throw new TypeError(`Expected a valid representation that\
 defined as the <color> CSS data type, but passed "${e}".`)},
"parseCSSColor");function X(e){if(k.test(e)||!N.test(e))throw new TypeError(
"Expected a valid hex string");let n=1;e=e.replace(/^#/,""),
e.length===8&&(n=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(n=Number.parseInt(e.slice(3,4).repeat(2),
16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+
e[2]+e[2]);let t=Number.parseInt(e,16),o=t>>16,a=t>>8&255,s=t&
255;return[[o,a,s],n]}r(X,"parseHEXColor");var Ee=r((e,n)=>{
let t=r(o=>I.clamp(Math.round(o*255)).toString(16).padStart(
2,"0"),"coord_to_hex");return"#"+[...e,n!==void 0&&$.test(n)?
n:1].map(o=>t(o)).join("")},"toHEX");function je(e,n=1){let t=(m=>m===
0?"none":m)("alpha"in e?e.alpha:n);if("magnitude"in e&&1>=Number(
e.magnitude))throw new Error("CSS input notation requires pa\
rameterized PinS");let[o,a,s]=e;return`lab(${o?o+"%":"none"}\
 ${a||"none"} ${s||"none"} / ${t})`}r(je,"toCSSLabColor");function De(e,n=1){
let t=n<1?` / ${n===0?"none":n}`:"";return j.split("|").includes(
e.space.ident)?`color(${e.space.ident} ${[...e].join(" ")}${t}\
)`:`${e.space.ident}(${[...e].join(" ")}${t})`}r(De,"toCSSCo\
lor");function ke(e){let n=NaN,t="deg";if(typeof e=="number")
n=e;else{let l=String.raw`deg|grad|rad|turn`,b=new RegExp(`^\
(-?[d.]+)(${l})?$`,"i");if(b.test(e)){let m=b.exec(e)?.slice(
1)??["0","deg"];n=parseFloat(m[0]),t=m[1]}else if(e==="none")
n=NaN;else throw new TypeError("Expected a valid <angle> str\
ing")}let[o,a]=t==="grad"?[0,400]:t==="deg"?[0,360]:t==="rad"?
[-Math.PI,Math.PI]:[0,1],s=c(o,a);s.test(n)===!1&&(n=s.allot(
n));let i=t==="grad"?180/200:t==="rad"?180/Math.PI:t==="turn"?
360:1;return n*i}r(ke,"parseCSSAngle");export{D as CSSCAMFunction,x as CSSColorFunction,Q as initColorIdent,
d as initColorSpaceById,Ie as isCSSColor,ie as isColorChannel,
T as isColorChannelKey,A as isColorFunction,R as isColorSpace,
v as isHEXColor,ae as isIterableObject,u as isNumber,p as isObject,
C as isRange,se as isSpaceDimension,_ as isSpaceDimensionID,
B as isSpaceID,h as isString,ke as parseCSSAngle,$e as parseCSSColor,
X as parseHEXColor,De as toCSSColor,je as toCSSLabColor,Ee as toHEX,
z as toKebabCase,ge as toPascalCase};
