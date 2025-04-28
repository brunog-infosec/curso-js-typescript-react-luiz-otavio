import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;

/**
 * Regra dos Nomes dos métodos para controllers :
 * index ->  lista todos usuários -> GET
 * store/create -> cria um novo usuário -> POST
 * delete -> apaga  um usuário -> DELETE
 * show -> mostra um usuário -> GET
 * update -> atualiza um usuário -> PATCH(altera um único valor) ou PUT(Altera objeto inteiro)
 *
 */
