import { Router } from 'express';
import { getUser, handleDeposit } from '../controllers/userController';


const router = Router();
router.get('/user/:id', getUser);
router.post('/user/:id/deposit', handleDeposit)


export default router;