alert('working')

document.querySelector('#find').addEventListener('click', findTheAnime)

async function findTheAnime(){
    const animeName = document.querySelector('#animeName').value
    
    try{
    const response = await fetch(`https://anime-watchlist-4o56.onrender.com/api/${animeName}`)
    const data = await res.json(response)
    console.log(data)
    }catch(error){
        console.log(error)
    }
}