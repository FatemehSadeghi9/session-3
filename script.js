// var showonsubmit=(event)=>{
//     event.preventDefault()
//     document.getElementById("information").innerHTML="loading"
//     document.getElementById('information').style.color="red"
//     setTimeout(function(){
//     document.getElementById("information").innerHTML="welcome to world"
//     document.getElementById('information').style.color="green"
//     }, 2000)
// }
var count=0;
var countInterval;
var onloadcounter=function(){
    // count= Number(document.cookie.substr(6))
    count=Number(Cookies.get('count'))
    document.getElementById('counter').innerHTML=count
}
var onclickstart=function(){ 
    countInterval= setInterval(function(){
    count+=1
    Cookies.set('count', count)
    // document.cookie="count="+count
    document.getElementById('counter').innerHTML=count
    }, 1000)
    document.getElementsByClassName('start')[0].disabled=true;
    document.getElementsByClassName('pause')[0].disabled=false;  
}
var onclickpause=function(){
    clearInterval(countInterval)
    document.getElementsByClassName('start')[0].disabled=false;
    document.getElementsByClassName('pause')[0].disabled=true;
}
