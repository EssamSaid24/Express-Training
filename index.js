const express = require("express");
const app = express();

const PORT = 4000;


const friends = [{
        'id':0,
        'name': 'Essam'
    },
    {
        'id':1,
        'name':"Said"
    }
];

app.use((req, res, next) => {

    const start = Date.now();
    console.log(`${req.method} ${req.url} ${start}`);
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);


    
})


app.get("/friends", (req,res) => {

    res.json(friends)
    
})

app.get("/friends/:id", (req,res) => {

    const friendId = Number(req.params.id)
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error: "Not found"
        })
    }
    
})
app.get("/", (req,res) => {
    res.send("Essam Said")

})


app.listen(PORT, () => {
    console.log("Server Work at 4000")
})
