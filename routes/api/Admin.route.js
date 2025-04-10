const addUser = require('../../controllers/admin/addUser');
const getalluser = require('../../controllers/admin/getallUser');
const sendMail = require('../../controllers/admin/sendMail');

const router=require('express').Router()


router.post('/newuser', addUser)
router.get('/getalluser', getalluser)
router.post('/sendmail', sendMail)


module.exports=router;