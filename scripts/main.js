const startTime = new Date();

function ready() {
    const footer = document.getElementById('footer');
    const endTime = new Date()

    const dif = (endTime.getTime() - startTime.getTime()) / 1000;
    footer.innerHTML += 'Page load time is ' + dif + 'seconds';

    if (document.location.href.includes("/index.html")){
        document.getElementById("stats-nav").classList.add("nav-item-selected")
    }

    if (document.location.href.includes("/account.html")){
        document.getElementById("account-nav").classList.add("nav-item-selected")
    }

    if (document.location.href.includes("/maps.html")){
        document.getElementById("maps-nav").classList.add("nav-item-selected")
    }
    if (document.location.href.includes("/game-modes.html")){
        document.getElementById("game-modes-nav").classList.add("nav-item-selected")
    }
}

document.addEventListener("DOMContentLoaded", ready);