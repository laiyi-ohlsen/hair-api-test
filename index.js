import express from 'express'

const sentence = require('txtgen')

let color = ['red, orange, yellow, green, teal, blue, brown, black, pink, purple']

let hair = {
    "0": {
        color: "red",
        style: "ponytail"
    },
    "1": {
        color: "orange",
        style: "bob"
    },
    "2": {
        color: "yellow",
        style: "buzzcut"
    },
    "3": {
        color: "green",
        style: "pigtails"
    },
    "4": {
        color: "teal",
        style: "mermaid"
    },
    "5": {
        color: "blue",
        style: "clips"
    },
    "6": {
        color: "brown",
        style: "half up"
    },
    "7": {
        color: "black",
        style: "space buns"
    },
    "8": {
        color: "pink",
        style: "pigtail braids"
    },
    "9": {
        color: "purple",
        style: "messy bun"
    }

}

const app = express()
app.use(express.json())

app.get('/textgen', (req,res) => {
    const randomSentence = sentence();
    res.send(randomSentence)
})

res.json({ data: "response goes here"})

const port = process.env.PORT || 3001

app.get('/', (req, res) => {
    let matchingHair = [];

    Object.keys(hair).forEach((key, value) => {
        if(req.query.color == hair[key].color){
            matchingHair.push(key)
        }
    })

    res.send(matchingHair) 






    // if(req.query.letter =="S"){
    //     names.forEach(color => {
    //         if(color.includes("H") || color.includes("h")) {
    //             console.log(color)
    //             matches.push(color)
    //         }
    //     })
    // }
})

app.get('/hair/:hair',(req,res) => {
    let hair; 

    Object.keys(hair).forEach((key,value) => {
        if (req.params.hair.substring(1) == key){
            hair = hair[key]
        }
    })
    res.send(hair)
})

app.listen(port, () => {
    console.log('App listening on ${port}')
})


// local ip 127.0.0.1