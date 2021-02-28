// write your JS here
// remember to always test in the browser
// to see if everything works correctly
function greaterNum(num1, num2) {

    if(num1 > num2){
        window.alert("The greater number of " + num1 + " and " + num2 + " is " + num1)
    }else if(num2 < num1){
        window.alert("The greater number of " + num2 + " and " + num1 + " is " + num2)
    }else{
        window.alert("The number are the same")
    }
}

greaterNum(10, 5)
greaterNum(250,100)
