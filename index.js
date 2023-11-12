const jog = document.getElementById("jog")
const jogButton = document.getElementById("jog-button")
const babyButton = document.getElementById("baby-button")

jogButton.addEventListener("click", event => {
    fetch("/things",{
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }})
    .then(checkResponse)
    .then(render)
    .catch(console.log(error))
})

babyButton.addEventListener("click", event => {
    fetch("/things",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }})
    .then(checkResponse)
    .then(render)
    .catch(console.log(error))
})

const checkResponse  = response => response.ok ? response.json() : new Error(response.status)
const render = data    =>  jog.textContent = data