const Main = () => {
    const location = useLocation()
    const data = location.state.data

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
