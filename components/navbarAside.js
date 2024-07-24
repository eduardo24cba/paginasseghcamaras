const SectionNavAside = ({dictionary, idSection}) => {
    const {useDispatch} = ReactRedux
    const {useNavigate, useLocation} = ReactRouterDOM
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const [values_dict] = Object.values(dictionary)
    let title = idSection.replace("section_", "")
    
    title === "resolucion"
     ? title = "Resolución" 
     : title = capitalize(title) //capitalize
    
    const itemsSections = Object.keys(values_dict).map((key, index) => {
        return(
                <li key={key + index.toString()} className="nav-item">
                        <div className="d-flex flex-row align-items-justify justify-content-center">
                        <button className="btn btn-link"
                            onClick = {()=> {
                                dispatch(filterCamarasAside([key]))
                                let url = urlFiltro(key, location)
                                navigate(`/productos/camaras/filtro/${url}`)}}
                            >{key}</button>
                        </div>
                </li>
        )
    })
    return(
        <section id={idSection + title}>
            <div className="navbar-text">{deleteSlug(title)}</div>
            <ul className="navbar-nav flex-column">
                {itemsSections}
            </ul>
        </section>
    )
}

const NavbarItemsAside = ({items}) => {

    //mostramos solo las secciones que tengan mas de una opcion
    const {useParams, useSearchParams} = ReactRouterDOM
    const {useDispatch} = ReactRedux
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {filter} = useParams()
    
    const filtros = filter !== undefined ? filterArray(filter).map((filtro, index) => {
        return(
            <li key={filtro + index.toString()} className="nav-item">
                <div id={filtro} className="btn p-2 text-nowrap text-white mt-2 mb-2 ml-1 mr-1 filtro">
                    {filtro}
                    <span className="badge badge-light filtro" style={{"cursor":"pointer"}}
                        onClick={()=> {
                            let resultado = createSlug(createUrlFilter(filter, filtro))
                            if(!resultado){navigate('/productos', {state:{text:['reset']}})}
                            else{
                                navigate(`/productos/camaras/filtro/${resultado}`, {replace:true})
                                dispatch(backToInitialState([filtro]))
                            }
                        }}
                    >X</span>
                </div>
            </li>
            )
        })
        : []

    //solo mostramos los filtros con mas de una opcion, {diseño: interior, exterior}, etc.
    let section_filtered = items.filter((dic) => {
        return Object.values(dic).filter(d => Object.keys(d).length > 1).length 
    })

    const listSections = section_filtered.map((item, index, array) => {
                const nameSection = "section_" + Object.keys(item)
                return (
                    <li key={index.toString()} className="nav-item">
                        <SectionNavAside dictionary={item} idSection={nameSection}/>
                        { index+1 !== array.length && <hr className="d-block my-2 ms-3"/>}
                    </li>
                )
            }
        )

    return(
        <ul className="navbar-nav flex-column w-100 justify-content-center">
            {filtros}
            {listSections}
        </ul>

    )
}

const NavbarAside = ({camaras}) => {
    const [filtro_diseno, filtro_resolucion, filtro_tipo_camara] = filterAside({camaras})
    
    return(
        <div className="col-12 col-md-3">
            <div className="row flex-column flex-md-row">
                <aside className="col-12 col-md-3 col-xl-2 p-0 flex-shrink-1">
                    <div className="container-fluid">
                        <nav className="navbar navbar-expand-md navbar-dark bd-dark py-2 text-center m-2">
                            <button type="button" className="navbar-toggler border-0 shadow-none" 
                                    data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="nav"
                                    aria-expanded="false" aria-label="Toggle-navigation" id="filtros">
                                Filtrar
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f2f2f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>
                            </button>
                            <div className="collapse navbar-collapse order-last" id="nav">
                                <NavbarItemsAside items={[filtro_diseno, filtro_resolucion, filtro_tipo_camara]}/>
                            </div>
                        </nav>
                    </div>
                </aside>
            </div>
        </div>
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
