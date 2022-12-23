

document.getElementById('triggerAPI').addEventListener('click',function(){

    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            console.log(data)
            document.getElementById("apiCallText").textContent = data.activity
            document.getElementById("title").textContent = "🦾 HappyBot🦿"
            document.body.classList.add("fun")
        })
})