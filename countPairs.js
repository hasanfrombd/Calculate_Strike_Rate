

function countPairs(){
    userValue = document.getElementById("pairs").value
    let count = 0;
    for(let i = 0; i < userValue.length -1; i += 2) {
        if (parseInt(userValue[i + 1]) % 2 == 0) {
            count++
        }
    }
    return count
    
}

function paircount(){
    const result = countPairs();
document.getElementById('resultOfCount').innerHTML = result;
}



/*
function countPairs() {
    // Get the value from the input field with ID "pairs"
    const userValue = document.getElementById("pairs").value;

    // Ensure the input is not empty and contains valid characters
    // if (!userValue || isNaN(userValue)) {
    //     alert("Please enter a valid numeric string.");
    //     return 0;
    // }

    let count = 0;

    // Loop through the string, checking pairs of characters
    for (let i = 0; i < userValue.length - 1; i += 2) {
        const nextChar = parseInt(userValue[i + 1], 10);
        if (!Number.isNaN(nextChar) && nextChar % 2 === 0) {
            count++;
        }
    }

    // Return the count of pairs
    return count;
}

function displayResult() {
    // Call countPairs and get the result
    const result = countPairs();

    // Display the result in the HTML element with ID "resultOfCount"
    document.getElementById('resultOfCount').innerHTML = result;
}
*/
 
