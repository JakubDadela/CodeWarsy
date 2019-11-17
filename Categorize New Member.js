function openOrSenior(data){
 const tab=[];
 for(i=0; i<data.length; i++){
 if(data[i][0] >= 55 && data[i][1] > 7) tab[i]='Senior';
 else tab[i]='Open';
 }
 console.log(tab);
 return tab;
}