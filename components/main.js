const Main = () => {
    const {useContext} = React
    const valueContext = useContext(CamaraContext["CamaraContext"])

    const location = useLocation()
    //la location es null cuando no viene apretando por medio del link
    //si eso sucede, recuperamos datos a traves del contexto
    const data = location.state === null ? valueContext : location.state.data

    return(
        <div className="col-12">
            <div className="container">
                <div className="row">
                    <Aside camaras={data}/>
                    <ListCam camaras={data}/>
                    <WhatsappIcon />
                </div>
            </div>
        </div>
    )
}
