import { useState } from "react"
// import axios from 'axios'
// import Card from "../card/Card"

const SearchBar = ({onSearch}) => {

    const [name, setName] = useState('')

    const handleChange = (eve) => {
        setName(eve.target.value)
    }
    // const handleButton = async(e) => {
    //     onSearch(name)
    //     setName('')
    // }



    return(
        <div>
            <input type='search' className="searchInput" value={name} onChange={handleChange} ></input>
            <button onClick={() => onSearch(name)} className="botones" >buscar</button>

            
        </div>
    )
}

export default SearchBar