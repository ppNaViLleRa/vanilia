const schedule = document.getElementById('js-schedule'),
    profile = document.getElementById('js-profile'),
    sns = document.getElementById('js-sns');

const BOX_HOVER = "boxhover", 
    BOX = "box"


function handleScheduleMouseover(){   
    schedule.classList.remove(BOX);
    schedule.classList.add(BOX_HOVER);
    profile.classList.remove(BOX_HOVER);
    profile.classList.add(BOX);   
    sns.classList.remove(BOX_HOVER);
    sns.classList.add(BOX);
}
function handleProfileMouseover(){   
    profile.classList.remove(BOX);
    profile.classList.add(BOX_HOVER);
    schedule.classList.remove(BOX_HOVER);
    schedule.classList.add(BOX);   
    sns.classList.remove(BOX_HOVER);
    sns.classList.add(BOX);
}
function handleSnsMouseover(){   
    sns.classList.remove(BOX);
    sns.classList.add(BOX_HOVER);
    profile.classList.remove(BOX_HOVER);
    profile.classList.add(BOX);   
    schedule.classList.remove(BOX_HOVER);
    schedule.classList.add(BOX);
}

function boxHover(){
    schedule.addEventListener("mouseover", handleScheduleMouseover);
    sns.addEventListener("mouseover", handleSnsMouseover);
    profile.addEventListener("mouseover", handleProfileMouseover);
}

function init(){    
    boxHover();
}

init();