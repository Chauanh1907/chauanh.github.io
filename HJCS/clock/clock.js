function clock(){
    const formatSwitchBtn = document.querySelector(".format-switch-btn")
    formatSwitchBtn.addEventListener("click", ()  => {
        formatSwitchBtn.classList.toggle("active")
        var formatValue = formatSwitchBtn.getAttribute("data-format")
        if(formatValue == "12"){
            formatSwitchBtn.setAttribute("data-format" ,'24')
        }
        else{
            formatSwitchBtn.setAttribute("data-format", "12")
        }

})
    var today = new Date();

    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    let period ="AM";

    var formatValue = formatSwitchBtn.getAttribute("data-format")
    if(formatValue === "12"){
        hours = hours > 12 ?  hours % 12 : hours;
    }
  
    if(hours >= 12){
        period = "PM";
    }

    if (hours < 10){
        hours = "0" + hours;
    };
    if(minutes < 10){
        minutes = "0" + minutes;
    };
    if(seconds < 10){
        seconds = "0" + seconds;
    };

    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;
    document.querySelector(".period").innerHTML = period;

    const dayNumber = today.getDate();
    const year = today.getFullYear();
    const dayName = today.toLocaleString("default", {weekday: "long"});
    const monthname = today.toLocaleString("default", {month: "short"})

    document.querySelector(".month-name").innerHTML = monthname;
    document.querySelector(".day-name").innerHTML = dayName;
    document.querySelector(".day-number").innerHTML = dayNumber;
    document.querySelector(".year").innerHTML = year;
    
    

}

var updateClock = setInterval(clock, 1000);