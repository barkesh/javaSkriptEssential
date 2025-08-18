let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
    document.getElementById('result').innerText = `The area of the rectangle is: ${area}`;
}


let firstGrocery;
let secondGrocery;
let thirdGrocery;

function groceryTracker(firstGrocery, secondGrocery, thirdGrocery){
    firstGrocery = parseFloat(document.getElementById('firstGrocery').vlue) || 0;
    secondGrocery = parseFloat(document.getElementById('secondGrocery').value) || 0;
    thirdGrocery = parseFloat(document.getElementById('thirdGrocery').value) || 0;

    let totalAmount = firstGrocery + secondGrocery + thirdGrocery;
    document.getElementById('total').innerText = `The total amount is: ${totalAmount}`;
}



console.log("Hello i'm JavaScript");