


const validation = ({name,image,dishResume, healthScore, steps }) => {
    const error = {}
    if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name)) error.name = 'El nombre no puede contener numeros'
    if(!/^[0-9]+([.][0-9]+)?$/.test(healthScore)) error.healthScore = 'Debe ser un numero'
    if(healthScore < 5||healthScore > 50) error.healthScore = 'Minimo 5, máximo 50'
    if(!/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(image)) error.image = "Debe ser una URL"
    if(!dishResume) error.dishResume = "Campo obligatorio"
    if(!steps) error.steps = "Campo obligatorio"
    return error
    
}

export default validation