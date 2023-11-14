const imageAuthor = document.getElementById('image-author')

fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature")
    .then(response => response.json())
    .then(data => {
        document.body.style.backgroundImage = `url("${data.urls.full}")`
        imageAuthor.textContent = ` By: ${data.user.name}`
    })
    .catch(err => {
        // Use a default background image/author
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`
		document.getElementById("author").textContent = `By: Dodi Achmad`
    })

    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('crypto-icon').src = `${data.image.small}`
        document.getElementById('crypto-name').textContent = data.name
        document.getElementById('crypto-prices').innerHTML = `
        <p> 🎯: €${data.market_data.current_price.eur}</p>
        <p> 👆: €${data.market_data.high_24h.eur}</p>
        <p> 👇: €${data.market_data.low_24h.eur}</p>
        `
    })
    .catch(err => {
        console.error(err)
    })

    setInterval(getCurrentTime, 1000);

    function getCurrentTime() {
    const date = new Date();
    document.querySelector('h1').textContent =  date.toLocaleTimeString("en-us", {timeStyle: "short"})
    }
    navigator.geolocation.getCurrentPosition(position => {
        console.log(position)
    })


