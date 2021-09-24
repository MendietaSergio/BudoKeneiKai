var express = require('express');
var router = express.Router();

const userController = require("../controllers/usersController")


router.get('/', userController.login)
router.get('/admin/competidores', userController.competitors)
router.get('/admin/gestion-usuario', userController.userManagement)
router.get('/arbitro', userController.refereeManagement)
router.get('/admin/categorias', userController.category)
router.get('/admin/crear-evaluacion', userController.evaluationCreate)
router.get('/admin/vista-evaluacion', userController.evaluationView)
router.get('/admin/evaluacion', userController.evaluation)
router.get('/admin/puntajes', userController.score)

//mostrar arbitro dependiendo de su id, se tiene que pasar por url la ID
router.get('/arbitro/puntos', userController.referee)

module.exports = router;
