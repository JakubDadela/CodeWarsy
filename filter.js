function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  for(i=0; i<birds.length; i++){
  if(geese.includes(birds[i]))  delete birds[i];
  }
  const c = birds.filter(function(val){
  return val!=null;
  });
  return c;
  }