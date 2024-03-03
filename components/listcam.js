const ListCam = (camaras) => {
    //object values nos devuelve un diccionario y los valores son un diccionario[[values]]
    const [cams] = Object.values(camaras)
    const listCamaras = cams.map(m => <CardsCam key={m.id} camara={m} />)
    return(
            <div className="col-sm-12 col-md-9 ml-4 mr-4" id="listCams">
                <div className="row mt-3">
                    {listCamaras}
                </div>
            </div>
    )
}