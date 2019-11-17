'use strict'


const Personagem = use('App/models/Personagem')

class DadoController {

    
    async gd4(req,res){
        return await Math.floor(Math.random() * (4 - 1 + 1) +1 ) ; 
        
    }

    async gd6(req,res){
        return await Math.floor(Math.random() * (6 - 1 + 1) +1 ) ; 
        
    }


    async gd8(req,res){
        return await Math.floor(Math.random() * (8 - 1 + 1) +1 ) ; 
        
    }

    async gd10(req,res){
        return await Math.floor(Math.random() * (10 - 1 + 1) +1 ) ; 
        
    }

    async gd12(req,res){
        return await Math.floor(Math.random() * (12 - 1 + 1) +1 ) ; 
        
    }

    async gd20(req,res){
        return await Math.floor(Math.random() * (20 - 1 + 1) +1);       
       
    }

    async gd100(req,res){
        return  await Math.floor(Math.random() * (100 - 1 + 1) +1 ) ; 
        
    }

    async buscaum ({ params, auth, response }) {

        const personagem = await Personagem.findOrFail(params.id)
    
        return personagem
      }
}




module.exports = DadoController
