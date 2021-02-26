// write your JS here
// remember to always test in the browser
// to see if everything works correctly

function tellFortune(work, location, partner, children) {
    this.work = work 
    this.location = location
    this.partner = partner
    this.children = children
    this.Fortune = function(){
    window.alert("You will be a " + this.work +" in " + this.location +", and married to " + this.partner + " with " + this.children +" kids.");   
    }
}


var work = prompt("your work");
var loc = prompt("where do you want work");
var partner = prompt("write your partner name ");
var children = prompt("how many children you have"); 
     

var zaman = new tellFortune(work, loc, partner, children);
zaman.Fortune()