function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
  
  var context = new AudioContext();
  var src = context.createMediaElementSource(audio);
  var analyser = context.createAnalyser();

  src.connect(analyser);
  analyser.connect(context.destination);

  analyser.fftSize = 256;
  var bufferLength = analyser.frequencyBinCount;
  var dataArray = new Uint8Array(bufferLength);

  var canvas = document.getElementById("sound-wave");
  var canvasCtx = canvas.getContext("2d");

  function draw() {
    requestAnimationFrame(draw);

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = "#f0f0f0"; // Couleur de fond du spectre
    canvasCtx.fillRect(0, 0, canvas.width, canvas.height);

    var barWidth = (canvas.width / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    for (var i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];

      var hue = Math.round((i / bufferLength) * 360); // Variation de la couleur en fonction de la position dans le spectre
      canvasCtx.fillStyle = "hsl(" + hue + ", 100%, 50%)"; // Utilisation de HSL pour définir la couleur

      canvasCtx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }

  draw();
}
