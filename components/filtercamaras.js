const FilterCamara = () => {
    const {useEffect, useState} = React
    const {useSelector, useDispatch} = ReactRedux
    const {useLocation} = ReactRouterDOM
    const dispatch = useDispatch()
    const {filter} = useParams()
    const location = useLocation()
    const [filtrado, setFiltrado] = useState(false)
    const camaras = useSelector((state) => state.camaras)
    let filtros_aplicados = filterArray(filter)
    
    useEffect(() => {
        dispatch(filterCamarasAside(filtros_aplicados))
        setFiltrado(true)
    }, [location.pathname])

    return(
        (camaras.length && filtrado) ?
        <div className="col-12">
            <div className="container">
                <div className="row">
                    <NavbarAside camaras={camaras}/>
                    <ListCam camaras={camaras} resultados={filtrado}/>
                    <WhatsappIcon />
                </div>
            </div>
        </div> :
        camaras.length 
        ?  <OnLoad />
        :   <NotFound />
    )
}



