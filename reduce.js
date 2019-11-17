function arrayPlusArray(arr1, arr2) {
 const arr = arr1.concat(arr2);
const n = arr.reduce((x,y) => {
return x+y;
},0);
return n;
}