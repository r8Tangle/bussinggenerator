const topImages = {
    "Green": "https://i.postimg.cc/nhcFR0s9/Green.png",
    "Magenta": "https://i.postimg.cc/Pq0dqHS1/Magenta.png",
    "Pink": "https://i.postimg.cc/Yqx2zJSw/Pink.png",
    "Red": "https://i.postimg.cc/vZqQpf9q/Red.png",
    "Silver": "https://i.postimg.cc/BvjqsbBq/Silver.png",
    "Yellow": "https://i.postimg.cc/bw1YvFp6/Yellow.png",
    "Blue": "https://i.postimg.cc/B6b6nyp6/Blue.png" // Added Blue
};

function selectColor(color) {
    document.getElementById("top-image").src = topImages[color];
    document.getElementById("color-selection").style.display = "none";
    initializePage();
    enterFullscreen();
}

function enterFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
    }
}

function initializePage() {
    setCurrentDateTime();
    setInterval(setCurrentDateTime, 1000);
    startTimer(30 * 60);
    setRandomImage();
    flashRandomImage();
    addRandomImageClickListener();
}

function startTimer(durationInSeconds) {
    let timer = durationInSeconds;
    const timerElement = document.getElementById("timer");

    function updateTimerDisplay() {
        let days = Math.floor(timer / 86400);
        let hours = Math.floor((timer % 86400) / 3600);
        let minutes = Math.floor((timer % 3600) / 60);
        let seconds = timer % 60;
        timerElement.textContent = `Expires in ${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    updateTimerDisplay();

    setInterval(() => {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        }
    }, 1000);
}

function setRandomImage() {
    const images = [
        "https://i.postimg.cc/L47m3MsC/Layer-9.png",
        "https://i.postimg.cc/sxtyj58d/Layer-10.png",
        "https://i.postimg.cc/Y9CtbrgV/Layer-11.png",
        "https://i.postimg.cc/ZqcT8B9p/Layer-12.png",
        "https://i.postimg.cc/KzpxW6DY/Layer-13.png",
        "https://i.postimg.cc/HnJd1669/Layer-14.png",
        "https://i.postimg.cc/XvQq33wm/Layer-15.png" // Added Layer-15
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("random-image").src = images[randomIndex];
}

function flashRandomImage() {
    const randomImage = document.getElementById("random-image");
    setInterval(() => {
        randomImage.style.visibility = (randomImage.style.visibility === 'hidden') ? 'visible' : 'hidden';
    }, 500);
}

function addRandomImageClickListener() {
    const randomImage = document.getElementById("random-image");
    randomImage.onclick = () => {
        setRandomImage();
    };
}

function setCurrentDateTime() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('en-US', options);
    timeElement.textContent = today.toLocaleTimeString('en-US', { hour12: true });
}
