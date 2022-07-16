const {Router} = require('express');
const appController = require('../controllers/appController');

const router = new Router();

/* Controllers */
const authController = require('../controllers/authController');
const stateController = require('../controllers/stateController');
const userController = require('../controllers/userController');

/* Middlewares */
const checkJwt = require('../middlewares/checkJwtMiddleware');

/* Validations */
const userValidation = require('../validations/userValidation');

/* Login */
router.post('/login', authController.login);
router.post('/register', userValidation.store, userController.store);

/* Users */
router.get('/users', checkJwt, userController.index);
router.get('/users/:id', checkJwt, userController.show);
router.post('/users', checkJwt, userValidation.store, userController.store);
router.put('/users/:id',
    checkJwt,
    userValidation.update,
    userController.update,
);
router.delete('/users/:id', checkJwt, userController.destroy);

router.get('/states', stateController.index);
router.get('/states/:state/:city?', stateController.show);

router.get('/apps', appController.index);

module.exports = router;
