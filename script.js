// Used for Removing FBCLID from Url
if(/^\?fbclid=/.test(location.search))
location.replace(location.href.replace(/\?fbclid.+/, ""));

// Generate random stars in the background
function generateStars(numStars) {
  const starsContainer = document.querySelector('.stars');

  for (let i = 0; i < numStars; i++) {
    const star = document.createElement('div');
    const size = Math.random() * 3 + 1; // Random size between 1 and 4px
    const left = Math.random() * 100 + '%'; // Random horizontal position
    const top = Math.random() * 100 + '%'; // Random vertical position

    star.classList.add('star');
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = left;
    star.style.top = top;

    // Randomize twinkle and movement speed
    star.style.animationDuration = `${Math.random() * 2 + 1}s, ${Math.random() * 10 + 5}s, 10s linear infinite`; // Twinkle + movement + repositioning
    star.style.animationDelay = `${Math.random() * 5}s`; // Random delay to offset the twinkle effect

    starsContainer.appendChild(star);
  }
}

// Function to generate random positions for stars
function randomLeft() {
  return Math.random() * 100 + '%';
}

function randomTop() {
  return Math.random() * 100 + '%';
}

// Call the function to generate 100 stars
generateStars(100);
