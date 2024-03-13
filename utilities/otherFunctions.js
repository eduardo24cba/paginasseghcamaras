//nos devuelve un string sin acentos, idea de nuestros amigos de stackoverflow
const normalizeString = (string) => string.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
