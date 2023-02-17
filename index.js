let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") 

// Pass in argument. This means we are giving the function  some data to work with. We are specifying the id of the element that we want to grab. If we did not do that the function will not know what to look for. If this was for example a chef that is going to cook a meal for you, the arguments you would pass in would be the ingredients. 

let count = 0;

console.log(countEl) // if we didn't do this step the log function wouldn't know what to log.
console.log(saveEl)


function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count)
}

// The section above was created to count the number of people to enter the subway and get on the train, this is done by taking the button ID from our HTML and creating a variable that = document.getElementById("count-el"), what this is doing is pulling the id name so that java script can start counting the passengers with the button attached to that id name. 

// Next we set the count to 0.

// Then we are creating a function so that our button can begin to actually count the increments. We do this by making count = to itself + 1. Then we want to take our id name countEl and attach "innerText" to make it = to count which has been declared "count + 1" previously. We do this because we want the text inside the tags in our html to be the count. All of this together allows the count to increase when the button is pressed.

// a shortened way to do this is by using +=, for example count += 1 will get us the same result as count = count + 1




function save() {
    let prevEntry = count + " - " 
    saveEl.textContent += prevEntry 
    countEl.textContent = 0 
    count = 0 
    console.log(prevEntry);
}
 // (1) In the above I created the previous entries by creating a new variable prevEntry and setting that to = the count plus the dash that will be between the numbers. I took our html id element "saveEl" combined with .textContent. += is a short hand way to write, for example: saveEl.textContent = saveEl.textContent + prevEntry. The += is just a way to shorten your code. 

// (2) The second part of our save function is setting the count back to 0 when hitting save. I did this by taking countEl.textContent and setting that back to 0. However, that line of code alone doesn't solve the overall issue of the count going back to 0. To keep the count at correct when we hit our increment button again we first have to set our count back to 0 within our function with count = 0.


