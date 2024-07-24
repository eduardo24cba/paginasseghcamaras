//nos devuelve un string sin acentos, idea de nuestros amigos de stackoverflow
const normalizeString = (string) => string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")

//checkeamos si tiene espacios, stackoverflow
const hasWhiteSpace = (s) => (/\s/).test(s) 

//creamos slug para el filtro
const createSlug = (s) => s.split(" ").join("_")

//quitamos slug para la base de datos
const deleteSlug = (s) => s.split("_").join(" ")

const urlFiltro = (cadena, location) => {
    //return url to create filtro
    let filtro = cadena.toLowerCase()
    let url = ''
    let prevRute = location.pathname.split("/")

    if (hasWhiteSpace(filtro)) {filtro = createSlug(cadena)}
    prevRute = prevRute.at(-1)
    url = prevRute === 'productos' ? filtro : prevRute.toLowerCase() + '+' + filtro

    return url
}

//convert to capitalize
const capitalize = (string) => string[0].toUpperCase() + string.slice(1)

//divide filter into array to create filter-button and delete slugs
const filterArray = (filter) => filter.split("+").map(filtro => deleteSlug(filtro))

//create url to back page
const createUrlFilter = (filter, filtro) => filterArray(filter).filter(
    (string) => string !== filtro).join("+")
