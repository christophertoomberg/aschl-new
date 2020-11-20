let phrases = ['IT for a better environment.','Recycling management and compliance.', 'Organic materials processing.', 'Compost plant management and reporting.', 'Agricultural materials recycling.'];
document.getElementById('typing').textContent = '|';

let letterIndex = 0;
let phraseIndex = 0;
let isDeleting = false;

async function type() {
    //Writing a phrase.
    if (letterIndex <= phrases[phraseIndex].length && phraseIndex <= phrases.length) {
        document.getElementById('typing').textContent = '';
        document.getElementById('typing').textContent += phrases[phraseIndex].substring(0, letterIndex + 1) + '|';
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
    setTimeout(type, 80);
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
type();
