// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
  if (num <= 0){
    return "";
  }
  else{
    return str  + repeatStringNumTimes(str, num - 1);
  }

  // return str;
}

repeatStringNumTimes("abc", 3);