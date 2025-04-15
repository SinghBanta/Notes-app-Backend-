const addUser = require('../../controllers/admin/addUser');
const getalluser = require('../../controllers/admin/getallUser');
const sendMail = require('../../controllers/admin/sendmail');
const login=require('../../controllers/admin/login');
const { adminMiddleware } = require('../../middleware/admin');
const adminUpdate = require('../../controllers/admin/updateUser'); 
const deleteUser = require('../../controllers/admin/deleteUser');


const router=require('express').Router()


router.post('/newuser', adminMiddleware,addUser)
router.get('/getalluser', adminMiddleware,getalluser)
router.patch("/updateuser", adminMiddleware,adminUpdate);
router.post('/sendmail', sendMail)
router.post('/login',login)
router.delete('/deleteuser/:id', adminMiddleware, deleteUser);


module.exports=router;