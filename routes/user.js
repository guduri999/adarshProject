import express from 'express';
import { fetchCustomer, userAuthentication } from '../controllers/user.js';

const userRoutes = express.Router();

userRoutes.post('/authentication', userAuthentication)
userRoutes.post('/fetchCustomer', fetchCustomer)

export default userRoutes;