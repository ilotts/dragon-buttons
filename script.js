var wrap = document.body.querySelector(".wrap");
var health = 10;
var fdam = 3;
var idam = 1;
var pdam= 4;

function boxMaker(){
  var box = document.createElement("div");
  var fattack = fdam - 1;
  var iattack = idam + 1;
  box.innerHTML="Dragon Health: "+health; 
  wrap.appendChild(box);
  
}
    

boxMaker();


document.body.querySelector(".fire").addEventListener("click", function(){
  var fattack = fdam - 1;
  var sum = health - fattack;
  boxMaker("Dragon Health: "+sum);
})
  
document.body.querySelector(".ice").addEventListener("click", function(){
  var iattack = fdam + 1;
  var sum2 = health - iattack;
  boxMaker("Dragon Health: "+sum2);
})  

  document.body.querySelector(".poison").addEventListener("click", function(){
  var sum3 = health - pdam;
  boxMaker("Dragon Health: "+sum3);
})

if(health<=0){
  wrap.innerHTML =
      "You Win. Game Over.";
}