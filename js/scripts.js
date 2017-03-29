var input = "t";
var pigArray = [];

var pigLatin = function(input){
	var inputArray = input.split(" ");

  var chars = [];
  inputArray.forEach(function(word){
  	chars = word.split("");
    if(chars[0] === "a" || chars[0] === "e" || chars[0] === "i" || chars[0] === "o" || chars[0] === "u"){
      chars.push("a", "y");
      charString = chars.join("");
			pigArray.push(charString);
    }
    else if(chars[0] != "a" || chars[0] != "e" || chars[0] != "i" || chars[0] != "o" || chars[0] != "u") {

    	chars.push(chars[0], "a", "y");
      chars.splice(0, 1);
      charString = chars.join("");
			pigArray.push(charString);
    }
    else {
    	pigArray.push(word);
    }
  });
}

pigLatin(input);
console.log(pigArray);
