var No=Object.defineProperty;var r=(t,o)=>No(t,"name",{value:o,configurable:!0});var Do=Object.defineProperty,E=r((t,o)=>Do(t,"name",{value:o,
configurable:!0}),"t");function It(...t){let o=Math.max(t.length,
9),i=new ArrayBuffer(o*8),e=new Float64Array(i,0,o),p=Object.
create(null,{[Symbol.iterator]:{value:E(function*(){for(let n=0;n<
e.length;n++)yield this[n]},"value")},[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.toStringTag]:{value:E(()=>"Matrix"+e.toString(),
"value")},length:{enumerable:!0,value:o},toArray:{value:E(()=>Iterator.
from(e).toArray(),"value")},toString:{value:e.toString}});for(let n=0;n<
o;n++)(function(a,l,m){Object.defineProperty(a,l,{enumerable:!0,
get:E(()=>m[l],"get"),set:E(s=>{if(typeof s=="number")m[l]=s;else
throw new TypeError("Expected Number")},"set")})})(p,n,e);return Object.
defineProperties(p,{clone:{value:E(()=>It(...e),"value")},each:{
value:E(function(n){return e.forEach((a,l,m)=>n(a,l,this)),this},
"value")},determinant:{value:E(()=>{let[n,a,l,m,s,f,d,u,b]=e,
y=b*s-f*u,w=-b*m+f*d,v=u*m-s*d;return n*y+a*w+l*v},"value")},
invert:{value:E(function(){let n=this.determinant();if(n===0)
throw console.table(this),new Error("A singular or non-squar\
e matrix matrix cannot be inverted.");let[a,l,m,s,f,d,u,b,y]=e,
w=y*f-d*b,v=-y*s+d*u,_t=b*s-f*u;return this.update(w/n,(-y*l+
m*b)/n,(d*l-m*f)/n,v/n,(y*a-m*u)/n,(-d*a+m*s)/n,_t/n,(-b*a+l*
u)/n,(f*a-l*s)/n)},"value")},update:{value:E(function(){return e.
set(Iterator.from(arguments).map(n=>typeof n=="number"?n:0).
toArray()),this},"value")}}),p.update(...t)}r(It,"y");E(It,"\
createMatrix");function kt(...t){let o=t.length===1?Array.of(
0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[i,e]=o,p=e-
i,n=i+p/2;return Object.create(null,{from:{value:i},to:{value:e},
minimum:{enumerable:!0,value:i},maximum:{enumerable:!0,value:e},
avg:{enumerable:!0,value:n},value:{enumerable:!0,value:p},allot:{
value:Tr},clamp:{value:Rr},test:{value:E(a=>i<=a&&a<=e,"valu\
e")},toString:{value:E(()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${e}}`,
"value")},[Symbol.iterator]:{value:E(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(kt,"b");E(
kt,"createRange");function Tr(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(Tr,"A");E(Tr,"allocateOuterValue");function Rr(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(Rr,"w");E(Rr,"restrictOuterValue");var ve=It(1,0,0,0,1,0,0,
0,1),Pe=It(0,1,0,0,0,1,0,0,0),we=It(0,0,0,1,0,0,0,1,0),Me=It(
0,0,1,0,1,0,1,0,0),Ae=kt(0,360),Ie=kt(0,2*Math.PI),ke=kt(0,100),
Oe=kt(0,255),Ce=kt(0,1),Ho=E(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),Vo=E(t=>Ho(t)&&"ident"in t&&
"short"in t&&"domain"in t,"isSpaceDimension");function k(t,o,i){
let e=Iterator.from(i===void 0?[t,o]:[t,o,i]),p=i===void 0?2:
3;for(let l of e.take(p))if(Vo(l)===!1)throw new TypeError("\
Passed wrong space dimension: "+JSON.stringify(l,void 0,2));
let n=e.take(p).filter(l=>l.tgeom==="azimuth"||l.tgeom==="re\
ference-ray").toArray().length===2?p===3?"cilinder":"circle":
p===3?"cube":"plane",a=Object.create(null,{0:{enumerable:!0,
value:t},1:{enumerable:!0,value:o},length:{enumerable:!0,value:p},
tgeom:{enumerable:!0,value:n},entries:{value:E(function*(){yield[
0,this[0]],yield[1,this[1]],this.length===3&&(yield[2,this[2]])},
"value")},toArray:{value:E(function(){return Array.of(...this)},
"value")},[Symbol.iterator]:{value:E(function*(){yield this[0],
yield this[1],this.length===3&&(yield this[2])},"value")}});
return p===3&&Object.defineProperty(a,2,{enumerable:!0,value:i}),
l=>l===void 0?a:Object.defineProperties(a,l)}r(k,"Re");E(k,"\
createCoordinateSystem");var Go=Object.defineProperty,X=r((t,o)=>Go(t,"name",{value:o,
configurable:!0}),"t");function Ot(...t){let o=Math.max(t.length,
9),i=new ArrayBuffer(o*8),e=new Float64Array(i,0,o),p=Object.
create(null,{[Symbol.iterator]:{value:X(function*(){for(let n=0;n<
e.length;n++)yield this[n]},"value")},[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.toStringTag]:{value:X(()=>"Matrix"+e.toString(),
"value")},length:{enumerable:!0,value:o},toArray:{value:X(()=>Iterator.
from(e).toArray(),"value")},toString:{value:e.toString}});for(let n=0;n<
o;n++)(function(a,l,m){Object.defineProperty(a,l,{enumerable:!0,
get:X(()=>m[l],"get"),set:X(s=>{if(typeof s=="number")m[l]=s;else
throw new TypeError("Expected Number")},"set")})})(p,n,e);return Object.
defineProperties(p,{clone:{value:X(()=>Ot(...e),"value")},each:{
value:X(function(n){return e.forEach((a,l,m)=>n(a,l,this)),this},
"value")},determinant:{value:X(()=>{let[n,a,l,m,s,f,d,u,b]=e,
y=b*s-f*u,w=-b*m+f*d,v=u*m-s*d;return n*y+a*w+l*v},"value")},
invert:{value:X(function(){let n=this.determinant();if(n===0)
throw console.table(this),new Error("A singular or non-squar\
e matrix matrix cannot be inverted.");let[a,l,m,s,f,d,u,b,y]=e,
w=y*f-d*b,v=-y*s+d*u,_t=b*s-f*u;return this.update(w/n,(-y*l+
m*b)/n,(d*l-m*f)/n,v/n,(y*a-m*u)/n,(-d*a+m*s)/n,_t/n,(-b*a+l*
u)/n,(f*a-l*s)/n)},"value")},update:{value:X(function(){return e.
set(Iterator.from(arguments).map(n=>typeof n=="number"?n:0).
toArray()),this},"value")}}),p.update(...t)}r(Ot,"g");X(Ot,"\
createMatrix");var Ee=Ot(1,0,0,0,1,0,0,0,1),Te=Ot(0,1,0,0,0,
1,0,0,0),Re=Ot(0,0,0,1,0,0,0,1,0),Be=Ot(0,0,1,0,1,0,1,0,0),Xe=g(
0,360),Ze=g(0,2*Math.PI),We=g(0,100),Le=g(0,255),Ne=g(0,1),br=X(
t=>typeof t=="number","isNumber"),$o=X(t=>t!==null&&typeof t==
"object"&&Array.isArray(t)===!1,"isObject"),De=X(t=>$o(t)&&Symbol.
iterator in t&&"minimum"in t&&br(t.minimum)&&"maximum"in t&&
br(t.maximum)&&"value"in t&&br(t.value)&&t.value>0,"isRange");
function g(...t){let o=t.length===1?Array.of(0,t[0]):Array.of(
Math.min(...t),Math.max(...t)),[i,e]=o,p=e-i,n=i+p/2;return Object.
create(null,{from:{value:i},to:{value:e},minimum:{enumerable:!0,
value:i},maximum:{enumerable:!0,value:e},avg:{enumerable:!0,
value:n},value:{enumerable:!0,value:p},allot:{value:Br},clamp:{
value:Xr},test:{value:X(a=>i<=a&&a<=e,"value")},toString:{value:X(
()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${e}}`,"value")},[Symbol.
iterator]:{value:X(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}r(g,"p");X(g,"createRange");function Br(t){
return this.test(t)?t:t>this.from?(t-this.to)%this.value+this.
from:this.to-(this.from-t)%this.value}r(Br,"R");X(Br,"alloca\
teOuterValue");function Xr(t){return this.test(t)?t:Math.max(
Math.min(t,this.to),this.from)}r(Xr,"V");X(Xr,"restrictOuter\
Value");var Fo=Object.defineProperty,qo=r((t,o)=>Fo(t,"name",{value:o,
configurable:!0}),"n");var Uo=qo((t,o=6)=>{let i=10**o;return Math.sign(t)*Math.round(
(Math.abs(t)+Number.EPSILON)*i)/i},"round"),I=Uo;var Ko=Object.defineProperty,Z=r((t,o)=>Ko(t,"name",{value:o,
configurable:!0}),"t");function Ct(...t){let o=Math.max(t.length,
9),i=new ArrayBuffer(o*8),e=new Float64Array(i,0,o),p=Object.
create(null,{[Symbol.iterator]:{value:Z(function*(){for(let n=0;n<
e.length;n++)yield this[n]},"value")},[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.toStringTag]:{value:Z(()=>"Matrix"+e.toString(),
"value")},length:{enumerable:!0,value:o},toArray:{value:Z(()=>Iterator.
from(e).toArray(),"value")},toString:{value:e.toString}});for(let n=0;n<
o;n++)(function(a,l,m){Object.defineProperty(a,l,{enumerable:!0,
get:Z(()=>m[l],"get"),set:Z(s=>{if(typeof s=="number")m[l]=s;else
throw new TypeError("Expected Number")},"set")})})(p,n,e);return Object.
defineProperties(p,{clone:{value:Z(()=>Ct(...e),"value")},each:{
value:Z(function(n){return e.forEach((a,l,m)=>n(a,l,this)),this},
"value")},determinant:{value:Z(()=>{let[n,a,l,m,s,f,d,u,b]=e,
y=b*s-f*u,w=-b*m+f*d,v=u*m-s*d;return n*y+a*w+l*v},"value")},
invert:{value:Z(function(){let n=this.determinant();if(n===0)
throw console.table(this),new Error("A singular or non-squar\
e matrix matrix cannot be inverted.");let[a,l,m,s,f,d,u,b,y]=e,
w=y*f-d*b,v=-y*s+d*u,_t=b*s-f*u;return this.update(w/n,(-y*l+
m*b)/n,(d*l-m*f)/n,v/n,(y*a-m*u)/n,(-d*a+m*s)/n,_t/n,(-b*a+l*
u)/n,(f*a-l*s)/n)},"value")},update:{value:Z(function(){return e.
set(Iterator.from(arguments).map(n=>typeof n=="number"?n:0).
toArray()),this},"value")}}),p.update(...t)}r(Ct,"g");Z(Ct,"\
createMatrix");var Fe=Ct(1,0,0,0,1,0,0,0,1),qe=Ct(0,1,0,0,0,
1,0,0,0),Ue=Ct(0,0,0,1,0,0,0,1,0),Ke=Ct(0,0,1,0,1,0,1,0,0),Je=St(
0,360),Qe=St(0,2*Math.PI),ti=St(0,100),ri=St(0,255),oi=St(0,
1);function St(...t){let o=t.length===1?Array.of(0,t[0]):Array.
of(Math.min(...t),Math.max(...t)),[i,e]=o,p=e-i,n=i+p/2;return Object.
create(null,{from:{value:i},to:{value:e},minimum:{enumerable:!0,
value:i},maximum:{enumerable:!0,value:e},avg:{enumerable:!0,
value:n},value:{enumerable:!0,value:p},allot:{value:Zr},clamp:{
value:Wr},test:{value:Z(a=>i<=a&&a<=e,"value")},toString:{value:Z(
()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${e}}`,"value")},[Symbol.
iterator]:{value:Z(function*(){yield this.from,yield this.to},
"value")},length:{value:2}})}r(St,"h");Z(St,"createRange");function Zr(t){
return this.test(t)?t:t>this.from?(t-this.to)%this.value+this.
from:this.to-(this.from-t)%this.value}r(Zr,"w");Z(Zr,"alloca\
teOuterValue");function Wr(t){return this.test(t)?t:Math.max(
Math.min(t,this.to),this.from)}r(Wr,"R");Z(Wr,"restrictOuter\
Value");function hr(t=[0,100],o=[0,1]){let[i,e]=o,[p,n]=t,[a,
l]=[e-i,n-p];function m(f){return typeof f=="string"&&(f=parseFloat(
f)),s.domain.test(f)===!1&&(f=f>e?(f-e)%a+i:e-(i-f)%a),l*(f-
i)/a+p}r(m,"c"),Z(m,"invert");function s(f){return typeof f==
"string"&&(f=parseFloat(f)),s.range.test(f)===!1&&(f=f>n?(f-
n)%l+p:n-(p-f)%l),a*(f-p)/l+i}return r(s,"u"),Z(s,"calculato\
r"),Object.defineProperties(s,{domain:{enumerable:!0,value:St(
i,e)},range:{enumerable:!0,value:St(p,n)},invert:{enumerable:!0,
value:m}})}r(hr,"Ae");Z(hr,"initScale");var xr=hr([0,360],[-Math.PI,Math.PI]),Yt=Object.freeze({bytes:8,
domain:xr.domain,ident:"angle",input:r(t=>xr.domain.allot(t*
Math.PI/180),"input"),output:r(t=>I(xr.range.allot(t*180/Math.
PI),1),"output"),short:"phi",tcoord:"polar",tgeom:"azimuth"});var xt=Object.freeze({$coord:Yt,bytes:4,description:"Hue ang\
le is a numerical representation of a color's hue, typically\
 measured as an angle in a color space.",domain:g(0,360),ident:"\
hue",input:r(t=>{let[o,i]=Jo(t),e=i==="grad"?180/200:i==="ra\
d"?180/Math.PI:i==="turn"?360:1;return xt.domain.allot(o*e)},
"input"),output:r(t=>Number.isNaN(t)?Number.NaN:Math.abs(t)<
.01?0:I(t,2),"output"),short:"h"});function Jo(t){let o=NaN,i="deg";if(typeof t=="number")o=t;else{
let a=String.raw`deg|grad|rad|turn`,l=new RegExp(`^(-?[d.]+)\
(${a})?$`,"i");if(l.test(t)){let m=l.exec(t)?.slice(1)??["0",
"deg"];o=parseFloat(m[0]),i=m[1]}else if(t==="none")o=NaN;else
throw new TypeError("Expected a valid <angle> string")}let[e,
p]=i==="grad"?[0,400]:i==="deg"?[0,360]:i==="rad"?[-Math.PI,
Math.PI]:[0,1],n=g(e,p);return n.test(o)===!1&&(o=n.allot(o)),
[o,i]}r(Jo,"parseCSSAngle");var ft=Object.freeze({bytes:8,domain:g(0,1),ident:"applicate",
short:"z",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var ut=Object.freeze({$coord:ft,bytes:4,description:"Lightne\
ss is a visual perception of the luminance of an object. In \
some color ordering systems Lightness is referenced as value\
.",domain:g(0,100),ident:"lightness",input:r(t=>t/100,"input"),
output:r(t=>I(t*100,2),"output"),short:"L"});var ct=Object.freeze({bytes:8,domain:g(0,1),ident:"radius",short:"\
rho",tcoord:"polar",tgeom:"reference-ray"});var Lr=Object.freeze({$coord:ct,bytes:4,description:"Chroma:\
 the quality of a color's purity, intensity or saturation.",
domain:g(0,100),ident:"saturation",input:r(t=>t/100,"input"),
output:r(t=>I(t*100,2),"output"),short:"S"});var Ci=k(ct,Yt)({adapt:{enumerable:!0,value:yr}});function yr(t=0,o=NaN){return[t*Math.cos(o),t*Math.sin(o)]}r(
yr,"calcCartesianCoordinates");var zt=k(ct,Yt,ft)({adapt:{value:Qo}});function Qo(t,o,i){return[...yr(t,o),i]}r(Qo,"calcCubeCoordi\
nates");var O={CAM:k(xt,Lr,ut)(),CSYS:zt,ident:"hsl",whitepoint:"D65"};var Nr=Object.freeze({$coord:ft,bytes:4,description:"Blackne\
ss is the property or quality of being black in colour.",domain:g(
0,100),ident:"blackness",input:r(t=>t/100,"input"),output:r(
t=>I(t*100,2),"output"),short:"B"});var Dr=Object.freeze({$coord:ct,bytes:4,description:"Whitene\
ss is determined by how much light a surface reflects across\
 the visible spectrum.",domain:g(0,100),ident:"whiteness",input:r(
t=>t/100,"input"),output:r(t=>I(t*100,2),"output"),short:"W"});var C={description:"HWB (Hue, Whiteness, Blackness) is a cyl\
indrical-coordinate representation of points in an RGB color\
 model, similar to HSL and HSV.",CAM:k(xt,Dr,Nr)(),CSYS:zt,ident:"\
hwb",whitepoint:"D65"};var yt=Object.freeze({bytes:8,domain:g(-1,1),ident:"abscissa",
short:"x",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var gr=Object.freeze({$coord:yt,bytes:2,description:"Compone\
nt defines how green (moving towards -125) or red (moving to\
wards +125) the color is.",domain:g(-125,125),ident:"green-r\
ed",input:r(t=>t/125,"input"),output:r(t=>I(t*125,1),"output"),
short:"a"}),Hr=Object.freeze({...gr,bytes:8,domain:g(-.4,.4),
input:r(t=>t,"input"),output:r(t=>t,"output")});var gt=Object.freeze({bytes:8,domain:g(-1,1),ident:"ordinate",
short:"y",tcoord:"cartesian-coordinate-axis",tgeom:"directed\
-line"});var Sr=Object.freeze({$coord:gt,bytes:2,description:"Compone\
nt defines how blue (moving towards -125) or yellow (moving \
towards +125) the color is.",domain:g(-125,125),ident:"blue-\
yellow",input:r(t=>t/125,"input"),output:r(t=>I(t*125,1),"ou\
tput"),short:"b"}),Vr=Object.freeze({...Sr,bytes:8,domain:g(
-.4,.4),input:r(t=>t,"input"),output:r(t=>t,"output")});var An=k(yt,gt)({adapt:{value:zr}});function zr(t,o){let i=0,e=NaN;return(t!==0||o!==0)&&(i=Math.
sqrt(t**2+o**2),t!==0&&!o||o!==0&&!t?e=o/Math.abs(o)*(Math.PI/
2):e=Math.atan(o/t)),[i,e]}r(zr,"calcPolarCoordinates");var vt=k(yt,gt,ft)({adapt:{value:te}});function te(t,o,i){return[...zr(t,o),i]}r(te,"calcCylindrica\
lCoordinates");var q=Float64Array.of(.9642956764295677,1,.8251046025104602);
Object.freeze(q.buffer);Object.defineProperty(q,"ident",{value:"\
d50"});var Ft=Object.freeze({CAM:k(ut,gr,Sr)(),CSYS:vt,ident:"lab",
whitepoint:q});var Gr=Object.freeze({$coord:ct,ident:"chroma",short:"C",domain:g(
0,150),input:r(t=>t/150,"input"),output:r(t=>I(t*150,1),"out\
put"),bytes:2,description:"Chroma: the quality of a color's \
purity, intensity or saturation."}),$r=Object.freeze({$coord:ct,
ident:"chroma",short:"c",domain:g(0,.4),output:r(t=>I(t,5),"\
output"),bytes:4,description:"Chroma: the quality of a color\
's purity, intensity or saturation."});var Fr={CAM:k(ut,Gr,xt)(),CSYS:zt,ident:"lch",whitepoint:q};var dt=Float64Array.of(.9504559270516716,1,1.0890577507598784);
Object.freeze(dt.buffer);Object.defineProperty(dt,"ident",{value:"\
d65"});var Ht=Object.freeze({CAM:k(ut,Hr,Vr)(),CSYS:vt,ident:"oklab",
whitepoint:dt});var Vt={CAM:k(ut,$r,xt)(),CSYS:zt,ident:"oklch",whitepoint:dt};var qr=Object.freeze({$coord:ft,bytes:4,domain:g(0,100),ident:"\
blue",input:r(t=>t/100,"input"),output:r(t=>I(t*100,2),"outp\
ut"),short:"b",description:"Blue Light Intensity"}),vr=Object.
freeze({$coord:ft,bytes:1,domain:g(0,255),ident:"blue",input:r(
t=>t/255,"input"),output:r(t=>vr.domain.clamp(Math.round(t*255)),
"output"),short:"B",description:"Blue Light Intensity"});var Ur=Object.freeze({$coord:gt,bytes:4,domain:g(0,100),ident:"\
green",input:r(t=>t/100,"input"),output:r(t=>I(t*100,2),"out\
put"),short:"g",description:"Green Light Intensity"}),Pr=Object.
freeze({$coord:gt,bytes:1,domain:g(0,255),ident:"green",input:r(
t=>t/255,"input"),output:r(t=>Pr.domain.clamp(Math.round(t*255)),
"output"),short:"G",description:"Green Light Intensity"});var Kr=Object.freeze({$coord:yt,bytes:4,domain:g(0,100),ident:"\
green",input:r(t=>t/100,"input"),output:r(t=>I(t*100,2),"out\
put"),short:"r",description:"Red Light Intensity"}),wr=Object.
freeze({$coord:yt,bytes:1,domain:g(0,255),ident:"red",input:r(
t=>t/255,"input"),output:r(t=>wr.domain.clamp(Math.round(t*255)),
"output"),short:"R",description:"Red Light Intensity"});var jt=k(Kr,Ur,qr)(),Mt=vt,Et=dt,J=Object.freeze({ident:"srg\
b",CAM:jt,CSYS:Mt,whitepoint:Et}),At=Object.freeze({ident:"s\
rgb-linear",CAM:jt,CSYS:Mt,whitepoint:Et}),Gt=Object.freeze(
{ident:"a98-rgb",CAM:jt,CSYS:Mt,whitepoint:Et}),Mr=Object.freeze(
{ident:"display-p3",CAM:jt,CSYS:Mt,whitepoint:Et}),Ar=Object.
freeze({ident:"prophoto-rgb",CAM:jt,CSYS:Mt,whitepoint:q}),Ir=Object.
freeze({ident:"rec2020",CAM:jt,CSYS:Mt,whitepoint:Et}),Jr=Object.
freeze({ident:"rgb",CAM:k(wr,Pr,vr)(),CSYS:Mt,whitepoint:Et});var Qr=vt,H=Object.freeze({ident:"xyz-d65",CSYS:Qr,whitepoint:dt}),
V=Object.freeze({ident:"xyz-d50",CSYS:Qr,whitepoint:q});var re=Object.defineProperty,W=r((t,o)=>re(t,"name",{value:o,
configurable:!0}),"r");function Tt(...t){let o=t.length===1?
Array.of(0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[i,
e]=o,p=e-i,n=i+p/2;return Object.create(null,{from:{value:i},
to:{value:e},minimum:{enumerable:!0,value:i},maximum:{enumerable:!0,
value:e},avg:{enumerable:!0,value:n},value:{enumerable:!0,value:p},
allot:{value:to},clamp:{value:ro},test:{value:W(a=>i<=a&&a<=
e,"value")},toString:{value:W(()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${e}}`,
"value")},[Symbol.iterator]:{value:W(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(Tt,"p");W(
Tt,"createRange");function to(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(to,"A");W(to,"allocateOuterValue");function ro(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(ro,"w");W(ro,"restrictOuterValue");var Va=P(1,0,0,0,1,0,0,
0,1),Ga=P(0,1,0,0,0,1,0,0,0),$a=P(0,0,0,1,0,0,0,1,0),Fa=P(0,
0,1,0,1,0,1,0,0),qa=Tt(0,360),Ua=Tt(0,2*Math.PI),Ka=Tt(0,100),
Ja=Tt(0,255),Qa=Tt(0,1),oe=W(t=>t!==null&&typeof t=="object"&&
Array.isArray(t)===!1,"isObject"),tp=W(t=>oe(t)&&Symbol.iterator in
t&&typeof t[Symbol.iterator]=="function"&&"length"in t&&typeof t.
length=="number"&&t.length>=9,"isMatrix");function P(...t){let o=Math.
max(t.length,9),i=new ArrayBuffer(o*8),e=new Float64Array(i,
0,o),p=Object.create(null,{[Symbol.iterator]:{value:W(function*(){
for(let n=0;n<e.length;n++)yield this[n]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:W(
()=>"Matrix"+e.toString(),"value")},length:{enumerable:!0,value:o},
toArray:{value:W(()=>Iterator.from(e).toArray(),"value")},toString:{
value:e.toString}});for(let n=0;n<o;n++)(function(a,l,m){Object.
defineProperty(a,l,{enumerable:!0,get:W(()=>m[l],"get"),set:W(
s=>{if(typeof s=="number")m[l]=s;else throw new TypeError("E\
xpected Number")},"set")})})(p,n,e);return Object.defineProperties(
p,{clone:{value:W(()=>P(...e),"value")},each:{value:W(function(n){
return e.forEach((a,l,m)=>n(a,l,this)),this},"value")},determinant:{
value:W(()=>{let[n,a,l,m,s,f,d,u,b]=e,y=b*s-f*u,w=-b*m+f*d,v=u*
m-s*d;return n*y+a*w+l*v},"value")},invert:{value:W(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[a,l,m,s,f,d,u,b,y]=e,w=y*f-d*b,v=-y*s+d*u,_t=b*
s-f*u;return this.update(w/n,(-y*l+m*b)/n,(d*l-m*f)/n,v/n,(y*
a-m*u)/n,(-d*a+m*s)/n,_t/n,(-b*a+l*u)/n,(f*a-l*s)/n)},"value")},
update:{value:W(function(){return e.set(Iterator.from(arguments).
map(n=>typeof n=="number"?n:0).toArray()),this},"value")}}),
p.update(...t)}r(P,"g");W(P,"createMatrix");var ee=Object.defineProperty,h=r((t,o)=>ee(t,"name",{value:o,
configurable:!0}),"t"),ie=h(t=>Ut(t)&&Symbol.iterator in t&&
typeof t[Symbol.iterator]=="function"&&"length"in t&&typeof t.
length=="number"&&t.length>=9,"isMatrix");function Rt(...t){
let o=Math.max(t.length,9),i=new ArrayBuffer(o*8),e=new Float64Array(
i,0,o),p=Object.create(null,{[Symbol.iterator]:{value:h(function*(){
for(let n=0;n<e.length;n++)yield this[n]},"value")},[Symbol.
isConcatSpreadable]:{value:!0},[Symbol.toStringTag]:{value:h(
()=>"Matrix"+e.toString(),"value")},length:{enumerable:!0,value:o},
toArray:{value:h(()=>Iterator.from(e).toArray(),"value")},toString:{
value:e.toString}});for(let n=0;n<o;n++)(function(a,l,m){Object.
defineProperty(a,l,{enumerable:!0,get:h(()=>m[l],"get"),set:h(
s=>{if(typeof s=="number")m[l]=s;else throw new TypeError("E\
xpected Number")},"set")})})(p,n,e);return Object.defineProperties(
p,{clone:{value:h(()=>Rt(...e),"value")},each:{value:h(function(n){
return e.forEach((a,l,m)=>n(a,l,this)),this},"value")},determinant:{
value:h(()=>{let[n,a,l,m,s,f,d,u,b]=e,y=b*s-f*u,w=-b*m+f*d,v=u*
m-s*d;return n*y+a*w+l*v},"value")},invert:{value:h(function(){
let n=this.determinant();if(n===0)throw console.table(this),
new Error("A singular or non-square matrix matrix cannot be \
inverted.");let[a,l,m,s,f,d,u,b,y]=e,w=y*f-d*b,v=-y*s+d*u,_t=b*
s-f*u;return this.update(w/n,(-y*l+m*b)/n,(d*l-m*f)/n,v/n,(y*
a-m*u)/n,(-d*a+m*s)/n,_t/n,(-b*a+l*u)/n,(f*a-l*s)/n)},"value")},
update:{value:h(function(){return e.set(Iterator.from(arguments).
map(n=>typeof n=="number"?n:0).toArray()),this},"value")}}),
p.update(...t)}r(Rt,"g");h(Rt,"createMatrix");function Bt(...t){
let o=t.length===1?Array.of(0,t[0]):Array.of(Math.min(...t),
Math.max(...t)),[i,e]=o,p=e-i,n=i+p/2;return Object.create(null,
{from:{value:i},to:{value:e},minimum:{enumerable:!0,value:i},
maximum:{enumerable:!0,value:e},avg:{enumerable:!0,value:n},
value:{enumerable:!0,value:p},allot:{value:oo},clamp:{value:eo},
test:{value:h(a=>i<=a&&a<=e,"value")},toString:{value:h(()=>String.
raw`{x ∈ R; ${i} ⋜ x ⋜ ${e}}`,"value")},[Symbol.iterator]:{
value:h(function*(){yield this.from,yield this.to},"value")},
length:{value:2}})}r(Bt,"f");h(Bt,"createRange");function oo(t){
return this.test(t)?t:t>this.from?(t-this.to)%this.value+this.
from:this.to-(this.from-t)%this.value}r(oo,"C");h(oo,"alloca\
teOuterValue");function eo(t){return this.test(t)?t:Math.max(
Math.min(t,this.to),this.from)}r(eo,"D");h(eo,"restrictOuter\
Value");var ne=h((t,o=6)=>{let i=10**o;return Math.sign(t)*Math.
round((Math.abs(t)+Number.EPSILON)*i)/i},"round"),ep=Rt(1,0,
0,0,1,0,0,0,1),ip=Rt(0,1,0,0,0,1,0,0,0),np=Rt(0,0,0,1,0,0,0,
1,0),ap=Rt(0,0,1,0,1,0,1,0,0),pp=Bt(0,360),lp=Bt(0,2*Math.PI),
mp=Bt(0,100),sp=Bt(0,255),_p=Bt(0,1),ae=h(t=>typeof t=="numb\
er","isNumber"),pe=h(t=>typeof t=="string","isString"),qt=h(
t=>Ut(t)&&Symbol.iterator in t&&typeof t[Symbol.iterator]=="\
function","isIterableObject"),Ut=h(t=>t!==null&&typeof t=="o\
bject"&&Array.isArray(t)===!1,"isObject"),le=h(t=>pe(t)&&se.
has(t),"isSpaceID"),me=h(t=>Ut(t)&&"ident"in t&&le(t.ident)&&
"CSYS"in t&&Ut(t.CSYS)&&"length"in t.CSYS&&t.CSYS.length===3,
"isColorSpace"),se=new Set(["a98-rgb","display-p3","hsl","hw\
b","lab","lch","oklab","oklch","prophoto-rgb","rec2020","rec\
2100-pq","rec2100-hlg","rec2100-linear","srgb-linear","srgb",
"rgb","xyz","xyz-d50","xyz-d65"]),_e=h(t=>qt(t)&&"space"in t&&
me(t.space)&&"length"in t&&t.length===3&&Iterator.from(t).every(
o=>typeof o=="number"),"isPointInSpace"),fe=h(t=>qt(t)&&"len\
gth"in t&&t.length===3&&Iterator.from(t).every(o=>typeof o==
"number")&&"magnitude"in t&&ae(t.magnitude)&&"base"in t&&qt(
t.base)&&"head"in t&&qt(t.head),"isVector");function x(t,o=0,i=0){
let e=_e(t)?new Float64Array(t.buffer):Float64Array.of(t,o,i),
p=Object.create(null,{base:{get:h(()=>Iterator.from([0,0,0]),
"get")},head:{enumerable:!0,get:h(()=>Iterator.from(e),"get")},
magnitude:{enumerable:!0,get:h(()=>ne(Math.hypot(...e),9),"g\
et")},sqrMagnitude:{get:h(()=>e.reduce((n,a)=>n+a**2,0),"get")}});
return Object.defineProperties(p,{clone:{value:h(()=>x(e[0],
e[1],e[2]),"value")},angle:{value:io},cross:{value:no},distance:{
value:ao},dot:{value:po},each:{value:lo},equals:{value:mo},multiply:{
value:_o},normalize:{value:fo},randomly:{value:co},strictEquals:{
value:so},update:{value:h(function(n,a,l){let m=Array.isArray(
n)?n.slice(3):Array.of(n,a,l);return e.set(this.head.map((s,f)=>m[f]??
s).toArray()),this},"value")},zeroize:{value:uo}}),Object.defineProperties(
p,{[Symbol.toStringTag]:{get(){return`Vector[${this.toString()}\
]`}},entries:{value:h(function(){return this.values().map((n,a)=>Object.
seal(Array.of(a,n)))},"value")},toArray:{value:h(function(){
return Object.seal(Array.of(this[0],this[1],this[2]))},"valu\
e")},toString:{value:h(()=>e.toString(),"value")},values:{value:h(
function(){return Iterator.from(this.toArray())},"value")}}),
Object.defineProperties(p,{[Symbol.isConcatSpreadable]:{value:!0},
[Symbol.iterator]:{value:h(function*(){yield this[0],yield this[1],
yield this[2]},"value")},0:{enumerable:!0,get:h(()=>e[0],"ge\
t"),set:h(n=>{if(typeof n=="number")e[0]=n;else throw new TypeError(
"Expected Number")},"set")},1:{enumerable:!0,get:h(()=>e[1],
"get"),set:h(n=>{if(typeof n=="number")e[1]=n;else throw new TypeError(
"Expected Number")},"set")},2:{enumerable:!0,get:h(()=>e[2],
"get"),set:h(n=>{if(typeof n=="number")e[2]=n;else throw new TypeError(
"Expected Number")},"set")},length:{enumerable:!0,value:3}}),
p}r(x,"k");h(x,"createVector");function io(t,o=!1){let i=Math.
sqrt(this.sqrMagnitude*t.sqrMagnitude),e=i&&this.dot(t)/i,p=Math.
acos(Math.min(Math.max(e,-1),1));return o?p*180/Math.PI:p}r(
io,"N");h(io,"angle");function no(t){let[o,i,e]=this.head,[p,
n,a]=t,l=i*a-e*n,m=e*p-o*a,s=o*n-i*p;return this.update(l,m,
s)}r(no,"z");h(no,"cross");function ao(t){return Math.sqrt(this.
head.reduce((o,i,e)=>o+Math.pow(t[e]-i,2),0))}r(ao,"F");h(ao,
"distance");function po(t){let[o,i,e]=this.head,[p,n,a]=t;return o*
p+i*n+e*a}r(po,"X");h(po,"dot");function lo(t){for(let o=0;o<
3;o++)t(this[o],o,this);return this}r(lo,"Y");h(lo,"each");function mo(t,o=1e-5){
let[i,e,p]=this.head,[n,a,l]=t;return Math.abs(i-n)<=o*Math.
max(1,Math.abs(i),Math.abs(n))&&Math.abs(e-a)<=o*Math.max(1,
Math.abs(e),Math.abs(a))&&Math.abs(p-l)<=o*Math.max(1,Math.abs(
p),Math.abs(l))}r(mo,"q");h(mo,"equals");function so(t){let[
o,i,e]=this.head,[p,n,a]=t;return o===p&&i===n&&e===a}r(so,"\
_");h(so,"strictEquals");function _o(t){let[o,i,e]=this.head;
if(ie(t)||fe(t)){let[p,n,a,l=0,m=0,s=0,f=0,d=0,u=0]=t;return this.
update(o*p+i*l+e*f,o*n+i*m+e*d,o*a+i*s+e*u)}else throw new TypeError(
"Unsupported Multiplicator: "+t)}r(_o,"G");h(_o,"multiply");
function fo(){let t=1/this.magnitude;return this.each((o,i,e)=>e[i]=
o*t)}r(fo,"$");h(fo,"normalize");function co(t=1){let o=Math.
random()*2*Math.PI,i=Math.random()*2-1,e=Math.sqrt(1-Math.pow(
i,2))*t;return this.update(Math.cos(o)*e,Math.sin(o)*e,i*t)}
r(co,"L");h(co,"randomly");function uo(){return this.update(
0,0,0)}r(uo,"B");h(uo,"zeroize");var ce=Object.defineProperty,M=r((t,o)=>ce(t,"name",{value:o,
configurable:!0}),"t");function Xt(...t){let o=Math.max(t.length,
9),i=new ArrayBuffer(o*8),e=new Float64Array(i,0,o),p=Object.
create(null,{[Symbol.iterator]:{value:M(function*(){for(let n=0;n<
e.length;n++)yield this[n]},"value")},[Symbol.isConcatSpreadable]:{
value:!0},[Symbol.toStringTag]:{value:M(()=>"Matrix"+e.toString(),
"value")},length:{enumerable:!0,value:o},toArray:{value:M(()=>Iterator.
from(e).toArray(),"value")},toString:{value:e.toString}});for(let n=0;n<
o;n++)(function(a,l,m){Object.defineProperty(a,l,{enumerable:!0,
get:M(()=>m[l],"get"),set:M(s=>{if(typeof s=="number")m[l]=s;else
throw new TypeError("Expected Number")},"set")})})(p,n,e);return Object.
defineProperties(p,{clone:{value:M(()=>Xt(...e),"value")},each:{
value:M(function(n){return e.forEach((a,l,m)=>n(a,l,this)),this},
"value")},determinant:{value:M(()=>{let[n,a,l,m,s,f,d,u,b]=e,
y=b*s-f*u,w=-b*m+f*d,v=u*m-s*d;return n*y+a*w+l*v},"value")},
invert:{value:M(function(){let n=this.determinant();if(n===0)
throw console.table(this),new Error("A singular or non-squar\
e matrix matrix cannot be inverted.");let[a,l,m,s,f,d,u,b,y]=e,
w=y*f-d*b,v=-y*s+d*u,_t=b*s-f*u;return this.update(w/n,(-y*l+
m*b)/n,(d*l-m*f)/n,v/n,(y*a-m*u)/n,(-d*a+m*s)/n,_t/n,(-b*a+l*
u)/n,(f*a-l*s)/n)},"value")},update:{value:M(function(){return e.
set(Iterator.from(arguments).map(n=>typeof n=="number"?n:0).
toArray()),this},"value")}}),p.update(...t)}r(Xt,"S");M(Xt,"\
createMatrix");function Zt(...t){let o=t.length===1?Array.of(
0,t[0]):Array.of(Math.min(...t),Math.max(...t)),[i,e]=o,p=e-
i,n=i+p/2;return Object.create(null,{from:{value:i},to:{value:e},
minimum:{enumerable:!0,value:i},maximum:{enumerable:!0,value:e},
avg:{enumerable:!0,value:n},value:{enumerable:!0,value:p},allot:{
value:bo},clamp:{value:ho},test:{value:M(a=>i<=a&&a<=e,"valu\
e")},toString:{value:M(()=>String.raw`{x ∈ R; ${i} ⋜ x ⋜ ${e}}`,
"value")},[Symbol.iterator]:{value:M(function*(){yield this.
from,yield this.to},"value")},length:{value:2}})}r(Zt,"y");M(
Zt,"createRange");function bo(t){return this.test(t)?t:t>this.
from?(t-this.to)%this.value+this.from:this.to-(this.from-t)%
this.value}r(bo,"R");M(bo,"allocateOuterValue");function ho(t){
return this.test(t)?t:Math.max(Math.min(t,this.to),this.from)}
r(ho,"V");M(ho,"restrictOuterValue");var up=Xt(1,0,0,0,1,0,0,
0,1),dp=Xt(0,1,0,0,0,1,0,0,0),bp=Xt(0,0,0,1,0,0,0,1,0),hp=Xt(
0,0,1,0,1,0,1,0,0),xp=Zt(0,360),yp=Zt(0,2*Math.PI),gp=Zt(0,100),
Sp=Zt(0,255),zp=Zt(0,1),ue=M(t=>typeof t=="number","isNumber"),
de=M(t=>typeof t=="string","isString"),be=M(t=>kr(t)&&Symbol.
iterator in t&&typeof t[Symbol.iterator]=="function","isIter\
ableObject"),kr=M(t=>t!==null&&typeof t=="object"&&Array.isArray(
t)===!1,"isObject"),he=M(t=>de(t)&&xe.has(t),"isSpaceID"),xo=M(
t=>kr(t)&&"ident"in t&&he(t.ident)&&"CSYS"in t&&kr(t.CSYS)&&
"length"in t.CSYS&&t.CSYS.length===3,"isColorSpace"),xe=new Set(
["a98-rgb","display-p3","hsl","hwb","lab","lch","oklab","okl\
ch","prophoto-rgb","rec2020","rec2100-pq","rec2100-hlg","rec\
2100-linear","srgb-linear","srgb","rgb","xyz","xyz-d50","xyz\
-d65"]),c=M(t=>be(t)&&"space"in t&&xo(t.space)&&"length"in t&&
t.length===3&&Iterator.from(t).every(o=>typeof o=="number"),
"isPointInSpace");function _(t,o){if(xo(t)===!1)throw new TypeError(
"Point must be declared in a valid color space instead of "+
JSON.stringify(t,void 0,2));if((o instanceof ArrayBuffer||Array.
isArray(o)&&o.length===3&&o.every(a=>ue(a)))===!1)throw new TypeError(
"Point in space has valid coordinates. Wrong parameters: "+JSON.
stringify(o,void 0,2));let i=t.CSYS.length,e=o instanceof ArrayBuffer?
new Float64Array(o):new Float64Array(i),p=t.CAM===void 0?Array.
of(0,1,2):t.CAM.toArray().map(a=>t.CSYS.toArray().findIndex(
l=>a.$coord===l)),n=Object.create(null,{buffer:{value:e.buffer},
colorspace:{enumerable:!0,value:t.ident},length:{value:i},space:{
value:t}});return Object.defineProperties(n,{equals:{value:M(
function(a,l=1e-5){let[m,s,f]=this.position,[d,u,b]=a.position;
return this.colorspace===a.colorspace&&Math.abs(m-d)<=l*Math.
max(1,Math.abs(m),Math.abs(d))&&Math.abs(s-u)<=l*Math.max(1,
Math.abs(s),Math.abs(u))&&Math.abs(f-b)<=l*Math.max(1,Math.abs(
f),Math.abs(b))},"value")},set:{value:M(function(a){for(let l=0;l<
this.length;l++)a[l]!==void 0&&(this[l]=a[l]);return this},"\
value")}}),(function(a,l){Object.defineProperties(a,{[Symbol.
iterator]:{value:M(function*(){yield this[0],yield this[1],yield this[2]},
"value")},adapted:{get(){if(typeof this.space.CSYS.adapt=="f\
unction"){let[m,s,f]=this.position;return Iterator.from(this.
space.CSYS.adapt(m,s,f))}else return this.position}},position:{
get:M(()=>Iterator.from(l),"get")}});for(let m=0;m<a.length;m++)
(function(s,f,d){Object.defineProperty(a,m,{enumerable:!0,get(){
let{CAM:u,CSYS:b}=this.space,y=b[f],w=u!==void 0?u[s]:null,v=d[f];
return"output"in y&&typeof y.output=="function"&&(v=y.output(
v)),w!==null&&"output"in w&&typeof w.output=="function"&&(v=
w.output(v)),v},set(u){let{CAM:b,CSYS:y}=this.space,w=y[f],v=b!==
void 0?b[s]:null;v!==null&&"input"in v&&typeof v.input=="fun\
ction"&&(u=v.input(u)),"input"in w&&typeof w.input=="functio\
n"&&(u=w.input(u)),typeof u=="string"&&(u=parseFloat(u)),d[f]=
u}})})(m,p[m],l)})(n,e),Object.defineProperties(n,{[Symbol.toStringTag]:{
get(){return`PointInSpace(${this.toString()})`}},entries:{value:M(
function(){let a=this.space.CAM??this.space.CSYS;return Iterator.
from([[a[0],this[0]],[a[1],this[1]],[a[2],this[2]]])},"value")},
toString:{value:M(function(){return`${this.colorspace};[${this.
values().join()}]`},"value")},values:{value:M(function(){return Object.
freeze([this[0],this[1],this[2]])},"value")}}),Array.isArray(
o)?n.set(o):n}r(_,"Ve");M(_,"initPointInSpace");var bt=r(t=>{let o=Math.abs(t);return o<=.04045?t/12.92:Math.
sign(t)*Math.pow((o+.055)/1.055,2.4)},"to_linear"),ht=r(t=>{
let o=Math.abs(t);return o>.0031308?Math.sign(t)*(1.055*Math.
pow(o,1/2.4)-.055):12.92*t},"to_gamut");var ye=Float64Array.of(.3457/.3585,1,(1-.3457-.3585)/.3585),
ge=Float64Array.of(.3127/.329,1,(1-.3127-.329)/.329),Q=P(1.0479297925449969,
.02962780877005599,-.009243040646204504,.022946870601609652,
.9904344267538799,.015055191490298152,-.05019226628920524,-.017073799063418826,
.7518742814281371),L=P(.955473421488075,-.0283697093338637,.012314014864481998,
-.02309845494876471,1.0099953980813041,-.020507649298898964,
.06325924320057072,.021041441191917323,1.330365926242124);Object.
freeze(ge.buffer);Object.freeze(ye.buffer);var yo=P(608311/1250200,35783/156275,0,189793/714400,247089/
357200,32229/714400,198249/1000160,198249/2500400,5220557/5000800),
tt=r(t=>{if(c(t)&&t.colorspace==="display-p3"){let[o,i,e]=t.
position,[p,n,a]=x(o,i,e).each((l,m,s)=>s[m]=bt(l)).multiply(
yo);return _(H,[p,n,a])}else throw new Error("Wrong paramete\
r passed: "+t)},"display_p3_into_xyz_d65"),go=r(t=>{if(c(t)&&
t.colorspace==="display-p3"){let[o,i,e]=t.position,[p,n,a]=x(
o,i,e).each((l,m,s)=>s[m]=bt(l)).multiply(yo).multiply(Q);return _(
V,[p,n,a])}else throw new Error("Wrong parameter passed: "+t)},
"display_p3_into_xyz_d50");var Or=r(t=>Math.sign(t)*Math.pow(Math.abs(t),2.19921875),"t\
o_linear"),Cr=r(t=>Math.sign(t)*Math.pow(Math.abs(t),256/563),
"to_gamut");var So=P(1829569/896150,-851781/878810,16779/1248040,-506331/
896150,1648619/878810,-147721/1248040,-308931/896150,36519/878810,
1266979/1248040),G=r(t=>{if(c(t)&&t.colorspace==="xyz-d65"){
let[o,i,e]=t.position,[p,n,a]=x(o,i,e).multiply(So).each((l,m,s)=>s[m]=
Cr(l)*100);return _(Gt,[p,n,a])}else throw new Error("Wrong \
parameter passed: "+t)},"xyz_d65_into_a98_rgb"),Vp=r(t=>{if(c(
t)&&t.colorspace==="xyz-d50"){let[o,i,e]=t.position,[p,n,a]=x(
o,i,e).multiply(L).multiply(So).each((l,m,s)=>s[m]=Cr(l)*100);
return _(Gt,[p,n,a])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_a98_rgb");var Up=r(t=>G(tt(t)),"display_p3_into_a98_rgb");var zo=P(573536/994567,591459/1989134,53769/1989134,263643/1420810,
6239551/9945670,351524/4972835,187206/994567,374412/4972835,
4929758/4972835),rt=r(t=>{if(c(t)&&t.colorspace==="a98-rgb"){
let[o,i,e]=t.position,[p,n,a]=x(o,i,e).each((l,m,s)=>s[m]=Or(
l)).multiply(zo);return _(H,[p,n,a])}else throw new Error("W\
rong parameter passed: "+t)},"a98_rgb_into_xyz_d65"),vo=r(t=>{
if(c(t)&&t.colorspace==="a98-rgb"){let[o,i,e]=t.position,[p,
n,a]=x(o,i,e).each((l,m,s)=>s[m]=Or(l)).multiply(zo).multiply(
Q);return _(V,[p,n,a])}else throw new Error("Wrong parameter\
 passed: "+t)},"a98_rgb_into_xyz_d50");var Kt=P(12831/3959,-851781/878810,705/12673,-329/214,1648619/
878810,-2585/12673,-1974/3959,36519/878810,705/667),U=r(t=>{
if(c(t)&&t.colorspace==="xyz-d65"){let[o,i,e]=t.position,[p,
n,a]=x(o,i,e).multiply(Kt).each((l,m,s)=>s[m]=ht(l)*100);return _(
J,[p,n,a])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d65_into_srgb"),lt=r(t=>{if(c(t)&&t.colorspace==="xyz-d\
65"){let[o,i,e]=t.position,[p,n,a]=x(o,i,e).multiply(Kt).each(
(l,m,s)=>s[m]*=100);return _(At,[p,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_srgb_linear"),Pt=r(
t=>{if(c(t)&&t.colorspace==="xyz-d50"){let[o,i,e]=t.position,
[p,n,a]=x(o,i,e).multiply(L).multiply(Kt).each((l,m,s)=>s[m]=
ht(l)*100);return _(J,[p,n,a])}else throw new Error("Wrong p\
arameter passed: "+t)},"xyz_d50_into_srgb"),Jt=r(t=>{if(c(t)&&
t.colorspace==="xyz-d50"){let[o,i,e]=t.position,[p,n,a]=x(o,
i,e).multiply(L).multiply(Kt).each((l,m,s)=>s[m]*=100);return _(
At,[p,n,a])}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d50_into_srgb_linear");var Qt=r(t=>U(rt(t)),"a98_rgb_into_srgb"),hl=r(t=>lt(rt(t)),
"a98_rgb_into_srgb_linear");var tr=r(t=>U(tt(t)),"display_p3_into_srgb"),zl=r(t=>lt(tt(t)),
"display_p3_into_srgb_linear");var at=r((t,o,i)=>{let e=2*Math.PI,p=Math.PI/6;t<0&&(t+=e),t=
t%e;let n=r(a=>{let l=(a+t/p)%12,m=o*Math.min(i,1-i);return i-
m*Math.max(-1,Math.min(l-3,9-l,1))},"f");return[n(0),n(8),n(
4)]},"hsl_to_rgb");var Cl=r(t=>{if(c(t)&&t.colorspace==="hsl"){let[o,i,e]=t.position,
p=at(i,o,e).map(n=>Math.min(Math.max(Math.round(n*255),0),255));
return _(Jr,p)}else throw new Error("Wrong parameter passed:\
 "+t)},"hsl_into_rgb"),Po=r(t=>{if(c(t)&&t.colorspace==="hsl"){
let[o,i,e]=t.position,p=at(i,o,e).map(n=>n*100);return _(J,p)}else
throw new Error("Wrong parameter passed: "+t)},"hsl_into_srg\
b"),Yl=r(t=>{if(c(t)&&t.colorspace==="hsl"){let[o,i,e]=t.position,
p=at(i,o,e).map(n=>bt(n)*100);return _(At,p)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_srgb_linear");var wt=r((t,o,i)=>{if(o+i>=1){let e=o/(o+i);return[e,e,e]}else{
let[e,p,n]=at(t,1,.5).map(a=>a*(1-o-i)+o);return[e,p,n]}},"h\
wb_to_rgb");var Nl=r(t=>{if(c(t)&&t.colorspace==="hwb"){let[o,i,e]=t.position,
p=wt(i,o,e).map(n=>n*100);return _(J,p)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_srgb"),Dl=r(t=>{if(c(
t)&&t.colorspace==="hwb"){let[o,i,e]=t.position,p=wt(i,o,e).
map(n=>bt(n)*100);return _(At,p)}else throw new Error("Wrong\
 parameter passed: "+t)},"hwb_into_srgb_linear");var T=r(t=>{if(c(t)&&t.colorspace==="lab"){let o=903.2962962962963,
i=216/24389,[e,p,n]=t,a=(e+16)/116,l=p/500+a,m=Math.pow(l,3),
s=a-n/200,f=Math.pow(s,3),d=(m>i?m:(116*l-16)/o)*q[0],u=(e>o*
i?Math.pow((e+16)/116,3):e/o)*q[1],b=(f>i?f:(116*s-16)/o)*q[2];
return _(V,[d,u,b])}else throw new Error("Wrong parameter pa\
ssed: "+t)},"lab_into_xyz_d50"),Wt=r(t=>{let o=T(t),[i,e,p]=x(
o).multiply(L);return _(H,[i,e,p])},"lab_into_xyz_d65");var rr=r(t=>Pt(T(t)),"lab_into_srgb"),rm=r(t=>Jt(T(t)),"lab_\
into_srgb_linear");var K=r(t=>{if(c(t)&&t.colorspace==="lch"){let[o,i]=t,e=t.position.
drop(1).next().value??NaN,p=i*Math.cos(e),n=i*Math.sin(e);return _(
Ft,[o,p,n])}else throw new Error("Wrong parameter passed: "+
t)},"lch_into_lab");var or=r(t=>Pt(T(K(t))),"lch_into_srgb"),_m=r(t=>Jt(T(K(t))),
"lch_into_srgb_linear");var wo=P(1,1,1,.3963377773761749,-.1055613458156586,-.0894841775298119,
.2158037573099136,-.0638541728258133,-1.2914855480194092),Lt=P(
.819022437996703,.0329836539323885,.0481771893596242,.3619062600528904,
.9292868615863434,.2642395317527308,-.1288737815209879,.0361446663506424,
.6335478284694309),Nt=P(.210454268309314,1.9779985324311684,
.0259040424655478,.7936177747023054,-2.42859224204858,.7827717124575296,
-.0040720430116193,.450593709617411,-.8086757549230774),Mo=P(
1.2268798758459243,-.0405757452148008,-.0763729366746601,-.5578149944602171,
1.112286803280317,-.4214933324022432,.2813910456659647,-.0717110580655164,
1.5869240198367816);var A=r(t=>{if(c(t)&&t.colorspace==="oklab"){let[o,i,e]=t.position,
[p,n,a]=x(e,o,i).multiply(wo).each((l,m,s)=>s[m]=l**3).multiply(
Mo);return _(H,[p,n,a])}else throw new Error("Wrong paramete\
r passed: "+t)},"oklab_into_xyz_d65"),er=r(t=>{let[o,i,e]=x(
A(t)).multiply(Q);return _(V,[o,i,e])},"oklab_into_xyz_d50");var ir=r(t=>U(A(t)),"oklab_into_srgb"),wm=r(t=>lt(A(t)),"okl\
ab_into_srgb_linear");var it=r(t=>{if(c(t)&&t.colorspace==="oklch"){let[o,i]=t,e=t.
position.drop(1).next().value??NaN,p=isNaN(e)?0:i*Math.cos(e),
n=isNaN(e)?0:i*Math.sin(e);return _(Ht,[o,p,n])}else throw new Error(
"Wrong parameter passed: "+t)},"oklch_into_oklab");var nr=r(t=>U(A(it(t))),"oklch_into_srgb"),Tm=r(t=>lt(A(it(t))),
"oklch_into_srgb_linear");var Ao=r(t=>{let o=Math.abs(t);return o<=.03125?t/16:Math.sign(
t)*Math.pow(o,1.8)},"to_linear"),Yr=r(t=>{let o=Math.abs(t);
return o>=1/512?Math.sign(t)*Math.pow(o,1/1.8):16*t},"to_gam\
ut");var Se=P(.7977666449006423,.2880748288194013,0,.13518129740053308,
.711835234241873,0,.0313477341283922,8993693872564e-17,.8251046025104602),
$t=r(t=>{if(c(t)&&t.colorspace==="prophoto-rgb"){let o=_(V,t.
position.toArray());return x(o).each((i,e,p)=>p[e]=Ao(i)).multiply(
Se),o}else throw new Error("Wrong parameter passed: "+t)},"p\
rophoto_rgb_into_xyz_d50"),pt=r(t=>{let o=$t(t),i=_(H,o.position.
toArray());return x(i).multiply(L),i},"prophoto_rgb_into_xyz\
_d65");var ar=r(t=>U(pt(t)),"prophoto_rgb_into_srgb"),Um=r(t=>lt(pt(
t)),"prophoto_rgb_into_srgb_linear");var pr=1.09929682680944,Io=.018053968510807,jr=r(t=>{let o=Math.
abs(t);return o<Io*4.5?t/4.5:Math.sign(t)*Math.pow((o+pr-1)/
pr,1/.45)},"to_linear"),Er=r(t=>{let o=Math.abs(t);return o>
Io?Math.sign(t)*(pr*Math.pow(o,.45)-(pr-1)):4.5*t},"to_gamut");var ko=P(63426534/99577255,26158966/99577255,4994106574466076e-32,
20160776/139408157,472592308/697040785,19567812/697040785,47086771/
278816314,8267143/139408157,295819943/278816314),ot=r(t=>{if(c(
t)&&t.colorspace==="rec2020"){let[o,i,e]=t.position,[p,n,a]=x(
o,i,e).each((l,m,s)=>s[m]=jr(l)).multiply(ko);return _(H,[p,
n,a])}else throw new Error("Wrong parameter passed: "+t)},"r\
ec2020_into_xyz_d65"),Oo=r(t=>{if(c(t)&&t.colorspace==="rec2\
020"){let[o,i,e]=t.position,[p,n,a]=x(o,i,e).each((l,m,s)=>s[m]=
jr(l)).multiply(ko).multiply(Q);return _(V,[p,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"rec2020_into_xyz_d50");var lr=r(t=>U(ot(t)),"rec2020_into_srgb"),_s=r(t=>lt(ot(t)),
"rec2020_into_srgb_linear");var mr=P(506752/1228815,87098/409605,7918/409605,87881/245763,
175762/245763,87881/737289,12673/70218,12673/175545,1001167/
1053270),D=r(t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){
let[o,i,e]=t.position,[p,n,a]=x(o,i,e).each((l,m,s)=>s[m]=bt(
l)).multiply(mr);return _(H,[p,n,a])}else throw new Error("W\
rong parameter passed: "+t)},"srgb_into_xyz_d65"),nt=r(t=>{if(c(
t)&&t.colorspace==="srgb-linear"){let[o,i,e]=t.position,[p,n,
a]=x(o,i,e).multiply(mr);return _(H,[p,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_linear_into_xyz_d65"),Dt=r(
t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){let[o,i,
e]=t.position,[p,n,a]=x(o,i,e).each((l,m,s)=>s[m]=bt(l)).multiply(
mr).multiply(Q);return _(V,[p,n,a])}else throw new Error("Wr\
ong parameter passed: "+t)},"srgb_into_xyz_d50"),Co=r(t=>{if(c(
t)&&t.colorspace==="srgb-linear"){let[o,i,e]=t.position,[p,n,
a]=x(o,i,e).multiply(mr).multiply(Q);return _(V,[p,n,a])}else
throw new Error("Wrong parameter passed: "+t)},"srgb_linear_\
into_xyz_d50");var sr=r(t=>G(D(t)),"srgb_into_a98_rgb"),Rs=r(t=>G(nt(t)),"s\
rgb_linear_into_a98_rgb");var Ls=r(t=>sr(Po(t)),"hsl_into_a98_rgb");var Fs=r(t=>{if(c(t)&&t.colorspace==="hwb"){let[o,i,e]=t.position;
if(o+e>=1){let p=o/(o+e);return _(Gt,[p,p,p])}else{let p=at(
i,1,.5).map(n=>(n*(1-o-e)+o)*100);return sr(_(J,p))}}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_a98_rgb");var Qs=r(t=>G(Wt(t)),"lab_into_a98_rgb");var n_=r(t=>G(Wt(K(t))),"lch_into_a98_rgb");var s_=r(t=>G(A(t)),"oklab_into_a98_rgb");var Yo=r(t=>er(it(t)),"oklch_into_xyz_d50"),jo=r(t=>A(it(t)),
"oklch_into_xyz_d65");var y_=r(t=>G(jo(t)),"oklch_into_a98_rgb");var P_=r(t=>G(pt(t)),"prophoto_rgb_into_a98_rgb");var k_=r(t=>G(ot(t)),"rec2020_into_a98_rgb");var Eo=P(446124/178915,-14852/17905,11844/330415,-333277/357830,
63121/35810,-50337/660830,-72051/178915,423/17905,316169/330415),
$=r(t=>{if(c(t)&&t.colorspace==="xyz-d65"){let[o,i,e]=t.position,
[p,n,a]=x(o,i,e).multiply(Eo).each((l,m,s)=>s[m]=ht(l)*100);
return _(Mr,[p,n,a])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d65_into_display_p3"),_r=r(t=>{if(c(t)&&t.
colorspace==="xyz-d50"){let[o,i,e]=t.position,[p,n,a]=x(o,i,
e).multiply(L).multiply(Eo).each((l,m,s)=>s[m]=ht(l)*100);return _(
Mr,[p,n,a])}else throw new Error("Wrong parameter passed: "+
t)},"xyz_d50_into_display_p3");var tf=r(t=>$(rt(t)),"a98_rgb_into_display_p3");var To=r(t=>{if(c(t)&&t.colorspace==="hsl"){let[o,i,e]=t.position,
p=at(i,o,e).map(a=>a*100),n=_(J,p);return Dt(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d50"),mt=r(t=>{
if(c(t)&&t.colorspace==="hsl"){let[o,i,e]=t.position,p=at(i,
o,e).map(a=>a*100),n=_(J,p);return D(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_xyz_d65");var ff=r(t=>$(mt(t)),"hsl_into_display_p3");var Ro=r(t=>{if(c(t)&&t.colorspace==="hwb"){let[o,i,e]=t.position,
p=wt(i,o,e).map(a=>a*100),n=_(J,p);return Dt(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d50"),st=r(t=>{
if(c(t)&&t.colorspace==="hwb"){let[o,i,e]=t.position,p=wt(i,
o,e).map(a=>a*100),n=_(J,p);return D(n)}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_xyz_d65");var vf=r(t=>$(st(t)),"hwb_into_display_p3");var If=r(t=>_r(T(t)),"lab_into_display_p3");var Ef=r(t=>_r(T(K(t))),"lch_into_display_p3");var Zf=r(t=>$(A(t)),"oklab_into_display_p3");var Vf=r(t=>$(A(it(t))),"oklch_into_display_p3");var Uf=r(t=>$(pt(t)),"prophoto_rgb_into_display_p3");var r0=r(t=>$(ot(t)),"rec2020_into_display_p3");var a0=r(t=>$(D(t)),"srgb_into_display_p3"),p0=r(t=>$(nt(t)),
"srgb_linear_into_display_p3");var Y=r((t,o,i)=>{let e=Math.max(t,o,i),p=Math.min(t,o,i),n=e-
p,a=Bo(t,o,i),l=0,m=(p+e)/2;return n!==0&&(l=m===0||m===1?0:
(e-m)/Math.min(m,1-m)),l<0&&(a+=Math.PI,l=Math.abs(l)),l<=1e-5&&
(a=NaN),[a*180/Math.PI,l*100,m*100]},"rgb_to_hsl"),Bo=r((t,o,i)=>{
let e=Math.max(t,o,i),p=Math.min(t,o,i),n=NaN,a=e-p;if(a!==0){
switch(e){case t:n=(o-i)/a+(o<i?6:0);break;case o:n=(i-t)/a+
2;break;case i:n=(t-o)/a+4}n*=Math.PI/3}return n},"rgb_to_hu\
e"),j=r((t,o,i)=>{let e=Bo(t,o,i),p=Math.min(t,Math.min(o,i)),
n=1-Math.max(t,Math.max(o,i));return[e*180/Math.PI,p*100,n*100]},
"rgb_to_hwb");var I0=r(t=>{let[o,i,e]=Qt(t).position;return _(O,Y(o,i,e))},
"a98_rgb_into_hsl");var T0=r(t=>{let[o,i,e]=tr(t).position;return _(O,Y(o,i,e))},
"display_p3_into_hsl");var N0=r(t=>{if(c(t)&&t.colorspace==="hwb"){let[o,i,e]=t.position,
[p,n,a]=wt(i,o,e),[l,m,s]=Y(p,n,a);return _(O,[l,m,s])}else throw new Error(
"Wrong parameter passed: "+t)},"hwb_into_hsl");var q0=r(t=>{let[o,i,e]=rr(t).position;return _(O,Y(o,i,e))},
"lab_into_hsl");var oc=r(t=>{let[o,i,e]=or(t).position;return _(O,Y(o,i,e))},
"lch_into_hsl");var mc=r(t=>{let[o,i,e]=ir(t).position;return _(O,Y(o,i,e))},
"oklab_into_hsl");var bc=r(t=>{let[o,i,e]=nr(t).position;return _(O,Y(o,i,e))},
"oklch_into_hsl");var vc=r(t=>{let[o,i,e]=ar(t).position;return _(O,Y(o,i,e))},
"prophoto_rgb_into_hsl");var Oc=r(t=>{let[o,i,e]=lr(t).position,[p,n,a]=Y(o,i,e);return _(
O,[p,n,a])},"rec2020_into_hsl");var Bc=r(t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){
let[o,i,e]=t.position,[p,n,a]=Y(o,i,e);return _(O,[p,n,a])}else
throw new Error("Wrong parameter passed: "+t)},"srgb_into_hs\
l"),Xc=r(t=>{if(c(t)&&t.colorspace==="srgb-linear"){let[o,i,
e]=t.position.map(l=>ht(l)),[p,n,a]=Y(o,i,e);return _(O,[p,n,
a])}else throw new Error("Wrong parameter passed: "+t)},"srg\
b_linear_into_hsl");var Vc=r(t=>{let[o,i,e]=Pt(t).position;return _(O,Y(o,i,e))},
"xyz_d50_into_hsl"),Gc=r(t=>{let[o,i,e]=U(t).position;return _(
O,Y(o,i,e))},"xyz_d65_into_hsl");var _u=r(t=>{let[o,i,e]=Qt(t).position;return _(C,j(o,i,e))},
"a98_rgb_into_hwb");var xu=r(t=>{let[o,i,e]=tr(t).position;return _(C,j(o,i,e))},
"display_p3_into_hwb");var wu=r(t=>{if(c(t)&&t.colorspace==="hsl"){let[o,i,e]=t.position,
[p,n,a]=at(i,o,e);return _(C,j(p,n,a))}else throw new Error(
"Wrong parameter passed: "+t)},"hsl_into_hwb");var Yu=r(t=>{let[o,i,e]=rr(t).position;return _(C,j(o,i,e))},
"lab_into_hwb");var Zu=r(t=>{let[o,i,e]=or(t).position;return _(C,j(o,i,e))},
"lch_into_hwb");var Gu=r(t=>{let[o,i,e]=ir(t).position;return _(C,j(o,i,e))},
"oklab_into_hwb");var Qu=r(t=>{let[o,i,e]=nr(t).position;return _(C,j(o,i,e))},
"oklch_into_hwb");var ad=r(t=>{let[o,i,e]=ar(t).position;return _(C,j(o,i,e))},
"prophoto_rgb_into_hwb");var cd=r(t=>{let[o,i,e]=lr(t).position;return _(C,j(o,i,e))},
"rec2020_into_hwb");var gd=r(t=>{if(c(t)&&["rgb","srgb"].includes(t.colorspace)){
let[o,i,e]=t.position;return _(C,j(o,i,e))}else throw new Error(
"Wrong parameter passed: "+t)},"srgb_into_hwb"),Sd=r(t=>{if(c(
t)&&t.colorspace==="srgb-linear"){let[o,i,e]=t.position.map(
p=>ht(p));return _(C,j(o,i,e))}else throw new Error("Wrong p\
arameter passed: "+t)},"srgb_linear_into_hwb");var Id=r(t=>{let[o,i,e]=Pt(t).position;return _(C,j(o,i,e))},
"xyz_d50_into_hwb"),kd=r(t=>{let[o,i,e]=U(t).position;return _(
C,j(o,i,e))},"xyz_d65_into_hwb");var fr=r(t=>{if(c(t)&&t.colorspace==="xyz-d50"){let o=_(H,t.
position.toArray());return x(o).multiply(L),o}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_xyz_d65"),z=r(t=>{
if(c(t)&&t.colorspace==="xyz-d65"){let o=_(V,t.position.toArray());
return x(o).multiply(Q),o}else throw new Error("Wrong parame\
ter passed: "+t)},"xyz_d65_into_xyz_d50");var Xo=r(t=>S(z(t)),"xyz_d65_into_lab"),S=r(t=>{if(c(t)&&t.colorspace===
"xyz-d50"){let o=.008856451679035631,i=29**3/3**3,[e,p,n]=t.
position.map((s,f)=>s/q[f]).map(s=>s>o?Math.cbrt(s):(i*s+16)/
116),a=116*p-16,l=500*(e-p),m=200*(p-n);return _(Ft,[a,l,m])}else
throw new Error("Wrong parameter passed: "+t)},"xyz_d50_into\
_lab");var nb=r(t=>{let o=rt(t),i=z(o);return S(i)},"a98_rgb_into_l\
ab");var _b=r(t=>{let o=tt(t),i=z(o);return S(i)},"display_p3_int\
o_lab");var hb=r(t=>{let o=mt(t),i=z(o);return S(i)},"hsl_into_lab");var vb=r(t=>{let o=st(t),i=z(o);return S(i)},"hwb_into_lab");var kb=r(t=>{let o=A(t),i=z(o);return S(i)},"oklab_into_lab");var Rb=r(t=>{let o=it(t),i=A(o),e=z(i);return S(e)},"oklch_i\
nto_lab");var Lb=r(t=>{let o=$t(t);return S(o)},"prophoto_rgb_into_lab");var $b=r(t=>{let o=ot(t),i=z(o);return S(i)},"rec2020_into_l\
ab");var Qb=r(t=>{let o=D(t),i=z(o);return S(i)},"srgb_into_lab"),
th=r(t=>{let o=nt(t),i=z(o);return S(i)},"srgb_linear_into_l\
ab");var R=r(t=>{if(c(t)&&t.colorspace==="lab"){let[o,i,e]=t,p=Math.
atan2(e,i)*(180/Math.PI),n=Math.hypot(i,e);return _(Fr,[o,n,
p])}else throw new Error("Wrong parameter passed: "+t)},"lab\
_into_lch");var vh=r(t=>{let o=rt(t),i=z(o),e=S(i);return R(e)},"a98_rgb\
_into_lch");var Oh=r(t=>{let o=tt(t),i=z(o),e=S(i);return R(e)},"display\
_p3_into_lch");var Bh=r(t=>{let o=mt(t),i=z(o),e=S(i);return R(e)},"hsl_int\
o_lch");var Hh=r(t=>{let o=st(t),i=z(o),e=S(i);return R(e)},"hwb_int\
o_lch");var Kh=r(t=>{let o=A(t),i=z(o),e=S(i);return R(e)},"oklab_in\
to_lch");var nx=r(t=>{let o=it(t),i=A(o),e=z(i),p=S(e);return R(p)},"\
oklch_into_lch");var _x=r(t=>{let o=$t(t),i=S(o);return R(i)},"prophoto_rgb_i\
nto_lch");var xx=r(t=>{let o=ot(t),i=z(o),e=S(i);return R(e)},"rec2020\
_into_lch");var wx=r(t=>{let o=D(t),i=z(o),e=S(i);return R(e)},"srgb_int\
o_lch"),Mx=r(t=>{let o=nt(t),i=z(o),e=S(i);return R(e)},"srg\
b_linear_into_lch");var Cx=r(t=>R(S(t)),"xyz_d50_into_lch"),Yx=r(t=>R(Xo(t)),"xy\
z_d65_into_lch");var N=r(t=>{if(c(t)&&t.colorspace==="xyz-d65"){let[o,i,e]=t.
position,[p,n,a]=x(o,i,e).multiply(Lt).each((l,m,s)=>s[m]=Math.
cbrt(l)).multiply(Nt);return _(Ht,[p*100,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklab"),Jx=r(t=>{
if(c(t)&&t.colorspace==="xyz-d50"){let[o,i,e]=t.position,[p,
n,a]=x(o,i,e).multiply(L).multiply(Lt).each((l,m,s)=>s[m]=Math.
cbrt(l)).multiply(Nt);return _(Ht,[p*100,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklab");var ey=r(t=>N(rt(t)),"a98_rgb_into_oklab");var ly=r(t=>N(tt(t)),"display_p3_into_oklab");var cy=r(t=>{let o=mt(t);return N(o)},"hsl_into_oklab");var xy=r(t=>N(st(t)),"hwb_into_oklab");var cr=r(t=>{let o=T(t),i=fr(o);return N(i)},"lab_into_oklab");var Oy=r(t=>{let o=K(t),i=T(o),e=fr(i);return N(e)},"lch_int\
o_oklab");var Ty=r(t=>N(pt(t)),"prophoto_rgb_into_oklab");var Wy=r(t=>N(ot(t)),"rec2020_into_oklab");var Vy=r(t=>{let o=D(t);return N(o)},"srgb_into_oklab"),Gy=r(
t=>{let o=nt(t);return N(o)},"srgb_linear_into_oklab");var et=r(t=>{if(c(t)&&t.colorspace==="xyz-d65"){let[o,i,e]=t.
position,[p,n,a]=x(o,i,e).multiply(Lt).each((f,d,u)=>u[d]=Math.
cbrt(f)).multiply(Nt),l=p*100,m=Math.hypot(n,a),s=m<.001?NaN:
Math.atan2(a,n)*180/Math.PI;return _(Vt,[l,m,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_oklch"),fg=r(t=>{
if(c(t)&&t.colorspace==="xyz-d50"){let[o,i,e]=t.position.toArray(),
[p,n,a]=x(o,i,e).multiply(L).multiply(Lt).each((f,d,u)=>u[d]=
Math.cbrt(f)).multiply(Nt),l=p*100,m=Math.hypot(n,a),s=m<.001?
NaN:Math.atan2(a,n)*180/Math.PI;return _(Vt,[l,m,s])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_oklch");var hg=r(t=>{let o=rt(t);return et(o)},"a98_rgb_into_oklch");var zg=r(t=>{let o=tt(t);return et(o)},"display_p3_into_oklc\
h");var Ag=r(t=>{let o=mt(t);return et(o)},"hsl_into_oklch");var Yg=r(t=>{let o=st(t);return et(o)},"hwb_into_oklch");var ur=r(t=>{if(c(t)&&t.colorspace==="oklab"){let[o,i,e]=t,p=Math.
hypot(i,e),n=p<.001?NaN:Math.atan2(e,i)*180/Math.PI;return _(
Vt,[o,p,n])}else throw new Error("Wrong parameter passed: "+
t)},"oklab_into_oklch");var Lg=r(t=>ur(cr(t)),"lab_into_oklch");var $g=r(t=>{let o=K(t),i=cr(o);return ur(i)},"lch_into_oklc\
h");var Jg=r(t=>{let o=pt(t);return et(o)},"prophoto_rgb_into_ok\
lch");var e5=r(t=>{let o=ot(t);return et(o)},"rec2020_into_oklch");var l5=r(t=>{let o=D(t);return et(o)},"srgb_into_oklch"),m5=r(
t=>{let o=nt(t);return et(o)},"srgb_linear_into_oklch");var Zo=P(1.3457868816471583,-.5446307051249019,0,-.25557208737979464,
1.5082477428451468,0,-.05110186497554526,.02052744743642139,
1.2119675456389452),O5=r(t=>{if(c(t)&&t.colorspace==="xyz-d6\
5"){let[o,i,e]=t.position,[p,n,a]=x(o,i,e).multiply(Q).multiply(
Zo).each((l,m,s)=>s[m]=Yr(l)*100);return _(Ar,[p,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d65_into_prophoto_rgb"),
B=r(t=>{if(c(t)&&t.colorspace==="xyz-d50"){let[o,i,e]=t.position,
[p,n,a]=x(o,i,e).multiply(Zo).each((l,m,s)=>s[m]=Yr(l)*100);
return _(Ar,[p,n,a])}else throw new Error("Wrong parameter p\
assed: "+t)},"xyz_d50_into_prophoto_rgb");var T5=r(t=>B(vo(t)),"a98_rgb_into_prophoto_rgb");var W5=r(t=>B(go(t)),"display_p3_into_prophoto_rgb");var Wo=r(t=>T(K(t)),"lch_into_xyz_d50"),V5=r(t=>Wt(K(t)),"lc\
h_into_xyz_d65");var m1=r(t=>B(To(t)),"hsl_into_prophoto_rgb");var u1=r(t=>B(Ro(t)),"hwb_into_prophoto_rgb");var y1=r(t=>B(T(t)),"lab_into_prophoto_rgb");var P1=r(t=>B(Wo(t)),"lch_into_prophoto_rgb");var k1=r(t=>B(er(t)),"oklab_into_prophoto_rgb");var E1=r(t=>B(Yo(t)),"oklch_into_prophoto_rgb");var Z1=r(t=>B(Oo(t)),"rec2020_into_prophoto_rgb");var H1=r(t=>B(Dt(t)),"srgb_into_prophoto_rgb"),V1=r(t=>B(Co(
t)),"srgb_linear_into_prophoto_rgb");var Lo=P(30757411/17917100,-19765991/29648200,792561/44930125,
-6372589/17917100,47925759/29648200,-1921689/44930125,-4539589/
17917100,467509/29648200,42328811/44930125),F=r(t=>{if(c(t)&&
t.colorspace==="xyz-d65"){let[o,i,e]=t.position,[p,n,a]=x(o,
i,e).multiply(Lo).each((l,m,s)=>s[m]=Er(l)*100);return _(Ir,
[p,n,a])}else throw new Error("Wrong parameter passed: "+t)},
"xyz_d65_into_rec2020"),dr=r(t=>{if(c(t)&&t.colorspace==="xy\
z-d50"){let[o,i,e]=t.position,[p,n,a]=x(o,i,e).multiply(L).multiply(
Lo).each((l,m,s)=>s[m]=Er(l)*100);return _(Ir,[p,n,a])}else throw new Error(
"Wrong parameter passed: "+t)},"xyz_d50_into_rec2020");var b2=r(t=>F(rt(t)),"a98_rgb_into_rec2020");var S2=r(t=>F(tt(t)),"display_p3_into_rec2020");var M2=r(t=>F(mt(t)),"hsl_into_rec2020");var C2=r(t=>F(st(t)),"hwb_into_rec2020");var R2=r(t=>dr(T(t)),"lab_into_rec2020");var N2=r(t=>dr(T(K(t))),"lch_into_rec2020");var $2=r(t=>F(A(t)),"oklab_into_rec2020");var Q2=r(t=>F(A(it(t))),"oklch_into_rec2020");var iS=r(t=>F(pt(t)),"prophoto_rgb_into_rec2020");var mS=r(t=>F(D(t)),"srgb_into_rec2020"),sS=r(t=>F(nt(t)),"s\
rgb_linear_into_rec2020");export{Gt as A98RGBSpace,Mr as DisplayP3Space,O as HSLSpace,
C as HWBSpace,Ft as LABSpace,Fr as LCHSpace,Ar as ProPhotoRGBSpace,
Jr as RGBModel,Ir as Rec2020Space,V as XYZD50Space,H as XYZD65Space,
tf as a98_rgb_into_display_p3,I0 as a98_rgb_into_hsl,_u as a98_rgb_into_hwb,
nb as a98_rgb_into_lab,vh as a98_rgb_into_lch,ey as a98_rgb_into_oklab,
hg as a98_rgb_into_oklch,T5 as a98_rgb_into_prophoto_rgb,b2 as a98_rgb_into_rec2020,
Qt as a98_rgb_into_rgb,Qt as a98_rgb_into_srgb,hl as a98_rgb_into_srgb_linear,
rt as a98_rgb_into_xyz,vo as a98_rgb_into_xyz_d50,rt as a98_rgb_into_xyz_d65,
Up as display_p3_into_a98_rgb,T0 as display_p3_into_hsl,xu as display_p3_into_hwb,
_b as display_p3_into_lab,Oh as display_p3_into_lch,ly as display_p3_into_oklab,
zg as display_p3_into_oklch,W5 as display_p3_into_prophoto_rgb,
S2 as display_p3_into_rec2020,tr as display_p3_into_rgb,tr as display_p3_into_srgb,
zl as display_p3_into_srgb_linear,tt as display_p3_into_xyz,
go as display_p3_into_xyz_d50,tt as display_p3_into_xyz_d65,
Ls as hsl_into_a98_rgb,ff as hsl_into_display_p3,wu as hsl_into_hwb,
hb as hsl_into_lab,Bh as hsl_into_lch,cy as hsl_into_oklab,Ag as hsl_into_oklch,
m1 as hsl_into_prophoto_rgb,M2 as hsl_into_rec2020,Cl as hsl_into_rgb,
Po as hsl_into_srgb,Yl as hsl_into_srgb_linear,mt as hsl_into_xyz,
To as hsl_into_xyz_d50,mt as hsl_into_xyz_d65,Fs as hwb_into_a98_rgb,
vf as hwb_into_display_p3,N0 as hwb_into_hsl,vb as hwb_into_lab,
Hh as hwb_into_lch,xy as hwb_into_oklab,Yg as hwb_into_oklch,
u1 as hwb_into_prophoto_rgb,C2 as hwb_into_rec2020,Nl as hwb_into_rgb,
Nl as hwb_into_srgb,Dl as hwb_into_srgb_linear,st as hwb_into_xyz,
Ro as hwb_into_xyz_d50,st as hwb_into_xyz_d65,_ as initPointInSpace,
c as isPointInSpace,Qs as lab_into_a98_rgb,If as lab_into_display_p3,
q0 as lab_into_hsl,Yu as lab_into_hwb,R as lab_into_lch,cr as lab_into_oklab,
Lg as lab_into_oklch,y1 as lab_into_prophoto_rgb,R2 as lab_into_rec2020,
rr as lab_into_rgb,rr as lab_into_srgb,rm as lab_into_srgb_linear,
Wt as lab_into_xyz,T as lab_into_xyz_d50,Wt as lab_into_xyz_d65,
n_ as lch_into_a98_rgb,Ef as lch_into_display_p3,oc as lch_into_hsl,
Zu as lch_into_hwb,K as lch_into_lab,Oy as lch_into_oklab,$g as lch_into_oklch,
P1 as lch_into_prophoto_rgb,N2 as lch_into_rec2020,or as lch_into_rgb,
or as lch_into_srgb,_m as lch_into_srgb_linear,V5 as lch_into_xyz,
Wo as lch_into_xyz_d50,V5 as lch_into_xyz_d65,Ht as okLABSpace,
Vt as okLCHSpace,s_ as oklab_into_a98_rgb,Zf as oklab_into_display_p3,
mc as oklab_into_hsl,Gu as oklab_into_hwb,kb as oklab_into_lab,
Kh as oklab_into_lch,ur as oklab_into_oklch,k1 as oklab_into_prophoto_rgb,
$2 as oklab_into_rec2020,ir as oklab_into_rgb,ir as oklab_into_srgb,
wm as oklab_into_srgb_linear,A as oklab_into_xyz,er as oklab_into_xyz_d50,
A as oklab_into_xyz_d65,y_ as oklch_into_a98_rgb,Vf as oklch_into_display_p3,
bc as oklch_into_hsl,Qu as oklch_into_hwb,Rb as oklch_into_lab,
nx as oklch_into_lch,it as oklch_into_oklab,E1 as oklch_into_prophoto_rgb,
Q2 as oklch_into_rec2020,nr as oklch_into_rgb,nr as oklch_into_srgb,
Tm as oklch_into_srgb_linear,jo as oklch_into_xyz,Yo as oklch_into_xyz_d50,
jo as oklch_into_xyz_d65,P_ as prophoto_rgb_into_a98_rgb,Uf as prophoto_rgb_into_display_p3,
vc as prophoto_rgb_into_hsl,ad as prophoto_rgb_into_hwb,Lb as prophoto_rgb_into_lab,
_x as prophoto_rgb_into_lch,Ty as prophoto_rgb_into_oklab,Jg as prophoto_rgb_into_oklch,
iS as prophoto_rgb_into_rec2020,ar as prophoto_rgb_into_rgb,
ar as prophoto_rgb_into_srgb,Um as prophoto_rgb_into_srgb_linear,
pt as prophoto_rgb_into_xyz,$t as prophoto_rgb_into_xyz_d50,
pt as prophoto_rgb_into_xyz_d65,k_ as rec2020_into_a98_rgb,r0 as rec2020_into_display_p3,
Oc as rec2020_into_hsl,cd as rec2020_into_hwb,$b as rec2020_into_lab,
xx as rec2020_into_lch,Wy as rec2020_into_oklab,e5 as rec2020_into_oklch,
Z1 as rec2020_into_prophoto_rgb,lr as rec2020_into_rgb,lr as rec2020_into_srgb,
_s as rec2020_into_srgb_linear,ot as rec2020_into_xyz,Oo as rec2020_into_xyz_d50,
ot as rec2020_into_xyz_d65,sr as rgb_into_a98_rgb,a0 as rgb_into_display_p3,
Bc as rgb_into_hsl,gd as rgb_into_hwb,Qb as rgb_into_lab,wx as rgb_into_lch,
Vy as rgb_into_oklab,l5 as rgb_into_oklch,H1 as rgb_into_prophoto_rgb,
mS as rgb_into_rec2020,D as rgb_into_xyz,Dt as rgb_into_xyz_d50,
D as rgb_into_xyz_d65,At as sRGBLinearSpace,J as sRGBSpace,sr as srgb_into_a98_rgb,
a0 as srgb_into_display_p3,Bc as srgb_into_hsl,gd as srgb_into_hwb,
Qb as srgb_into_lab,wx as srgb_into_lch,Vy as srgb_into_oklab,
l5 as srgb_into_oklch,H1 as srgb_into_prophoto_rgb,mS as srgb_into_rec2020,
D as srgb_into_xyz,Dt as srgb_into_xyz_d50,D as srgb_into_xyz_d65,
Rs as srgb_linear_into_a98_rgb,p0 as srgb_linear_into_display_p3,
Xc as srgb_linear_into_hsl,Sd as srgb_linear_into_hwb,th as srgb_linear_into_lab,
Mx as srgb_linear_into_lch,Gy as srgb_linear_into_oklab,m5 as srgb_linear_into_oklch,
V1 as srgb_linear_into_prophoto_rgb,sS as srgb_linear_into_rec2020,
nt as srgb_linear_into_xyz,Co as srgb_linear_into_xyz_d50,nt as srgb_linear_into_xyz_d65,
Vp as xyz_d50_into_a98_rgb,_r as xyz_d50_into_display_p3,Vc as xyz_d50_into_hsl,
Id as xyz_d50_into_hwb,S as xyz_d50_into_lab,Cx as xyz_d50_into_lch,
Jx as xyz_d50_into_oklab,fg as xyz_d50_into_oklch,B as xyz_d50_into_prophoto_rgb,
dr as xyz_d50_into_rec2020,Pt as xyz_d50_into_rgb,Pt as xyz_d50_into_srgb,
Jt as xyz_d50_into_srgb_linear,fr as xyz_d50_into_xyz_d65,G as xyz_d65_into_a98_rgb,
$ as xyz_d65_into_display_p3,Gc as xyz_d65_into_hsl,kd as xyz_d65_into_hwb,
Xo as xyz_d65_into_lab,Yx as xyz_d65_into_lch,N as xyz_d65_into_oklab,
et as xyz_d65_into_oklch,O5 as xyz_d65_into_prophoto_rgb,F as xyz_d65_into_rec2020,
U as xyz_d65_into_rgb,U as xyz_d65_into_srgb,lt as xyz_d65_into_srgb_linear,
z as xyz_d65_into_xyz_d50,G as xyz_into_a98_rgb,$ as xyz_into_display_p3,
Gc as xyz_into_hsl,kd as xyz_into_hwb,Xo as xyz_into_lab,Yx as xyz_into_lch,
N as xyz_into_oklab,et as xyz_into_oklch,O5 as xyz_into_prophoto_rgb,
F as xyz_into_rec2020,U as xyz_into_rgb,U as xyz_into_srgb,lt as xyz_into_srgb_linear};
