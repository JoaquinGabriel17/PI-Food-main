import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import "./detail.css"

const Detail = () => {
    const naviagte = useNavigate()
    const { id } = useParams()
    const [ recipe, setRecipe ] = useState({
        id: 1,
        name: '',
        dishResume: '',
        healthScore: 1,
        steps: '',
        image: '',
        diets: []
    })

    useEffect(async() => {

        try {
            const data = (await axios(`http://localhost:3001/recipes/${id}`)).data
            Object.keys(data).includes("diets")
            ? setRecipe({
                id: data.id,
                name: data.name,
                dishResume: data.dish_resume,
                healthscore: data.health_score,
                steps: data.steps,
                image: data.image,
                diets: data.diets
            })
            : setRecipe({
                id: data.id,
                name: data.name,
                dishResume: data.dish_resume,
                healthscore: data.health_score,
                steps: data.steps,
                image: data.image,
                diets: data.dietas
            })
        } catch (error) {
            alert('esta mal la id my rey')
        }
    
    },[])
    const redirect = () => {
        naviagte("/home")
    }
    return(
        <div className="detail" >
            <button onClick={redirect} className="back" style={{backgroundColor: "sienna"}} >Home</button>
            {/* <Link to='/home'>home</Link> */}
            {/* <h1>informacion de una receta</h1> */}
            <h1>{recipe.name}</h1>
            <div className="prinInfo" >
                <h1 className="subtitulo" >Informacion</h1>
            <h2>ID: {recipe.id}</h2>
            <h2>Puntaje de salud: {recipe.healthscore}</h2>
            <h2 className="subtitulo" >Dietas</h2>
            <ul className="detailList" >
                {
                     recipe.diets.map(diet => {
                        return (
                                <li key={diet}>{diet}</li>
                        )
                    })
                }
            </ul>
            </div>
            <img className="detailImage" style={{maxWidth: "35rem", maxHeight: "370px"}} src={recipe.image} alt={recipe.name} />
            
            <h1 className="subtitulo" >Resumen del plato</h1>
            <p dangerouslySetInnerHTML={{__html: recipe.dishResume}} ></p>
            
            <h1 className="subtitulo" >Paso a paso</h1>
            <p dangerouslySetInnerHTML={{__html: recipe.steps}} ></p>
            
            
        </div>
    )
}

export default Detail