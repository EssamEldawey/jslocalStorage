window.localStorage.setItem("newemp",["add name","add job",50,"upload pic","notes"]);

console.log(window.localStorage.getItem("newemp"));
// document.getElementById("sebha").addEventListener("click", function(){
//     let x = 0;
//     //document.getElementById("total").innerHTML = "   ";
//     document.getElementById("total").innerText = x++;
// })
let x = window.localStorage.getItem('total');
document.getElementById("total").innerHTML = x
function calcu(){
    x++;
    window.localStorage.setItem("total", x);
    document.getElementById("total").innerHTML = x ;
    
}