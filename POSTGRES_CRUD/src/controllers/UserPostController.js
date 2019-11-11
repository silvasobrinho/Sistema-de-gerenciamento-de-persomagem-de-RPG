const Sequelize = require ('sequelize');
const UserPost = require('../models/User_Post');

module.exports = {
    
    async list(req, res) {
        const user_post = await UserPost.findAll();
        return res.json(user_post);
    },
    async busca(req, res) {
        const user_post = await UserPost.findByPk(req.params.id);
        return res.json(user_post)
    },
    async registro(req, res) {
        const user_post = await UserPost.create(req.body)
        return res.json(user_post);
    },
    async atualiza(req, res) {
        const user_post = await UserPost.findByPk(req.params.id);
        await user_post.update(req.body);
        return res.json(user_post);
    },
    async apaga(req, res) {
        const user_post = await UserPost.findByPk(req.params.id);
        await user_post.destroy()
        return res.send();
    }
};