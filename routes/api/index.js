const router=require('express').Router();

const authRoutes=require('./Auth.route');
const adminRoute=require('./Admin.route');

router.use('/auth', authRoutes);
router.use('/admin',adminRoute);

module.exports=router;