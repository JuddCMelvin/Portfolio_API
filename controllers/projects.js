const router = require('express').Router()

router.get('/', function(req,res){
    res.send('GET /projects')
})

module.exports = router