function scuberGreetingForFeet(ride){
  let text;
  if (ride <= 400) {
    text = ('This one is on me!');
  }
    else if (ride > 2000 && ride <= 2500) {
    text = ('I will gladly take your thirty bucks.')
  } else {
  text = ('No can do.')}
  console.log(text);
  return text;
}

function ternaryCheckCity(city){
  let  message;
  if (city === 'NYC') {
    message = 'Ok, sounds good.';
  }
  else if (city === 'Pittsburgh') {
    message = 'No go.';
  }
  console.log(message)
  return message;
}

function switchOnCharmFromTip(tip){
let txt;
if (tip === 'generous') {
  txt = "Thank you so much.";
}
else if (tip === 'not as generous') {
  txt = 'Thank you.';
}
else {
  txt = 'Bye.';
}
console.log(txt)
return txt;
}