module.exports = function check(str, bracketsConfig) {
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i]=="("){
      count++;
    }else if(str[i]=="["){
      count++;
    }else if(str[i]=="{"){
      count++;
    }else if(str[i]==")"){
      count--;
    }else if(str[i]=="]"){
      count--;
    }else if(str[i]=="}"){
      count--;
    }
    if(count <=-1 ){
      return false;
    }
  }
  return count == 0;
}
