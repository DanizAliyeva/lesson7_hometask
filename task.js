// if, else if, else task
//note for myself-https://stackoverflow.com/questions/53407408/are-multiple-comparison-operators-possible-in-javascript
let grade=55

if(grade>=91 && grade<=100){
    console.log("You get an A!");
} else if(grade>=81 && grade<91){
    console.log("You get a B!");
}else if(grade>=71 && grade<81){
    console.log("You get a C!");
}else if(grade>=61 && grade<71){
    console.log("You get a D!");
}else if(grade>100 || grade<0){
    console.log("It is not a relevant value for a grade!");
}
else{
    console.log("F");
}

//ternary operator
let age=39
let licence= (age>=16)? "You are eligible for getting a driver's license": "You are not eligible"
console.log(licence);


//discount
const purchase=45
const occupation="student"
var discount

if (purchase>=100){
    discount=20
} else if(purchase>=60){
    discount=15
}else if(purchase<60 && occupation==="student"){ // if purchase is smaller than 60, there is no discount unless you are a student
    discount=10                                    // there is no additional discount for students if purchase is grater than 60 as some discount will be applied
}else{
    discount=0
}
console.log(`discount is ${discount} %`); //note-this must be used with backtick

//days of month
const month=3
let days

if (month<1 || month>12){
    days="invalid input for month"
}else if (month==4 || month==6 || month==9 || month==11){
    days="There are 31 days in this month"
}else if(month==2){
    days="There are 28 or 29 days in this month"
} else{
    days="There are 30 days in this month"
}
console.log(days);


//task5
const num1=4 
const num2="2"
const arr=["apple","berry","cherry"]
const b=true
const name="Deniz"
if (num1**num2>15 && (arr.length<5||!b) && num2-num1===-2 || num2+num1===24){
    console.log("condition is true");
    return
}

console.log("condition is false");
//Note-comparing NaN to anything, including itself, will always result in false