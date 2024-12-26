 function strikeRate (runs,balls){
     runs = document.getElementById("runs").value;
     balls = document.getElementById("balls").value;

    const runrate = (runs / balls) * 100;
    document.getElementById("strikerate").innerHTML = runrate.toFixed(2);
}