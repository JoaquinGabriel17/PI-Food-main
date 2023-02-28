const recipesRouter = require('express').Router();
const getRecipeById = require('../controllers/getRecipeById');
const getRecipeByName = require('../controllers/getRecipeByName');
const AddNewRecipe = require('../controllers/AddNewRecipe')


recipesRouter.get('/:idRecipe', async(req, res) => {
    try {
        const { idRecipe } = req.params
        
        const recipe = await getRecipeById(idRecipe)
        if(recipe.error) throw new Error(recipe.error)

        res.status(200).json(recipe)
    } catch (error) {
        res.status(404).send(error.message)
    }
})

recipesRouter.get('/', async(req, res) => {
    try {
        const { name } = req.query;

        const recipeByName = await getRecipeByName(name)
        if(recipeByName.error) throw new Error(recipeByName.error)

        return res.status(200).send(recipeByName)
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

recipesRouter.post('/', async(req, res) => {
    try {
        const response = await AddNewRecipe(req.body)

        if(response.error) throw new Error(response.error)

        res.status(200).json(response)
    } catch (error) {
        return res.status(400).send(error.message)
    }
    
})
module.exports = recipesRouter