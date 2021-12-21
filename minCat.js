function minCat(a, b){
  if (a.length == b.length)
    return a+b;
  
  if (a.length > b.length){
    let diff = a.length - b.length;

    return a.substring(diff, a.length) + b;
 
  } else {
    let diff = b.length - a.length;

    return a + b.substring(diff, b.length);

  }

}