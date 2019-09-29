// Code your solutions in this file
const friends = ["Ada", "Brendan", "Ali"];
function writeCards(names,eName){
  for(let i = 0; i < names.length; i++){
    console.log(`Thank you, ${names[i]}, for the wonderful ${eName} gift!`);
  }
  return names;
}
writeCards(friends, "birthday");

function countdown(num){
  while (num >= 0) {
    console.log(num);
    num--;
  }
}

countdown(10);
