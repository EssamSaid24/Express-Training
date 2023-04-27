const friends = require('../models/friends.model')
function postFriend  (req,res) {
    if(!req.body.name){
        return  res.status(400).json({
            error:"can not find friend"
        }
        )
    }
    const newFriend = {
        name: req.body.name,
        id: friends.length
    };
    friends.push(newFriend)
    return res.json(newFriend)
    
}

function getFriend (req,res){

    res.json(friends)
    
}

function getFriendId (req,res){

    const friendId = Number(req.params.id)
    const friend = friends[friendId]
    if(friend){
        res.status(200).json(friend);
    }else{
        res.status(404).json({
            error: "Not found"
        })
    }
    
}

module.exports ={
    postFriend,
    getFriend,
    getFriendId
}