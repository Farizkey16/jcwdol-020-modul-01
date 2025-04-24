// Soal slide 3 (Git)

// 1. Write a code to display the multiplication table of a given integer

let multiply_number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${multiply_number} x ${i} = ${multiply_number * i}`)
}

// 2. Write a code to check whether a string is a palindrome or not

let palindromeCheck: string = "racecar";

let reverseString = palindromeCheck.toLowerCase().split('').reverse().join('')

if (palindromeCheck === reverseString) {
    console.log(true)
} else {
    console.log(false)
}

// 3. Write a code to convert centimeter to kilometer

let cm_input = 10000;
let cm_to_km = cm_input/100000;

console.log(`${cm_input} cm is ${cm_to_km} KM`)

// 4. Write a code to format number as currency

let num_currency = 100000;
console.log(num_currency.toLocaleString("id-ID", 
    {   style: "currency",
        currency: "IDR",
        minimumFractionDigits: 2
    }
)
)

// 5. Write a code to remove the first occurence of a given "search string" from a string

let text_input: string = "Huge thank you to everyone involved."

let search_term: string = "ge th"

let firstIndex = text_input.indexOf(search_term); // Finding the first index of the word

let text_slice_pre = text_input.slice(0, firstIndex) // slice from start to the first index of the word
let text_slice_post = text_input.slice(firstIndex + search_term.length) // slice from the end of the word to the end of the word

console.log(text_slice_pre + text_slice_post)

// 6. Write a code to capitalize the first letter of each word in a string

let text_to_capitalize: string = "can i have some tea"
let text_cut = text_to_capitalize.split(" ")
let capitalized_words: string[] = [];

for (let i = 0; i < text_cut.length; i++) {
   let capText = text_cut[i].slice(0,1).toUpperCase();
   let endText = text_cut[i].slice(1, text_cut[i].length); 

   let finalText = capText + endText
   capitalized_words.push(finalText)
}

let final_sentence = capitalized_words.join(" ")
console.log(final_sentence)