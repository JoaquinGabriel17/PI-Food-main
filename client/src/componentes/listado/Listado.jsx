import Card from "../card/Card"
import "../homePage/home.css"



const Listado = (prop) => {
    let pages = []
    // prop.totalPages&&console.log(prop.totalPages);
for(let i = 0; i < Math.ceil(prop.totalPages / 9); i++){
    pages.push(i)
}
    return ( 
        <div className="listado">
            
            <h1>pagina: {prop.current}</h1>
            <button onClick={prop.prevHandler} className="botones" style={{width: "4rem"}} >Prev</button>
            {
                pages.map((page, index) => <button onClick={() => prop.setCurrentPage(page)} className={page === prop.current ? 'chosen' : 'botones'} key={index} >{page}</button>)
            }
            
            <button onClick={prop.nextHandler} className="botones" style={{width: "4rem"}} >Next</button>
            <div className="cartas" >
            {
                prop.items.length&&prop.items.map(item => {
                    if(Object.keys(item).includes("diets")){
                    return  <Card name={item.name} image={item.image}  diets={item.diets} key={item.id} id={item.id} ></Card>
                    }
                    else return <Card name={item.name} image={item.image}  dietas={item.dietas} key={item.id} id={item.id} ></Card>
                    })
            }
            </div>

        </div>
    )
}

export default Listado