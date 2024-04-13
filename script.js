document.getElementById('noBtn').addEventListener('mouseover', moveButton);
document.getElementById('noBtn').addEventListener('click', moveButton);

function moveButton(event) {
    const button = event.target;
    const buttonX = button.offsetLeft;
    const buttonY = button.offsetTop;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    // Beregn ny position baseret på musens position
    const directionX = mouseX > buttonX ? -100 : 100;
    const directionY = mouseY > buttonY ? -100 : 100;

    // Anvend den nye position til knappen
    button.style.transform = `translate(${directionX}px, ${directionY}px)`;
}

document.getElementById('yesBtn').addEventListener('click', function() {
    const catImage = document.getElementById('catImage');
    catImage.src = 'happy_cat.jpg';

    // Skjul "Yes" og "No" knapperne
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';

    // Fade out the cat image and display options
    setTimeout(function() {
        catImage.classList.add('fadeOut');

        setTimeout(function() {
            catImage.style.display = 'none';
            catImage.classList.remove('fadeOut');

            const options = document.getElementById('options');
            options.style.display = 'block';
            document.getElementById('pickOne').classList.add('fadeIn');

            const activityElements = document.querySelectorAll('.activity');
            activityElements.forEach((element, index) => {
                setTimeout(() => {
                    element.classList.add('fadeIn');
                }, 500 * (index + 1));
            });
        }, 1000);
    }, 1500);
});

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', function() {
        const activityName = option.getAttribute('data-activity');
        const imgSrc = option.previousElementSibling.src;

        document.getElementById('options').style.display = 'none';
        document.getElementById('resultImage').src = imgSrc;
        document.getElementById('resultText').textContent = `You chose ${activityName}`;

        const resultSection = document.getElementById('result');
        resultSection.style.display = 'block';
        resultSection.classList.add('fadeIn');
    });
});
