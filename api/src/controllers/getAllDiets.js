const { Diet } = require('../db')
const axios = require('axios')
const { API_KEY } = process.env

const getAllDiets = async() => {
    try {
        let offset = 0
        const allDiets = []
        while(offset < 100){
        const resp = await axios(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=50&addRecipeInformation=true&offset=${offset}`);
        
       
        resp.data.results.forEach(async(res) => {   
            res.diets.forEach(async(diet) => {
               if(!allDiets.includes(diet)) {
                    allDiets.push(diet)
                    await Diet.findOrCreate({
                        where: { name: diet },
                        defaults: { name: diet }
                })
               }
           })
        
        })
        offset += 50
    }
        return allDiets
    
   } catch (error) {
       return { error: error.message }
   }
}

module.exports = getAllDiets