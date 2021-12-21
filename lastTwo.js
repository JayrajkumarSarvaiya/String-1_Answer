function lastTwo(str){
  let len = str.length;
  if(len<2)
    return str;
  else
    return str.substring(0,len-2)+str.charAt(len-1)+str.charAt(len-2);
}