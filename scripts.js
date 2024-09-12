// scripts.js
window.allowGoogleCookies = function () {
    document.cookie = "SameSite=None; Secure; path=/; domain=.google.com";
    console.log("Google cookies allowed.");
}
