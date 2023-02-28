// import Nav from '../nav/Nav'
// import Listado from '../listado/Listado'
// // import {Link} from 'react-router-dom'
// import axios from 'axios'
// import Card from '../card/Card'
// import { useState, useEffect } from 'react'
// import './home.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { filter, order } from '../../redux/actions/actions'

// const Home = () => {

  

//     useEffect(() => {
//         const montar = async() => {
//             let allRecipesData = await axios(`http://localhost:3001/recipes`)         //Cuando se monta el componente hace la peticion
//             await setApiData([...allRecipesData.data])                                            
//         }
//         montar()
//     },[])
    
   

//     return ( 
//         <div className='contain'>
//             <Nav onSearch={onSearch}></Nav>
            
//             <div className='filtros'>

//                 <h1>FILTRAR</h1>
//                 {/* <button onClick={handleRecipes} >Get recipes</button> */}
//                 <select onChange={handlerFilter} defaultValue="Dietas" >Dietas
//                     <option disabled={true} >Dietas</option>
//                     <option value="gluten free" >Gluten free</option>
//                     <option value="dairy free">Dairy free</option>
//                     <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
//                     <option value="vegan">Vegan</option>
//                     <option value="paleolithic">Paleolithic</option>
//                     <option value="primal">Primal</option>
//                     <option value="whole 30">Whole 30</option>
//                     <option value="pescatarian">Pescatarian</option>
//                     <option value="ketogenic">Ketogenic</option>
//                     <option value="fodmap friendly">Fodmap friendly</option>
//                 </select>
//                 <h3>origen</h3>
//                 <button value="api" onClick={handlerFilter} >API</button>
//                 <button value="db" onClick={handlerFilter} >DB</button>
//                 <button onClick={handlerFilter} value="clean filters" >clean filters</button>


//                 <h1>ORDENAR</h1>
//                 <h3>alfabetico</h3>
//                 <button>ascension</button>
//                 <button>descension</button>
//                 <h3>healthScore</h3>
//                 <button>ascension</button>
//                 <button>descension</button>
//                 <button onClick={buttonClean} >clean</button>
//             </div>    
//             {
//                 cards.length 
//                 ? (<div className="cartas"> {cards.map(rec => <Card id={rec.id} key={rec.id} name={rec.name} image={rec.image} dietas={rec.dietas} />)}</div>) 
//                 : <Listado current={currentPage} items={allRecipes} nextHandler={nextHandler} prevHandler={prevHandler}></Listado>
//             }  
//         </div>
//     )
// }

// export default Home