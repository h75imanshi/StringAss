// Q1. Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of 
// character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.

// Answer
function countCharacters(S) {
    let B = [0, 0]; // Initialize B[0] and B[1] to 0

    // Iterate through the string S
    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') {
            B[0]++; // Increment count for 'A'
        } else if (S[i] === 'D') {
            B[1]++; // Increment count for 'D'
        }
    }

    return B; 
}

// Example usage
let S = "AbaDd";
let result = countCharacters(S);
console.log("Count of A and D:", result); 

// Q2 .Count the Heads
// Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how 
// many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds 
// out the count of characters that occur more than once in the string
// const s='prepbytes';

// Answer
function countRepeatedCharacters(S) {
    let charCount = {}; 
    let repeatedCount = 0; 
    // Count the frequency of each character
    for (let char of S1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Check how many characters occur more than once
    for (let char in charCount) {
        if (charCount[char] > 1) {
            repeatedCount++;
        }
    }

    return repeatedCount;
}

const S1 = "prepbytes";
const result1 = countRepeatedCharacters(S1);
console.log("Count of characters that occur more than once:", result1);


// Q3. Count the Vowels
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
// given string.

// Answer
let str="Prepbytes";
let vowel=0;
  for(let i=0; i<str.length; i++){
    if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u' || str[i]=='A' || str[i]=='E' || str[i]=='I' || str[i]=='O' || str[i]=='U'){
       vowel++;
  }
 }
 console.log(vowel);

//  Q4. Concatenate the Strings
// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
// concatenation of both the given strings. 

// Answer 4 
 function concatStrings(s1,s2){
    let s3=s1+s2;

    return s3;
}

const s1="Prep";
const s2="bytes";

const output=concatStrings(s1,s2);
console.log(output);

// Q5. Find Length
// You are given a string S, and your task is to return the length of the string S.


function findLength(S3) {
    return S3.length; // Return the length of the string
}

// Example usage
let S3 = "PrepBytes is Awesome";
let length = findLength(S3);
console.log("The length of the string is:", length);


// Q7. Join Strings
// You are given two strings S and P, and your task is to concatenate them and return the concatenated string

let str1="PrepBytes";
let str2="Technologies";

 let result2=str1+str2;
console.log(result2);

// Q9. Reverse the String
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters.

 let string="I am utkarsh raj";

function reverseString(str){
    let reversed="";
     for(let i=str.length-1; i>=0; i--){
       reversed=reversed+str[i];
    }
    return reversed;
}

console.log(reverseString(string));

// Q11. String Replace
// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.

 let str3='Hi, I am You.';
 let newStr=str3.replace('You', 'Prepbytes');
console.log(newStr);

// Q12. Split the String
// You are given a string S, Your task is to split the string with respect to spaces.

 const string2='I am utkarsh raj';

console.log(string2.split(' '));

// Q13. Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
// consonants in the given string.

 let str4="Prepbytes";
 let count_vowel=0;
 let count_const=0;

 for(let i=0; i<str4.length; i++){
       if(str4[i]=='a' || str4[i]=='e' || str4[i]=='i' || str4[i]=='o' || str4[i]=='u' || str4[i]=='A' || str4[i]=='E' || str4[i]=='I' || str4[i]=='O' || str4[i]=='U'){
            count_vowel++;
        }else{
            count_const++;
       }
    }
     console.log(count_vowel,count_const);
