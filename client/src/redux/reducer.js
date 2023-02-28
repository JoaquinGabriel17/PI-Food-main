import { ORDER, FILTER } from "./actions/actions-types"

const initialState = {
    allRecipes: []
}

const reducer = (state = initialState, {type, payload}) => {
    // const filter = []
    switch(type){
        case ORDER:
            if(payload === "alfa as"|| payload === "alfa des"){
                let order = []
                
                if(payload === "alfa as"){
                    
                    order = state.allRecipes.sort((a,b) => { 
                        
                        if(a.name > b.name) return 1
                        if(a.name < b.name) return -1 
                        return 0 
                    })
                    console.log(order);
                }
                else {
                    order = state.allRecipes.sort((a,b) => { 
                        if(a.name < b.name) return 1
                        if(a.name > b.name) return -1
                        return 0 
                    })
                }
                return {
                    ...state,
                    allRecipes: [...order]
                }
            }
            else{
                console.log(state.allRecipes);
                return{
                    ...state,
                    allRecipes: 
                    payload === "health as"
                    ? state.allRecipes.sort((a,b) => a.healthScore - b.healthScore)
                    : state.allRecipes.sort((a,b) => b.healthScore - a.healthScore)
                }
            }


        case FILTER:
            if(payload === "db"){
                let filter = state.allRecipes.filter(rec => {
                    if(Object.keys(rec).includes(payload)) return rec
                    // if(index === state.allRecipes.length - 1) return rec
                })
                // console.log(filter)
                if(!filter.length) alert('No hay recetas provenientes de la base de datos')
                
                return{
                    ...state,
                    allRecipes: filter
                }
                // break;
            }
            else if(payload === "api"){
                let filter1 = []
                // console.log(state.allRecipes)
                 filter1 = state.allRecipes.filter(rec => {
                    if(!Object.keys(rec).includes("db")) return rec 
                })
                if(!filter1.length) alert('No hay recetas provenientes de la API')
                return{
                    ...state,
                    allRecipes: filter1
                }
            }
            if(payload === "clean filters") {
                // const preState = []
                // return {...state, allRecipes: preState}
                return {
                    ...state

                }
            }
            else {
                let filter = [] 
                // console.log(filter);
                
                filter = state.allRecipes.filter(rec => {
                    // console.log(Object.keys(rec).includes("dietas"));
                    if(Object.keys(rec).includes("dietas")){
                        // console.log("sientra");
                        if(rec.dietas.includes(payload)) return rec
                        else return
                    }
                    if(rec.diets.includes(payload)) return rec
                })
                if(!filter.length) alert('No hay recetas con ese tipo de dieta en esta pagina')
            return{
                ...state,
                allRecipes: filter
            }
        }

        default:
            return state
    }
}

export default reducer