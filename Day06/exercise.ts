// Create a function to calculate Body Mass Index (BMI)

function bmiMeasurement(userWeight: number, userHeight: number) {
    // Height must be converted to meter (in case input is in cm)
    let body_mass_result = userWeight/Math.pow((userHeight/100),2);
    let body_mass_message = ""

    if (body_mass_result < 18.5) {
        body_mass_message = "less weight";
    } else if (body_mass_result > 18.5 && body_mass_result < 24.9) {
        body_mass_message = "ideal";
    } else if (body_mass_result > 25.0 && body_mass_result < 29.9) {
        body_mass_message = "overweight";
    } else if (body_mass_result > 30.0 && body_mass_result < 39.9) {
        body_mass_message = "very overweight";
    } else {
        body_mass_message = "obesity"
    }

    return `Your BMI is ${body_mass_result} and that is ${body_mass_message}`
}


console.log(bmiMeasurement(88,171))


// FizzBuzz problem

function fizzBuzz(limit: number): string{
    const fizzBuzzOutput: any[] = []
    for (let n = 1; n <= limit; n++) {
        if (n % 3 === 0 && n % 5 === 0) {
            fizzBuzzOutput.push("FizzBuzz");
        } else if (n % 5 === 0) {
            fizzBuzzOutput.push("Buzz");
        } else if (n % 3 === 0) {
            fizzBuzzOutput.push("Fizz")
        } else {
            fizzBuzzOutput.push(n);
        }
    }
    return fizzBuzzOutput.join(', ');
}

console.log(fizzBuzz(20));

