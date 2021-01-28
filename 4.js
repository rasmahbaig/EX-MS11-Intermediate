//task 1
function getEvenNumbers() {
    var given = [1,2,3,4,5,6,7,8,9];
    var even = given.filter(number => number % 2 == 0);
    alert('Even Numbers: ' + even);
}

//task 3
var cabs = ["careem", "uber", "bykea"];
function cabLoop() {
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            if (i!==j){
                document.write(cabs[i] + " and " + cabs[j] + " are good services." + "<br>")
            }
        }
    }
}

//task 4
var snacks = ["cake", "apple pie", "cookie", "chips", "patties"];
function foodItems() {
    var check = prompt("Enter any food item to check the availibility?")
    if (snacks.includes(check.toLowerCase())) {
        alert("yay we have it!")
    } 
    else {
        alert("Oops! we don't have it :(")
    }
}

//task 5
function lower() {
    var yahoo = prompt("Enter any word in upper case.")
    alert(yahoo.toLowerCase())
}

//task 6
function hydToIslam() {
    let result = "Hyderabad".replace("Hyder", "Islam");
    alert(result)
}

//task 7(i)
function sum () {
    const num1 = parseInt(prompt("Enter the first integer?"))
    const num2 = parseInt(prompt("Enter the second integer?"))
    var add = (num1 + num2)
    return alert (add)
}

//task7(ii)
function sub () {
    const num1 = (prompt("Enter the first integer?"))
    const num2 = (prompt("Enter the second integer?"))
    var subtract = (num1 - num2)
    return alert (subtract)
}

//task(iii)
function mul () {
    const num1 = (prompt("Enter the first integer?"))
    const num2 = (prompt("Enter the second integer?"))
    var multiply = (num1 * num2)
    return alert (multiply)
}

//task(iv)
function div () {
    const num1 = (prompt("Enter the first integer?"))
    const num2 = (prompt("Enter the second integer?"))
    var divide = (num1 / num2)
    return alert (divide)
}
