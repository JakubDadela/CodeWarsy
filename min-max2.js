function highAndLow(numbers){
  const d=numbers.split(' ').map(Number);
  return Math.max.apply(0,d) +" "+Math.min.apply(0,d);
}