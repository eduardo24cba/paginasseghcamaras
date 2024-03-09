const CardCamara = ({camara}) => {
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
                        <p className="text-modelo">Modelo: {camara.modelo}</p>
                        <p className="text-modelo">Diseño: {camara.diseño}</p>
                        <p className="text-modelo">Resolucion: {camara.resolucion}</p>
                        <p className="text-modelo">Conectividad: {camara.conectividad}</p>
                        <p className="text-modelo">Dimensiones: {camara.dimensiones}</p>
                        <p className="text-modelo">Descripcion: <br/><br/> {camara.descripcion}</p>
                        <div className="row">
                            <div className="col d-flex justify-content-between" id="share-product">
                                <div className="share-product-social">
                                    <button type="button" className="btn" id="link_shared">
                                        <i className="fa fa-share-alt"></i>
                                        Compartir  
                                    </button>
                                </div>
                            </div>
                        </div>
                    
                    <button type="button" onClick={() => location.state === null ? navigate("/productos"): navigate(-1)} className="btn btn-volver">
                        Volver al listado
                    </button>
                    </div>  
                </div>
            </div>
        </div>
    )
}

const ViewCamera = () => {
    const {useContext} = React;
    const location = useLocation()
    const [params] = Object.values(useParams())

    const valueContext = useContext(CamaraContext["CamaraContext"])

    //recuperamos la data
    const [camara] = location.state === null 
    ? valueContext.filter( cam => cam.modelo === params)
    : [location.state.camara]

    return (camara ? <CardCamara camara={camara}/> : <NotFound /> )
  }
