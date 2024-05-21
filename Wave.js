document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('wavingLineCanvas');
  const ctx = canvas.getContext('2d');
  
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  // First set of wave parameters
  const waves = [{
      length: 0.005,
      amplitude: canvas.width * 0.020,
      frequency: 0.02
    },
    {
      length: 0.01,
      amplitude: canvas.width * 0.040,
      frequency: 0.03
    },
    {
      length: 0.02,
      amplitude: canvas.width * 0.010,
      frequency: 0.04
    },
  ];

  // Second set of wave parameters for a different wave
  const waves2 = [{
      length: 0.008,
      amplitude: canvas.width * 0.030,
      frequency: 0.01
    },
    {
      length: 0.015,
      amplitude: canvas.width * 0.050,
      frequency: 0.02
    },
    {
      length: 0.03,
      amplitude: canvas.width * 0.020,
      frequency: 0.03
    },
  ];

  let phase = 0; // Phase shift for animating the wave
  let phase2 = 0; // Separate phase shift for the second wave animation

  function drawCompositeWave(x, waveParams, phaseShift) {
    // Calculate the composite y value from multiple sine waves
    let y = waveParams.reduce((acc, wave) => acc + Math.sin(x * wave.length + phaseShift) * wave.amplitude, canvas.height / 2);
    return y;
  }

  function animate() {
    requestAnimationFrame(animate);

    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas for redraw
    ctx.beginPath();

    // Draw the first wave
    for (let x = 0; x < canvas.width; x++) {
      let y = drawCompositeWave(x, waves, phase);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = '#CCCCCC'; // Color for the first wave
    ctx.stroke();

    // Draw the second wave with a different setup
    ctx.beginPath(); // Start a new path for the second wave
    for (let x = 0; x < canvas.width; x++) {
      let y = drawCompositeWave(x, waves2, phase2);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = '#E14B3C'; // Color for the second wave
    ctx.stroke();

    // Increment phases to animate both waves
    phase += 0.05;
    phase2 += 0.03; // Different increment for phase to vary animation
  }

  animate();
});
