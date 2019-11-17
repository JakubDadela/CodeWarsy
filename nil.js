function findLongest(array){
  const sl=[]; 
  for(i=0; i<array.length; i++){ 
  sl[i]=array[i].toString();
  }
  console.log(sl);
  var max = sl[0]
  for(i=0; i<sl.length; i++){
  if(max.length<sl[i].length) max=sl[i];
  }
  console.log(max);
  var w=parseInt(max,10);
  return w;
}