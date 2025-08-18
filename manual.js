var ie=Object.defineProperty;var t=(e,r)=>ie(e,"name",{value:r,configurable:!0});var ae=Object.defineProperty,A=t((e,r)=>ae(e,"name",{value:r,
configurable:!0}),"n"),ne=A(e=>e!==null&&typeof e=="object"&&
Array.isArray(e)===!1,"isObject"),se=A(e=>ne(e)&&"ident"in e&&
"short"in e&&"domain"in e,"isSpaceDimension");function s(e,r,o){
let a=Iterator.from(o===void 0?[e,r]:[e,r,o]),m=o===void 0?2:
3;for(let u of a.take(m))if(se(u)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(u,void 0,2));
let p=a.take(m).filter(u=>u.tgeom==="azimuth"||u.tgeom==="re\
ference-ray").toArray().length===2?m===3?"cilinder":"circle":
m===3?"cube":"plane",c=Object.create(null,{0:{enumerable:!0,
value:e},1:{enumerable:!0,value:r},length:{enumerable:!0,value:m},
tgeom:{enumerable:!0,value:p},entries:{value:A(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:A(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:A(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return m===3&&Object.defineProperty(c,2,{enumerable:!0,value:o}),
u=>u===void 0?c:Object.defineProperties(c,u)}t(s,"O");A(s,"c\
reateCoordinateSystem");var me=Object.defineProperty,C=t((e,r)=>me(e,"name",{value:r,
configurable:!0}),"n"),B=C(e=>typeof e=="number","isNumber"),
le=C(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,
"isObject"),ve=C(e=>le(e)&&Symbol.iterator in e&&"minimum"in
e&&B(e.minimum)&&"maximum"in e&&B(e.maximum)&&"value"in e&&B(
e.value)&&e.value>0,"isRange");function i(...e){let r=e.length===
1?Array.of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),[
o,a]=r,m=a-o,p=o+m/2;return Object.create(null,{from:{value:o},
to:{value:a},minimum:{enumerable:!0,value:o},maximum:{enumerable:!0,
value:a},avg:{enumerable:!0,value:p},value:{enumerable:!0,value:m},
allot:{value:E},clamp:{value:U},test:{value:C(c=>o<=c&&c<=a,
"value")},toString:{value:C(()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:C(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}t(i,"v");C(
i,"createRange");function E(e){return this.test(e)?e:e>this.
from?(e-this.to)%this.value+this.from:this.to-(this.from-e)%
this.value}t(E,"p");C(E,"allocateOuterValue");function U(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(U,"h");C(U,"restrictOuterValue");var ce=Object.defineProperty,ue=t((e,r)=>ce(e,"name",{value:r,
configurable:!0}),"n");var pe=ue((e,r=6)=>{let o=10**r;return Math.sign(e)*Math.round(
(Math.abs(e)+Number.EPSILON)*o)/o},"round"),n=pe;var de=Object.defineProperty,v=t((e,r)=>de(e,"name",{value:r,
configurable:!0}),"r");function L(...e){let r=e.length===1?Array.
of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),[o,a]=r,m=a-
o,p=o+m/2;return Object.create(null,{from:{value:o},to:{value:a},
minimum:{enumerable:!0,value:o},maximum:{enumerable:!0,value:a},
avg:{enumerable:!0,value:p},value:{enumerable:!0,value:m},allot:{
value:W},clamp:{value:X},test:{value:v(c=>o<=c&&c<=a,"value")},
toString:{value:v(()=>String.raw`{x ∈ R; ${o} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:v(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}t(L,"l");v(
L,"createRange");function W(e){return this.test(e)?e:e>this.
from?(e-this.to)%this.value+this.from:this.to-(this.from-e)%
this.value}t(W,"f");v(W,"allocateOuterValue");function X(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(X,"S");v(X,"restrictOuterValue");function D(e=[0,100],r=[0,
1]){let[o,a]=r,[m,p]=e,[c,u]=[a-o,p-m];function w(l){return typeof l==
"string"&&(l=parseFloat(l)),Y.domain.test(l)===!1&&(l=l>a?(l-
a)%c+o:a-(o-l)%c),u*(l-o)/c+m}t(w,"p"),v(w,"invert");function Y(l){
return typeof l=="string"&&(l=parseFloat(l)),Y.range.test(l)===
!1&&(l=l>p?(l-p)%u+m:p-(m-l)%u),c*(l-m)/u+o}return t(Y,"c"),
v(Y,"calculator"),Object.defineProperties(Y,{domain:{enumerable:!0,
value:L(o,a)},range:{enumerable:!0,value:L(m,p)},invert:{enumerable:!0,
value:w}})}t(D,"A");v(D,"initScale");var I=D([0,360],[-Math.PI,Math.PI]),j=Object.freeze({bytes:8,
domain:I.domain,ident:"angle",input:t(e=>I.domain.allot(e*Math.
PI/180),"input"),output:t(e=>n(I.range.allot(e*180/Math.PI),
1),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var S=Object.freeze({$coord:j,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:i(0,360),ident:"\
hue",input:t(e=>{let[r,o]=fe(e),a=o==="grad"?180/200:o==="ra\
d"?180/Math.PI:o==="turn"?360:1;return S.domain.allot(r*a)},
"input"),output:t(e=>Number.isNaN(e)?Number.NaN:Math.abs(e)<
.01?0:n(e,2),"output"),short:"h"});function fe(e){let r=NaN,o="deg";if(typeof e=="number")r=e;else{
let c=String.raw`deg|grad|rad|turn`,u=new RegExp(`^(-?[d.]+)\
(${c})?$`,"i");if(u.test(e)){let w=u.exec(e)?.slice(1)??["0",
"deg"];r=parseFloat(w[0]),o=w[1]}else if(e==="none")r=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,
m]=o==="grad"?[0,400]:o==="deg"?[0,360]:o==="rad"?[-Math.PI,
Math.PI]:[0,1],p=i(a,m);return p.test(r)===!1&&(r=p.allot(r)),
[r,o]}t(fe,"parseCSSAngle");var d=Object.freeze({bytes:8,domain:i(0,1),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var g=Object.freeze({$coord:d,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:i(0,100),ident:"lightness",input:t(e=>e/100,"input"),
output:t(e=>n(e*100,2),"output"),short:"L"});var f=Object.freeze({bytes:8,domain:i(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Z=Object.freeze({$coord:f,bytes:4,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
0,100),ident:"saturation",input:t(e=>e/100,"input"),output:t(
e=>n(e*100,2),"output"),short:"S"});var _e=s(f,j)({adapt:{enumerable:!0,value:G}});function G(e=0,r=NaN){return[e*Math.cos(r),e*Math.sin(r)]}t(
G,"calcCartesianCoordinates");var R=s(f,j,d)({adapt:{value:he}});function he(e,r,o){return[...G(e,r),o]}t(he,"calcCubeCoordin\
ates");var h=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(h.buffer);var bt={CAM:s(S,Z,g)(),CSYS:R,ident:"hsl",whitepoint:h};var q=Object.freeze({$coord:d,bytes:4,description:"Blackness\
 is the property or quality of being black in colour.",domain:i(
0,100),ident:"blackness",input:t(e=>e/100,"input"),output:t(
e=>n(e*100,2),"output"),short:"B"});var V=Object.freeze({$coord:f,bytes:4,description:"Whiteness\
 is determined by how much light a surface reflects across t\
he visible spectrum.",domain:i(0,100),ident:"whiteness",input:t(
e=>e/100,"input"),output:t(e=>n(e*100,2),"output"),short:"W"});var Dt={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:s(S,V,q)(),CSYS:R,ident:"\
hwb",whitepoint:h};var O=Object.freeze({bytes:8,domain:i(-1,1),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var N=Object.freeze({$coord:O,bytes:2,description:"Component\
 defines how green (moving towards -125) or red (moving towa\
rds +125) the color is.",domain:i(-125,125),ident:"green-red",
input:t(e=>e/125,"input"),output:t(e=>n(e*125,1),"output"),short:"\
a"}),T=Object.freeze({...N,bytes:8,domain:i(-.4,.4),input:t(
e=>e,"input"),output:t(e=>n(e*.4,5),"output")});var x=Object.freeze({bytes:8,domain:i(-1,1),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var $=Object.freeze({$coord:x,bytes:2,description:"Component\
 defines how blue (moving towards -125) or yellow (moving to\
wards +125) the color is.",domain:i(-125,125),ident:"blue-ye\
llow",input:t(e=>e/125,"input"),output:t(e=>n(e*125,1),"outp\
ut"),short:"b"}),J=Object.freeze({...$,bytes:8,domain:i(-.4,
.4),input:t(e=>e,"input"),output:t(e=>n(e*.4,5),"output")});var _t=s(O,x)({adapt:{value:F}});function F(e,r){let o=0,a=NaN;return(e!==0||r!==0)&&(o=Math.
sqrt(e**2+r**2),e!==0&&!r||r!==0&&!e?a=r/Math.abs(r)*(Math.PI/
2):a=Math.atan(r/e)),[o,a]}t(F,"calcPolarCoordinates");var y=s(O,x,d)({adapt:{value:be}});function be(e,r,o){return[...F(e,r),o]}t(be,"calcCylindrical\
Coordinates");var b=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(b.buffer);var br=Object.freeze({CAM:s(g,N,$)(),CSYS:y,description:"CIE\
 1976 L*a*b* or CIELAB. Cylindrical with the lightness value\
 as the vertical axis of rotation.",ident:"lab",whitepoint:b});var Q=Object.freeze({$coord:f,ident:"chroma",short:"C",domain:i(
0,150),input:t(e=>e/150,"input"),output:t(e=>n(e*150,1),"out\
put"),bytes:2,description:"Chroma: the quality of a color's \
purity, intensity or saturation."}),_=Object.freeze({$coord:f,
ident:"chroma",short:"c",domain:i(0,.4),output:t(e=>n(e,5),"\
output"),bytes:4,description:"Chroma: the quality of a color\
's purity, intensity or saturation."});var Mr={CAM:s(g,Q,S)(),CSYS:R,description:"CIE-based LCh col\
or spaces are transformations of the two chroma values (ab o\
r uv) into the polar coordinate.",ident:"lch",whitepoint:b};var Nr=Object.freeze({CAM:s(g,T,J)(),CSYS:y,ident:"oklab",whitepoint:b});var Wr={CAM:s(g,_,S)(),CSYS:R,ident:"oklch",whitepoint:b};var ee=Object.freeze({$coord:d,bytes:4,domain:i(0,100),ident:"\
blue",input:t(e=>e/100,"input"),output:t(e=>n(e*100,2),"outp\
ut"),short:"b",description:"Blue Light Intensity"}),H=Object.
freeze({$coord:d,bytes:1,domain:i(0,255),ident:"blue",input:t(
e=>e/255,"input"),output:t(e=>H.domain.clamp(Math.round(e*255)),
"output"),short:"B",description:"Blue Light Intensity"});var te=Object.freeze({$coord:x,bytes:4,domain:i(0,100),ident:"\
green",input:t(e=>e/100,"input"),output:t(e=>n(e*100,2),"out\
put"),short:"g",description:"Green Light Intensity"}),k=Object.
freeze({$coord:x,bytes:1,domain:i(0,255),ident:"green",input:t(
e=>e/255,"input"),output:t(e=>k.domain.clamp(Math.round(e*255)),
"output"),short:"G",description:"Green Light Intensity"});var re=Object.freeze({$coord:O,bytes:4,domain:i(0,100),ident:"\
green",input:t(e=>e/100,"input"),output:t(e=>n(e*100,2),"out\
put"),short:"r",description:"Red Light Intensity"}),K=Object.
freeze({$coord:O,bytes:1,domain:i(0,255),ident:"red",input:t(
e=>e/255,"input"),output:t(e=>K.domain.clamp(Math.round(e*255)),
"output"),short:"R",description:"Red Light Intensity"});var ho=Object.freeze({CAM:s(K,k,H)(),CSYS:y,ident:"rgb",whitepoint:h});var P=s(re,te,ee)(),z=y,M=h,xo=Object.freeze({ident:"srgb",CAM:P,
CSYS:z,whitepoint:M,copyright:"Copyright 2007 International \
Color Consortium",description:"sRGB v4 ICC preference percep\
tual intent beta"}),Ro=Object.freeze({ident:"srgb-linear",CAM:P,
CSYS:z,whitepoint:M}),Ao=Object.freeze({ident:"a98-rgb",CAM:P,
CSYS:z,whitepoint:M,description:"Adobe\xAE 1998 RGB"}),jo=Object.
freeze({ident:"display-p3",CAM:P,CSYS:z,whitepoint:M,copyright:"\
Copyright Apple Inc., 2022",description:"Display P3"}),Po=Object.
freeze({ident:"prophoto-rgb",CAM:P,CSYS:z,whitepoint:M,description:"\
ProPhoto RGB"}),zo=Object.freeze({ident:"rec2020",CAM:P,CSYS:z,
whitepoint:M,description:"Rec. 2020 or BT.2020"});var oe=y,Lo=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:oe,whitepoint:h}),Do=Object.freeze(
{ident:"xyz-d50",CSYS:oe,whitepoint:b});export{Ao as A98RGBSpace,jo as DisplayP3Space,bt as HSL,Dt as HWB,
br as LABModel,Mr as LCh,Nr as OKLAB,Wr as OKLCh,Po as ProphotoRGBSpace,
ho as RGBModel,zo as Rec2020Space,Do as XYZD50,Do as XYZD50Space,
Lo as XYZD65,Lo as XYZD65Space,Ro as sRGBLinearSpace,xo as sRGBSpace};
