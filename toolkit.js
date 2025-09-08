var D=Object.defineProperty;var n=(e,t)=>D(e,"name",{value:t,configurable:!0});var S=n(e=>s(e)&&Symbol.iterator in e&&"minimum"in e&&c(e.minimum)&&
"maximum"in e&&c(e.maximum)&&"value"in e&&c(e.value)&&e.value>0,"\
isRange");function d(...e){let t=e.length===1?Array.of(0,e[0]):Array.of(Math.
min(...e),Math.max(...e)),[r,o]=t,a=o-r,i=r+a/2;return Object.create(
null,{from:{value:r},to:{value:o},minimum:{enumerable:!0,value:r},
maximum:{enumerable:!0,value:o},avg:{enumerable:!0,value:i},value:{
enumerable:!0,value:a},allot:{value:I},clamp:{value:k},test:{value:n(
l=>r<=l&&l<=o,"value")},toString:{value:n(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${o}}`,
"value")},[Symbol.iterator]:{value:n(function*(){yield this.from,
yield this.to},"value")},length:{value:2}})}n(d,"createRange");function I(e){
return this.test(e)?e:e>this.from?(e-this.to)%this.value+this.from:
this.to-(this.from-e)%this.value}n(I,"allocateOuterValue");function k(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}n(k,
"restrictOuterValue");var c=n(e=>typeof e=="number","isNumber"),g=n(e=>typeof e=="strin\
g","isString"),W=n(e=>s(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),s=n(e=>e!==null&&typeof e==
"object","isObject"),E=n(e=>g(e)&&z.has(e),"isColorChannelKey"),v=n(
e=>g(e)&&M.has(e),"isSpaceDimensionID"),j=n(e=>g(e)&&O.has(e),"is\
SpaceID"),X=n(e=>s(e)&&"ident"in e&&j(e.ident)&&"CSYS"in e&&s(e.CSYS)&&
"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),U=n(e=>s(e)&&
"ident"in e&&v(e.ident)&&"short"in e&&E(e.short)&&"domain"in e&&S(
e.domain),"isSpaceDimension"),_=n(e=>s(e)&&e instanceof Iterator&&
"alpha"in e&&c(e.alpha),"isColorChannel");var M=new Set(["abscissa","angle","applicate","blackness","blue-y\
ellow","blue","chroma","green","hue","lightness","ordinate","radi\
us","green-red","red","saturation","whiteness"]),z=new Set(["a","\
b","B","C","c","G","g","h","L","phi","R","r","rho","S","W","x","y",
"z","rho","phi"]),O=new Set(["a98-rgb","display-p3","hsl","hwb","\
lab","lch","oklab","oklch","prophoto-rgb","rec2020","srgb-linear",
"srgb","rgb","xyz","xyz-d50","xyz-d65"]);var A=n(e=>{let t=Object.getOwnPropertyNames(e);for(let r of t){let o=e[r];
s(o)&&A(o)}return Object.freeze(e)},"deepFreeze");var ne=n(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var oe=n((e,t="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((o,a)=>r||0<a?o[0].toUpperCase().concat(o.slice(1)):o).join(t),
"toPascalCase");var m=String.raw`none|-?[\d\.]+%?`,x=`(${m}) (${m}) (${m})(?: / (${m}\
))?`,u=String.raw`a-f\d`,P=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
T=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
w=new RegExp(`^(${P})\\(${x}\\)$`),b=new RegExp(`^color\\((${T}) ${x}\
\\)$`),F=`#?[${u}]{3}[${u}]?`,V=`#?[${u}]{6}([${u}]{2})?`,C=new RegExp(
`[^#${u}]`,"gi"),R=new RegExp(`^${F}$|^${V}$`,"i"),y=n(e=>w.test(
e)||b.test(e),"isColorFunction"),$=n(e=>C.test(e)===!1&&R.test(e),
"isHEXColor"),le=n(e=>typeof e=="string"&&($(e)||y(e)),"isCSSColo\
r"),pe=n(e=>{if($(e))return["srgb",...H(e)];if(y(e)){let t=(b.test(
e)?b.exec(e)?.slice(1):w.exec(e)?.slice(1))??["none","none","none"],
r=N(t.pop()),o=t.shift()??"srgb",[a="none",i="none",l="none"]=t.map(
p=>p!==void 0&&/^[-.\d]+$/.test(p)?parseFloat(p):p);return[o,[a,i,
l],r]}throw new TypeError(`Expected a valid representation that d\
efined as the <color> CSS data type, but passed "${e}".`)},"parse\
CSSColor"),H=n(e=>{if(C.test(e)||!R.test(e))throw new TypeError("\
Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));let t=1;
e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(0,6)),e.
length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.slice(
0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].repeat(
2));let r=parseInt(e,16),o=r>>16&255,a=r>>8&255,i=r&255;return[[o,
a,i],t]},"parseHEXColor"),ce=n(e=>{let t=NaN,r="deg";if(typeof e==
"number")t=e;else{let p=String.raw`deg|grad|rad|turn`,f=new RegExp(
`^(-?[d.]+)(${p})?$`,"i");if(f.test(e)){let h=f.exec(e)?.slice(1)??
["0","deg"];t=parseFloat(h[0]),r=h[1]}else if(e==="none")t=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[o,a]=r===
"grad"?[0,400]:r==="deg"?[0,360]:r==="rad"?[-Math.PI,Math.PI]:[0,
1],i=d(o,a);i.test(t)===!1&&(t=i.allot(t));let l=r==="grad"?180/200:
r==="rad"?180/Math.PI:r==="turn"?360:1;return t*l},"parseCSSAngle");
function N(e){let t=0;return e===void 0||!e?1:e==="none"?0:(t=parseFloat(
e),e.charAt(-1)==="%"&&(t/=100),Math.min(Math.max(t,0),1))}n(N,"p\
arseCSSAlphaChannel");export{w as CSSCAMFunction,b as CSSColorFunction,A as deepFreeze,
le as isCSSColor,_ as isColorChannel,E as isColorChannelKey,y as isColorFunction,
X as isColorSpace,$ as isHEXColor,W as isIterableObject,c as isNumber,
s as isObject,S as isRange,U as isSpaceDimension,v as isSpaceDimensionID,
j as isSpaceID,g as isString,ce as parseCSSAngle,pe as parseCSSColor,
H as parseHEXColor,ne as toKebabCase,oe as toPascalCase};
