String.prototype.isUpperCase = function() {
for(i=0; i<this.length; i++){
if(this.charCodeAt(i) >= 97 && this.charCodeAt(i) <= 122) return false;
}
return true;
}