import {Router} from 'express';
const router = Router();

import * as productsCtrl from '../controllers/products.controller';
import {authJwt} from '../middlewares';

router.get('/', [authJwt.verifyToken, authJwt.isUser], productsCtrl.getProducts);
router.post('/', [authJwt.verifyToken, authJwt.isUser], productsCtrl.createProduct);
router.get('/:productId', [authJwt.verifyToken, authJwt.isUser], productsCtrl.getProductById);
router.put('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.updateProductById);
router.delete('/:productId', [authJwt.verifyToken, authJwt.isAdmin], productsCtrl.deleteProductById);

export default router;