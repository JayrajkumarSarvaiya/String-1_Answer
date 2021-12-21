function nTwice(str, n){
  let len = str.length;
  return str.substring(0,n)+str.substring(len-n,len);
}