// Date: class dari JS untuk mendapatkan informasi waktu

let now: Date = new Date();
console.log(now); // 2023-10-02T08:00:00.000Z
console.log(now.toLocaleString("id-ID"))
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds())
console.log(now.getMilliseconds());
console.log(now.getDate());
console.log(now.getMonth()); // membaca dari 0 - 11 instead of 12, maka pasti kurang 1
console.log(now.getDay()); // 0 itu hari minggu, hanya 0 - 6
console.log(now.getTime()); // dari sekitar 1970-an
