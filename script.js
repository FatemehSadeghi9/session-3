// var showonsubmit=(event)=>{
//     event.preventDefault()
//     document.getElementById("information").innerHTML="loading"
//     document.getElementById('information').style.color="red"
//     setTimeout(function(){
//     document.getElementById("information").innerHTML="welcome to world"
//     document.getElementById('information').style.color="green"
//     }, 2000)
// }
var counter=0;
var countInterval;
var onclickstart=function(){ 
   countInterval= setInterval(function(){
    document.getElementById('counter').innerHTML=counter+=1
    }, 1000)
    document.getElementsByClassName('start')[0].disabled=true;
    document.getElementsByClassName('pause')[0].disabled=false;
}
var onclickpause=function(){
    clearInterval(countInterval)
    document.getElementsByClassName('start')[0].disabled=false;
    document.getElementsByClassName('pause')[0].disabled=true;
}