'use strict'



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



    async gd1000(req,res){
        return  await Math.floor(Math.random() * (1000 - 1 + 1) +1 ) ; 
        
    }

}



module.exports = DadoController
