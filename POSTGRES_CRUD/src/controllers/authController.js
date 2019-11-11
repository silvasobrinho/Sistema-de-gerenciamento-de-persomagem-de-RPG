const express = require('express');
const bcrypt = require('bcryptjs')

const User = require('../models/user');

module.exports = {

async auth(req,res){
    const { email } = req.body;

    try{
         
        if ( await User.findOne({ 
            where: { email: req.body.email }
         })){
        
       return res.status(400).send({ error: 'User already  exists' }); // verifica se o email existe ja cadastrado
        } 
       req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
       const user = await User.create(req.body);

       //escondendo o password na resposta
        user.password = undefined;

       return res.send({ user });
    } catch(err){
        return res.status(400).send({ error: 'Registration failed' });
    }
}
};