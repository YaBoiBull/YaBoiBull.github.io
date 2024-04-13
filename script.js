document.getElementById('noBtn').addEventListener('mouseover', function(event) {
    const button = event.target;
    const buttonX = button.offsetLeft;
    const buttonY = button.offsetTop;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const directionX = mouseX > buttonX ? -100 : 100;
    const directionY = mouseY > buttonY ? -100 : 100;

    button.style.transform = `translate(${directionX}px, ${directionY}px)`;
});

document.getElementById('yesBtn').addEventListener('click', function() {
    const catImage = document.getElementById('catImage');
    catImage.src = 'happy_cat.jpg'; // Sørg for at erstatte med den rigtige filsti til dit glade kattebillede.
});
