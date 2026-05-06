// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect = document.getElementById("horn-select");
  const hornImage = document.getElementById("horn-image");
  const audio = document.getElementById("horn-sound");
  const playButton = document.querySelector("button");
  const volumeSlider = document.getElementById("volume");
  const volumeImage = document.getElementById("volume-image");
  const jsConfetti = new JSConfetti();

  hornSelect.addEventListener("change", function() {
    const selected = hornSelect.value;
    if (selected === "air-horn") {
        hornImage.src = "assets/images/air-horn.svg";
        audio.src = "assets/audio/air-horn.mp3";
    } else if (selected === "car-horn") {
        hornImage.src = "assets/images/car-horn.svg";
        audio.src = "assets/audio/car-horn.mp3";
    } else if (selected === "party-horn") {
        hornImage.src = "assets/images/party-horn.svg";
        audio.src = "assets/audio/party-horn.mp3";
    } else {
        hornImage.src = "assets/images/no-image.png";
        audio.src = "";
    }
  });

  playButton.addEventListener("click", function() {
    audio.play();
    if (hornSelect.value === "party-horn") {
      jsConfetti.addConfetti();
    }
  });

  volumeSlider.addEventListener("input", function() {
    const volume = volumeSlider.value;
    audio.volume = volume / 100;
    if (volume == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    } else if (volume < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    } else if (volume < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    } else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });
}