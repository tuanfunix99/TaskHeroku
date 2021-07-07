

//Dependencies
const e = require('express');
const Users = require('../models/Users');

//get users controller
exports.getUsers = async (req, res, next) => {
    try{
        const users = await Users.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({message: error.message, data: undefined});
    }
}



//get one user controller
exports.getOneUser = async (req, res, next) =>{
    const userId = req.params.userId;

    try {
        const user = await Users.findById(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({message: error.message, data: undefined});
    }
}


//create new user controller
exports.createNewUser = async (req, res, next) => {
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    let user = new Users({name, age, email, password});

    try {
        user = await user.save();
        res.status(201).json({message: undefined, data: user});
    } catch (error) {
        res.status(401).json({message: error.message, data: null});
    }
}


//update user
exports.updateUser = async (req, res, next) => {
    const userId = req.params.userId;
    const name = req.body.name;
    const age = req.body.age;
    const email = req.body.email;
    const password = req.body.password;
    try {
        let user = await Users.findById(userId);
        user.name = name;
        user.age = age;
        user.email = email;
        user.password = password;
        user = await user.save();
        res.status(200).json({message: null, data: user})
    } catch(error) {
        res.status(404).json({message: error.message, data: null});
    }
}


//delete user
exports.deleteUser = async (req, res, next) => {
    const userId = req.params.userId;
    try{
        const user = await Users.findByIdAndRemove(userId);
        res.status(200).json({message: null, data: user})
    }catch (error) {
        res.status(404).json({message: error.message, data: null});
    }   
}