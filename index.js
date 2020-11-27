let phrases = ['Software for a Better Environment','Recycling Management and Compliance', 'Organic Materials Processing', 'Compost Plant Management and Reporting', 'Agricultural Materials Recycling'];
document.getElementById('typing').textContent = '';

let letterIndex = 0;
let phraseIndex = 0;

async function type() {
    //Writing a phrase.
    if (letterIndex <= phrases[phraseIndex].length && phraseIndex <= phrases.length) {
        document.getElementById('typing').textContent = '';
        document.getElementById('typing').textContent += phrases[phraseIndex].substring(0, letterIndex + 1);
        letterIndex++;

        // If we have written all of the phrases. Start again.
    } else if (phraseIndex == phrases.length - 1) {
        letterIndex = 0;
        phraseIndex = 0;
        await sleep(2000);
        
        // Deleting a phrase.
    } else {
        await sleep(2000);
        document.getElementById('typing').textContent = '|';
        letterIndex = 0;
        phraseIndex++;
    }
    setTimeout(type, 60);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
type();

//Get the button:
let myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
