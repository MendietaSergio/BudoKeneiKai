var express = require('express');
var router = express.Router();

const indexController = require("../controllers/IndexController")
/* GET home page. */
router.get('/', indexController.competitions)
//ACA MUESTRO PUNTAJES DEL COMPETIDOR POR MESA
//SE TIENE QUE FILTRAR ID DE LA MESA PARA IR MOSTRANDO
router.get('/proyecta-puntaje/01', indexController.showTable01)
router.get('/proyecta-puntaje/02', indexController.showTable02)
router.get('/proyecta-puntaje/03', indexController.showTable03)


module.exports = router;
