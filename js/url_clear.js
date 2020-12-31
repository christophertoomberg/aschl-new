
if (window.location.href.includes('contact.html')) {
    window.history.replaceState({}, document.title, "/" + "contact");
} else if (window.location.href.includes('about.html')) {
    window.history.replaceState({}, document.title, "/" + "about");
} else if (window.location.href.includes('legal.html')) {
    window.history.replaceState({}, document.title, "/" + "legal");
}