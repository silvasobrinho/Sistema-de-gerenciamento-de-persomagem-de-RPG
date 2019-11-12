const Sequelize = require('sequelize');
const bd = require('../../db');
const bcrypt = require('bcryptjs');

const User= bd.define('users',{
    
    name:{
        type: Sequelize.STRING,
        required:true,
        },
    
    password:{
        type: Sequelize.STRING,
        required:true,
        select: false,
        allownull: false,
        len: [6,16],
    },
    email:{
        type: Sequelize.STRING,
        required:true,
        unique: true,
        lowercase: true,
        },
    });
   /*      {
            instanceMethods: {
            generateHash: function (password) {
                return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
            },
            validPassword: function (password) {
                return bcrypt.compareSync(password, this.password)
            }
            }
        }); */
/*       
User.generateHash = function(password) {
    return bcrypt.hasSync (password, bcrypt.genSaltSync(8), null);
};

User.prototype.validPassword = function (password){
    return bcrypt.compareSync(password, this.localPassword);
};
 */
    //  User.sync()
//User.sync({ force: true });
module.exports = User;