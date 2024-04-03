const {User} = require('./model/user');

function addUser(req,res){
    try {
    if(!req.body) throw Error('user data is not found');
    const newUser = User.insert(req.body);
    newUser.save();
    if(newUser){
        res.status(200).send(newUser);
    }
    }
catch (error){
    res.status(500).send(error.message);
}
}
function getUser(req,res){
    try{
      const users = User.find();
      if(users){
        res.status(200).send(users);
      }
    }catch (error){
        res.status(500).send(error.message);
    }
}
module.exports = {
    addUser,
    getUser
}