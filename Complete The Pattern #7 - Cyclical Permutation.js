function pattern(n){
 var output="";
   var w=1;
   while(w<=n){
    var c=w;
   for(i=0; i<n; i++){
   output+=c;
   if(c==n) c=1;
   else c+=1;
   }
   if(w==n) break;
   output+="\n";
   w+=1;
   }
 return output;
}