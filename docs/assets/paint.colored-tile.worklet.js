var o=Object.defineProperty;var l=(e,t)=>o(e,"name",{value:t,configurable:!0});registerPaint("ColoredTile",class{static{l(this,"ColoredTile")}static get contextOptions(){
return{alpha:!1}}static get inputProperties(){return["--color","--radius"]}paint(t,i,r){
t.fillStyle=r.get("--color"),t.fillRect(0,0,i.width,i.height)}});
