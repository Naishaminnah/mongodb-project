const express = require('express');
const router = express();


/////////user management


router.get('/user', function(req,res){
    console.log(req.body);
    getUser(req.body);

})
router.post('/addUser', function(req,res){
    console.log(re.body);
    addUser
})
module.exports = router;
