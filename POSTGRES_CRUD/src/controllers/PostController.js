const sequelize = require ('sequelize');
const Post = require('../models/post');


module.exports = {
    //listagem
    async list(req, res){
        const post = await Post.findAll();
        return res.json(post)
    },

//busca

async busca(req,res){
    const post=await Post.findByPk(req.params.id);
    return res.json(post);
},

//Registrando no bd

async registro(req,res){
    const post=await Post.create(req.body);
    return res.json(post);

},

//update nos dados

async atualiza(req,res){
    const post=await Post.findByPk(req.params.id);
    await post.update(req.body);
    return res.json(post);
},

//delete

async apaga(req,res){
    const post=await Post.findByPk(req.params.id);
    await post.destroy();
    return res.send();
}
};