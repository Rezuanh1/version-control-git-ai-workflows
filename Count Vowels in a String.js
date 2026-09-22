let text = "Hello World";
let count = 0;

for (let char of text.toLowerCase()) {
    if ("aeiou".includes(char)) {
        count++;
    }
}

console.log("Number of vowels: " + count);