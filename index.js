const phrases = ['Software for a Better Environment', 'Recycling Management and Compliance', 'Organic Materials Processing', 'Compost Plant Management and Reporting', 'Agricultural Materials Recycling'];
let phraseHolder = document.getElementById('typing');

phraseHolder.textContent = '|';


async function type() {
  let i = 0;
  while (true) {
    if (i < phrases.length) {
      phraseHolder.textContent = phrases[i];
      await sleep(2000);
      i++;
    } else {
      i = 0;
      continue;
    }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// Top up button.
var btn = $('#button');

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, '100');
});

type();
