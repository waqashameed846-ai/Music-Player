// script.js

let progress = document.getElementById("progress");
let song = document.querySelector("audio");
let playBtn = document.querySelector(".fa-play");
let forwardBtn = document.querySelector(".fa-forward");
let backwardBtn = document.querySelector(".fa-backward");

// When metadata is loaded, set max progress value to song duration
song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

// Update progress bar while playing
song.ontimeupdate = function () {
    progress.value = song.currentTime;
};

// Seek when user drags the progress bar
progress.oninput = function () {
    song.currentTime = progress.value;
};

// Play / Pause toggle
playBtn.addEventListener("click", () => {
    if (song.paused) {
        song.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
    } else {
        song.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
    }
});

// Forward button (skip 5s)
forwardBtn.addEventListener("click", () => {
    song.currentTime += 5;
});

// Backward button (rewind 5s)
backwardBtn.addEventListener("click", () => {
    song.currentTime -= 5;
});
