function right2(str){
  let len = str.length;
  
  let start = str.substring(0,len-2);
  let end = str.substring(len-2,len);
 
  return end+start;
}