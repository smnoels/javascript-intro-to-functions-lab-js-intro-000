function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase() ;
}

function logShout(string) {
   string = string.toUpperCase();
  console.log(string) ;
}

logShout('hello');


function logWhisper(string) {
  string = string.toLowerCase();
  console.log(string);
}
logWhisper('HELLO');


function sayHiToGrandma(string){
if (string.toLowerCase() === string){
return “I can’t hear you!”;
} if (string.toUpperCase() ===string){
return “YES INDEED!”;
} if (string === ‘I love you, Grandma.’){
return “I love you, too.”;
}
}
