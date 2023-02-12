var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1);
randomNumber1++;
console.log(randomNumber1);
var source1="images/dice"+randomNumber1+".png";

var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2);
randomNumber2++;
console.log(randomNumber2);
var source2="images/dice"+randomNumber2+".png";


document.querySelector("img").setAttribute("src",source1);
document.querySelector(".img2").setAttribute("src",source2);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent="🚩Player 1 Wins!";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").textContent="Draw!";
}else{
    document.querySelector("h1").textContent="Player 2 Wins!🚩";
}