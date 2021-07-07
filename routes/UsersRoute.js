

//Dependencies
const express = require('express');
const userControllers = require('../controllers/UsersController');


//Inatantiate router
const router = express.Router();


//get users
router.get('/', userControllers.getUsers);


//get one user
router.get('/:userId', userControllers.getOneUser);


//create new user
router.post('/', userControllers.createNewUser);


//update user
router.put('/:userId/', userControllers.updateUser);


//delete user
router.delete('/:userId/', userControllers.deleteUser);

//export the module
module.exports = router;