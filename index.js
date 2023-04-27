const express = require("express");
const friendController = require("./controllers/friends.controller")
const app = express();

const PORT = 4000;



app.use((req, res, next) => {

    const start = Date.now();
    console.log(`${req.method} ${req.url} ${start}`);
    next();
    const delta = Date.now() - start
    console.log(`${req.method} ${req.url} ${delta}ms`);


    
});

app.use(express.json());


app.post("/friends", friendController.postFriend )

app.get("/friends",friendController.getFriend)

app.get("/friends/:id", friendController.getFriendId)


app.get("/", (req,res) => {
    res.send("Essam Said")

})


app.listen(PORT, () => {
    console.log("Server Work at 4000")
})
