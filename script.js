const images = [
    'https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728387853600_3f000e93.webp',
    'https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728387874732_089a565a.webp',
    'https://s3.us-west-1.amazonaws.com/ai-character/uploaded/c/image/1728373193955_52422b33.webp',
];

const profileImage = document.getElementById('profileImage');

function randomGlitch() {
    // Randomly decide if the flicker effect should happen
    const flickerChance = Math.random();
    if (flickerChance < 0.3) { // 30% chance to flicker
        profileImage.classList.add('flicker');
    } else {
        profileImage.classList.remove('flicker');
    }

    // Select a random image from the array
    const randomImage = images[Math.floor(Math.random() * images.length)];
    profileImage.src = randomImage;

    // Random movement
    const moveX = Math.random() * 10 - 5; // Random movement between -5px and 5px
    const moveY = Math.random() * 10 - 5; // Random movement between -5px and 5px
    profileImage.style.transform = `translate(${moveX}px, ${moveY}px)`;

    // Set a random delay for the next glitch and shake
    const delay = Math.random() * (800 - 300) + 300; // Reduced random delay between 300ms and 800ms

    // Add violent shaking effect immediately
    profileImage.classList.add('shake');

    // Remove shake effect after a short duration
    setTimeout(() => {
        profileImage.classList.remove('shake'); // Stop shaking
        profileImage.style.transform = `translate(0, 0)`; // Reset position
    }, 200); // Adjust duration of the shake

    // Call randomGlitch again after the delay
    setTimeout(randomGlitch, delay);
}

// Start the glitch effect
randomGlitch();

document.getElementById('copyButton').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const age = document.getElementById('age').value;
    const personality = document.getElementById('personality').value;
    const greeting = document.getElementById('greeting').value;

    const textToCopy = `
    Name: ${name}
    Gender: ${gender}
    Age: ${age}
    Personality: ${personality}
    Greeting: ${greeting}
    `;

    // Copy the text to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Text copied to clipboard! You will be redirected to William’s Discord.');
        // Redirect to William's Discord
        window.location.href = 'https://discord.com/users/1096100702029369364';
    }).catch(err => {
        console.error('Could not copy text: ', err);
    });
});
