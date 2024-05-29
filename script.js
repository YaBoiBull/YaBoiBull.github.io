function createFlower() {
  const flower = document.createElement('div');
  flower.classList.add('flower');
  const xPosition = Math.random() * window.innerWidth;
  const yPosition = Math.random() * window.innerHeight;
  flower.style.left = `${xPosition}px`;
  flower.style.top = `${yPosition}px`;

  document.body.appendChild(flower);

  // Fjern blomsten efter animationen er fuldført for at forhindre ophobning i DOM'en
  setTimeout(() => {
    flower.remove();
  }, 7000); // Samlet varighed af float animation + holdtid
}

// Opret en ny blomst hvert 4. sekund
setInterval(createFlower, 4000);
