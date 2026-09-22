function isPalindrome(word) {
    let reversed = word.split("").reverse().join("");

    return word === reversed;
}

let word = "racecar";

console.log("Word:", word);
console.log("Is Palindrome:", isPalindrome(word));