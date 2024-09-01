var random=Math.floor(Math.random() * 6) + 1;
var randp="dice"+ random +".png";
var randimg="images/"+randp;
var img11=document.querySelectorAll("img")[0];
img11.setAttribute("src",randimg);
var random1=Math.floor(Math.random() * 6) + 1;
var randp="dice"+ random1 +".png";
var randimg1="images/"+randp;
var img22=document.querySelectorAll("img")[1];
img22.setAttribute("src",randimg1);

if(random>random1)
{
    document.querySelector("h1").innerHTML="PLAYER1 WON";
}
else if(random<random1)
{
    document.querySelector("h1").innerHTML="PLAYER2 WON";

}
else{
    document.querySelector("h1").innerHTML="Draw!!!";
}