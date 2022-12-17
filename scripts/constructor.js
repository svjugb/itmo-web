if (localStorage.getItem("interests") === null) {
    localStorage.setItem("interests", JSON.stringify([]))
}
const interests = JSON.parse(localStorage.getItem("interests"))

function renderInterests() {
    const interestContainer = document.getElementById("interest-container")
    let newContent = ""
    for (let interest in interests) {
        newContent += "<div class=\"interest-container__interest\">"+ interests[interest] +"</div>"
    }
    interestContainer.innerHTML = newContent
}

function submitInterest(event) {
    event.preventDefault()
    const interestField = document.getElementById("interest-field")
    if (interestField.value !== "") {
        interests.push(interestField.value)
        localStorage.setItem("interests", JSON.stringify(interests))
        console.log(localStorage.getItem("interests"))
        interestField.value = ""
        renderInterests()
    }
}

function ready() {
    const form = document.querySelector('form')
    form.addEventListener('submit', submitInterest)
    renderInterests()
}

document.addEventListener("DOMContentLoaded", ready);