const addUser = require('../../controllers/admin/addUser');
const getalluser = require('../../controllers/admin/getallUser');
const sendMail = require('../../controllers/admin/sendmail');
const login=require('../../controllers/admin/login');
const { adminMiddleware } = require('../../middleware/admin');

const router=require('express').Router()


router.post('/newuser', addUser)
router.get('/getalluser', adminMiddleware,getalluser)
router.post('/sendmail', sendMail)
router.post('/login',login)


module.exports=router;