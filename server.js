console.log('Anime app')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const animes ={
    'hunterxhunter':{
        'episodes': 148,
        'airDate': 2011,
        'genre': 'shonen'
    },
    'naruto':{
        'episodes': 720,
        'airDate': 1999,
        'genre': 'shonen'
    },
    'demonslayer':{
        'episodes': 55,
        'airDate': 2021,
        'genre': 'shonen'
    },
    'fullmetalalchemist':{
        'episodes': 21,
        'airDate': 2004,
        'genre': 'shonen'
    },
    'mononoke':{
        'episodes': 12,
        'airDate': 207,
        'genre': 'Psychological horror/Mystery'
    },
    'codegeass':{
        'episodes': 25,
        'airDate': 2006,
        'genre': 'Alt history/Military'
    },
    'tokyoghoul':{
        'episodes': 143,
        'airDate': 2011,
        'genre': 'Dark fantasy/Supernatural'
    },
    'jojobizarreadventure':{
        'episodes': 190,
        'airDate': 2012,
        'genre': 'Adventure/Supernatural'
    },
    'samuraichamploo':{
        'episodes': 50,
        'airDate': 2004,
        'genre': 'shonen', 
    },
    'unknown':{
        'episodes': 'unknown',
        'airDate': 'unknown',
        'genre': 'unknown',   
        'message': 'This anime has not been added to the Anime API'
    }
}
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:animeName', (req, res)=>{
    
    //need to delete all of the spaces in search param
    //add something that includes-maybe includes?
    const animeName = req.params.animeName.toLowerCase().split(' ').join('')

    console.log(animeName)
    
    if(animes[animeName]){
        res.json(animes[animeName])  
       
    }
    else if(!animes[animeName]){
        res.json(animes['unknown']) 
        
        //not sending object for unknown
    }
})
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on Port ${PORT}`)
})