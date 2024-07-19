

document.querySelector('#find').addEventListener('click', findTheAnime)

async function findTheAnime(){
    let animeName = document.querySelector('#animeName').value
    
    try{
    const res = await fetch(`https://anime-watchlist-4o56.onrender.com/api/${animeName}`)
    const data = await res.json()
    
    //Capitilize every space
    //animeName = animeName
    //adding to DOM
    document.querySelector('.nam').textContent = `${animeName}`
    document.querySelector('.episodes').textContent = `Episodes: ${data.episodes}`
    document.querySelector('.air').textContent = `Release Date: ${data.airDate}`
    document.querySelector('.genre').textContent = `Genre: ${data.genre}`
    document.querySelector('.note').textContent = `Note:${data.note}`
    document.querySelector('.img').src = `${data.gif}`
    console.log(data)
    }catch(error){
        console.log(error)
        
    }
}

