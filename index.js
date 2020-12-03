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

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '100');
});

