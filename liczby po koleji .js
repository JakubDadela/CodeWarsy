function inAscOrder(arr) {
  for(i=0; i<arr.length; i++){
  let w=arr[i];
  for(j=i+1; j<arr.length; j++){
    if(arr[j]<w) return false;
  }
  }
  return true;
}