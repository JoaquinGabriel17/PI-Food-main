import { useState } from "react"
import validation from "./validation"
import { useNavigate } from "react-router-dom"
import "./form.css"
import axios from "axios"
// import {Recipe} from '../../../../api/src/db'

const Form = () => {

    const navigate = useNavigate()

    const [ newRecipe, setNewRecipe ] = useState({
        name: '',
        dishResume: '',
        healthScore: '',
        steps: '',
        image: '',
        diets: [],
    })
    const [ errors, setErrors ] = useState({
        name: '',
        dishResume: '',
        healthScore: '',
        steps: '',
        image: '',
        diets: '',
    })


    const handleForm = (e) => {
        setNewRecipe({
            ...newRecipe,
            [e.target.name]: e.target.value
        })
        setErrors(validation({
            ...newRecipe,
            [e.target.name]: e.target.value
        }))
    }

    const handleButton = async() => {
        
        try{
        if(Object.values(errors).length) alert('Error en la informacion provista')
        else{
            await axios({
                method: 'post',
                url: 'http://localhost:3001/recipes',
                data: {
                    name: newRecipe.name,
                    image: newRecipe.image,
                    dish_resume: newRecipe.dishResume,
                    healthScore: newRecipe.healthScore,
                    steps: newRecipe.steps
                }
            })
                setNewRecipe({
                    name: '',
                    dishResume: '',
                    healthScore: '',
                    steps: '',
                    image: '',
                    diets: [],
                })
                setErrors({
                    name: '',
                    dishResume: '',
                    healthScore: '',
                    steps: '',
                    image: '',
                    diets: '',
                })
                alert('La receta fue creada con exito')
            
        }
    }
    catch(error){
        alert(error.message)
    }
}

const back = () => {
    navigate("/home")
}


    return (
        <div className="formulario" >
            <button onClick={back} className="back" >Home</button>
            <div className="campos" >
            {/* <h1>formulario</h1> */}
            <label>Nombre: </label>
            <input type="text" name="name" value={newRecipe.name} onChange={handleForm}   className="inputs" />
            { errors.name&&<p style={{color: 'red'}}>{errors.name}</p>}
            {/* <hr/> */}
            <label>Resumen del plato: </label>
            <textarea type="text" name="dishResume" value={newRecipe.dishResume} onChange={handleForm} className="inputs" style={{width: "22rem"}}/>
            { errors.dishResume&&<p style={{color: 'red'}}>{errors.dishResume}</p>}
            {/* <hr/> */}
            <label>Nivel de comida saludable: </label>
            <input type="text" name="healthScore" value={newRecipe.healthScore} onChange={handleForm} className="inputs" style={{width: "6rem"}}/>
            { errors.healthScore&&<p style={{color: 'red'}}>{errors.healthScore}</p>}
            {/* <hr/> */}
            <label>Paso a paso: </label>
            <textarea type="text" name="steps" value={newRecipe.steps} onChange={handleForm} className="inputs" style={{width: "24rem"}}/>
            { errors.steps&&<p style={{color: 'red'}}>{errors.steps}</p>}
            {/* <hr/> */}
            <label>URL de imagen: </label>
            <input type="text" name="image" value={newRecipe.image} onChange={handleForm} className="inputs" style={{width: "28rem"}} />
            { errors.image&&<p style={{color: 'red'}}>{errors.image}</p>}
             
            {
                Object.values(errors).length
                ? <button disabled="true" className="crear" >crear</button>
                : <button onClick={handleButton} className="crear" >crear</button>
            }
            </div>
            {/* <button onClick={handleButton} className="crear" >crear</button> */}
        </div>
    )
}

export default Form