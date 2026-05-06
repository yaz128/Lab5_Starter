// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;

  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.querySelector("button");
  const textInput = document.getElementById("text-to-speak");

  function loadVoices() {
    const voices = synth.getVoices();
    voiceSelect.innerHTML = "";

    voices.forEach((voice, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = `${voice.name} (${voice.lang})`;
      voiceSelect.appendChild(option);
    });
  }

  loadVoices();
  window.speechSynthesis.onvoiceschanged = loadVoices;
  setTimeout(loadVoices, 100);
  speakButton.addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance(textInput.value);
    const voices = synth.getVoices();
    const selectedIndex = voiceSelect.selectedIndex;
    utterance.voice = voices[voiceSelect.value];
    const face = document.querySelector("img");
    
    utterance.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };

    utterance.onend = () => {
      face.src = "assets/images/smiling.png";
    };
    synth.cancel();
    synth.speak(utterance);
  });
}