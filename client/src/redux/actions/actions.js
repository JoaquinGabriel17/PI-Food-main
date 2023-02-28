import { FILTER, ORDER } from "./actions-types";

export const filter = (tipo) => {
    return { type: FILTER, payload: tipo} 
}

export const order = (way) => {
    return {type: ORDER, payload: way}
}

