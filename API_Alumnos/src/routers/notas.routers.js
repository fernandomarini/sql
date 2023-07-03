const { Router } = require ("express")
const router = Router();
const notasCtrl = require ("../controller/notas.controller")


router.get('/notaMedia', notasCtrl.getMedia);
router.get('/apuntada', notasCtrl.getApuntadas);
router.get('/impartida', notasCtrl.getImpartidas);


module.exports = router;
