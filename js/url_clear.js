
if (window.location.href.includes('contact.html')) {
    window.history.pushState({}, document.title, "/" + "contact");
} else if (window.location.href.includes('about.html')) {
    window.history.pushState({}, document.title, "/" + "about");
} else if (window.location.href.includes('legal.html')) {
    window.history.pushState({}, document.title, "/" + "legal");
}