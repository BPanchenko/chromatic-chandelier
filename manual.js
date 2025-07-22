var ee=Object.defineProperty;var r=(e,t)=>ee(e,"name",{value:t,configurable:!0});var te=Object.defineProperty,f=r((e,t)=>te(e,"name",{value:t,
configurable:!0}),"n"),A=f(e=>typeof e=="number","isNumber"),
re=f(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,
"isObject"),z=f(e=>re(e)&&Symbol.iterator in e&&"min"in e&&A(
e.min)&&"max"in e&&A(e.max)&&"span"in e&&A(e.span)&&e.span>0,
"isRange"),oe=f((e,t)=>Object.freeze({0:e,1:t,length:2,[Symbol.
iterator]:function*(){yield this[0],yield this[1]}}),"parseI\
nitialArguments");function i(e=1,t){let o=oe(t===void 0?0:e,
t===void 0?e:t),[a,h]=o,b=Math.sqrt(h**2+a**2),v=a+b/2;return Object.
create(o,{min:{value:a},max:{value:h},from:{enumerable:!0,value:a},
to:{enumerable:!0,value:h},span:{enumerable:!0,value:b},avg:{
enumerable:!0,value:v},allot:{value:K},clamp:{value:W},clone:{
value:X},test:{value:Z},toString:{value:q}})}r(i,"h");f(i,"c\
reateRange");function K(e){return this.test(e)?e:e>this.max?
(e-this.max)%this.span+this.min:this.max-(this.min-e)%this.span}
r(K,"p");f(K,"allocateOuterValue");function W(e){return this.
test(e)?e:Math.max(Math.min(e,this.max),this.min)}r(W,"g");f(
W,"restrictOuterValue");function X(){return i(...this)}r(X,"\
b");f(X,"makeDuplicate");function Z(e){return this.min<=e&&e<=
this.max}r(Z,"f");f(Z,"includes");function q(){return`{x \u2208 R\
; ${this.min} \u22DC x \u22DC ${this.max}}`}r(q,"x");f(q,"se\
rialize");var I=Object.freeze([0,360]),N=Object.freeze([-Math.PI,Math.
PI]),S=Object.freeze([0,100]),de=Object.freeze([-128,127]),R=Object.
freeze([0,255]),ue=Object.freeze([0,65535]),d=Object.freeze(
[0,1]),he=Object.freeze([-1,1]);var O=Object.freeze({bytes:8,domain:i(...N),ident:"angle",input:r(
e=>O.domain.allot(+e*Math.PI/180),"input"),output:r(e=>e*180/
Math.PI,"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var C=Object.freeze({$coord:O,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:i(...I),ident:"\
hue",input:r(e=>{let[t,o]=ie(e),a=o==="grad"?180/200:o==="ra\
d"?180/Math.PI:o==="turn"?360:1;return C.domain.allot(t*a)},
"input"),output:r(e=>Number.isNaN(e)?Number.NaN:Math.abs(e)<
.01?0:e,"output"),short:"h"});function ie(e){let t=NaN,o="deg";if(typeof e=="number")t=e;else{
let v=String.raw`deg|grad|rad|turn`,H=new RegExp(`^(-?[d.]+)\
(${v})?$`,"i");if(H.test(e)){let k=H.exec(e)?.slice(1)??["0",
"deg"];t=parseFloat(k[0]),o=k[1]}else if(e==="none")t=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,
h]=o==="grad"?[0,400]:o==="deg"?I:o==="rad"?N:d,b=i(a,h);return b.
test(t)===!1&&(t=b.allot(t)),[t,o]}r(ie,"parseCSSAngle");var n=r((e,t)=>{let o=0;if(e==="none"||!e)return o;if(typeof e==
"number")o=e;else if(o=parseFloat(e),e.charAt(-1)==="%"&&(o/=
100,z(t))){let a=Math.sign(o);o*=a<0?t.min:t.max}return z(t)&&
(t.span<=2**8&&(o=Math.sign(o)*Math.round(Math.abs(o))),o=t.
clamp(o)),o},"parseCSSParameter");var u=Object.freeze({bytes:8,domain:i(...d),ident:"applicate",
short:"Z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var s=Object.freeze({$coord:u,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:i(...S),ident:"lightness",input:r(e=>n(e,s.domain),"i\
nput"),short:"L"});var m={bytes:8,domain:i(...d),ident:"radius",short:"rho",tcoord:"\
polar",tgeom:"reference-ray"};Object.freeze(m);var T=Object.freeze({$coord:m,bytes:4,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
...S),ident:"saturation",input:r(e=>n(e,T.domain),"input"),short:"\
S"});var ae=Object.defineProperty,L=r((e,t)=>ae(e,"name",{value:t,
configurable:!0}),"n"),ne=L(e=>e!==null&&typeof e=="object"&&
Array.isArray(e)===!1,"isObject"),se=L(e=>ne(e)&&"ident"in e&&
"short"in e&&"domain"in e,"isSpaceDimension");function g(...e){
if(e.every(o=>se(o))===!1)throw new TypeError("Passed wrong \
space dimensions: "+e.toString());let t=Object.defineProperty(
Iterator.from(e),"length",{enumerable:!0,value:e.length});return o=>Object.
defineProperties(t,o)}r(g,"c");L(g,"createCoordinateSystem");var Je=g(m,O)({adapt:{value:U},tgeom:{enumerable:!0,value:"c\
ircle"}});function U(e=0,t=NaN){let o=e*Math.cos(t),a=e*Math.sin(t);return[
o,a]}r(U,"calcCartesianCoordinates");var x=g(m,O,u)({adapt:{value:me},tgeom:{enumerable:!0,value:"\
cylinder"}});function me(e){let[t,o,a]=e,[h,b]=U(t,o);return[h,b,a]}r(me,
"calcCubeCoordinates");var c=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(c.buffer);var ut={CAM:Iterator.from([C,T,s]),CSYS:x,ident:"hsl",whitepoint:c};var D=Object.freeze({$coord:u,bytes:8,description:"Blackness\
 is the property or quality of being black in colour.",domain:i(
...S),ident:"blackness",input:r(e=>n(e,D.domain),"input"),short:"\
B"});var Y=Object.freeze({$coord:m,bytes:4,description:"Whiteness\
 is determined by how much light a surface reflects across t\
he visible spectrum.",domain:i(...S),ident:"whiteness",input:r(
e=>n(e,Y.domain),"input"),short:"W"});var Lt={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:Iterator.from([C,Y,D]),
CSYS:x,ident:"hwb",whitepoint:c};var y=Object.freeze({bytes:8,domain:i(...d),ident:"abscissa",
short:"X",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var w=Object.freeze({$coord:y,bytes:2,description:"Component\
 defines how green (moving towards -125) or red (moving towa\
rds +125) the color is.",domain:i(-125,125),ident:"green-red",
short:"a"}),V=Object.freeze({...w,bytes:8,domain:i(-.4,.4)});var P=Object.freeze({bytes:8,domain:i(...d),ident:"ordinate",
short:"Y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var B=Object.freeze({$coord:P,bytes:2,description:"Component\
 defines how blue (moving towards -125) or yellow (moving to\
wards +125) the color is.",domain:i(-125,125),ident:"blue-ye\
llow",short:"b"}),J=Object.freeze({...B,bytes:8,domain:i(-.4,
.4)});var qt=g(y,P)({adapt:{value:_},tgeom:{enumerable:!0,value:"p\
lane"}});function _(e,t){let o=0,a=NaN;return(e!==0||t!==0)&&(o=Math.
sqrt(e**2+t**2),e!==0&&!t||t!==0&&!e?a=t/Math.abs(t)*(Math.PI/
2):a=Math.atan(t/e)),[o,a]}r(_,"calcPolarCoordinates");var p=g(y,P,u)({adapt:{value:ce},tgeom:{enumerable:!0,value:"\
cube"}});function ce(e){let[t,o,a]=e,[h,b]=_(t,o);return[h,b,a]}r(ce,
"calcCylindricalCoordinates");var l=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(l.buffer);var fr=Object.freeze({CAM:Iterator.from([s,w,B]),CSYS:p,description:"\
CIE 1976 L*a*b* or CIELAB. Cylindrical with the lightness va\
lue as the vertical axis of rotation.",ident:"lab",whitepoint:l});var M=Object.freeze({$coord:m,bytes:2,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
0,150),ident:"chroma",short:"C"}),Q=Object.freeze({...M,domain:i(
0,.4)});var Pr={CAM:Iterator.from([s,M,C]),CSYS:x,description:"CIE-b\
ased LCh color spaces are transformations of the two chroma \
values (ab or uv) into the polar coordinate.",ident:"lch",whitepoint:l};var Ar=Object.freeze({CAM:Iterator.from([s,V,J]),CSYS:p,ident:"\
oklab",whitepoint:l});var Yr={CAM:Iterator.from([s,Q,C]),CSYS:x,ident:"oklch",whitepoint:l};var G=Object.freeze({$coord:u,bytes:1,domain:i(...R),ident:"\
blue",input:r(e=>n(e,G.domain),"input"),short:"B",description:"\
Blue light intensity."});var F=Object.freeze({$coord:P,bytes:1,domain:i(...R),ident:"\
green",input:r(e=>n(e,F.domain),"input"),short:"G",description:"\
Green light intensity."});var $=Object.freeze({$coord:y,bytes:1,domain:i(...R),ident:"\
red",input:r(e=>n(e,$.domain),"input"),short:"R",description:"\
Red light intensity."});var so=Object.freeze({CAM:Iterator.from([$,F,G]),CSYS:p,ident:"\
rgb",whitepoint:c});var E=p,j=c,lo=Object.freeze({ident:"srgb",CSYS:E,whitepoint:j,
copyright:"Copyright 2007 International Color Consortium",description:"\
sRGB v4 ICC preference perceptual intent beta"}),fo=Object.freeze(
{ident:"srgb-linear",CSYS:E,whitepoint:j}),uo=Object.freeze(
{ident:"a98-rgb",description:"Adobe\xAE 1998 RGB",CSYS:E,whitepoint:j}),
ho=Object.freeze({ident:"display-p3",description:"Display P3",
copyright:"Copyright Apple Inc., 2022",CSYS:E,whitepoint:j}),
bo=Object.freeze({ident:"prophoto-rgb",description:"ProPhoto\
 RGB",CSYS:E,whitepoint:j}),Co=Object.freeze({ident:"rec2020",
description:"Rec. 2020 or BT.2020",CSYS:E,whitepoint:j});var Po=Object.freeze({alias:"xyz",CSYS:p,ident:"xyz-d65",description:"\
XYZ D65 or simply XYZ",whitepoint:c}),Oo=Object.freeze({CSYS:p,
ident:"xyz-d50",whitepoint:l});export{uo as A98RGBSpace,ho as DisplayP3Space,ut as HSL,Lt as HWB,
fr as LABModel,Pr as LCh,Ar as OKLAB,Yr as OKLCh,bo as ProphotoRGBSpace,
so as RGBModel,Co as Rec2020Space,Oo as XYZD50,Po as XYZD65,
fo as sRGBLinearSpace,lo as sRGBSpace};
