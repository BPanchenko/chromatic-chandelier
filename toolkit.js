var z=Object.defineProperty;var t=(e,n)=>z(e,"name",{value:n,configurable:!0});var w=t(e=>i(e)&&Symbol.iterator in e&&"minimum"in e&&m(e.minimum)&&
"maximum"in e&&m(e.maximum)&&"value"in e&&m(e.value)&&e.value>0,"\
isRange");function c(...e){let n=e.length===1?Array.of(0,e[0]):Array.of(Math.
min(...e),Math.max(...e)),[r,o]=n,a=o-r,s=r+a/2;return Object.create(
null,{from:{value:r},to:{value:o},minimum:{enumerable:!0,value:r},
maximum:{enumerable:!0,value:o},avg:{enumerable:!0,value:s},value:{
enumerable:!0,value:a},allot:{value:G},clamp:{value:T},test:{value:t(
l=>r<=l&&l<=o,"value")},toString:{value:t(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${o}}`,
"value")},[Symbol.iterator]:{value:t(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}t(c,"createRange");function G(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.from:
this.to-(this.from-e)%this.value}t(G,"allocateOuterValue");function T(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}t(T,
"restrictOuterValue");var m=t(e=>typeof e=="number","isNumber"),h=t(e=>typeof e=="strin\
g","isString"),Q=t(e=>i(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),i=t(e=>e!==null&&typeof e==
"object","isObject"),B=t(e=>h(e)&&O.has(e),"isColorChannelKey"),Z=t(
e=>{if(R(e)){let n=Iterator.from(["hsl","hwb","lab","lch","oklab",
"oklch"]);for(let r of n)if(r===e)return!0}return!1},"isRGBBasedS\
pace"),P=t(e=>h(e)&&M.has(e),"isSpaceDimensionID"),R=t(e=>h(e)&&V.
has(e),"isSpaceID"),C=t(e=>i(e)&&"ident"in e&&R(e.ident)&&"CSYS"in
e&&i(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),
ee=t(e=>i(e)&&"ident"in e&&P(e.ident)&&"short"in e&&B(e.short)&&"\
domain"in e&&w(e.domain),"isSpaceDimension"),ne=t(e=>i(e)&&e instanceof
Iterator&&"alpha"in e&&m(e.alpha),"isColorChannel");var M=new Set(["abscissa","angle","applicate","blackness","blue-y\
ellow","blue","chroma","green","hue","lightness","ordinate","radi\
us","green-red","red","saturation","whiteness"]),O=new Set(["a","\
b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y",
"z","rho","phi"]),V=new Set(["a98-rgb","display-p3","hsl","hwb","\
lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]);var _=t(e=>{let n=Object.getOwnPropertyNames(e);for(let r of n){let o=e[r];
i(o)&&_(o)}return Object.freeze(e)},"deepFreeze");var ie=t(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var pe=t((e,n="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((o,a)=>r||0<a?o[0].toUpperCase().concat(o.slice(1)):o).join(n),
"toPascalCase");var I=new Map([["a98-rgb","#space/rgb.js"],["display-p3","#space/\
rgb.js"],["hsl","#space/hsl.js"],["hwb","#space/hwb.js"],["lab","\
#space/lab.js"],["lch","#space/lch.js"],["oklab","#space/oklab.js"],
["oklch","#space/oklch.js"],["rgb","#space/rgb.js"],["srgb","#spa\
ce/rgb.js"],["srgb-linear","#space/rgb.js"],["xyz","#space/xyz.js"],
["xyz-d50","#space/xyz.js"],["xyz-d65","#space/xyz.js"],["prophot\
o-rgb","#space/rgb.js"],["rec2020","#space/rgb.js"]]),S=new Map;async function d(e){if(S.has(e))return S.get(e);if(I.has(e)){let r=await import(I.
get(e)??"lib.manual"),o=Object.values(r).find(a=>a.ident===e);if(C(
o))return S.set(o.ident,o),o}throw new Error("The color space not\
 found by passed argument: "+e)}t(d,"initColorSpaceById");var Se=c(0,360),de=c(0,2*Math.PI),xe=c(0,100),y=c(0,255),$=c(0,1);var b=String.raw`none|-?[\d\.]+%?`,j=`(${b}) (${b}) (${b})(?: / (${b}\
))?`,g=String.raw`a-f\d`,F=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
E=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
D=new RegExp(`^(${F})\\(${j}\\)$`),x=new RegExp(`^color\\((${E}) ${j}\
\\)$`),H=`#?[${g}]{3}[${g}]?`,K=`#?[${g}]{6}([${g}]{2})?`,k=new RegExp(
`[^#${g}]`,"gi"),N=new RegExp(`^${H}$|^${K}$`,"i"),v=t(e=>D.test(
e)||x.test(e),"isColorFunction"),A=t(e=>k.test(e)===!1&&N.test(e),
"isHEXColor"),ye=t(e=>typeof e=="string"&&(A(e)||v(e)),"isCSSColo\
r"),L=t(e=>{let n=0;return e===void 0||!e?1:e==="none"?0:(n=parseFloat(
e),e.charAt(-1)==="%"&&(n/=100),Math.min(Math.max(n,0),1))},"pars\
eCSSAlphaChannel"),$e=t(async e=>{if(A(e)){let n=await d("rgb"),[
r,o]=U(e);return[n,r,o]}if(v(e)){let n=(x.test(e)?x.exec(e)?.slice(
1):D.exec(e)?.slice(1))??["none","none","none"],r=L(n.pop()),o=await d(
n.shift()??"rgb"),[a="none",s="none",l="none"]=n.map(p=>p!==void 0&&
/^[-.\d]+$/.test(p)?parseFloat(p):p);return[o,[a,s,l],r]}throw new TypeError(
`Expected a valid representation that defined as the <color> CSS \
data type, but passed "${e}".`)},"parseCSSColor");function U(e){if(k.
test(e)||!N.test(e))throw new TypeError("Expected a valid hex str\
ing");let n=1;e=e.replace(/^#/,""),e.length===8&&(n=Number.parseInt(
e.slice(6,8),16)/255,e=e.slice(0,6)),e.length===4&&(n=Number.parseInt(
e.slice(3,4).repeat(2),16)/255,e=e.slice(0,3)),e.length===3&&(e=e[0]+
e[0]+e[1]+e[1]+e[2]+e[2]);let r=Number.parseInt(e,16),o=r>>16,a=r>>
8&255,s=r&255;return[[o,a,s],n]}t(U,"parseHEXColor");var je=t((e,n)=>{
let r=t(o=>y.clamp(Math.round(o*255)).toString(16).padStart(2,"0"),
"coord_to_hex");return"#"+[...e,n!==void 0&&$.test(n)?n:1].map(o=>r(
o)).join("")},"toHEX");function Ee(e,n=1){let r=(u=>u===0?"none":
u)("alpha"in e?e.alpha:n);if("magnitude"in e&&1>=Number(e.magnitude))
throw new Error("CSS input notation requires parameterized PinS");
let[o,a,s]=e;return`lab(${o?o+"%":"none"} ${a||"none"} ${s||"none"}\
 / ${r})`}t(Ee,"toCSSLabColor");function De(e,n=1){let r=n<1?` / ${n===
0?"none":n}`:"";return E.split("|").includes(e.space.ident)?`colo\
r(${e.space.ident} ${[...e].join(" ")}${r})`:`${e.space.ident}(${[
...e].join(" ")}${r})`}t(De,"toCSSColor");function ke(e){let n=NaN,
r="deg";if(typeof e=="number")n=e;else{let p=String.raw`deg|grad|rad|turn`,
f=new RegExp(`^(-?[d.]+)(${p})?$`,"i");if(f.test(e)){let u=f.exec(
e)?.slice(1)??["0","deg"];n=parseFloat(u[0]),r=u[1]}else if(e==="\
none")n=NaN;else throw new TypeError("Expected a valid <angle> st\
ring")}let[o,a]=r==="grad"?[0,400]:r==="deg"?[0,360]:r==="rad"?[-Math.
PI,Math.PI]:[0,1],s=c(o,a);s.test(n)===!1&&(n=s.allot(n));let l=r===
"grad"?180/200:r==="rad"?180/Math.PI:r==="turn"?360:1;return n*l}
t(ke,"parseCSSAngle");export{D as CSSCAMFunction,x as CSSColorFunction,_ as deepFreeze,
ye as isCSSColor,ne as isColorChannel,B as isColorChannelKey,v as isColorFunction,
C as isColorSpace,A as isHEXColor,Q as isIterableObject,m as isNumber,
i as isObject,Z as isRGBBasedSpace,w as isRange,ee as isSpaceDimension,
P as isSpaceDimensionID,R as isSpaceID,h as isString,ke as parseCSSAngle,
$e as parseCSSColor,U as parseHEXColor,De as toCSSColor,Ee as toCSSLabColor,
je as toHEX,ie as toKebabCase,pe as toPascalCase};
