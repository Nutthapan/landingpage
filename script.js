let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.appendChild(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });

  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });

  currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

//////////////////////////////////////////////////////////////////////////////////////////
//$('#carouselExampleIndicators').carousel();

//$('#carouselExampleIndicators').carousel({
    //interval: 3000 
//});

////////////////////////////////////////////////////////////////////////////////////////////
let currentIndex = 0;
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const bullets = document.querySelectorAll('.bullets a');

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  bullets.forEach((bullet, index) => {
    if (index === currentIndex) {
      bullet.classList.add('active');
    } else {
      bullet.classList.remove('active');
    }
  });
}

bullets.forEach((bullet, index) => {
  bullet.addEventListener('click', () => {
    currentIndex = index;
    updateSlider();
  });
});

document.querySelector('.prevNext a:first-child').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

document.querySelector('.prevNext a:last-child').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

// Initialize the slider
updateSlider();

/////////////////////////////////////////////////////////////////////////////

const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

window.addEventListener("mousemove",function(e){

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    /*cursorOutline.style.left = `${posX}px`;
    cursorOutline.style.top = `${posY}px`;*/

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, {duration: 500, fill:"forwards"});
});