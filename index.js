function helloWorld() {
  const p = document.createElement("p");
  p.innerText = "Hello world";
  document.body.appendChild(p)
}

module.exports = { helloWorld };
