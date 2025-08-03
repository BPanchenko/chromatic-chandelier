var Q=Object.defineProperty;var t=(e,r)=>Q(e,"name",{value:r,configurable:!0});var ee=Object.defineProperty,E=t((e,r)=>ee(e,"name",{value:r,
configurable:!0}),"n"),te=E(e=>e!==null&&typeof e=="object"&&
Array.isArray(e)===!1,"isObject"),re=E(e=>te(e)&&"ident"in e&&
"short"in e&&"domain"in e,"isSpaceDimension");function n(e,r,o){
let a=Iterator.from(o===void 0?[e,r]:[e,r,o]),m=o===void 0?2:
3;for(let c of a.take(m))if(re(c)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(c,void 0,2));
let p=a.take(m).filter(c=>c.tgeom==="azimuth"||c.tgeom==="re\
ference-ray").toArray().length===2?m===3?"cilinder":"circle":
m===3?"cube":"plane",v=Object.create(null,{0:{enumerable:!0,
value:e},1:{enumerable:!0,value:r},length:{enumerable:!0,value:m},
tgeom:{enumerable:!0,value:p},entries:{value:E(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:E(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:E(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return m===3&&Object.defineProperty(v,2,{enumerable:!0,value:o}),
c=>c===void 0?v:Object.defineProperties(v,c)}t(n,"P");E(n,"c\
reateCoordinateSystem");var oe=Object.defineProperty,l=t((e,r)=>oe(e,"name",{value:r,
configurable:!0}),"n"),U=l(e=>typeof e=="number","isNumber"),
ie=l(e=>e!==null&&typeof e=="object"&&Array.isArray(e)===!1,
"isObject"),ae=l((e,r)=>Object.create(null,{0:{enumerable:!0,
value:e},1:{enumerable:!0,value:r},length:{value:2},[Symbol.
iterator]:{value:l(function*(){yield this[0],yield this[1]},
"value")}}),"createDataView"),D=l(e=>ie(e)&&Symbol.iterator in
e&&"min"in e&&U(e.min)&&"max"in e&&U(e.max)&&"span"in e&&U(e.
span)&&e.span>0,"isRange");function i(e=1,r){let o=ae(r===void 0?
0:e,r===void 0?e:r),[a,m]=o,p=Math.sqrt(m**2+a**2),v=a+p/2;return Object.
defineProperties(o,{from:{enumerable:!0,value:a},to:{enumerable:!0,
value:m},span:{enumerable:!0,value:p},avg:{enumerable:!0,value:v},
allot:{value:Z},clamp:{value:W},clone:{value:q},test:{value:l(
c=>a<=c&&c<=m,"value")},toString:{value:l(()=>String.raw`{x ∈ R; ${a} ⋜ x ⋜ ${m}}`,
"value")}})}t(i,"h");l(i,"createRange");function Z(e){return this.
test(e)?e:e>this.from?(e-this.to)%this.span+this.from:this.to-
(this.from-e)%this.span}t(Z,"S");l(Z,"allocateOuterValue");function W(e){
return this.test(e)?e:Math.max(Math.min(e,this.to),this.from)}
t(W,"g");l(W,"restrictOuterValue");function q(){return i(...this)}
t(q,"f");l(q,"makeDuplicate");var Y=Object.freeze([0,360]),z=Object.freeze([-Math.PI,Math.
PI]),y=Object.freeze([0,100]),ue=Object.freeze([-128,127]),j=Object.
freeze([0,255]),he=Object.freeze([0,65535]),h=Object.freeze(
[0,1]),be=Object.freeze([-1,1]);var R=Object.freeze({bytes:8,domain:i(...z),ident:"angle",input:t(
e=>R.domain.allot(+e*Math.PI/180),"input"),output:t(e=>e*180/
Math.PI,"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var g=Object.freeze({$coord:R,bytes:4,description:"Hue angle\
 is a numerical representation of a color's hue, typically m\
easured as an angle in a color space.",domain:i(...Y),ident:"\
hue",input:t(e=>{let[r,o]=ne(e),a=o==="grad"?180/200:o==="ra\
d"?180/Math.PI:o==="turn"?360:1;return g.domain.allot(r*a)},
"input"),output:t(e=>Number.isNaN(e)?Number.NaN:Math.abs(e)<
.01?0:e,"output"),short:"h"});function ne(e){let r=NaN,o="deg";if(typeof e=="number")r=e;else{
let v=String.raw`deg|grad|rad|turn`,c=new RegExp(`^(-?[d.]+)\
(${v})?$`,"i");if(c.test(e)){let X=c.exec(e)?.slice(1)??["0",
"deg"];r=parseFloat(X[0]),o=X[1]}else if(e==="none")r=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[a,
m]=o==="grad"?[0,400]:o==="deg"?Y:o==="rad"?z:h,p=i(a,m);return p.
test(r)===!1&&(r=p.allot(r)),[r,o]}t(ne,"parseCSSAngle");var s=t((e,r)=>{let o=0;if(e==="none"||!e)return o;if(typeof e==
"number")o=e;else if(o=parseFloat(e),e.charAt(-1)==="%"&&(o/=
100,D(r))){let a=Math.sign(o);o*=a<0?r.from:r.to}return D(r)&&
(r.span<=2**8&&(o=Math.sign(o)*Math.round(Math.abs(o))),o=r.
clamp(o)),o},"parseCSSParameter");var b=Object.freeze({bytes:8,domain:i(...h),ident:"applicate",
short:"Z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var f=Object.freeze({$coord:b,bytes:4,description:"Lightness\
 is a visual perception of the luminance of an object. In so\
me color ordering systems Lightness is referenced as value.",
domain:i(...y),ident:"lightness",input:t(e=>s(e,f.domain)/100,
"input"),output:t(e=>e*100,"output"),short:"L"});var S=Object.freeze({bytes:8,domain:i(...h),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var w=Object.freeze({$coord:S,bytes:4,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
...y),ident:"saturation",input:t(e=>s(e,w.domain),"input"),short:"\
S"});var Ve=n(S,R)({adapt:{enumerable:!0,value:I}});function I(e=0,r=NaN){let o=e*Math.cos(r),a=e*Math.sin(r);return[
o,a]}t(I,"calcCartesianCoordinates");var P=n(S,R,b)({adapt:{value:se}});function se(e){let[r,o,a]=e,[m,p]=I(r,o);return[m,p,a]}t(se,
"calcCubeCoordinates");var d=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(d.buffer);var ut={CAM:n(g,w,f)(),CSYS:P,ident:"hsl",whitepoint:d};var B=Object.freeze({$coord:b,bytes:8,description:"Blackness\
 is the property or quality of being black in colour.",domain:i(
...y),ident:"blackness",input:t(e=>s(e,B.domain),"input"),short:"\
B"});var _=Object.freeze({$coord:S,bytes:4,description:"Whiteness\
 is determined by how much light a surface reflects across t\
he visible spectrum.",domain:i(...y),ident:"whiteness",input:t(
e=>s(e,_.domain),"input"),short:"W"});var Dt={description:"HWB (Hue, Whiteness, Blackness) is a cy\
lindrical-coordinate representation of points in an RGB colo\
r model, similar to HSL and HSV.",CAM:n(g,_,B)(),CSYS:P,ident:"\
hwb",whitepoint:d};var O=Object.freeze({bytes:8,domain:i(...h),ident:"abscissa",
short:"X",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var T=Object.freeze({$coord:O,bytes:2,description:"Component\
 defines how green (moving towards -125) or red (moving towa\
rds +125) the color is.",domain:i(-125,125),ident:"green-red",
input:t(e=>s(e,T.domain)/125,"input"),output:t(e=>e*125,"out\
put"),short:"a"}),M=Object.freeze({...T,bytes:8,domain:i(-.4,
.4),input:t(e=>s(e,M.domain)/.4,"input"),output:t(e=>e*.4,"o\
utput")});var x=Object.freeze({bytes:8,domain:i(...h),ident:"ordinate",
short:"Y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var L=Object.freeze({$coord:x,bytes:2,description:"Component\
 defines how blue (moving towards -125) or yellow (moving to\
wards +125) the color is.",domain:i(-125,125),ident:"blue-ye\
llow",input:t(e=>s(e,L.domain)/125,"input"),output:t(e=>e*125,
"output"),short:"b"}),G=Object.freeze({...L,bytes:8,domain:i(
-.4,.4),input:t(e=>s(e,G.domain)/.4,"input"),output:t(e=>e*.4,
"output")});var tr=n(O,x)({adapt:{value:F}});function F(e,r){let o=0,a=NaN;return(e!==0||r!==0)&&(o=Math.
sqrt(e**2+r**2),e!==0&&!r||r!==0&&!e?a=r/Math.abs(r)*(Math.PI/
2):a=Math.atan(r/e)),[o,a]}t(F,"calcPolarCoordinates");var C=n(O,x,b)({adapt:{value:me}});function me(e){let[r,o,a]=e,[m,p]=F(r,o);return[m,p,a]}t(me,
"calcCylindricalCoordinates");var u=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(u.buffer);var Cr=Object.freeze({CAM:n(f,T,L)(),CSYS:C,description:"CIE\
 1976 L*a*b* or CIELAB. Cylindrical with the lightness value\
 as the vertical axis of rotation.",ident:"lab",whitepoint:u});var $=Object.freeze({$coord:S,bytes:2,description:"Chroma: t\
he quality of a color's purity, intensity or saturation.",domain:i(
0,150),ident:"chroma",short:"C"}),V=Object.freeze({...$,domain:i(
0,.4)});var Nr={CAM:n(f,$,g)(),CSYS:P,description:"CIE-based LCh col\
or spaces are transformations of the two chroma values (ab o\
r uv) into the polar coordinate.",ident:"lch",whitepoint:u};var Ir=Object.freeze({CAM:n(f,M,G)(),CSYS:C,ident:"oklab",whitepoint:u});var kr={CAM:n(f,V,g)(),CSYS:P,ident:"oklch",whitepoint:u};var H=Object.freeze({$coord:b,bytes:1,domain:i(...j),ident:"\
blue",input:t(e=>s(e,H.domain),"input"),short:"B",description:"\
Blue light intensity."});var k=Object.freeze({$coord:x,bytes:1,domain:i(...j),ident:"\
green",input:t(e=>s(e,k.domain),"input"),short:"G",description:"\
Green light intensity."});var K=Object.freeze({$coord:O,bytes:1,domain:i(...j),ident:"\
red",input:t(e=>s(e,K.domain),"input"),short:"R",description:"\
Red light intensity."});var Co=Object.freeze({CAM:n(K,k,H)(),CSYS:C,ident:"rgb",whitepoint:d});var A=C,N=d,Oo=Object.freeze({ident:"srgb",CSYS:A,whitepoint:N,
copyright:"Copyright 2007 International Color Consortium",description:"\
sRGB v4 ICC preference perceptual intent beta"}),xo=Object.freeze(
{ident:"srgb-linear",CSYS:A,whitepoint:N}),vo=Object.freeze(
{ident:"a98-rgb",description:"Adobe\xAE 1998 RGB",CSYS:A,whitepoint:N}),
Ro=Object.freeze({ident:"display-p3",description:"Display P3",
copyright:"Copyright Apple Inc., 2022",CSYS:A,whitepoint:N}),
Eo=Object.freeze({ident:"prophoto-rgb",description:"ProPhoto\
 RGB",CSYS:A,whitepoint:N}),jo=Object.freeze({ident:"rec2020",
description:"Rec. 2020 or BT.2020",CSYS:A,whitepoint:N});var J=C,Lo=Object.freeze({ident:"xyz-d65",alias:"xyz",description:"\
XYZ D65 or simply XYZ",CSYS:J,whitepoint:d}),Uo=Object.freeze(
{ident:"xyz-d50",CSYS:J,whitepoint:u});export{vo as A98RGBSpace,Ro as DisplayP3Space,ut as HSL,Dt as HWB,
Cr as LABModel,Nr as LCh,Ir as OKLAB,kr as OKLCh,Eo as ProphotoRGBSpace,
Co as RGBModel,jo as Rec2020Space,Uo as XYZD50,Uo as XYZD50Space,
Lo as XYZD65,Lo as XYZD65Space,xo as sRGBLinearSpace,Oo as sRGBSpace};
