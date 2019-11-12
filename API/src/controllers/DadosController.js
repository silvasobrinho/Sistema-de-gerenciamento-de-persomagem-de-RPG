
module.exports = {
        async gd20(req,res){
            const d20 = await Math.floor(Math.random() * (20 - 1 + 1) +1);       
            return res.json(d20)
        },

        async gd6(req,res){
            const d6 = await Math.floor(Math.random() * (6 - 1 + 1) +1 ) ; 
            return res.json(d6)
        },

        async gd4(req,res){
            const d4 = await Math.floor(Math.random() * (4 - 1 + 1) +1 ) ; 
            return res.json(d4)
        },

        async gd8(req,res){
            const d8 = await Math.floor(Math.random() * (8 - 1 + 1) +1 ) ; 
            return res.json(d8)
        },

        async gd10(req,res){
            const d10 = await Math.floor(Math.random() * (10 - 1 + 1) +1 ) ; 
            return res.json(d10)
        },
};