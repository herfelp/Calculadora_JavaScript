

var Calculadora = ( function(){

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
  var sig = function(param1){
    return -param1;
  }
  return {

    sum: function(number1,number2){
      return sum(number1,number2)
    },
    res: function(number1,number2){
      return res(number1,number2)
    },
    mult: function(number1,number2){
      return mult(number1,number2)
    },
    div: function(number1,number2){
      return div(number1,number2)
    },
    sig: function(number1){
      return div(number1)
    }
  }

})();

console.log(Calculadora.sum( 10, 5 ) );

var display = document.getElementById("display").innerHTML;



var tecla1 = document.getElementById("1");
tecla1.addEventListener("click",function(){
  document.getElementById("display").innerHTML = "1";
  console.log("1");
});
