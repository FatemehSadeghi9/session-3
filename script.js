var showonsubmit=(event)=>{
    event.preventDefault()
    document.getElementById("information").innerHTML="loading"
    document.getElementById('information').style.color="red"
    setTimeout(function(){
    document.getElementById("information").innerHTML="welcome to world"
    document.getElementById('information').style.color="green"
    }, 2000)
}