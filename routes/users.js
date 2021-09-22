var express = require('express');
var router = express.Router();

const userController = require("../controllers/usersController")

/* GET users listing. */
router.get('/', userController.login)
router.get('/admin/competidores', userController.competitors)
router.get('/admin/gestion-usuario', userController.userManagement)
router.get('/admin/categorias', userController.category)
router.get('/admin/evaluacion', userController.evaluation)
router.get('/admin/puntajes', userController.score)


//mostrar arbitro dependiendo de su id, se tiene que pasar por url la ID
router.get('/arbitro', userController.referee)

module.exports = router;
