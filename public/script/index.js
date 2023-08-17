function getUser() {
  fetch("https://my-backend.glitch.me/users", {
    credentials: "include",
    mode: "cors",
  })
    .then((response) => response.text())
    .then((text) => {
      document.getElementsByName('context')[0].innerText = text
    })
}