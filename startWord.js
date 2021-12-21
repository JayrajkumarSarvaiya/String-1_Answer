function startWord(str, word){
  let lenStr = str.length;
  let lenWord = word.length;

  if (lenStr == 0)
    return "";
  
  if (lenWord > lenStr)
    return "";
     
  if (word.length == 1)
    return str.substring(0,1);
  
  else if (str.substring(1,lenWord) == (word.substring(1,lenWord)))
    return str.substring(0,lenWord);
  else
    return "";

}