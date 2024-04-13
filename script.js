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
    catImage.src = 'happy_cat.jpg'; // Erstat med den rigtige filsti til dit glade kattebillede.

    // Start fading out the cat image after 3 seconds
    setTimeout(function() {
        catImage.classList.add('fadeOut');

        setTimeout(function() {
            catImage.classList.add('hidden');
            catImage.classList.remove('fadeOut');

            // Display the options with fadeIn effect
            const options = document.getElementById('options');
            options.style.display = 'block';
            document.getElementById('pickOne').classList.add('fadeIn');

            setTimeout(function() {
                const activityElements = document.querySelectorAll('.activity');
                activityElements.forEach((element, index) => {
                    setTimeout(() => {
                        element.classList.add('fadeIn');
                    }, 500 * (index + 1)); // Stagger the fade in for each option
                });
            }, 1000);
        }, 1000);
    }, 3000);
});

const options = document.querySelectorAll('.option');
options.forEach(option => {
    option.addEventListener('click', function() {
        alert('Great choice!');
    });
});
