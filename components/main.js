const Main = ({data}) => {
    return(
        <div className="col-12">
            <div className="container">
                <div className="row">
                    <Aside camaras={data}/>
                    <ListCam camaras={data}/>
                </div>
            </div>
        </div>
    )
}