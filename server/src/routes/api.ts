import { Router } from 'express';
import { searchUsers } from '../controllers/apiController';

const router: Router = Router();
router.post('/search', searchUsers);

export default router;
