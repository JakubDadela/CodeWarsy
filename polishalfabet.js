function correctPolishLetters (string) {
const r=string.split("");
for(i=0; i<r.length; i++){
if(r[i]==='ą') r[i]='a';
if(r[i]==='ć') r[i]='c';
if(r[i]==='ę') r[i]='e';
if(r[i]==='ł') r[i]='l';
if(r[i]==='ń') r[i]='n';
if(r[i]==='ó') r[i]='o';
if(r[i]==='ś') r[i]='s';
if(r[i]==='ż') r[i]='z';
if(r[i]==='ź') r[i]='z';
}
const str=r.join('');
return str;
}