const imageAuthor = document.getElementById('image-author')

async function init() {
    const response = await fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    const data = await response.json()
    document.body.style.backgroundImage = `url("${data.urls.full}")`

    imageAuthor.textContent = ` By: ${data.user.name}`
}

init()