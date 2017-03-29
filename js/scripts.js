var vowels = ["a","e","i","o","u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
var newArray = [];



var vowelHunter = function(input){
  var charArray = input.split(" ");
  charArray.forEach(function(word){
    vowels.forEach(function(vowel){
      if(input.indexOf(vowel) === 0){
        alert(word + "way");
      }
    });
  });
}

var conHunter = function(input){
  var charArray = input.split(" ");
  charArray.forEach(function(word){
    consonants.forEach(function(consonant){
      if(input.indexOf(consonant) === 0){
        var newWord = word.substr(1) + word.substr(0,1) + "ay";

        alert(newWord);
      }
    });
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
