function conCat(a, b){
  let alen = a.length;
  let blen = b.length;
  
  if(a.slice(-1) == b.substring(0,1))
  {
    return a+b.substring(1,blen);
  }
  else
    return a+b;
}