let boolTime = true;
let button = document.getElementById('day');
let background = document.getElementById('background');
let animation = document.getElementById('animation');
let dayCountText = document.getElementById('dayCount');
let day = 1;

animation.style.animation = "sunRiseAnimation 3s ease-in-out forwards"
buttonDisable(3000);

function changeTimeButton() {
    if (boolTime) {
        if (day%7 == 0) {
            changeTime("bloodNight", "#2A2A35")
        } else {
            changeTime("night", "#2A2A35")
        }
    } else {
        changeTime("day", "#42AAFF");
        changeDayCount();
    }
}

function changeTime(id, backgroundColor) {
    animation.style.animation = "sunSetAnimation 3s ease-in-out forwards";
    buttonDisable(6000)
    animation.addEventListener("animationend", () => {
        changeButton(id);
        background.style.background = backgroundColor;
        animation.style.animation = "sunRiseAnimation 3s ease-in-out forwards";
    }, {once: true});
}

function changeButton(id) {
    button.style.transition = "0s";
    button.id = id;
    boolTime = !boolTime;
    setTimeout(() => {
        button.style.transition = "0.3s";
    }, 100);
}

function buttonDisable(ms) {
    button.disabled = true;
    setTimeout(() => {
        button.disabled = false;
    }, ms)
}

function changeDayCount() {
    day += 1;
    setTimeout(() => {
        if (day%7 != 0) {
            dayCountText.style.color = "white";
        }
        else {
            dayCountText.style.color = "red";
        }
        dayCountText.textContent = day + " Day";
    }, 3500);
}