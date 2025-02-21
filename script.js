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
    setInterval(function () {
        if (timer > 0) {
            timer--;
            updateTimerDisplay();
        }
    }, 1000);
}

function setRandomImage() {
    const images = [
        "https://i.postimg.cc/d3L4fzC1/Layer-1.png",
        "https://i.postimg.cc/2jKHWSpB/Layer-2.png",
        "https://i.postimg.cc/brW3f30R/Layer-3.png",
        "https://i.postimg.cc/FRPTD978/Layer-4.png",
        "https://i.postimg.cc/kXRTvP9Y/Layer-5.png",
        "https://i.postimg.cc/9Q3JxgQm/Layer-6.png",
        "https://i.postimg.cc/CxjJ9CRj/Layer-7.png",
        "https://i.postimg.cc/yNsnKJR2/Layer-8.png"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("random-image").src = images[randomIndex];
}

function setRandomTopImage() {
    const images = [
        "https://i.postimg.cc/nhcFR0s9/Green.png",
        "https://i.postimg.cc/Pq0dqHS1/Magenta.png",
        "https://i.postimg.cc/Yqx2zJSw/Pink.png",
        "https://i.postimg.cc/vZqQpf9q/Red.png",
        "https://i.postimg.cc/BvjqsbBq/Silver.png"
    ];
    const randomIndex = Math.floor(Math.random() * images.length);
    document.getElementById("top-image").src = images[randomIndex];
}

function setCurrentDateTime() {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const options = { weekday: 'long', month: 'short', day: 'numeric', year: 'numeric' };
    const today = new Date();
    dateElement.textContent = today.toLocaleDateString('en-US', options);
    timeElement.textContent = today.toLocaleTimeString('en-US', { hour12: true });
}

function enableFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log("Fullscreen mode not supported: ", err);
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    setInterval(() => {
        const image = document.getElementById("random-image");
        image.style.opacity = (image.style.opacity == 0) ? 1 : 0;
    }, 1000);
    startTimer(30 * 60); // 30 minutes countdown
    setRandomImage();
    setRandomTopImage();
    setCurrentDateTime();
    setInterval(setCurrentDateTime, 1000); // Update time every second
});

document.addEventListener("click", enableFullscreen);
