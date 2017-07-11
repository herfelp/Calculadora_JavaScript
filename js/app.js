



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



function pant(){
var display = document.getElementById("display").innerHTML;
return(display);
};

function lpan(){
  var disp = document.getElementById("display").innerHTML.replace(/ /g,"");
  var disp_a = disp.replace("-","");
  var disp_b = disp_a.replace(".","");
  var l = disp_b.length;
  return(l);
};



var tecla9 = document.getElementById("9");
tecla9.addEventListener("click",function(){
if (lpan() < 8){
  if (document.getElementById("display").innerHTML=="0"){
     document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("0","9");
  }
  else{
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat("9");
  }
}
var dis = document.getElementById("display").innerHTML;

});

var tecla8 = document.getElementById("8");
tecla8.addEventListener("click",function(){
    
if (lpan() < 8){
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

if (lpan() < 8){
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

if (lpan() < 8){
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

if (lpan() < 8){
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

if (lpan() < 8){
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

if (lpan() < 8){
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

if (lpan() < 8){
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

if (lpan() < 8){
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

var teclapunto = document.getElementById("punto");
teclapunto.addEventListener("click",function(){

  if (lpan() < 8){
    if (document.getElementById("display").innerHTML.indexOf(".")=="-1"){
       document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.concat(".");
    }
    }
});

var teclasigno = document.getElementById("sign");
teclasigno.addEventListener("click",function(){

  if (lpan() <= 8){
    if(document.getElementById("display").innerHTML!="0"){
      if (document.getElementById("display").innerHTML.indexOf("-")=="-1"){
         document.getElementById("display").innerHTML = "-" + document.getElementById("display").innerHTML;
      }else{
        document.getElementById("display").innerHTML = document.getElementById("display").innerHTML.replace("-","");
      }

    }

    }
});
