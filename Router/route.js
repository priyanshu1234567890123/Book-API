

import express from 'express';
import { login, logout, profile, signup } from '../Controller/controller.js';
import authMiddleware from '../Middleware/auth.js';

// only for users 

const route = express.Router();

route.post('/signup',signup)
route.post('/login',login)
route.post('/logout',logout)
route.get('/profile',  authMiddleware ,profile)  //this is for only testing i have made this..



export default route;
