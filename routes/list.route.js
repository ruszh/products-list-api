import express from 'express';
const router = express.Router();
import { save, load, getList, deleteList, updateList } from '../controller/list';

router.post('/save', save);
router.post('/load', load);
router.post('/get', getList);
router.delete('/delete', deleteList);
router.put('/update', updateList);

export default router;