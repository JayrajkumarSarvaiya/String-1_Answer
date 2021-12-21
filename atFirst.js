function atFirst(str){
  let len = str.length;
  let string = '@';
  
  if(len == 0)
  {
    return string+string;
  }
  else if(len >= 2)
  {
    return str.substring(0,2);
  }
  else
  {
    return str.substring(0,1)+string;
  }
}