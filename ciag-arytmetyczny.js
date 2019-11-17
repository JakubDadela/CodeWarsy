function ArithmeticSequenceSum(a, r, n) {
var sum=0;
  for(i=1; i<=n; i++){
  sum+=a;
  a+=r;
  }
  return sum;
}