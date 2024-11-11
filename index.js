"use strict"

function smallestOf3 (number1,number2,number3){
    if(number1<number2 && number1<number3){
        alert("Number1 is the smallest number")
    } else if(number2<number1 && number2<number3){
        alert("number2 is the smallest")
    } else{
        alert("number3 is the smallest number")
    }
}

smallestOf3(5,2,83)
smallestOf3(10,46,34)


function positiveNegativeZero (number1){
    if(number1<0){
        alert("number is negative")
    }
    else if(Number(number1)===0){
        alert("Number is zero")
    }
    else{
        alert("number is positive")
    }
}
