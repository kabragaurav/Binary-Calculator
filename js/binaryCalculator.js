var expr="";

function addZero(){
    expr=expr+"0";
    document.getElementById("res").innerHTML = expr;
}

function addOne(){
    expr=expr+"1";
    document.getElementById("res").innerHTML = expr;
}

function binToDec(s) {
  var result = 0;
  var len = s.length - 1;
  for (var i = len; i >= 0; i--)
    result += s[i] * Math.pow(2, len-i);  
  return result;
}

function decToBin(n) {
  if(n<=0)
      return "0";
  var result = '';
  // find highest integer power of 2 equal or less then n
  var order = Math.floor(Math.log2(n));
  while (order >= 0) {
    var k = Math.pow(2, order);
    // if n >= 2^order - reduce that value from n and add 1 to result
    if (n >= k) {
      n = n - k;
      result += 1;
    } else {
    // else add 0
      result += 0;
    }
    // reduce order by 1
    order = order - 1;
  }
  return result;
}

function reset(){
    expr="";
    document.getElementById("res").innerHTML = expr;
}
function evaluateIt(){
    let result=0;
    try{
      if(expr.includes("+"))
          arr=expr.split('+');
      else if(expr.includes("-"))
          arr=expr.split('-');
      else if(expr.includes("*"))
          arr=expr.split('*');
      else if(expr.includes("/"))
          arr=expr.split('/');
      else{
        document.getElementById("res").innerHTML = expr;
        return;
      }
      // arr should have exactly 2 strings
      //E.g. if 1--1 is entered
      // then arr=["1","","1"] (you can check from Opera's Inspect Element's Console window)
      if(arr.length!=2) 
        throw "Invalid expression";
      if(arr[0].includes("+")||arr[1].includes("+"))
        throw "More than one operators";
      else if(arr[0].includes("-")||arr[1].includes("-"))
        throw "More than one operators";
      else if(arr[0].includes("*")||arr[1].includes("*"))
        throw "More than one operators";
      else if(arr[0].includes("/")||arr[1].includes("/"))
        throw "More than one operators";
      console.log(arr[0]);
      console.log(arr[1]);
      dec1 = binToDec(arr[0]);
      dec2 = binToDec(arr[1]);
      console.log(dec1);
      console.log(dec2);
      if(expr.includes("+"))
          result=dec1+dec2;
      if(expr.includes("-"))
          result=dec1-dec2;
      if(expr.includes("*"))
          result=dec1*dec2;
      if(expr.includes("/"))
      {
        if(dec2==0)
          throw "Denominator cannot be 0";
        result=dec1/dec2;
      }
      //convert back to string
      expr=""+decToBin(result);
      document.getElementById("res").innerHTML = expr;
    }
    catch(e){
      expr="";
      document.getElementById("res").innerHTML=expr;
      alert(e);
    }
}

function addPlus(){
    expr=expr+"+";
    document.getElementById("res").innerHTML = expr;
}

function addMinus(){
    expr=expr+"-";
    document.getElementById("res").innerHTML = expr;
}

function addMul(){
    expr=expr+"*";
    document.getElementById("res").innerHTML = expr;
}

function addDiv(){
    expr=expr+"/";
    document.getElementById("res").innerHTML = expr;
}