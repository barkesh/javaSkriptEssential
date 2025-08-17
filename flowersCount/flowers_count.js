let count =  0;

function increaseCount() {
    count++;
    displayCount(); // calling second funtion in first function
    checkCountValue(); // calling third funtion in first function
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
