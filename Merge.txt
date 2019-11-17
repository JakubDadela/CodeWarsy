  function stringMerge(string1, string2, letter){
const place1=string1.indexOf(letter);
const place2=string2.indexOf(letter);
return string1.slice(0,place1)+string2.slice(place2);
}