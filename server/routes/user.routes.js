import express from 'express';
import { registerUser,getUser,jwtauth, getAllUsers, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

//passed down routers 
router.post('/',loginUser);
router.post('/register',registerUser);

router.get('/profile',jwtauth,getUser);
router.get('/all',getAllUsers);


export default router;
