



  var sum = function( param1, param2 ){
    return param1 + param2;
  }
  var res = function( param1, param2){
    return param1 - param2;
  }
  var mult = function( param1, param2){
    return param1 * param2;
  }
  var div = function( param1, param2){
    return param1 / param2;
  }





var display = document.getElementById("display").innerHTML;

var tecla9 = document.getElementById("9");
tecla9.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","9");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("9");
  }
}
});

var tecla8 = document.getElementById("8");
tecla8.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","8");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("8");
  }
}
});

var tecla7 = document.getElementById("7");
tecla7.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","7");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("7");
  }
}
});

var tecla6 = document.getElementById("6");
tecla6.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","6");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("6");
  }
}
});

var tecla5 = document.getElementById("5");
tecla5.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","5");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("5");
  }
}
});

var tecla4 = document.getElementById("4");
tecla4.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","4");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("4");
  }
}
});

var tecla3 = document.getElementById("3");
tecla3.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","3");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("3");
  }
}
});

var tecla2 = document.getElementById("2");
tecla2.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","2");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("2");
  }
}
});

var tecla1 = document.getElementById("1");
tecla1.addEventListener("click",function(){
       var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
       var disp_a = disp.replace("-","");
       var disp_b = disp_a.replace(".","");
if (disp_b.length < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","1");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat(" 1");
  }
}
});

var teclaon = document.getElementById("on");
teclaon.addEventListener("click",function(){
  document.getElementById("display").innerHTML = "0";
  console.log("on");
});
