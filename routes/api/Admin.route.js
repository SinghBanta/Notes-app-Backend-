const addUser = require('../../controllers/admin/addUser');
const getalluser = require('../../controllers/admin/getallUser');

const router=require('express').Router()


router.post('/newuser', addUser)
router.get('/getalluser', getalluser)

module.exports=router;