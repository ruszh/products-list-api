import express from 'express';
const router = express.Router();

import { signin, signup, verifyUser } from '../controller/authentication';
import { getLists } from '../controller/data';

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/verify', verifyUser);
router.get('/getlists', getLists);

export default router;