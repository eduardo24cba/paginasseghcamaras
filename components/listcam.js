const ListCam = ({camaras, resultados}) => {
    //object values nos devuelve un diccionario y los valores son un diccionario[[values]]
    const listCamaras = camaras.map(m => <CardsCam key={m.id} camara={m} />)
    let label_resultados = listCamaras.length > 1 ? listCamaras.length.toString() + " Resultados" :listCamaras.length.toString() + " Resultado"
    return(
            <div className="col-sm-12 col-md-9 ml-4 mr-4" id="listCams">
                {resultados && <div className="h3 m-2 titles justify-content-center d-flex">
                    {label_resultados}
                    </div>}
                <div className="row mt-3">
                    {listCamaras}
                </div>
            </div>
    )
}