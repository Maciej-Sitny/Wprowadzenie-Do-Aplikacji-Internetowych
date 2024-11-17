
// let x = setInterval(function() {
//     let click =start()
// let now =new Date().getTime();
//         distance=now-click
//         let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//         let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//         timer.innerHTML = minutes + "m " + seconds + "s ";
// },1000)


function start(){
    let timer =document.getElementById("timer")
    let click=new Date().getTime();
    const reset=document.getElementById("reset")
    const stop= document.getElementById("stop")
    let distance=0
    let x = setInterval(function(){
        let now =new Date().getTime();
        distance=now-click
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (minutes==0){
            timer.innerHTML = seconds + "s ";
        }
        else {
            timer.innerHTML = minutes + "m"+ seconds + "s ";
        }
    },1000);
    reset.addEventListener("click", function(){
        clearInterval(x)
        document.getElementById("timer").innerHTML = "0m 0s"
    })

    stop.addEventListener("click", function(){
        clearInterval(x)
    })
    x;
}



// function stop(){
//     clearInterval(x)
//     document.getElementById("timer").innerHTML = "0m 0s"
// }