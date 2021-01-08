
const result = document.getElementById("result")
const input = document.getElementById("numero")
const plus = document.getElementById("plus")
const minus = document.getElementById("minus")

let num = 0;
function addNum (e) {
    e.preventDefault();
    num += parseInt(input.value);
    result.innerText = num;
    if (num >= 0){
        result.style.color ="black";
    
    }
}
function minusNum (e) {
    e.preventDefault();
    num -= parseInt(input.value);
    result.innerText = num;
    if (num < 0){
        result.style.color ="red";
    
    }
}
plus.addEventListener("click", (e) => addNum(e))
minus.addEventListener("click", (e) => minusNum(e))
//create and if statement that adds or subtracts input depending what is pressed
//display result in var (resultado) 

