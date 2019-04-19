var veq = 0;
  function even(){
  number = document.getElementById("ven").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
}
function ight(){
  number = document.getElementById("ght").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
}
function ine(){
  number = document.getElementById("ne").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
}
function our(){
  number = document.getElementById("ur").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
}
function ive(){
  number = document.getElementById("ve").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
}
function ix(){
  number = document.getElementById("x").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
}
function ne(){
  number = document.getElementById("e").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
  if(count > 4){rezult.style.fontSize='20';}
}
function wo(){
  number = document.getElementById("o").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
  
}
function hree(){
  number = document.getElementById("ree").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML;
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
  
}
function ero(){
  number = document.getElementById("ro").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML; 
  if(rezult === "0"){document.getElementById("inputcalc").innerHTML = "";}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML += number;
  count = document.getElementById("inputcalc").innerHTML;
  count = count.length;
 
}
function CE(){
  alt = document.getElementById("inputcalc").innerHTML;
  document.getElementById("inputcalc").innerHTML = "0";
  if(~alt.indexOf('+')){document.getElementById("inputcalc").innerHTML = "+";}
  if(~alt.indexOf('-')){document.getElementById("inputcalc").innerHTML = "-";}
  if(~alt.indexOf('*')){document.getElementById("inputcalc").innerHTML = "*";}
  if(~alt.indexOf('/')){document.getElementById("inputcalc").innerHTML = "/";}
  
}
function C(){
  document.getElementById("inputcalc").innerHTML = "0";
  document.getElementById("trezult").innerHTML = "";
}
function plus(){
  first = (document.getElementById("trezult").innerHTML); 
  var veq = 0;
  val = document.getElementById("inputcalc").innerHTML; 
  document.getElementById("trezult").innerHTML = val + '+';
  zn = document.getElementById("inputcalc").innerHTML = '+';
  if(~val.indexOf('+')){
  veq = parseFloat(first) + parseFloat(val);
  document.getElementById("inputcalc").innerHTML = veq;    
  document.getElementById("inputcalc").innerHTML = veq + '+';
  document.getElementById("trezult").innerHTML = veq + '+';
  temp = document.getElementById("inputcalc").innerHTML;
  }
  if(val < 0){first = document.getElementById("trezult").innerHTML;}
  if(~val.indexOf('+')){zn = document.getElementById("inputcalc").innerHTML = '+'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '+';}
  if(~val.indexOf('-')){zn = document.getElementById("inputcalc").innerHTML = '+'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '+';}
  if(~val.indexOf('*')){zn = document.getElementById("inputcalc").innerHTML = '+'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '+';}
  if(~val.indexOf('/')){zn = document.getElementById("inputcalc").innerHTML = '+'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '+';}
}
function minus(){
  first = (document.getElementById("trezult").innerHTML); 
  var veq = 0;
  val = document.getElementById("inputcalc").innerHTML; 
  document.getElementById("trezult").innerHTML = val + '-';
  zn = document.getElementById("inputcalc").innerHTML = '-';
  if(~val.indexOf('-')){
  veq = parseFloat(first) = parseFloat(val);   
  document.getElementById("inputcalc").innerHTML = veq + '-';
  document.getElementById("trezult").innerHTML = veq + '-';
  }
  if(~val.indexOf('+')){zn = document.getElementById("inputcalc").innerHTML = '-'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '-';}
  if(~val.indexOf('-')){zn = document.getElementById("inputcalc").innerHTML = '-'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '-';}
  if(~val.indexOf('*')){zn = document.getElementById("inputcalc").innerHTML = '-'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '-';}
  if(~val.indexOf('/')){zn = document.getElementById("inputcalc").innerHTML = '-'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '-';}
}
function div(){
  first = (document.getElementById("trezult").innerHTML); 
  var veq = 0;
  val = document.getElementById("inputcalc").innerHTML; 
  document.getElementById("trezult").innerHTML = val + '/';
  zn = document.getElementById("inputcalc").innerHTML = '/';
  if(~val.indexOf('/')){
  veq = parseFloat(first) / parseFloat(val.slice(0));
  document.getElementById("inputcalc").innerHTML = Math.round( veq * 10000000000 ) / 10000000000;  document.getElementById("inputcalc").innerHTML = veq + '/';
  document.getElementById("trezult").innerHTML = veq + '/';
  temp = document.getElementById("inputcalc").innerHTML;
  }
  if(val < 0){first = document.getElementById("trezult").innerHTML;}
  if(~val.indexOf('+')){zn = document.getElementById("inputcalc").innerHTML = '/'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '/';}
  if(~val.indexOf('-')){zn = document.getElementById("inputcalc").innerHTML = '/'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '/';}
  if(~val.indexOf('*')){zn = document.getElementById("inputcalc").innerHTML = '/'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '/';}
  if(~val.indexOf('/')){zn = document.getElementById("inputcalc").innerHTML = '/'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '/';}
}
function przv(){
  first = (document.getElementById("trezult").innerHTML); 
  var veq = 0;
  val = document.getElementById("inputcalc").innerHTML; 
  document.getElementById("trezult").innerHTML = val + '*';
  zn = document.getElementById("inputcalc").innerHTML = '*';
  if(~val.indexOf('*')){
    veq = parseFloat(first) * parseFloat(val.slice(0));
  document.getElementById("inputcalc").innerHTML = Math.round( veq * 10000000000 ) / 10000000000;  document.getElementById("inputcalc").innerHTML = veq + '*';
  document.getElementById("trezult").innerHTML = veq + '*';
  temp = document.getElementById("inputcalc").innerHTML;
  }
  if(val < 0){first = document.getElementById("trezult").innerHTML;}
  if(~val.indexOf('+')){zn = document.getElementById("inputcalc").innerHTML = '*'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '*';}
  if(~val.indexOf('-')){zn = document.getElementById("inputcalc").innerHTML = '*'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '*';}
  if(~val.indexOf('*')){zn = document.getElementById("inputcalc").innerHTML = '*'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '*';}
  if(~val.indexOf('/')){zn = document.getElementById("inputcalc").innerHTML = '*'; 
  document.getElementById("trezult").innerHTML = (first.substring(0, first.length - 1)) + '*';}
}
function eq(){
    first = (document.getElementById("trezult").innerHTML); 
    second = (document.getElementById("inputcalc").innerHTML);
    second = second.slice(1);
    if(second.length == 0){fail;}
    if(first.length == 0){fail;}
  if(zn == "+"){veq = parseFloat(first) + parseFloat(second);
     document.getElementById("inputcalc").innerHTML = Math.round(veq * 10000000000) / 10000000000;
     document.getElementById("trezult").innerHTML = "";} 
  if(zn == "-"){veq = parseFloat(first) - parseFloat(second);
     document.getElementById("inputcalc").innerHTML = Math.round(veq * 10000000000) / 10000000000;
     document.getElementById("trezult").innerHTML = "";}
  if(zn == "/"){veq = parseFloat(first) / parseFloat(second);
     document.getElementById("inputcalc").innerHTML = Math.round(veq * 10000000000) / 10000000000;
     document.getElementById("trezult").innerHTML = "";} 
  if(zn == "*"){veq = parseFloat(first) * parseFloat(second);
     document.getElementById("inputcalc").innerHTML = Math.round(veq * 10000000000) / 10000000000; 
     document.getElementById("trezult").innerHTML = "";} 
}
function backsp(){
  dell = document.getElementById("inputcalc").innerHTML;
  n_length = dell.length;
  if(dell.length !== 0)
  if(document.getElementById("inputcalc").innerHTML !== '-')
    if(document.getElementById("inputcalc").innerHTML !== '+')
      if(document.getElementById("inputcalc").innerHTML !== '*')
        if(document.getElementById("inputcalc").innerHTML !== '/')
  {document.getElementById("inputcalc").innerHTML = dell.substring(0, dell.length - 1);}
   if(document.getElementById("inputcalc").innerHTML == "")
   if(document.getElementById("inputcalc").innerHTML !== '-')
     if(document.getElementById("inputcalc").innerHTML !== '+')
       if(document.getElementById("inputcalc").innerHTML !== '*')
         if(document.getElementById("inputcalc").innerHTML !== '/')
         {document.getElementById("inputcalc").innerHTML = '0';}
}
function com(){
  alt = document.getElementById("inputcalc").innerHTML;
  if(~alt.indexOf('+')){fail;}
  if(~alt.indexOf('*')){fail;}
  if(~alt.indexOf('/')){fail;}
  number = document.getElementById("cm").innerHTML;
  rezult = document.getElementById("inputcalc").innerHTML; 
  if(rezult === "."){document.getElementById("inputcalc").innerHTML = '';}
  n_length = rezult.length;
  if(n_length > 20){fail;}
  if(~rezult.indexOf(".")){
    document.getElementById("inputcalc").innerHTML += '';
  } else{
    document.getElementById("inputcalc").innerHTML += '.';
  } 
}
function p_and_m(){
  strng = document.getElementById("inputcalc").innerHTML;
  string = -(document.getElementById("inputcalc").innerHTML);
  document.getElementById("inputcalc").innerHTML = string;
}
function procent(){
  alt = document.getElementById("inputcalc").innerHTML;
  if(~alt.indexOf('+')){fail;}
  if(~alt.indexOf('*')){fail;}
  if(~alt.indexOf('/')){fail;}
  document.getElementById("inputcalc").innerHTML *= '100';
}
function xsq(){
  alt = document.getElementById("inputcalc").innerHTML;
  if(alt > 0)
  if(~alt.indexOf('+')){fail;}
  if(~alt.indexOf('*')){fail;}
  if(~alt.indexOf('/')){fail;}
  if(n_length > 20){fail;}
  document.getElementById("inputcalc").innerHTML *= document.getElementById("inputcalc").innerHTML;
}
function sqrtx(){
  alt = document.getElementById("inputcalc").innerHTML;
  if(alt > 0){sq = document.getElementById("inputcalc").innerHTML;
  document.getElementById("inputcalc").innerHTML = (sq ** (1/2));}
  else{
    fail;
  }
}
function xx(){
  alt = document.getElementById("inputcalc").innerHTML;
  if(~alt.indexOf('+')){fail;}
  if(~alt.indexOf('*')){fail;}
  if(~alt.indexOf('/')){fail;}
  document.getElementById("inputcalc").innerHTML = 
  (1/document.getElementById("inputcalc").innerHTML);
}