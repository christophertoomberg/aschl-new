const phrases = ['Software for a Better Environment', 'Recycling Management and Compliance', 'Organic Materials Processing', 'Compost Plant Management and Reporting', 'Agricultural Materials Recycling'];
let phraseHolder = document.getElementById('typing');

phraseHolder.textContent = '|';


async function type() {
  let i = 0;
  while (true) {
    // fade in
    await sleep(1000); // wait for some time
    // fade out
    if (i < phrases.length) {
      phraseHolder.textContent = phrases[i];
      i++;
    } else {
      i = 0;
    }
  }
}


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

type();

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

