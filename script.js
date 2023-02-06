
//main div
var main=document.body.appendChild(document.createElement("div"));
main.setAttribute("id","wholecontainer");
//top
var inner=document.createElement("div");
inner.setAttribute("id","innerfirst");
document.getElementById("wholecontainer").appendChild(inner);
//logo
var innerimage=document.createElement("img");
innerimage.setAttribute("src","logo.svg");
innerimage.setAttribute("class","logo");
document.getElementById("innerfirst").appendChild(innerimage);
//turntext
var turndiv=document.createElement("div");
turndiv.setAttribute("id","turntext");
document.getElementById("innerfirst").appendChild(turndiv);
//restartbutton
var button=document.createElement("button");
button.setAttribute("id","innerbutton");
button.setAttribute("onclick","restart()");
document.getElementById("innerfirst").appendChild(button);
//restartbuttonimage
var buttonimg=document.createElement("img");
buttonimg.setAttribute("src","icon.svg");
document.getElementById("innerbutton").appendChild(buttonimg);
// //second div
var inner2=document.createElement("div");
inner2.setAttribute("id","innersecond");
document.getElementById("wholecontainer").appendChild(inner2);
//create innerdivs
function start(){
for(i=0;i<9;i++){
  var child=document.createElement("div");
  child.setAttribute("class","child");
  child.setAttribute("id",i);
  child.setAttribute("onclick","check("+i+")");
  child.setAttribute("onmouseover","hoverin("+i+")");
  child.setAttribute("onmouseout","hoverout("+i+")") ; 
  document.getElementById("innersecond").appendChild(child);
  var childimage=document.createElement("img");
  childimage.setAttribute("class","childhoverimg");
  childimage.setAttribute("src","");
  document.getElementById(i).appendChild(childimage);
}
}
start();
//create scores
var bottom=document.createElement("div");
bottom.setAttribute("id","botto");
document.getElementById("wholecontainer").appendChild(bottom);

for(i=0;i<3;i++){
  var bot=document.createElement("div");
  bot.setAttribute("id","botchild"+i);
  bot.setAttribute("class","bottochil");
  document.getElementById("botto").appendChild(bot);
  var para=document.createElement("h3");
  var score=document.createElement("h2");
  para.setAttribute("id","para"+i);
  score.setAttribute("id","score"+i);
   score.setAttribute("class","scoreboard");
  document.getElementById("botchild"+i).appendChild(para);
  document.getElementById("botchild"+i).appendChild(score);
}
document.getElementById("para0").innerText="X-Score";
document.getElementById("para1").innerText="TIE";
document.getElementById("para2").innerText="O-Score";

//newgame
var newg=document.createElement("div");
newg.setAttribute("id","newgame");
document.getElementById("wholecontainer").appendChild(newg);
newg.setAttribute("onclick","newgameclick()");
var newtext=document.createElement("h1");
document.getElementById("newgame").appendChild(newtext);
newtext.innerText="NEW GAME";

//main functions
var player="X";
turntext.innerText="X-Turn";
var xplay=[];
var oplay=[];
function hoverin(d) {
  if(player=="X"){
    document.getElementById(d).firstChild.attributes.src.value ="xhover.svg";
  
  }
  else{
    document.getElementById(d).firstChild.attributes.src.value ="ohover.svg";
  }
}
function hoverout(d) {
  document.getElementById(d).firstChild.attributes.src.value ="";
}

function check(d) {
  if(player=="X"){
    document.getElementById(d).firstChild.attributes.src.value ="x.svg";
    document.getElementById(d).onmouseover="";
    document.getElementById(d).onmouseout="";
    document.getElementById(d).onclick="";
    player="O";
    turntext.innerText="O-Turn";
    xplay.push(d);
    // console.log(xplay);
    winning(1);
  }
  else{
    document.getElementById(d).firstChild.attributes.src.value ="o.svg";
    document.getElementById(d).onmouseover="";
    document.getElementById(d).onmouseout="";
    document.getElementById(d).onclick="";
    player="X";
    turntext.innerText="X-Turn";
    oplay.push(d);
    // console.log(oplay);
    winning(0);
  }
  
}
var count=0;
var xscore=0;
var oscore=0;
var tie=0;
function winning(a){
  count++;
  if(a==1){
    xplay.sort((m,n)=>(m-n));
    console.log(xplay); if(xplay.includes(0)&&xplay.includes(1)&&xplay.includes(2)||xplay.includes(3)&&xplay.includes(4)&&xplay.includes(5)||xplay.includes(6)&&xplay.includes(7)&&xplay.includes(8)||xplay.includes(0)&&xplay.includes(3)&&xplay.includes(6)||xplay.includes(1)&&xplay.includes(4)&&xplay.includes(7)||xplay.includes(0)&&xplay.includes(4)&&xplay.includes(8)||xplay.includes(2)&&xplay.includes(5)&&xplay.includes(8)||xplay.includes(6)&&xplay.includes(4)&&xplay.includes(2)){
      alert("X win this Round");
      restart();
      xscore++;
      document.getElementById("score0").innerText=xscore;
    }
  }
  if(a==0){
    oplay.sort((m,n)=>(m-n));
    console.log(oplay); if(oplay.includes(0)&&oplay.includes(1)&&oplay.includes(2)||oplay.includes(3)&&oplay.includes(4)&&oplay.includes(5)||oplay.includes(6)&&oplay.includes(7)&&oplay.includes(8)||oplay.includes(0)&&oplay.includes(3)&&oplay.includes(6)||oplay.includes(1)&&oplay.includes(4)&&oplay.includes(7)||oplay.includes(0)&&oplay.includes(4)&&oplay.includes(8)||oplay.includes(2)&&oplay.includes(5)&&oplay.includes(8)||oplay.includes(6)&&oplay.includes(4)&&oplay.includes(2)){
      alert("O win this Round");
      restart();
      oscore++;
      document.getElementById("score2").innerText=oscore;
    }
  }
  if(count==9){
    tie++;
    count=0;
    alert("This Round is Draw");
    restart();
    document.getElementById("score1").innerText=tie;
  }
}
function restart(){
  inner2.innerHTML='';
  start();
  player="X";
  turntext.innerText="X-Turn";
  xplay=[];
  oplay=[];
  count=0;
  console.log(xplay);
  console.log(oplay);
}
function newgameclick(){
   document.getElementById("score0").innerText="0";
   document.getElementById("score2").innerText="0";
   document.getElementById("score1").innerText="0";
   inner2.innerHTML='';
  start();
  player="X";
  turntext.innerText="X-Turn";
  xplay=[];
  oplay=[];
  count=0;
  console.log(xplay);
  console.log(oplay);
}