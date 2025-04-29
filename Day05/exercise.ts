// Write a function to remove all odd numbers in an array and return a new array that contains even numbers only

let init_array: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let post_array: number[] = [];

for (let i = 0; i < init_array.length; i++) {
    if (init_array[i] % 2 == 0) {
        post_array.push(init_array[i])
    } else {
        continue;
    }
}

console.log(post_array);
