
let count =  0;


function increaseCount() {
    count++;
    displayCount(); // calling second function in first function
    checkCountValue(); // calling third function in first function
}


function displayCount() {
    document.getElementById('countDisplay').innerHTML=count;
}

function checkCountValue() {
    if (count === 10) {
        alert("Your instagram acount gained 10 follower!");
    } else if (count === 20) {
        alert("Your instagram acount gained 20 follower!");
    } else if (count > 20) {
        alert("You got popular!");
    }
}


function reset() {
    count = 0;
    displayCount();
    alert("Followers count has been reset.");
}