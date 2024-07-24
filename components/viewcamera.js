const CardCamara = ({camara}) => {
    const {useNavigate} = ReactRouterDOM
    const navigate = useNavigate()
    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col-lg-8">
                    <span className="d-md-block d-md-none position-absolute m-3" style={{"fontWeight": "bold"}}>1 / 2</span>
                      <div className="d-flex container justify-content-center">
                          <img src={camara.imagenes[0]} alt="" />
                      </div>
                      <div className="mx-auto d-none d-md-block mt-4 border-0">
                          <img src={camara.imagenes[0]} style={{"width":"100px", "height": "100px"}} className="img-thumbnail" alt=""/>
                      </div>
                </div>
                  
                <div className="col-lg-4">
                    <div className="d-flex-column">
                        <p className="text-modelo"> <strong>Modelo: </strong>{camara.modelo}</p>
                        <p className="text-modelo"> <strong>Diseño: </strong>{camara.diseño}</p>
                        <p className="text-modelo"> <strong>Resolucion:</strong>{camara.resolucion}</p>
                        <p className="text-modelo"> <strong>Conectividad: </strong>{camara.conectividad}</p>
                        <p className="text-modelo"> <strong>Dimensiones: </strong>{camara.dimensiones}</p>
                        <p className="text-modelo"> <strong>Descripcion: </strong><br/><br/> {camara.descripcion}</p>
                        <div className="row">
                            <div className="col d-flex justify-content-between" id="share-product">
                                <div className="share-product-social">
                                    <button type="button" className="btn" id="link_shared">
                                    <i className="fa fa-share-alt"></i>
                                        &nbsp;Compartir  
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                    <button type="button" onClick={() => navigate(-1)} className="btn btn-volver">
                        Volver al listado
                    </button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

const ViewCamera = () => {
    const {useDispatch, useSelector} = ReactRedux
    const {useParams} = ReactRouterDOM
    const {useEffect} = React
    const dispatch = useDispatch()
    const [modelo] = Object.values(useParams())
    const [camara] = useSelector((state) => state.camaras)

    useEffect( () => {
        dispatch(filterModelo(modelo))
    }, [dispatch])
    
    return (camara.length > 1 ? <p>loading...</p> : <CardCamara camara={camara}/>)
  }
