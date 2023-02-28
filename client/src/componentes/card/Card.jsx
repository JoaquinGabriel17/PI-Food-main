import { Link } from "react-router-dom"

const Card = (props) => {
    const  {image, name, dietas, diets,id } = props
        // console.log(props);
    return (
        <div className="card" >
            
            <div>
                <h2 style={{height: "4rem", marginTop: "0", marginBottom: ".5rem"}} >
                   <Link to={`/detail/${id}`} style={{textDecoration: "none", color: "black"}} >{name}</Link>
                </h2>
                <img src={image} alt={name} style={{float: "right", borderRadius: "1rem"}} ></img>
                <h3>Diets</h3>
                <ul style={{textAlign: "start"}} >
                {
                    Object.keys(props).includes("dietas")
                    ? dietas.map(diet => <li key={diet} >{diet}</li>)
                    : diets.map(diet => <li key={diet} >{diet}</li>)
                }
                </ul>
                
            </div>
        </div>
    )
}

export default Card