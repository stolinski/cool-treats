// Define variables outside to make them accessible in the entire script scope
let audioContext;
let isAudioContextStarted = false;
let oscillator;

// Function to initialize or resume the AudioContext
function initAudioContext() {
  // Check if the AudioContext is already started
  if (isAudioContextStarted) {
    return;
  }

  // Create an AudioContext if it doesn't exist
  if (!audioContext) {
    audioContext = new AudioContext();
  }

  // Resume the AudioContext
  audioContext.resume().then(() => {
    console.log("AudioContext activated");
    isAudioContextStarted = true;
  });
}

// Add an event listener to the document or a specific button to start the AudioContext
document.addEventListener("click", initAudioContext);

// Ensure your script is running in a context that supports both the Web MIDI API and Web Audio API
if (navigator.requestMIDIAccess && window.AudioContext) {
  // Request MIDI access
  navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

  function onMIDISuccess(midiAccess) {
    // When we get MIDI access, loop over all available inputs and listen for MIDI messages
    const inputs = midiAccess.inputs.values();
    for (let input of inputs) {
      input.onmidimessage = getMIDIMessage;
    }
  }

  function onMIDIFailure() {
    console.error("Could not access your MIDI devices.");
  }

  function getMIDIMessage(message) {
    if (!isAudioContextStarted) {
      console.warn(
        "AudioContext has not been started yet. Please click on the document to start it."
      );
      return;
    }

    const command = message.data[0];
    const note = message.data[1];
    const velocity = message.data.length > 2 ? message.data[2] : 0;

    switch (command) {
      case 0x90: // noteOn
        if (velocity > 0) {
          noteOn(note, velocity);
        } else {
          noteOff(note);
        }
        break;
      case 0x80: // noteOff
        noteOff(note);
        break;
      // Handle other MIDI messages here
    }
  }

  function noteOn(note, velocity) {
    if (!audioContext) {
      console.warn("AudioContext is not initialized yet.");
      return;
    }

    // Create oscillator for each note
    oscillator = audioContext.createOscillator();
    oscillator.frequency.setValueAtTime(
      midiNoteToFrequency(note),
      audioContext.currentTime
    );
    oscillator.type = "sine";

    // Adjust the volume based on velocity
    const gainNode = audioContext.createGain();
    gainNode.gain.value = velocity / 127;
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.start();
  }

  function noteOff(note) {
    if (!audioContext) {
      console.warn("AudioContext is not initialized yet.");
      return;
    }

    // Stop the note
    if (oscillator) {
      oscillator.stop();
      oscillator.disconnect();
    }
  }

  function midiNoteToFrequency(note) {
    // Convert a MIDI note number to its frequency
    return Math.pow(2, (note - 69) / 12) * 440;
  }
} else {
  console.warn(
    "Web MIDI API or Web Audio API is not supported in this browser."
  );
}
