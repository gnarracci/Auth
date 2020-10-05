import {Router} from 'express';
const router = Router();
import * as roleCtrl from '../controllers/roles.controller';
import * as authJwt from '../middlewares/authjwt';

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], roleCtrl.getRoles);

export default router;