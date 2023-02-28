const axios = require('axios')
const { Recipe, Diets } = require('../db')
const { API_KEY } = process.env
// const { Op } = require('sequelize')

const getRecipeByName = async(name) => {
    try {
        

        
        let i = 0;
        let recipesByName = [] 

        while(i < 100){
            const data = await axios(`https://api.spoonacular.com/recipes/searchComplex?apiKey=${API_KEY}&offset=${i}&number=50&addRecipeInformation=true`)
            let recipes = data.data.results
            if(!name) {
                recipes = recipes.map(rec => {
                            return {id: rec.id,
                            name: rec.title,
                            image: rec.image,
                            diets: rec.diets,
                            healthScore: rec.healthScore
                        }
                })
                const dbRecipes = await Recipe.findAll()
                recipesByName = [...recipesByName, ...dbRecipes, ...recipes]
            }
            
            else {
                recipes.forEach(rec => {    
                if(rec.title.toLowerCase().includes(name.toLowerCase())){
                    recipesByName.push({
                        id: rec.id,
                        name: rec.title,
                        image: rec.image,
                        diets: rec.diets
                    })
                }
            })
        }
            
            // recipesByName = [...recipesByName, ...]
            i += 50
        }
    if(name){
        const dataDB = await Recipe.findAll({ where: {
            name: name
        }
        // include: {
        //     model: Diets,
        //     attributes: ['name'],
        //     through: {
        //         attributes: []
        //     }
        // }
        })
        if(dataDB.length) recipesByName = [...dataDB, ...recipesByName ]
        

        if(!recipesByName.length) throw new Error('No existe ninguna comida con ese tipo de neim')
    }

        return recipesByName
    } catch (error) {
        return {error:  error.message }
    }
}

module.exports = getRecipeByName