var ue=Object.defineProperty;var t=(e,o)=>ue(e,"name",{value:o,configurable:!0});var pe=Object.defineProperty,E=t((e,o)=>pe(e,"name",{value:o,
configurable:!0}),"n"),fe=E(e=>e!==null&&typeof e=="object"&&
Array.isArray(e)===!1,"isObject"),de=E(e=>fe(e)&&"ident"in e&&
"short"in e&&"domain"in e,"isSpaceDimension");function s(e,o,r){
let a=Iterator.from(r===void 0?[e,o]:[e,o,r]),n=r===void 0?2:
3;for(let p of a.take(n))if(de(p)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(p,void 0,2));
let c=a.take(n).filter(p=>p.tgeom==="azimuth"||p.tgeom==="re\
ference-ray").toArray().length===2?n===3?"cilinder":"circle":
n===3?"cube":"plane",u=Object.create(null,{0:{enumerable:!0,
value:e},1:{enumerable:!0,value:o},length:{enumerable:!0,value:n},
tgeom:{enumerable:!0,value:c},entries:{value:E(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:E(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:E(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return n===3&&Object.defineProperty(u,2,{enumerable:!0,value:r}),
p=>p===void 0?u:Object.defineProperties(u,p)}t(s,"O");E(s,"c\
reateCoordinateSystem");var he=Object.defineProperty,y=t((e,o)=>he(e,"name",{value:o,
configurable:!0}),"n"),H=y(e=>typeof e=="number","isNumber"),
be=y(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,
"isObject"),k=y(e=>be(e)&&Symbol.iterator in e&&"minimum"in e&&
H(e.minimum)&&"maximum"in e&&H(e.maximum)&&"value"in e&&H(e.
value)&&e.value>0,"isRange");function i(...e){let o=e.length===
1?Array.of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),[
r,a]=o,n=a-r,c=r+n/2;return Object.create(null,{from:{value:r},
to:{value:a},minimum:{enumerable:!0,value:r},maximum:{enumerable:!0,
value:a},avg:{enumerable:!0,value:c},value:{enumerable:!0,value:n},
allot:{value:ne},clamp:{value:se},test:{value:y(u=>r<=u&&u<=
a,"value")},toString:{value:y(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:y(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}t(i,"v");y(
i,"createRange");function ne(e){return this.test(e)?e:e>this.
from?(e-this.to)%this.value+this.from:this.to-(this.from-e)%
this.value}t(ne,"p");y(ne,"allocateOuterValue");function se(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(se,"h");y(se,"restrictOuterValue");var I=Object.freeze([0,360]),M=Object.freeze([-Math.PI,Math.
PI]),f=Object.freeze([0,100]),Ee=Object.freeze([-125,125]),A=Object.
freeze([0,255]),Ae=Object.freeze([0,65535]),j=Object.freeze(
[0,1]),_=Object.freeze([-1,1]);var ge=Object.defineProperty,v=t((e,o)=>ge(e,"name",{value:o,
configurable:!0}),"r");function K(...e){let o=e.length===1?Array.
of(0,e[0]):Array.of(Math.min(...e),Math.max(...e)),[r,a]=o,n=a-
r,c=r+n/2;return Object.create(null,{from:{value:r},to:{value:a},
minimum:{enumerable:!0,value:r},maximum:{enumerable:!0,value:a},
avg:{enumerable:!0,value:c},value:{enumerable:!0,value:n},allot:{
value:me},clamp:{value:le},test:{value:v(u=>r<=u&&u<=a,"valu\
e")},toString:{value:v(()=>String.raw`{x ∈ R; ${r} ⋜ x ⋜ ${a}}`,
"value")},[Symbol.iterator]:{value:v(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}t(K,"l");v(
K,"createRange");function me(e){return this.test(e)?e:e>this.
from?(e-this.to)%this.value+this.from:this.to-(this.from-e)%
this.value}t(me,"f");v(me,"allocateOuterValue");function le(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(le,"S");v(le,"restrictOuterValue");function X(e=[0,100],o=[
0,1]){let[r,a]=o,[n,c]=e,[u,p]=[a-r,c-n];function U(l){return typeof l==
"string"&&(l=parseFloat(l)),Y.domain.test(l)===!1&&(l=l>a?(l-
a)%u+r:a-(r-l)%u),p*(l-r)/u+n}t(U,"p"),v(U,"invert");function Y(l){
return typeof l=="string"&&(l=parseFloat(l)),Y.range.test(l)===
!1&&(l=l>c?(l-c)%p+n:c-(n-l)%p),u*(l-n)/p+r}return t(Y,"c"),
v(Y,"calculator"),Object.defineProperties(Y,{domain:{enumerable:!0,
value:K(r,a)},range:{enumerable:!0,value:K(n,c)},invert:{enumerable:!0,
value:U}})}t(X,"A");v(X,"initScale");var Z=X(I,M),L=Object.freeze({bytes:8,domain:Z.domain,ident:"\
angle",input:t(e=>Z.domain.allot((typeof e=="string"?parseFloat(
e):e)*Math.PI/180),"input"),output:t(e=>Z.range.allot(e*180/
Math.PI),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var P=Object.freeze({$coord:L,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:i(...I),ident:"\
hue",input:t(e=>{let[o,r]=Se(e),a=r==="grad"?180/200:r==="ra\
d"?180/Math.PI:r==="turn"?360:1;return P.domain.allot(o*a)},
"input"),output:t(e=>Number.isNaN(e)?Number.NaN:Math.abs(e)<
.01?0:parseFloat(e.toPrecision(5)),"output"),short:"h"});function Se(e){let o=NaN,r="deg";if(typeof e=="number")o=e;else{
let u=String.raw`deg|grad|rad|turn`,p=new RegExp(`^(-?[d.]+)\
(${u})?$`,"i");if(p.test(e)){let U=p.exec(e)?.slice(1)??["0",
"deg"];o=parseFloat(U[0]),r=U[1]}else if(e==="none")o=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,
n]=r==="grad"?[0,400]:r==="deg"?I:r==="rad"?M:j,c=i(a,n);return c.
test(o)===!1&&(o=c.allot(o)),[o,r]}t(Se,"parseCSSAngle");var m=t((e,o)=>{if(e==="none"||!e)return 0;let r=typeof e=="\
string"?parseFloat(e):e;return typeof e=="string"&&e.charAt(
-1)==="%"&&(r/=100,k(o)&&(o.from===0&&o.to===255?r=Math.round(
r*o.to):r*=Math.sign(r)<0?o.from:o.to)),k(o)&&o.test(r)===!1&&
(r=o.clamp(r)),r},"parseCSSParameter");var d=Object.freeze({bytes:8,domain:i(...j),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var h=Object.freeze({$coord:d,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:i(...f),ident:"lightness",input:t(e=>m(e,h.domain)/100,
"input"),output:t(e=>e*100,"output"),short:"L"});var b=Object.freeze({bytes:8,domain:i(...j),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var W=Object.freeze({$coord:b,bytes:4,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
...f),ident:"saturation",input:t(e=>m(e,W.domain),"input"),short:"\
S"});var ct=s(b,L)({adapt:{enumerable:!0,value:q}});function q(e=0,o=NaN){let r=e*Math.cos(o),a=e*Math.sin(o);return[
r,a]}t(q,"calcCartesianCoordinates");var R=s(b,L,d)({adapt:{value:Ce}});function Ce(e){let[o,r,a]=e,[n,c]=q(o,r);return[n,c,a]}t(Ce,
"calcCubeCoordinates");var g=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(g.buffer);var At={CAM:s(P,W,h)(),CSYS:R,ident:"hsl",whitepoint:g};var V=Object.freeze({$coord:d,bytes:8,description:"Blackness\
 is the property or quality of being black in colour.",domain:i(
...f),ident:"blackness",input:t(e=>m(e,V.domain),"input"),short:"\
B"});var J=Object.freeze({$coord:b,bytes:4,description:"Whiteness\
 is determined by how much light a surface reflects across t\
he visible spectrum.",domain:i(...f),ident:"whiteness",input:t(
e=>m(e,J.domain),"input"),short:"W"});var Xt={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:s(P,J,V)(),CSYS:R,ident:"\
hwb",whitepoint:g};var x=Object.freeze({bytes:8,domain:i(..._),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var G=Object.freeze({$coord:x,bytes:2,description:"Component\
 defines how green (moving towards -125) or red (moving towa\
rds +125) the color is.",domain:i(-125,125),ident:"green-red",
input:t(e=>m(e,G.domain)/125,"input"),output:t(e=>parseFloat(
(e*125).toPrecision(5)),"output"),short:"a"}),Q=Object.freeze(
{...G,bytes:8,domain:i(-.4,.4),input:t(e=>m(e,Q.domain)/.4,"\
input"),output:t(e=>e*.4,"output")});var O=Object.freeze({bytes:8,domain:i(..._),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var F=Object.freeze({$coord:O,bytes:2,description:"Component\
 defines how blue (moving towards -125) or yellow (moving to\
wards +125) the color is.",domain:i(-125,125),ident:"blue-ye\
llow",input:t(e=>m(e,F.domain)/125,"input"),output:t(e=>parseFloat(
(e*125).toPrecision(5)),"output"),short:"b"}),ee=Object.freeze(
{...F,bytes:8,domain:i(-.4,.4),input:t(e=>m(e,ee.domain)/.4,
"input"),output:t(e=>e*.4,"output")});var ho=s(x,O)({adapt:{value:te}});function te(e,o){let r=0,a=NaN;return(e!==0||o!==0)&&(r=Math.
sqrt(e**2+o**2),e!==0&&!o||o!==0&&!e?a=o/Math.abs(o)*(Math.PI/
2):a=Math.atan(o/e)),[r,a]}t(te,"calcPolarCoordinates");var C=s(x,O,d)({adapt:{value:ye}});function ye(e){let[o,r,a]=e,[n,c]=te(o,r);return[n,c,a]}t(ye,
"calcCylindricalCoordinates");var S=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(S.buffer);var To=Object.freeze({CAM:s(h,G,F)(),CSYS:C,description:"CIE\
 1976 L*a*b* or CIELAB. Cylindrical with the lightness value\
 as the vertical axis of rotation.",ident:"lab",whitepoint:S});var $=Object.freeze({$coord:b,ident:"chroma",short:"C",domain:i(
0,150),input:t(e=>e==="none"||!e?0:typeof e=="string"&&e.charAt(
-1)==="%"?parseFloat(e)/100:(typeof e=="string"?parseFloat(e):
e)/$.domain.maximum,"input"),output:t(e=>parseFloat((e*$.domain.
maximum).toPrecision(5)),"output"),bytes:2,description:"Chro\
ma: the quality of a color's purity, intensity or saturation\
."}),oe=Object.freeze({$coord:b,ident:"chroma",short:"c",domain:i(
0,.4),input:t(e=>e==="none"||!e?0:typeof e=="string"&&e.charAt(
-1)==="%"?oe.domain.maximum*parseFloat(e)/100:typeof e=="str\
ing"?parseFloat(e):e,"input"),output:t(e=>e,"output"),bytes:4,
description:"Chroma: the quality of a color's purity, intens\
ity or saturation."});var Ho={CAM:s(h,$,P)(),CSYS:R,description:"CIE-based LCh col\
or spaces are transformations of the two chroma values (ab o\
r uv) into the polar coordinate.",ident:"lch",whitepoint:S};var Jo=Object.freeze({CAM:s(h,Q,ee)(),CSYS:C,ident:"oklab",whitepoint:S});var nr={CAM:s(h,oe,P)(),CSYS:R,ident:"oklch",whitepoint:S};var re=Object.freeze({$coord:d,bytes:4,domain:i(...f),ident:"\
blue",input:t(e=>e==="none"||!e?0:typeof e=="string"?parseFloat(
e):e,"input"),output:t(e=>e*re.domain.maximum,"output"),short:"\
b",description:"Blue Light Intensity"}),B=Object.freeze({$coord:d,
bytes:1,domain:i(...A),ident:"blue",input:t(e=>m(e,B.domain),
"input"),output:t(e=>B.domain.clamp(Math.round(e*B.domain.maximum)),
"output"),short:"B",description:"Blue Light Intensity"});var ie=Object.freeze({$coord:O,bytes:4,domain:i(...f),ident:"\
green",input:t(e=>e==="none"||!e?0:typeof e=="string"?parseFloat(
e):e,"input"),output:t(e=>e*ie.domain.maximum,"output"),short:"\
g",description:"Green Light Intensity"}),D=Object.freeze({$coord:O,
bytes:1,domain:i(...A),ident:"green",input:t(e=>m(e,D.domain),
"input"),output:t(e=>D.domain.clamp(Math.round(e*D.domain.maximum)),
"output"),short:"G",description:"Green Light Intensity"});var ae=Object.freeze({$coord:x,bytes:4,domain:i(...f),ident:"\
green",input:t(e=>e==="none"||!e?0:typeof e=="string"?parseFloat(
e):e,"input"),output:t(e=>e*ae.domain.maximum,"output"),short:"\
r",description:"Red Light Intensity"}),w=Object.freeze({$coord:x,
bytes:1,domain:i(...A),ident:"red",input:t(e=>m(e,w.domain),
"input"),output:t(e=>w.domain.clamp(Math.round(e*w.domain.maximum)),
"output"),short:"R",description:"Red Light Intensity"});var Tr=Object.freeze({CAM:s(w,D,B)(),CSYS:C,ident:"rgb",whitepoint:g});var N=s(ae,ie,re)(),z=C,T=g,_r=Object.freeze({ident:"srgb",CAM:N,
CSYS:z,whitepoint:T,copyright:"Copyright 2007 International \
Color Consortium",description:"sRGB v4 ICC preference percep\
tual intent beta"}),Gr=Object.freeze({ident:"srgb-linear",CAM:N,
CSYS:z,whitepoint:T}),Fr=Object.freeze({ident:"a98-rgb",CAM:N,
CSYS:z,whitepoint:T,description:"Adobe\xAE 1998 RGB"}),$r=Object.
freeze({ident:"display-p3",CAM:N,CSYS:z,whitepoint:T,copyright:"\
Copyright Apple Inc., 2022",description:"Display P3"}),Hr=Object.
freeze({ident:"prophoto-rgb",CAM:N,CSYS:z,whitepoint:T,description:"\
ProPhoto RGB"}),kr=Object.freeze({ident:"rec2020",CAM:N,CSYS:z,
whitepoint:T,description:"Rec. 2020 or BT.2020"});var ce=C,qr=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:ce,whitepoint:g}),Vr=Object.freeze(
{ident:"xyz-d50",CSYS:ce,whitepoint:S});export{Fr as A98RGBSpace,$r as DisplayP3Space,At as HSL,Xt as HWB,
To as LABModel,Ho as LCh,Jo as OKLAB,nr as OKLCh,Hr as ProphotoRGBSpace,
Tr as RGBModel,kr as Rec2020Space,Vr as XYZD50,Vr as XYZD50Space,
qr as XYZD65,qr as XYZD65Space,Gr as sRGBLinearSpace,_r as sRGBSpace};
