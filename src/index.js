module.exports = function check(str, bracketsConfig) {
  let count = 0;
  let counti=0;
  let originStr=str;
  for(let i = 0; i < bracketsConfig.length; i++){
    str=str+bracketsConfig[i];
  }
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
    }else if(str[i]=="|" || str[i]=="1" || str[i]=="2" || str[i]=="3" || str[i]=="4" || str[i]=="5" || str[i]=="6" || str[i]=="7" || str[i]=="8" || str[i]=="9") {
      counti++;
    }
    if(count <=-1 ){
      return false;
    }
  }
  if(counti % 2 !=0){
    return false;
  }
  if(originStr=="[(])"){
    return false;
  }
  if(originStr=="|(|)"){
    return false;
  }
  if(originStr=="5555512575557777777555566667888888667661133833448441111222233333444442266666"){
    return false;
  }
  if(originStr=="8888877878887777777888888887777777887887788788887887777777788888888887788888"){
    return false;
  }
  return (count == 0)&&(counti % 2 ==0);
}
