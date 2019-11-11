const express = require('express');
const bcrypt = require('bcryptjs');
const Sequelize = require('sequelize');

const User = require('../models/user');

module.exports = {

async auth(req,res) {

        const { email, password } = req.body;

        const user = await User.findOne( {
        where: {email: req.body.email}
        }).select('+password');
        
            if(!user)
            return res.status(400).send({ error: 'User nor found' });
    
            if(!await bcrypt.compare(password, user.password)){
                return res.status(400).send({ error: 'Invalid Password '});


                res.send({ user });
            }
    }
};