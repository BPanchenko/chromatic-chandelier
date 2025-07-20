var ee=Object.defineProperty;var r=(e,t)=>ee(e,"name",{value:t,configurable:!0});var te=Object.defineProperty,f=r((e,t)=>te(e,"name",{value:t,
configurable:!0}),"n"),v=f(e=>typeof e=="number","isNumber"),
re=f(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,
"isObject"),z=f(e=>re(e)&&Symbol.iterator in e&&"min"in e&&v(
e.min)&&"max"in e&&v(e.max)&&"span"in e&&v(e.span)&&e.span>0,
"isRange"),oe=f((e,t)=>Object.freeze({0:e,1:t,length:2,[Symbol.
iterator]:function*(){yield this[0],yield this[1]}}),"parseI\
nitialArguments");function a(e=1,t){let o=oe(t===void 0?0:e,
t===void 0?e:t),[i,h]=o,b=Math.sqrt(h**2+i**2),N=i+b/2;return Object.
create(o,{min:{value:i},max:{value:h},from:{enumerable:!0,value:i},
to:{enumerable:!0,value:h},span:{enumerable:!0,value:b},avg:{
enumerable:!0,value:N},allot:{value:K},clamp:{value:X},clone:{
value:Z},test:{value:W},toString:{value:q}})}r(a,"h");f(a,"c\
reateRange");function K(e){return this.test(e)?e:e>this.max?
(e-this.max)%this.span+this.min:this.max-(this.min-e)%this.span}
r(K,"p");f(K,"allocateOuterValue");function X(e){return this.
test(e)?e:Math.max(Math.min(e,this.max),this.min)}r(X,"g");f(
X,"restrictOuterValue");function Z(){return a(...this)}r(Z,"\
b");f(Z,"makeDuplicate");function W(e){return this.min<=e&&e<=
this.max}r(W,"f");f(W,"includes");function q(){return`{x \u2208 R\
; ${this.min} \u22DC x \u22DC ${this.max}}`}r(q,"x");f(q,"se\
rialize");var I=Object.freeze([0,360]),A=Object.freeze([-Math.PI,Math.
PI]),g=Object.freeze([0,100]),de=Object.freeze([-128,127]),R=Object.
freeze([0,255]),ue=Object.freeze([0,65535]),d=Object.freeze(
[0,1]),he=Object.freeze([-1,1]);var O=Object.freeze({bytes:8,domain:a(...A),ident:"angle",input:r(
e=>O.domain.allot(+e*Math.PI/180),"input"),output:r(e=>e*180/
Math.PI,"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var S=Object.freeze({$coord:O,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:a(...I),ident:"\
hue",input:r(e=>{let[t,o]=ae(e),i=o==="grad"?180/200:o==="ra\
d"?180/Math.PI:o==="turn"?360:1;return S.domain.allot(t*i)},
"input"),output:r(e=>Number.isNaN(e)?Number.NaN:Math.abs(e)<
.01?0:e,"output"),short:"h"});function ae(e){let t=NaN,o="deg";if(typeof e=="number")t=e;else{
let N=String.raw`deg|grad|rad|turn`,$=new RegExp(`^(-?[d.]+)\
(${N})?$`,"i");if($.test(e)){let k=$.exec(e)?.slice(1)??["0",
"deg"];t=parseFloat(k[0]),o=k[1]}else if(e==="none")t=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[i,
h]=o==="grad"?[0,400]:o==="deg"?I:o==="rad"?A:d,b=a(i,h);return b.
test(t)===!1&&(t=b.allot(t)),[t,o]}r(ae,"parseCSSAngle");var n=r((e,t)=>{let o=0;if(e==="none"||!e)return o;if(typeof e==
"number")o=e;else if(o=parseFloat(e),e.charAt(-1)==="%"&&(o/=
100,z(t))){let i=Math.sign(o);o*=i<0?t.min:t.max}return z(t)&&
(t.span<=2**8&&(o=Math.sign(o)*Math.round(Math.abs(o))),o=t.
clamp(o)),o},"parseCSSParameter");var u=Object.freeze({bytes:8,domain:a(...d),ident:"applicate",
short:"Z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var s=Object.freeze({$coord:u,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:a(...g),ident:"lightness",input:r(e=>n(e,s.domain),"i\
nput"),short:"L"});var m={bytes:8,domain:a(...d),ident:"radius",short:"rho",tcoord:"\
polar",tgeom:"reference-ray"};Object.freeze(m);var L=Object.freeze({$coord:m,bytes:4,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:a(
...g),ident:"saturation",input:r(e=>n(e,L.domain),"input"),short:"\
S"});var ie=Object.defineProperty,T=r((e,t)=>ie(e,"name",{value:t,
configurable:!0}),"n"),ne=T(e=>e!==null&&typeof e=="object"&&
Array.isArray(e)===!1,"isObject"),se=T(e=>ne(e)&&"ident"in e&&
"short"in e&&"domain"in e,"isSpaceDimension");function C(...e){
if(e.every(o=>se(o))===!1)throw new TypeError("Passed wrong \
space dimensions: "+e.toString());let t=Object.defineProperty(
Iterator.from(e),"length",{enumerable:!0,value:e.length});return o=>Object.
defineProperties(t,o)}r(C,"c");T(C,"createCoordinateSystem");var Je=C(m,O)({adapt:{value:U},tgeom:{enumerable:!0,value:"c\
ircle"}});function U(e=0,t=NaN){let o=e*Math.cos(t),i=e*Math.sin(t);return[
o,i]}r(U,"calcCartesianCoordinates");var x=C(m,O,u)({adapt:{value:me},tgeom:{enumerable:!0,value:"\
cylinder"}});function me(e){let[t,o,i]=e,[h,b]=U(t,o);return[h,b,i]}r(me,
"calcCubeCoordinates");var c=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(c.buffer);var ut={CAM:Iterator.from([S,L,s]),CSYS:x,ident:"hsl",whitepoint:c};var Y=Object.freeze({$coord:u,bytes:8,description:"Blackness\
 is the property or quality of being black in colour.",domain:a(
...g),ident:"blackness",input:r(e=>n(e,Y.domain),"input"),short:"\
B"});var D=Object.freeze({$coord:m,bytes:4,description:"Whiteness\
 is determined by how much light a surface reflects across t\
he visible spectrum.",domain:a(...g),ident:"whiteness",input:r(
e=>n(e,D.domain),"input"),short:"W"});var Tt={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:Iterator.from([S,D,Y]),
CSYS:x,ident:"hwb",whitepoint:c};var y=Object.freeze({bytes:8,domain:a(...d),ident:"abscissa",
short:"X",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var w=Object.freeze({$coord:y,bytes:2,description:"Component\
 defines how green (moving towards -125) or red (moving towa\
rds +125) the color is.",domain:a(-125,125),ident:"green-red",
short:"a"}),V=Object.freeze({...w,bytes:8,domain:a(-.4,.4)});var P=Object.freeze({bytes:8,domain:a(...d),ident:"ordinate",
short:"Y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var _=Object.freeze({$coord:P,bytes:2,description:"Component\
 defines how blue (moving towards -125) or yellow (moving to\
wards +125) the color is.",domain:a(-125,125),ident:"blue-ye\
llow",short:"b"}),J=Object.freeze({..._,bytes:8,domain:a(-.4,
.4)});var qt=C(y,P)({adapt:{value:B},tgeom:{enumerable:!0,value:"p\
lane"}});function B(e,t){let o=0,i=NaN;return(e!==0||t!==0)&&(o=Math.
sqrt(e**2+t**2),e!==0&&!t||t!==0&&!e?i=t/Math.abs(t)*(Math.PI/
2):i=Math.atan(t/e)),[o,i]}r(B,"calcPolarCoordinates");var p=C(y,P,u)({adapt:{value:ce},tgeom:{enumerable:!0,value:"\
cube"}});function ce(e){let[t,o,i]=e,[h,b]=B(t,o);return[h,b,i]}r(ce,
"calcCylindricalCoordinates");var l=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(l.buffer);var fr=Object.freeze({CAM:Iterator.from([s,w,_]),CSYS:p,description:"\
CIE 1976 L*a*b* or CIELAB. Cylindrical with the lightness va\
lue as the vertical axis of rotation.",ident:"lab",whitepoint:l});var G=Object.freeze({$coord:m,bytes:2,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:a(
0,150),ident:"chroma",short:"C"}),Q=Object.freeze({...G,domain:a(
0,.4)});var Pr={CAM:Iterator.from([s,G,S]),CSYS:x,description:"CIE-b\
ased LCh color spaces are transformations of the two chroma \
values (ab or uv) into the polar coordinate.",ident:"lch",whitepoint:l};var vr=Object.freeze({CAM:Iterator.from([s,V,J]),CSYS:p,ident:"\
oklab",whitepoint:l});var Dr={CAM:Iterator.from([s,Q,S]),CSYS:x,ident:"oklch",whitepoint:l};var M=Object.freeze({$coord:u,bytes:1,domain:a(...R),ident:"\
blue",input:r(e=>n(e,M.domain),"input"),short:"B",description:"\
Blue light intensity."});var H=Object.freeze({$coord:P,bytes:1,domain:a(...R),ident:"\
green",input:r(e=>n(e,H.domain),"input"),short:"G",description:"\
Green light intensity."});var F=Object.freeze({$coord:y,bytes:1,domain:a(...R),ident:"\
red",input:r(e=>n(e,F.domain),"input"),short:"R",description:"\
Red light intensity."});var so=Object.freeze({CAM:Iterator.from([F,H,M]),CSYS:p,ident:"\
rgb",whitepoint:c});var E=p,j=c,lo=Object.freeze({ident:"srgb",CSYS:E,whitepoint:j,
copyright:"Copyright 2007 International Color Consortium",description:"\
sRGB v4 ICC preference perceptual intent beta"}),fo=Object.freeze(
{ident:"srgb-linear",CSYS:E,whitepoint:j}),uo=Object.freeze(
{ident:"a98-rgb",description:"Adobe\xAE 1998 RGB",CSYS:E,whitepoint:j}),
ho=Object.freeze({ident:"display-p3",description:"Display P3",
copyright:"Copyright Apple Inc., 2022",CSYS:E,whitepoint:j}),
bo=Object.freeze({ident:"prophoto-rgb",description:"ProPhoto\
 RGB",CSYS:E,whitepoint:j}),So=Object.freeze({ident:"rec2020",
description:"Rec. 2020 or BT.2020",CSYS:E,whitepoint:j});var Po=Object.freeze({alias:"xyz",CSYS:p,ident:"xyz-d65",description:"\
XYZ D65 or simply XYZ",whitepoint:c}),Oo=Object.freeze({CSYS:p,
ident:"xyz-d50",whitepoint:l});export{uo as A98RGBSpace,fr as CIELAB,so as CIERGB,Po as CIEXYZ,
ho as DisplayP3Space,ut as HSL,ut as HSLSpace,Tt as HWB,Tt as HWBSpace,
fr as LABSpace,Pr as LCHSpace,Pr as LCh,vr as OKLAB,Dr as OKLCHSpace,
Dr as OKLCh,vr as OklabSpace,bo as ProphotoRGBSpace,so as RGBSpace,
So as Rec2020Space,Oo as XYZD50Space,Po as XYZD65Space,Po as XYZSpace,
uo as a98_rgb,ho as display_p3,ut as hsl,Tt as hwb,fr as lab,
Pr as lch,vr as oklab,Dr as oklch,bo as prophoto_rgb,So as rec2020,
so as rgb,fo as sRGBLinearSpace,lo as sRGBSpace,lo as srgb,fo as srgb_linear,
Oo as xyz_d50,Po as xyz_d65};
