import Nav from '../nav/Nav'
import Listado from '../listado/Listado'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Card from '../card/Card'
import { useState, useEffect } from 'react'
import './home.css'
import { useDispatch, useSelector } from 'react-redux'
import { filter, order } from '../../redux/actions/actions'

const Home = () => {
    
    const [ items, setItems ] = useState([])
    const [ apiData , setApiData ] = useState([])
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ diet, setDiet ] = useState('')
    const dispatch = useDispatch()
    const { allRecipes } = useSelector(state => state)          

    const onSearch = async(name) => {
        try {
            let recipeByName = await axios(`http://localhost:3001/recipes/?name=${name}`)     //SEARCH BY NAME
            setItems([...recipeByName.data].splice(0,9))
            setApiData([...recipeByName.data])                
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        const montar = async() => {
            let data = await axios(`http://localhost:3001/recipes`)         //Cuando se monta el componente hace la peticion
            setApiData(data.data)                                            
            setItems([...data.data].splice(0,9))
        }
        montar()
    },[])

    const buttonClean = () => {
        setItems([])                                           //CLEAN CARDS COMPONENT
    }

    // const handleClean = () => {
    //     items.forEach(rec => allRecipes.push(rec))
    // }

    const selectPage = (page) => {
        
        const newIndex = page * 9
        setItems([...apiData].splice(newIndex, 9))
        if(allRecipes.length&&diet.length) {
            allRecipes.length = 0
            

        }
        setCurrentPage(page)
        // console.log(items);
    }
    
    const nextHandler = (e) => {
        e.preventDefault()
        if(allRecipes.length) allRecipes.length = 0
        const totalElements = apiData.length
        const nextPage = currentPage + 1;
        const indice = nextPage * 9;

        if(indice > totalElements) return;
        
        setItems([...apiData].splice(indice, 9))
        setCurrentPage(nextPage)                                 //PAGINADO 
        // if(allRecipes.length) alert('saque los filtros')

        // items.forEach((rec, index) => {
        //     allRecipes[index] = rec
        // })
    }
    const prevHandler = (e) => {
        e.preventDefault()
        if(allRecipes.length) allRecipes.length = 0
        const prevPage = currentPage - 1;
        if(prevPage < 0) return;
        const indice = prevPage * 9;
        setItems([...apiData].splice(indice, 9))
        setCurrentPage(prevPage)
        // if(allRecipes.length) alert('saque los filtros')
        // items.forEach((rec, index) => {
        //     allRecipes[index] = rec
        // })
    }

    const handlerFilter = (e) =>{ 
        if(!allRecipes.length){
        items.forEach((rec,index) => {                                                                       
            allRecipes[index] = rec
        })
    }

        if(e.target.value === ("db"||"api")){              
        dispatch(filter(e.target.value)) 

        }
        else {
            dispatch(filter(e.target.value))
            setDiet(e.target.value)
            // setItems([...allRecipes])
        }
    }
    const handlerFilter2 = () => {
        allRecipes.length = 0
        setItems([...items])
    }

    const handlerOrder = (e) => {
        if(!allRecipes.length){
        items.forEach((rec,index) => {                                                                       
            allRecipes[index] = rec
        })
    }
        dispatch(order(e.target.value))
    }
    
    return ( 
        <div className='contain'>
            <Nav onSearch={onSearch}></Nav>
            
            <div className='filtros'>

                <h2>FILTRAR</h2>
                <select className='botones' onChange={handlerFilter} defaultValue="Dietas" >Dietas
                    <option disabled={true} >Dietas</option>
                    <option value="gluten free" >Gluten free</option>
                    <option value="dairy free">Dairy free</option>
                    <option value="lacto ovo vegetarian">Lacto ovo vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="paleolithic">Paleolithic</option>
                    <option value="primal">Primal</option>
                    <option value="whole 30">Whole 30</option>
                    <option value="pescatarian">Pescatarian</option>
                    <option value="ketogenic">Ketogenic</option>
                    <option value="fodmap friendly">Fodmap friendly</option>
                </select>
                <h3>origen</h3>
                <button className='botones'  value="api" onClick={handlerFilter} >API</button>
                <button className='botones' value="db" onClick={handlerFilter} >Base de Datos</button>
                <button className='botones' onClick={handlerFilter2} value="clean filters" >Sacar filtros</button>


                <h2>ORDEN</h2>
                <h3>alfabetico</h3>
                <button className='botones' value="alfa as" onClick={handlerOrder} >Ascendente</button>
                <button className='botones' value="alfa des" onClick={handlerOrder} >Descendente</button>
                <h3>Puntaje de salud</h3>
                <button className='botones' value="health as" onClick={handlerOrder} >Ascendente</button>
                <button className='botones' value="health des" onClick={handlerOrder} >Descendente</button>
                <button className='botones' onClick={buttonClean} >Sacar cartas</button>
            </div>    
            {
                allRecipes.length
                ? <Listado current={currentPage} totalPages={apiData.length} setCurrentPage={selectPage} items={allRecipes} nextHandler={nextHandler} prevHandler={prevHandler}></Listado>  
                // ? (<div className="cartas"> {cards.map(rec => <Card id={rec.id} key={rec.id} name={rec.name} image={rec.image} dietas={rec.dietas} />)}</div>) 
                : <Listado current={currentPage} totalPages={apiData.length} setCurrentPage={selectPage} items={items} nextHandler={nextHandler} prevHandler={prevHandler}></Listado>
            }  
        </div>
    )
}

export default Home