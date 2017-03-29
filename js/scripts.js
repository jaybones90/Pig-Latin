var vowels = ["a","e","i","o","u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
//


var pigLatin = function(input){
  var vowelArray = input.split(" ");
  vowelArray.forEach(function(word){
    vowels.forEach(function(vowel){
      if(word.indexOf(vowel) === 0){
        console.log(word + "way");
      }
    });
  });
  var conArray = input.split(" ");
  conArray.forEach(function(word){
    console.log(word);
      for(i=0; i < word.length; i++){
        if(consonants.indexOf(word[0]) >= 0){
          word = word.substr(1) + word.substr(0,1);
          console.log(word);
        }
    }
    word = word + "ay";
    console.log(word);
  });
}


$(function(){
  $("button").click(function(e){
    e.preventDefault();
    var userInput = $("input").val();
    pigLatin(userInput);
  });
});







































// var input = "ffish";
// var pigArray = [];
//
// var pigLatin = function(input){
// 	var inputArray = input.split(" ");
//
//   var chars = [];
//   inputArray.forEach(function(word){
//   	chars = word.split("");
//     if(chars[0] === "a"
//     || chars[0] === "e"
//     || chars[0] === "i"
//     || chars[0] === "o"
//     || chars[0] === "u"){
//       chars.push("a", "y");
//       charString = chars.join("");
// 			pigArray.push(charString);
//     }
//     else if(chars[0] != "a"
//     || chars[0] != "e"
//     || chars[0] != "i"
//     || chars[0] != "o"
//     || chars[0] != "u"){
//       for(i = 0; i <= chars.length-1; i++){
//         if(chars[0] === "a"
//         || chars[0] === "e"
//         || chars[0] === "i"
//         || chars[0] === "o"
//         || chars[0] === "u"){
//           chars.push(chars[i]);
//           break;
//         }
//         else{
//           chars.push(chars[0]);
//           chars.splice(0, 1);
//         }
//       }
//       charString = chars.join("");
// 			pigArray.push(charString);
//     }
//     else {
//     	pigArray.push(word);
//     }
//   });
//   console.log(pigArray);
// }
//
// pigLatin(input);
