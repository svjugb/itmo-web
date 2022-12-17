function ready() {
    fetch('https://api.brawlapi.com/v1/gamemodes')
        .then((response) => response.json())
        .then((data) => {
            setTimeout(function () {
                document.getElementById("preloader").classList.add("hidden")
                renderPosts(data["list"])
            }, 2500);
        })
        .catch((error) => {
            document.getElementById("posts").innerHTML = '<div class="posts__error"> Something went wrong :( </div>'
            console.log(error)
        })
}

function renderPosts(data) {
    let posts = "";
    posts += '<div style="display: grid;\n' +
        '    grid-template-columns: 1fr 1fr;\n' +
        '    gap: 10px;\n' +
        '    grid-template-areas:\n' +
        '    "section section"\n' +
        '    "section section";""\n' +
        ' ">'
    data.forEach(item => {
        posts += '<section style="border-radius: 25px;\n' +
            '    border: 4px solid #000000;\n' +
            '    overflow: hidden;' +
            'background: ' + item.bgColor + ';">' +
            '<div style="display: flex; flex-direction: row;">'
            + '<img src="' + item.imageUrl + '" alt="?" style="' +
            '    height: 53px;\n' +
            '    padding: 0.2em 0.4em 0.2em 0.2em;">'
            + '<div>' +
            '<div style="font-family: \'Fredoka-Semibold\', sans-serif;\n' +
            '    font-size: 1.5rem;\n' +
            '    font-weight: bold;\n' +
            '    color: white;\n' +
            '    padding: 0.2em 0 0 0;">' + item.name + '</div>' +
            '<div style="\n' +
            '    font-family: \'Fredoka-Regular\', sans-serif;\n' +
            '    font-size: 1rem;\n' +
            '    color: white;">' + item.title + '</div>'
            + '</div>'
            + '</div>' +
            '<div style="background-image: url(' + item.imageUrl2 + ');\n' +
            '    height: 110px;\n' +
            '    background-size: cover;\n' +
            '    background-position: center;\n' +
            '    box-sizing: border-box"></div>'
            + '</section>'
    })
    posts += '</div>'
    document.getElementById("posts").innerHTML = posts
}

document.addEventListener("DOMContentLoaded", ready);