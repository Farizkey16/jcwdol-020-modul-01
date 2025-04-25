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
console.log(text_cut)
let capitalized_words: string[] = [];

for (let i = 0; i < text_cut.length; i++) {
   let capText = text_cut[i].slice(0,1).toUpperCase();
   let endText = text_cut[i].slice(1, text_cut[i].length); 

   let finalText = capText + endText
   capitalized_words.push(finalText)
}

let final_sentence = capitalized_words.join(" ")
console.log(final_sentence);

// 7. Write a code to swap the case of each character from string

let char_test: string = "The QuiCk BrOwN FoX"

let char_split = char_test.split("");
console.log(char_split);

let new_array: string[] = []

for (let i = 0; i < char_split.length; i++) {
    if (char_split[i] !== char_split[i].toLowerCase()) {
        new_array.push(char_split[i].toLowerCase())
    } else {
        new_array.push(char_split[i].toUpperCase())
    }
}

let final_array = new_array.join("")
console.log(final_array);

// 8. Write a code to find the largest of two given integers

let num_one: number = 42;
let num_two: number = 27;

let biggest_number: number = Math.max(num_one, num_two)

console.log(biggest_number);


// 9. Write a conditional statement to sort three numbers

let num_first: number = 38;
let num_second: number = 50;
let num_third: number = 48;

let min_value: number = Math.min(num_first, num_second, num_third);
let max_value: number = Math.max(num_first, num_second, num_third);
let mid_value;

let sort_array: number[] = [];

if (num_first !== max_value && num_first !== min_value) {
    mid_value = num_first;
    sort_array = [min_value, num_first, max_value]
} else if (num_second !== max_value && num_second !== min_value) {
    mid_value = num_second;
    sort_array = [min_value, num_second, max_value]
} else {
    mid_value = num_third;
    sort_array = [min_value, num_third, max_value]
}

console.log(sort_array)

// 10. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data type

let dataType: number | string | boolean | bigint | symbol | undefined = true

if (typeof dataType == 'string') {
    console.log("1");
} else if (typeof dataType == 'number'){
    console.log("2");
} else {
    console.log("3");
}

// 11. Write a code to change every letter a into * from a string of input

let string_input = "An apple a day keeps the doctor away"

let replace_a = string_input.replaceAll("a", "*")
let replace_A = replace_a.replaceAll("A", "*")

console.log(replace_A)