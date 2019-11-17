function inAscOrder(arr) {
for(i=1; i<arr.length; i++){
if(arr[i-1]>arr[i])return false;
}
return true;
}