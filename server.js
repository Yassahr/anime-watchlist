console.log('Anime app')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(express.static('js'))

app.use(cors())

const animes ={
    'hunterxhunter':{
        'episodes': 148,
        'airDate': 2011,
        'genre': 'shonen',
    },
    'naruto':{
        'episodes': 720,
        'airDate': 1999,
        'genre': 'shonen',
    },
    'demonslayer':{
        'episodes': 55,
        'airDate': 2021,
        'genre': 'shonen',
    },
    
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:animeName', (req, res)=>{
    console.log(req.params.animeName)
    const animeName = req.params.animeName.toLowerCase()
    res.json(animes[animeName])

    if(animes[animeName]){
        res.json(animes[animeName])  
    }
    else(
        console.log('Would you like to add this anime form')
    )
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on Port ${PORT}`)
})