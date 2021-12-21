function comboString(a, b){
  let first = a.length;
  let second = b.length;
  
  if(first < second)
  {
    return a+b+a;
  }
  else(second < first)
  {
    return b+a+b;
  }
}