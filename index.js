const express = require("express");
const friendRouter = require('./routes/friends.router')
const path = require('path')
const app = express();

const PORT = 4000;



app.use((req, res, next) => {
    
    const start = Date.now();
    console.log(`${req.method} ${req.url} ${start}`);
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);

});

app.use('/site',express.static(path.join(__dirname,'public')))
app.use(express.json());

app.use('/friends',friendRouter)

app.get("/", (req, res) => {
    res.send("Essam Said")
})


app.listen(PORT, () => {
    console.log("Server Work at 4000")
})
