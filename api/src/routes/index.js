const { Router } = require('express');
const recipesRouter = require('./recipes');
const dietsRouter = require('./diets')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/diets', dietsRouter)
router.use('/recipes', recipesRouter)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

// link de api => https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/

module.exports = router;
