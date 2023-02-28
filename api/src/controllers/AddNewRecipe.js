const { Recipe } = require('../db')

const addNewRecipe = async(recipe) => {
    try {
        const { name, image, dish_resume, healthScore, steps, } = recipe;
        if(!name || !image || !dish_resume || !healthScore || !steps) throw new Error('Faltan datos obligatorios')
        const newRecipe = { name, image, dish_resume, healthScore, steps, dietas: ["vegan", "paleolithic"]}
    
        await Recipe.create(newRecipe)
        return "La receta fue creada con exito"
    } catch (error) {
        return { error: error.message }
    }

}

module.exports = addNewRecipe


// const { name, image, dish_resume, health_score, step_to_step, } = recipe;
//     if(!name || !image || !dish_resume || !health_score || !step_to_step) throw new Error('Debes enviar todos lo datos misangre')
//     const newRecipe = { name, image, dish_resume, health, step_to_step}

//     await Recipe.create(newRecipe)