import express from 'express';
const router = express.Router();
import { save, load, getList, deleteList } from '../controller/list';

router.post('/save', save);
router.post('/load', load);
router.post('/get', getList);
router.delete('/delete', deleteList);

export default router;