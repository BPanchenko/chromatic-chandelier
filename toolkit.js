var D=Object.defineProperty;var n=(e,t)=>D(e,"name",{value:t,configurable:!0});var H=n((e,t=12)=>{let r=t>0?10**t:1;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*r)/r},"round");var b=n(e=>i(e)&&Iterator.from(["minimum","maximum","from","to","\
value","length"]).every(t=>t in e)&&e.length===2&&e.value>0&&Iterator.
from(["allot","clamp","test"]).every(t=>t in e&&typeof e[t]=="fun\
ction"),"isRange");var $=n(e=>typeof e=="number","isNumber"),g=n(e=>typeof e=="strin\
g","isString"),W=n(e=>i(e)&&Symbol.iterator in e&&typeof e[Symbol.
iterator]=="function","isIterableObject"),i=n(e=>e!==null&&typeof e==
"object","isObject"),X=n(e=>{if(d(e)){let t=Iterator.from(["hsl",
"hwb","lab","lch","oklab","oklch","rgb"]);for(let r of t)if(r===e)
return!0}return!1},"isCAM"),k=n(e=>g(e)&&M.has(e),"isColorChannel\
Key"),v=n(e=>g(e)&&E.has(e),"isSpaceDimensionID"),d=n(e=>g(e)&&P.
has(e),"isSpaceID"),U=n(e=>i(e)&&"ident"in e&&d(e.ident)&&"CSYS"in
e&&i(e.CSYS)&&"length"in e.CSYS&&e.CSYS.length===3,"isColorSpace"),
q=n(e=>i(e)&&"ident"in e&&v(e.ident)&&"short"in e&&k(e.short)&&"d\
omain"in e&&b(e.domain),"isSpaceDimension"),J=n(e=>i(e)&&e instanceof
Iterator&&"alpha"in e&&$(e.alpha),"isColorChannel"),E=new Set(["a\
bscissa","angle","applicate","blackness","blue-yellow","blue","ch\
roma","green","hue","lightness","ordinate","radius","green-red","\
red","saturation","whiteness"]),M=new Set(["a","b","B","C","c","G",
"g","h","L","phi","R","r","rho","S","W","x","y","z","rho","phi"]),
P=new Set(["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab",
"oklch","prophoto-rgb","rec2020","srgb-linear","srgb","rgb","xyz",
"xyz-d50","xyz-d65"]);var T=n(e=>{let t=Object.getOwnPropertyNames(e);for(let r of t){let s=e[r];
i(s)&&T(s)}return Object.freeze(e)},"deepFreeze");var re=n(e=>e.toLowerCase().replace(new RegExp(/[\W\s_-]+/,"g"),"\
-"),"toKebabCase");var ae=n((e,t="",r=!1)=>e.toLowerCase().replace(new RegExp(/[-_]+/,
"g")," ").replace(new RegExp(/[^\w\s]+/,"g"),"").trim().split(" ").
map((s,a)=>r||0<a?s[0].toUpperCase().concat(s.slice(1)):s).join(t),
"toPascalCase");function S(...e){let[t,r]=e.length===1?Array.of(0,e[0]):Array.of(
Math.min(...e),Math.max(...e)),s=Object.create(null,{0:{value:t},
1:{value:r},[Symbol.iterator]:{value:n(function*(){yield this[0],
yield this[1]},"value")},[Symbol.toStringTag]:{get(){return`Range\
{x \u2208 R; ${this[0]} \u22DC x \u22DC ${this[1]}}`}},avg:{enumerable:!0,
get(){return this[0]+this.value/2}},length:{value:2},value:{enumerable:!0,
get(){return this[1]-this[0]}},toString:{value:n(function(){return this[0]+
","+this[1]},"value")}});return Object.defineProperties(s,{from:{
enumerable:!0,value:t},to:{enumerable:!0,value:r},allot:{value:n(
function(o){return this.test(o)?o:o>this.from?(o-this.to)%this.value+
this.from:this.to-(this.from-o)%this.value},"allocateOuterValue")},
clamp:{value:n(function(o){return this.test(o)?o:Math.max(Math.min(
o,this.to),this.from)},"restrictOuterValue")},test:{value:n(function(a){
return this.from<=a&&a<=this.to},"value")}}),s}n(S,"initRange");var c=String.raw`none|-?[\d\.]+%?`,x=`(${c}) (${c}) (${c})(?: / (${c}\
))?`,p=String.raw`a-f\d`,j=String.raw`hsl|hwb|lab|lch|lch|oklab|oklch|rgb`,
z=String.raw`srgb|srgb-linear|display-p3|a98-rgb|prophoto-rgb|rec2020|xyz|xyz-d50|xyz-d65`,
w=new RegExp(`^(${j})/(${x}/)$`),f=new RegExp(`^color/((${z}) ${x}\
/)$`),A=`#?[${p}]{3}[${p}]?`,O=`#?[${p}]{6}([${p}]{2})?`,R=new RegExp(
`[^#${p}]`,"gi"),C=new RegExp(`^${A}$|^${O}$`,"i"),y=n(e=>w.test(
e)||f.test(e),"isColorFunction"),I=n(e=>R.test(e)===!1&&C.test(e),
"isHEXColor"),ge=n(e=>typeof e=="string"&&(I(e)||y(e)),"isCSSColo\
r"),fe=n(e=>typeof e=="string"&&/-?(?:[_a-z]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))(?:[_a-z0-9-]|[\\240-\\377]|(?:(:?\\[0-9a-f]{1,6}(\r\n|[ \t\r\n\f])?)|\\[^\r\n\f0-9a-f]))*/.
test(e),"isCSSIdent"),me=n(e=>{if(I(e))return["srgb",...F(e)];if(y(
e)){let t=(f.test(e)?f.exec(e)?.slice(1):w.exec(e)?.slice(1))??["\
none","none","none"],r=N(t.pop()),s=t.shift()??"srgb",[a="none",o="\
none",u="none"]=t.map(l=>l!==void 0&&/^[-.\d]+$/.test(l)?parseFloat(
l):l);return[s,[a,o,u],r]}throw new TypeError(`Expected a valid r\
epresentation that defined as the <color> CSS data type, but pass\
ed "${e}".`)},"parseCSSColor"),F=n(e=>{if(R.test(e)||!C.test(e))throw new TypeError(
"Expected a valid hex string");e.startsWith("#")&&(e=e.slice(1));
let t=1;e.length===8&&(t=parseInt(e.slice(6,8),16)/255,e=e.slice(
0,6)),e.length===4&&(t=parseInt(e.slice(3,4).repeat(2),16)/255,e=
e.slice(0,3)),e.length===3&&(e=e[0].repeat(2)+e[1].repeat(2)+e[2].
repeat(2));let r=parseInt(e,16),s=r>>16&255,a=r>>8&255,o=r&255;return[
[s,a,o],t]},"parseHEXColor"),he=n(e=>{let t=NaN,r="deg";if(typeof e==
"number")t=e;else{let l=String.raw`deg|grad|rad|turn`,m=new RegExp(
`^(-?[d.]+)(${l})?$`,"i");if(m.test(e)){let h=m.exec(e)?.slice(1)??
["0","deg"];t=parseFloat(h[0]),r=h[1]}else if(e==="none")t=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[s,a]=r===
"grad"?[0,400]:r==="deg"?[0,360]:r==="rad"?[-Math.PI,Math.PI]:[0,
1],o=S(s,a);o.test(t)===!1&&(t=o.allot(t));let u=r==="grad"?180/200:
r==="rad"?180/Math.PI:r==="turn"?360:1;return t*u},"parseCSSAngle");
function N(e){let t=0;return e===void 0||!e?1:e==="none"?0:(t=parseFloat(
e),e.charAt(-1)==="%"&&(t/=100),Math.min(Math.max(t,0),1))}n(N,"p\
arseCSSAlphaChannel");export{w as CSSCAMFunction,f as CSSColorFunction,T as deepFreeze,
X as isCAM,ge as isCSSColor,fe as isCSSIdent,J as isColorChannel,
k as isColorChannelKey,y as isColorFunction,U as isColorSpace,I as isHEXColor,
W as isIterableObject,$ as isNumber,i as isObject,q as isSpaceDimension,
v as isSpaceDimensionID,d as isSpaceID,g as isString,he as parseCSSAngle,
me as parseCSSColor,F as parseHEXColor,H as round,re as toKebabCase,
ae as toPascalCase};
