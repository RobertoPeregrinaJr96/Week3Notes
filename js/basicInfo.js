



console.log("String Interpolation")

/*
When creating a sting we have the option to replace quotation marks with back ticks where they allow us to insert variables by using the $ character followed by curly brackets {}
*/

const bigString = (word) => {
    let sentence = `Hello ${word}, have a good morning `
    return console.log(sentence)
}

bigString("April")
