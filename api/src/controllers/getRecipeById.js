const { Recipe } = require('../db');
const axios = require('axios')
const { API_KEY } = process.env;

// let util = require('util')
const getRecipeById = async(id) => {
    try {
        let onlyNum = /^([0-9])*$/
        if(onlyNum.test(id)) {
            let data = await axios(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`);
            data = data.data
            const recipe = {
                id: data.id,
                name: data.title,
                diets: data.diets,
                dish_resume: data.summary,
                health_score: data.healthScore,
                steps: data.instructions? data.instructions : 'no hay instrucciones del platillo',
                image: data.image,
                
            }
            return recipe
        }
        
        else{
            const dbRecipe = await Recipe.findByPk(id)
            dbRecipe.diets = dbRecipe.dietas
            return dbRecipe  
        }
    } catch (error) {
        return { error: error.message}
    }
}

module.exports = getRecipeById