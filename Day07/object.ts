// Object: tipe data yang mampu menampung sekumpulan tipe data lain berdasarkan nama property

/**
 * aturan penulisan:
 * const dataObject = {
 *      namaProperty: value,
 *      username: "Edi",
 *      age: 17,
 *      isActive: true
 * }
 */

type TStudent = { // ini harus di-update type-nya untuk bisa nambah property baru di object
    fullName: string,
    age: number,
    isActive: boolean,
    grade: string[],
    // phone: string
    phone?: string // this could be done to prevent empty values
}


const student: TStudent = {
    fullName: "Farizky",
    age: 20,
    isActive: true,
    grade: ["A", "B", "C"],
    phone: " "
}

console.log(student.age);
console.log(student.fullName);
console.log(student["fullName"])

student.fullName = "Ishihama"
console.log(student.fullName)
console.log(student)

// looping object: for... in

for(const propertyName in student) {
    console.log(propertyName);
    console.log(student[propertyName])
}

// ARRAY of OBJECT
// Array yang berisi data-data dengan tipe object

