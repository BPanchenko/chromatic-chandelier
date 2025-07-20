var N=Object.defineProperty;var a=(e,n)=>N(e,"name",{value:n,configurable:!0});var A=a(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),
"-"),"toKebabCase"),b=A;function q(e){let[n,r,t]=e,o,s,i;return n<15&&(o="red"),n==15&&
(o="reddish"),n>15&&(o="orange"),n>45&&(o="yellow"),n>70&&(o=
"lime"),n>79&&(o="green"),n>163&&(o="cyan"),n>193&&(o="blue"),
n>240&&(o="indigo"),n>260&&(o="violet"),n>270&&(o="purple"),
n>291&&(o="magenta"),n>327&&(o="rose"),n>344&&(o="red"),r<10&&
(s="almost grey"),r>9&&(s="very unsaturated"),r>30&&(s="unsa\
turated"),r>60&&(s="rather saturated"),r>80&&(s="highly satu\
rated"),t<10&&(i="almost black"),t>9&&(i="very dark"),t>22&&
(i="dark"),t>30&&(i="normal"),t>60&&(i="light"),t>80&&(i="ve\
ry light"),t>94&&(i="almost white"),b([i,o,s].join(" "))}a(q,
"initColorIdent");var k=a(e=>typeof e=="number","isNumber"),Q=a(e=>typeof e=="\
string","isString"),h=a(e=>e!==null&&typeof e=="object"&&Array.
isArray(e)===!1,"isObject"),S=a(e=>h(e)&&"CSYS"in e&&e.CSYS instanceof
Iterator&&"length"in e.CSYS&&e.CSYS.length===3&&"ident"in e,
"isColorSpace");var d=new Map([["a98-rgb","#manual/space.srgb.js"],["display\
-p3","#manual/space.srgb.js"],["hsl","#manual/space.hsl.js"],
["hwb","#manual/space.hwb.js"],["lab","#manual/space.lab.js"],
["lch","#manual/space.lch.js"],["oklab","#manual/space.oklab\
.js"],["oklch","#manual/space.oklch.js"],["srgb","#manual/sp\
ace.srgb.js"],["srgb-linear","#manual/space.srgb.js"],["xyz",
"#manual/space.xyz.js"],["xyz-d50","#manual/space.xyz.js"],[
"xyz-d65","#manual/space.xyz.js"],["prophoto-rgb","#manual/s\
pace.srgb.js"],["rec2020","#manual/space.srgb.js"]]),u=new Map;async function m(e){if(u.has(e))return u.get(e);if(d.has(e)){
let r=await import(d.get(e)??"#manual"),t=Object.values(r).find(
o=>o.ident===e);if(S(t))return u.set(t.ident,t),t}throw new Error(
"The color space not found by passed argument: "+e)}a(m,"ini\
tColorSpaceById");var T=(r=>(r[r.InvalidPointOptions=0]="InvalidPointOptions",
r[r.ValueWithoutRange=1]="ValueWithoutRange",r))(T||{});function ae(e,...n){switch(e){case 0:return new TypeError("C\
annot make a point in <colorspace> use passed initial argume\
nts: "+JSON.stringify(n,null,2));case 1:{let[r,t]=n;return[o=>`\
Coordinate is ${o} but must be within ${r} and ${t}.`,RangeError]}default:
return new Error("Unknown Error")}}a(ae,"initException");var ie=a((e,n="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(
" ").map((t,o)=>r||0<o?t[0].toUpperCase().concat(t.slice(1)):
t).join(n),"toPascalCase");var P=a((e,n)=>Object.freeze({0:e,1:n,length:2,[Symbol.iterator]:function*(){
yield this[0],yield this[1]}}),"parseInitialArguments");function p(e=1,n){
let r=P(n===void 0?0:e,n===void 0?e:n),[t,o]=r,s=Math.sqrt(o**
2+t**2),i=t+s/2;return Object.create(r,{min:{value:t},max:{value:o},
from:{enumerable:!0,value:t},to:{enumerable:!0,value:o},span:{
enumerable:!0,value:s},avg:{enumerable:!0,value:i},allot:{value:v},
clamp:{value:z},clone:{value:G},test:{value:O},toString:{value:B}})}
a(p,"createRange");function v(e){return this.test(e)?e:e>this.
max?(e-this.max)%this.span+this.min:this.max-(this.min-e)%this.
span}a(v,"allocateOuterValue");function z(e){return this.test(
e)?e:Math.max(Math.min(e,this.max),this.min)}a(z,"restrictOu\
terValue");function G(){return p(...this)}a(G,"makeDuplicate");
function O(e){return this.min<=e&&e<=this.max}a(O,"includes");
function B(){return`{x \u2208 R; ${this.min} \u22DC x \u22DC ${this.
max}}`}a(B,"serialize");var ge=p(0,360),be=p(0,2*Math.PI),he=p(0,100),x=p(0,255),y=p(
0,1);var l=String.raw`none|-?[\d\.]+%?`,R=`(${l}) (${l}) (${l})(?\
: / (${l}))?`,D=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch`,
c=String.raw`a-f\d`,C=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
E=new RegExp(`^(${D})\\(${R}\\)$`),f=new RegExp(`^color\\((${C}\
) ${R}\\)$`),M=`#?[${c}]{3}[${c}]?`,_=`#?[${c}]{6}([${c}]{2}\
)?`,w=new RegExp(`[^#${c}]`,"gi"),$=new RegExp(`^${M}$|^${_}\
$`,"i"),j=a(e=>E.test(e)||f.test(e),"isColorFunction"),I=a(e=>w.
test(e)===!1&&$.test(e),"isHEXColor"),ye=a(e=>typeof e=="str\
ing"&&(I(e)||j(e)),"isCSSColor"),H=a(e=>{let n=0;return e===
void 0||!e?1:e==="none"?0:(n=parseFloat(e),e.charAt(-1)==="%"&&
(n/=100),Math.min(Math.max(n,0),1))},"parseCSSAlphaChannel"),
Re=a(async e=>{if(I(e)){let n=await m("rgb"),[r,t]=V(e);return[
n,r,t]}if(j(e)){let n=(f.test(e)?f.exec(e)?.slice(1):E.exec(
e)?.slice(1))??[,"none","none","none"],r=H(n.pop()),t=await m(
n.shift()??"rgb"),[o="none",s="none",i="none"]=n;return[t,[o,
s,i],r]}throw new TypeError(`Expected a valid representation\
 that defined as the <color> CSS data type, but passed "${e}\
".`)},"parseCSSColor");function V(e){if(w.test(e)||!$.test(e))
throw new TypeError("Expected a valid hex string");let n=1;e=
e.replace(/^#/,""),e.length===8&&(n=Number.parseInt(e.slice(
6,8),16)/255,e=e.slice(0,6)),e.length===4&&(n=Number.parseInt(
e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&
(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);let r=Number.parseInt(e,16),
t=r>>16,o=r>>8&255,s=r&255;return[[t,o,s],n]}a(V,"parseHEXCo\
lor");var Ce=a((e,n)=>{let r=a(t=>x.clamp(Math.round(t*255)).
toString(16).padStart(2,"0"),"coord_to_hex");return"#"+[...e,
n!==void 0&&y.test(n)?n:1].map(t=>r(t)).join("")},"toHEX");function Ee(e,n=1){
let r=(g=>g===0?"none":g)("alpha"in e?e.alpha:n);if("magnitu\
de"in e&&1>=Number(e.magnitude))throw new Error("CSS input n\
otation requires parameterized PinS");let[t,o,s]=e;return`la\
b(${t?t+"%":"none"} ${o||"none"} ${s||"none"} / ${r})`}a(Ee,
"toCSSLabColor");function we(e,n=1){let r=n<1?` / ${n===0?"n\
one":n}`:"";return C.split("|").includes(e.space.ident)?`col\
or(${e.space.ident} ${[...e].join(" ")}${r})`:`${e.space.ident}\
(${[...e].join(" ")}${r})`}a(we,"toCSSColor");export{T as ErrorCode,q as initColorIdent,m as initColorSpaceById,
ae as initException,ye as isCSSColor,j as isColorFunction,S as isColorSpace,
I as isHEXColor,k as isNumber,h as isObject,Q as isString,Re as parseCSSColor,
V as parseHEXColor,we as toCSSColor,Ee as toCSSLabColor,Ce as toHEX,
A as toKebabCase,ie as toPascalCase};
