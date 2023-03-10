let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // this is called a pass in argument, more explanation below on line 40.

let count = 0; // setting the count to 0

console.log(countEl) // if we didn't do this step the log function wouldn't know what to log.
console.log(saveEl)


function increment() {
    count += 1;
    countEl.textContent = count;
    console.log(count)
}

// The section above was created to count the number of people to enter the subway and get on the train, this is done by taking the button ID from our HTML and creating a variable that = document.getElementById("count-el"), what this is doing is pulling the id name so that java script can start counting the passengers with the button attached to that id name. 

// Next we set the count to 0. (Line 5)

// Then we are creating a function "increment ()" starting on line 11 so that our button can begin to actually count the increments. We do this by making count = to count + 1. Then we want to take our id name countEl and attach "innerText" to make it = to count. We do this because we want the text inside the tags in our html to be the count. All of this together allows the count to increase when the button is pressed.

//* TIP * A shortened way to do this is by using +=, for example count += 1 will get us the same result as count = count + 1




function save() {
    let prevEntry = count + " - " 
    saveEl.textContent += prevEntry 
    
    countEl.textContent = 0 
    count = 0 
    
    console.log(prevEntry);
}
 // (1) In the above I created the previous entries by creating a new variable 'prevEntry' and setting that to = the count + the dash that will be between the numbers (" - " on line 28. I took the html id element "saveEl" combined with .textContent on line 29.

// (2) The second part of our save function (on lines 31 & 32) is setting the count back to 0 when hitting save. I did this by taking countEl.textContent and setting that back to 0. However, that line of code alone doesn't solve the overall issue of the count going back to 0. To keep the count at correct when we hit our increment button again we first have to set our count back to 0 within our function with count = 0.


// = document.getElementById("count-el") is called a Pass in argument. This means we are giving the function  some data to work with. We are specifying the id of the element that we want to grab. If we did not do that the function will not know what to look for. If this was, for example, a chef that is going to cook a meal for you, the arguments you would pass in would be the ingredients. 