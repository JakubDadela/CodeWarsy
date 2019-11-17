function highAndLow(numbers){
  const tab=numbers.split(" ");
  const tab2=[];
  for(i=0; i<tab.length; i++){
    tab2[i]=parseInt(tab[i],10);
  }
  var min=tab2[0];
  var max=tab2[0];
  for(i=0; i<tab2.length; i++){
  if(tab2[i]>max) max=tab2[i];
  if(tab2[i]<min) min=tab2[i];
  }
  var mx=max.toString();
  var mn=min.toString();
  return mx+" "+mn;
}