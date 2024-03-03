async function f(){
    const data = await fetch("https://eduardo24cba.github.io/dataSsegh/camaras.json")
    const datos = await data.json()
    //Establecemos un limite para la cantidad de objetos que recuperarmos
    const filtered = Object.values(datos.camaras).filter(d => d).slice(0, 100)
    
    
    return filtered
}