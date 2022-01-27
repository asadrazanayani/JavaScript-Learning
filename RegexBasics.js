let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString);
console.log(result);


// JavaScript has multiple ways to use regexes. One way to test a regex is using the .test() method. The .test() method takes the regex, applies it to a string (which is placed inside the parentheses), and returns true or false if your pattern finds something or not.

let petString = "James has a pet cat.";
let petRegex = /cat|dog|bird|fish/i; 
let result2 = petRegex.test(petString);
console.log(result2);

// You can also search for more than just two patterns. You can do this by adding more patterns with more OR operators separating them, like /yes|no|maybe. You can match both cases using what is called a flag. There are other flags but here you'll focus on the flag that ignores case - the i flag. You can use it by appending it to the regex. An example of using this flag is /ignorecase/i. This regex can match the strings ignorecase, igNoreCase, and IgnoreCase.

//Match

let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result3 = extractStr.match(codingRegex); // Change this line
console.log(result3.index);

// To use the .match() method, apply the method on a string and pass in the regex inside the parentheses.

// To search or extract a pattern more than once, you can use the g flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi; // Change this line
let result4 = twinkleStar.match(starRegex); // Change this line
console.log(result4);

// The wildcard character . will match any one character. The wildcard is also called dot and period. You can use the wildcard character just like any other character in the regex. For example, if you wanted to match hug, huh, hut, and hum, you can use the regex /hu./ to match all four words.

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result5 = unRegex.test(exampleStr);
console.log(result5);

// You learned how to match literal patterns (/literal/) and wildcard character (/./). Those are the extremes of regular expressions, where one finds exact matches and the other matches everything. There are options that are a balance between the two extremes.

// You can search for a literal pattern with some flexibility with character classes. Character classes allow you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets.

// For example, you want to match bag, big, and bug but not bog. You can create the regex /b[aiu]g/ to do this. The [aiu] is the character class that will only match the characters a, i, or u.

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result6 = quoteSample.match(vowelRegex); // Change this line
console.log(result6);

// You saw how you can use character sets to specify a group of characters to match, but that's a lot of typing when you need to match a large range of characters (for example, every letter in the alphabet). Fortunately, there is a built-in feature that makes this short and simple.
// Inside a character set, you can define a range of characters to match using a hyphen character: -.
// For example, to match lowercase letters a through e you would use [a-e].

let quoteSample2 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/gi; // Change this line
let result7 = quoteSample.match(alphabetRegex); // Change this line
console.log(result7);

// Using the hyphen (-) to match a range of characters is not limited to letters. It also works to match a range of numbers.

// For example, /[0-5]/ matches any number between 0 and 5, including the 0 and 5.

let quoteSample3 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s]|[2-6]/gi; // Change this line
let result8 = quoteSample.match(myRegex2); // Change this line
console.log(result8);

// To create a negated character set, you place a caret character (^) after the opening bracket and before the characters you do not want to match.
// For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / and white space are matched - the negated vowel character set only excludes the vowel characters.

let quoteSample4 = "3 blind mice.";
let myRegex3 = /[^0-9|aeiou]/gi; // Change this line
let result9 = quoteSample4.match(myRegex3); // Change this line
console.log(result9);

// Sometimes, you need to match a character (or group of characters) that appears one or more times in a row. This means it occurs at least once, and may be repeated.
// You can use the + character to check if that is the case. Remember, the character or pattern has to be present consecutively. That is, the character has to repeat one after the other.
// For example, /a+/g would find one match in abc and return ["a"]. Because of the +, it would also find a single match in aabc and return ["aa"].

let difficultSpelling = "Mississippi";
let myRegex4 = /s+/gi; // Change this line
let result10 = difficultSpelling.match(myRegex4);
console.log(result10);

// The last challenge used the plus + sign to look for characters that occur one or more times. There's also an option that matches characters that occur zero or more times.
// The character to do this is the asterisk or star: *.

const chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!"
// Only change code below this line
let chewieRegex = /Aa*/; // Change this line
// Only change code above this line
let result11 = chewieQuote.match(chewieRegex);
console.log(result11);

// // In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match. The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.
// You can apply the regex /t[a-z]*i/ to the string "titanic". This regex is basically a pattern that starts with t, ends with i, and has some letters in between.
// Regular expressions are by default greedy, so the match would return ["titani"]. It finds the largest sub-string possible to fit the pattern.
// However, you can use the ? character to change it to lazy matching. "titanic" matched against the adjusted regex of /t[a-z]*?i/ returns ["ti"].
// Note: Parsing HTML with regular expressions should be avoided, but pattern matching an HTML string with regular expressions is completely fine.