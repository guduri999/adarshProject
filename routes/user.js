import express from 'express';
import { userAuthentication } from '../controllers/user.js';

const userRoutes = express.Router();

userRoutes.post('/authentication', userAuthentication)

export default userRoutes;