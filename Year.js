function nextHappyYear(year){
while(/(.).*\1/.test(year + 1)) year++;
year++;
return year;
}