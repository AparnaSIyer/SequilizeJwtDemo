import {Router} from 'express';
import {signup,signin,profile,test} from '../controllers/auth.controller'; 
import {TokenValidation} from '../libs/verifyToken';

const router: Router = Router();

router.post('/signup',signup);
router.post('/signin',signin);
router.get('/profile',TokenValidation,profile)
router.get('/test',test)
export default router;