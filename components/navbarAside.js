const SectionNavAside = ({dictionary, idSection, camaras}) => {
    let title = idSection.replace("section_", "")
    
    title === "resolucion"
     ? title = "Resolución" 
     : title = title[0].toUpperCase() + title.slice(1) //capitalize

    
    const itemsSections = Object.keys(dictionary).map(key => {
        
        return Object.keys(dictionary[key]).map(itemDictKey => {
            
            return(
                Object.values(dictionary[key]).length > 1 ?
                <li key={itemDictKey} className="nav-item">
                        <div className="d-flex flex-row align-items-justify justify-content-center">
                            <Link to={`/productos/camaras/filtro/${title.toLowerCase()}`} state={{camaras:camaras,
                             key: title,
                             value:itemDictKey}} 
                             className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">
                                {itemDictKey}
                            </Link>
                        </div>
                </li>
                :<h3 key={itemDictKey}>Se quito el filtro</h3>
            )
        })
    })
    
    return(
        <section id={idSection}>
            <div className="navbar-text">{title}</div>
            <ul className="navbar-nav flex-column">
                {itemsSections}
            </ul>
        </section>
    )
}

const NavbarItemsAside = ({items, camaras}) => {

    const [dict] = Object.values({items})
    const listSections = dict.map((item, i, array) => {
                const nameSection = "section_" + Object.keys(item)
                return (
                    <li key={Object.keys(item)} className="nav-item">
                        <SectionNavAside dictionary={item} idSection={nameSection} camaras={camaras}/>
                        { i+1 !== array.length && <hr className="d-block my-2 ms-3"/>}
                    </li>
                )
            }
        )
    return(
        <ul className="navbar-nav flex-column w-100 justify-content-center">
            {listSections}
        </ul>
    )
}

const NavbarAside = ({camaras}) => {
    const [filtro_diseno, filtro_resolucion, filtro_tipo_camara] = filterAside({camaras})
    
    return(
        <nav className="navbar navbar-expand-md navbar-dark bd-dark py-2 text-center m-2">
            <button type="button" className="navbar-toggler border-0 shadow-none" 
                    data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav"
                    aria-expanded="false" aria-label="Toggle-navigation" id="filtros">
                Filtrar
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f2f2f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
            </button>
            <div className="collapse navbar-collapse order-last" id="nav">
                <NavbarItemsAside items={[filtro_diseno, filtro_resolucion, filtro_tipo_camara]} camaras={camaras}/>
            </div>
        </nav>
    )
}

function filterAside({camaras}){
    let filtro_diseno = {"diseño":{}}
    let filtro_resolucion = {"resolucion":{}}
    let filtro_tipo_camara = {"tipo_de_camara":{}}
    
    camaras.map(m => {

        updateDict(filtro_diseno, m.diseño)
        updateDict(filtro_resolucion, m.resolucion)
        updateDict(filtro_tipo_camara, m.tipo_de_camara)
        
    })

    return [filtro_diseno, filtro_resolucion, filtro_tipo_camara]
}

function updateDict(dict, key){
    //guardamos valores {"diseño":{"interior":1,...}} de cada diccionario
    const [valueDict] = Object.keys(dict)
    Object.keys(dict[valueDict]).length === 0 || !(Object.keys(dict[valueDict]).includes(key)) ?
    dict[valueDict][key] = 1: dict[valueDict][key] += 1
}
