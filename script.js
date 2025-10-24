document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Button Feature
    const surpriseBtn = document.getElementById('surprise-btn');
    const hugMessage = document.getElementById('hug-message');

    surpriseBtn.addEventListener('click', () => {
        // Toggle the visibility of the surprise message
        hugMessage.classList.toggle('hidden');

        // Optional: Change the button text/style temporarily
        if (!hugMessage.classList.contains('hidden')) {
            surpriseBtn.textContent = "Hug Sent! 🤗";
            surpriseBtn.style.backgroundColor = '#4CAF50'; // Green color
            setTimeout(() => {
                surpriseBtn.textContent = "Send a Virtual Hug!";
                surpriseBtn.style.backgroundColor = ''; // Revert to CSS color
            }, 2000); // Revert after 2 seconds
        }
    });

    // 2. Picture Hover/Click Effect (Example)
    const galleryImages = document.querySelectorAll('.gallery-image');

    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            // Simple alert on click
            alert("This memory is one of my favorites!");

            // Or a more complex visual change:
            image.style.border = '10px solid gold';
            setTimeout(() => {
                image.style.border = '5px solid var(--primary-color)';
            }, 1000);
        });
    });

    // 3. Simple sticker/icon addition on the page (e.g., a floating heart)
    // This function creates and adds a small floating heart every few seconds
    function createFloatingHeart() {
        const heart = document.createElement('i');
        heart.classList.add('fas', 'fa-heart'); // Font Awesome heart
        heart.style.color = 'red';
        heart.style.position = 'fixed';
        heart.style.fontSize = `${Math.random() * 1.5 + 1}em`; // Random size
        heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        heart.style.top = '100vh'; // Start from the bottom
        heart.style.transition = 'all 5s ease-out';
        heart.style.zIndex = '1000';

        document.body.appendChild(heart);

        // Animate the heart to float up
        setTimeout(() => {
            heart.style.transform = `translateY(-${Math.random() * 80 + 20}vh) translateX(${Math.random() * 100 - 50}px) rotate(${Math.random() * 360}deg)`;
            heart.style.opacity = '0';
        }, 10);

        // Remove the heart after it has floated up
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Call the function to create a floating heart every 1.5 seconds
    setInterval(createFloatingHeart, 1500);
});