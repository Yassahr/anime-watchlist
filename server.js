console.log('Anime app')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000


app.use(express.json())
app.use(cors())
app.use(express.static('public'))

const animes = {
    'hunterxhunter': {
        'episodes': 148,
        'airDate': 2011,
        'genre': 'shonen',
        'message':'Human Potential For Evolution Is Limitless.',
        'gif':'/imgs/main-qimg-b1da195ecb11d216dd71d7433ff84007.webp'
    },
    'naruto': {
        'episodes': 720,
        'airDate': 1999,
        'genre': 'shonen',
        'message':'Believe It!',
        'gif':'/imgs/naruto-gif.gif'
    },
    'demonslayer': {
        'episodes': 55,
        'airDate': 2019,  
        'genre': 'shonen',
        'message':'Unleash Your Inner Demon Slayer.',
        'gif':'/imgs/tanjiro-demon.gif'
    },
    'fullmetalalchemist': {
        'episodes': 51, 
        'airDate': 2003,  
        'genre': 'shonen',
        'message':'A lesson without pain is meaningless.',
        'gif':'/imgs/fullmet.gif'
    },
    'mononoke': {
        'episodes': 12,
        'airDate': 2007,  
        'genre': 'Psychological horror/Mystery',
        'message':'Unravel the Mysteries, Confront the Horrors.',
        'gif':'/imgs/mononoke.gif'
    },
    'codegeass': {
        'episodes': 25,
        'airDate': 2006,
        'genre': 'Alt history/Military',
        'message':'Rebellion is the Birthright of Freedom.',
        'gif':'/imgs/codeg.gif'
    },
    'tokyoghoul': {
        'episodes': 48,  
        'airDate': 2014, 
        'genre': 'Dark fantasy/Supernatural',
        'message':'Survival of the Fittest in a World of Ghouls.',
        'gif':'/imgs/tokg.gif'
    },
    'jojobizarreadventure': {
        'episodes': 152,  
        'airDate': 2012,
        'genre': 'Adventure/Supernatural',
        'message':'Embrace the Bizarre. Awaken Your Stand.',
        'gif':'/imgs/jojo.gif'
    },
    'samuraichamploo': {
        'episodes': 26, 
        'airDate': 2004,
        'genre': 'shonen',
        'message':'Blend the Past and the Future. The Way of the Samurai.',
        'gif':'/imgs/samarauc.gif'
    },
    'unknown': {
        'episodes': 'unknown',
        'airDate': 'unknown',
        'genre': 'unknown',
        'message': 'This anime is NOT one of the best animes of all time ',
        'gif': '/imgs/unknown.gif'
    }
};

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:animeName', (req, res)=>{
    
    
    //add something that includes-maybe includes? and every: irritat through array->find obj.name that  where each letter is included in ma,e/array
    const animeName = req.params.animeName.toLowerCase().split(' ').join('')
//inside the if statement use findindex -> includes all of search criteria-> make it a helper function and return value
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