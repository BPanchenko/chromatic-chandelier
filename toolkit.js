var G=Object.defineProperty;var t=(e,r)=>G(e,"name",{value:r,configurable:!0});var Y=t(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),E=Y;function ce(e){let[r,a,n]=e,i,o,s;return r<15&&(i="red"),r==
15&&(i="reddish"),r>15&&(i="orange"),r>45&&(i="yellow"),r>70&&
(i="lime"),r>79&&(i="green"),r>163&&(i="cyan"),r>193&&(i="bl\
ue"),r>240&&(i="indigo"),r>260&&(i="violet"),r>270&&(i="purp\
le"),r>291&&(i="magenta"),r>327&&(i="rose"),r>344&&(i="red"),
a<10&&(o="almost grey"),a>9&&(o="very unsaturated"),a>30&&(o=
"unsaturated"),a>60&&(o="rather saturated"),a>80&&(o="highly\
 saturated"),n<10&&(s="almost black"),n>9&&(s="very dark"),n>
22&&(s="dark"),n>30&&(s="normal"),n>60&&(s="light"),n>80&&(s=
"very light"),n>94&&(s="almost white"),E([s,i,o].join(" "))}
t(ce,"initColorIdent");function y(...e){let r=Math.max(e.length,9),a=new ArrayBuffer(
r*8),n=new Float64Array(a,0,r),i=Object.create(null,{[Symbol.
iterator]:{value:t(function*(){for(let o=0;o<n.length;o++)yield this[o]},
"value")},[Symbol.isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{
value:t(()=>"Matrix"+n.toString(),"value")},length:{enumerable:!0,
value:r},toArray:{value:t(()=>Iterator.from(n).toArray(),"va\
lue")},toString:{value:n.toString}});for(let o=0;o<r;o++)(function(s,c,l){
Object.defineProperty(s,c,{enumerable:!0,get:t(()=>l[c],"get"),
set:t(u=>{if(typeof u=="number")l[c]=u;else throw new TypeError(
"Expected Number")},"set")})})(i,o,n);return Object.defineProperties(
i,{clone:{value:t(()=>y(...n),"value")},each:{value:t(function(o){
return n.forEach((s,c,l)=>o(s,c,this)),this},"value")},determinant:{
value:t(()=>{let[o,s,c,l,u,p,f,b,h]=n,S=h*u-p*b,M=-h*l+p*f,w=b*
l-u*f;return o*S+s*M+c*w},"value")},invert:{value:t(function(){
let o=this.determinant();if(o===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[s,c,l,u,p,f,b,h,S]=n,M=S*p-f*h,w=-S*u+f*b,B=h*
u-p*b;return this.update(M/o,(-S*c+l*h)/o,(f*c-l*p)/o,w/o,(S*
s-l*b)/o,(-f*s+l*u)/o,B/o,(-h*s+c*b)/o,(p*s-c*u)/o)},"value")},
update:{value:t(function(){return n.set(Iterator.from(arguments).
map(o=>typeof o=="number"?o:0).toArray()),this},"value")}}),
i.update(...e)}t(y,"createMatrix");var j=t(e=>m(e)&&Symbol.iterator in e&&"minimum"in e&&g(e.minimum)&&
"maximum"in e&&g(e.maximum)&&"value"in e&&g(e.value)&&e.value>
0,"isRange");function d(...e){let r=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),[a,n]=r,i=n-a,o=a+i/2;return Object.
create(null,{from:{value:a},to:{value:n},minimum:{enumerable:!0,
value:a},maximum:{enumerable:!0,value:n},avg:{enumerable:!0,
value:o},value:{enumerable:!0,value:i},allot:{value:q},clamp:{
value:H},test:{value:t(s=>a<=s&&s<=n,"value")},toString:{value:t(
()=>String.raw`{x ∈ R; ${a} ⋜ x ⋜ ${n}}`,"value")},[Symbol.
iterator]:{value:t(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}t(d,"createRange");function q(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.
from:this.to-(this.from-e)%this.value}t(q,"allocateOuterValu\
e");function H(e){return this.test(e)?e:Math.max(Math.min(e,
this.to),this.from)}t(H,"restrictOuterValue");var Oe=y(1,0,0,0,1,0,0,0,1),ze=y(0,1,0,0,0,1,0,0,0),Fe=y(0,0,
0,1,0,0,0,1,0),Xe=y(0,0,1,0,1,0,1,0,0);var Ge=d(0,360),Ye=d(0,2*Math.PI),qe=d(0,100),D=d(0,255),T=d(
0,1);var g=t(e=>typeof e=="number","isNumber"),v=t(e=>typeof e=="\
string","isString"),V=t(e=>m(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),m=t(e=>e!==null&&typeof e==
"object"&&Array.isArray(e)===!1,"isObject"),L=t(e=>v(e)&&J.has(
e),"isColorChannelKey"),K=t(e=>v(e)&&Z.has(e),"isSpaceDimens\
ionID"),U=t(e=>v(e)&&W.has(e),"isSpaceID"),C=t(e=>m(e)&&"ide\
nt"in e&&U(e.ident)&&"CSYS"in e&&m(e.CSYS)&&"length"in e.CSYS&&
e.CSYS.length===3,"isColorSpace"),nt=t(e=>m(e)&&"ident"in e&&
K(e.ident)&&"short"in e&&L(e.short)&&"domain"in e&&j(e.domain),
"isSpaceDimension"),ot=t(e=>m(e)&&e instanceof Iterator&&"al\
pha"in e&&g(e.alpha),"isColorChannel");var Z=new Set(["abscissa","angle","applicate","blackness","b\
lue-yellow","blue","chroma","green","hue","lightness","ordin\
ate","radius","green-red","red","saturation","whiteness"]),J=new Set(
["a","b","B","C","c","G","g","h","L","phi","R","r","rho","S",
"W","x","y","z","rho","phi"]),W=new Set(["a98-rgb","display-\
p3","hsl","hwb","lab","lch","oklab","oklch","prophoto-rgb","\
rec2020","rec2100-pq","rec2100-hlg","rec2100-linear","srgb-l\
inear","srgb","rgb","xyz","xyz-d50","xyz-d65"]);var $=new Map([["a98-rgb","#space/rgb.js"],["display-p3","#s\
pace/rgb.js"],["hsl","#space/hsl.js"],["hwb","#space/hwb.js"],
["lab","#space/lab.js"],["lch","#space/lch.js"],["oklab","#s\
pace/oklab.js"],["oklch","#space/oklch.js"],["rgb","#space/r\
gb.js"],["srgb","#space/rgb.js"],["srgb-linear","#space/rgb.\
js"],["xyz","#space/xyz.js"],["xyz-d50","#space/xyz.js"],["x\
yz-d65","#space/xyz.js"],["prophoto-rgb","#space/rgb.js"],["\
rec2020","#space/rgb.js"]]),R=new Map;async function A(e){if(R.has(e))return R.get(e);if($.has(e)){
let a=await import($.get(e)??"lib.manual"),n=Object.values(a).
find(i=>i.ident===e);if(C(n))return R.set(n.ident,n),n}throw new Error(
"The color space not found by passed argument: "+e)}t(A,"ini\
tColorSpaceById");var lt=t((e,r="",a=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((n,i)=>a||0<i?n[0].toUpperCase().concat(n.slice(1)):
n).join(r),"toPascalCase");var I=String.raw`none|-?[\d\.]+%?`,k=`(${I}) (${I}) (${I})(?\
: / (${I}))?`,x=String.raw`a-f\d`,Q=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
N=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
O=new RegExp(`^(${Q})\\(${k}\\)$`),P=new RegExp(`^color\\((${N}\
) ${k}\\)$`),ee=`#?[${x}]{3}[${x}]?`,te=`#?[${x}]{6}([${x}]{\
2})?`,z=new RegExp(`[^#${x}]`,"gi"),F=new RegExp(`^${ee}$|^${te}\
$`,"i"),X=t(e=>O.test(e)||P.test(e),"isColorFunction"),_=t(e=>z.
test(e)===!1&&F.test(e),"isHEXColor"),ht=t(e=>typeof e=="str\
ing"&&(_(e)||X(e)),"isCSSColor"),re=t(e=>{let r=0;return e===
void 0||!e?1:e==="none"?0:(r=parseFloat(e),e.charAt(-1)==="%"&&
(r/=100),Math.min(Math.max(r,0),1))},"parseCSSAlphaChannel"),
gt=t(async e=>{if(_(e)){let r=await A("rgb"),[a,n]=ne(e);return[
r,a,n]}if(X(e)){let r=(P.test(e)?P.exec(e)?.slice(1):O.exec(
e)?.slice(1))??["none","none","none"],a=re(r.pop()),n=await A(
r.shift()??"rgb"),[i="none",o="none",s="none"]=r.map(c=>c!==
void 0&&/^[-.\d]+$/.test(c)?parseFloat(c):c);return[n,[i,o,s],
a]}throw new TypeError(`Expected a valid representation that\
 defined as the <color> CSS data type, but passed "${e}".`)},
"parseCSSColor");function ne(e){if(z.test(e)||!F.test(e))throw new TypeError(
"Expected a valid hex string");let r=1;e=e.replace(/^#/,""),
e.length===8&&(r=Number.parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(r=Number.parseInt(e.slice(3,4).repeat(2),
16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+e[0]+e[1]+e[1]+
e[2]+e[2]);let a=Number.parseInt(e,16),n=a>>16,i=a>>8&255,o=a&
255;return[[n,i,o],r]}t(ne,"parseHEXColor");var dt=t((e,r)=>{
let a=t(n=>D.clamp(Math.round(n*255)).toString(16).padStart(
2,"0"),"coord_to_hex");return"#"+[...e,r!==void 0&&T.test(r)?
r:1].map(n=>a(n)).join("")},"toHEX");function St(e,r=1){let a=(u=>u===
0?"none":u)("alpha"in e?e.alpha:r);if("magnitude"in e&&1>=Number(
e.magnitude))throw new Error("CSS input notation requires pa\
rameterized PinS");let[n,i,o]=e;return`lab(${n?n+"%":"none"}\
 ${i||"none"} ${o||"none"} / ${a})`}t(St,"toCSSLabColor");function yt(e,r=1){
let a=r<1?` / ${r===0?"none":r}`:"";return N.split("|").includes(
e.space.ident)?`color(${e.space.ident} ${[...e].join(" ")}${a}\
)`:`${e.space.ident}(${[...e].join(" ")}${a})`}t(yt,"toCSSCo\
lor");export{O as CSSCAMFunction,P as CSSColorFunction,ce as initColorIdent,
A as initColorSpaceById,ht as isCSSColor,ot as isColorChannel,
L as isColorChannelKey,X as isColorFunction,C as isColorSpace,
_ as isHEXColor,V as isIterableObject,g as isNumber,m as isObject,
j as isRange,nt as isSpaceDimension,K as isSpaceDimensionID,
U as isSpaceID,v as isString,gt as parseCSSColor,ne as parseHEXColor,
yt as toCSSColor,St as toCSSLabColor,dt as toHEX,Y as toKebabCase,
lt as toPascalCase};
