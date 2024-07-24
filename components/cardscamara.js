const camposCam = (key) => {
    if(FIELDS_CARD.some(value => key.includes(value)))return key
}

const CardsCam = ({camara}) => {
    let arrayImages = [camara.imagenes[0]]
    const campos = FIELDS_CARD.map(key => <li key={key} className="list-group-item"> {camara[key]}</li>)
    
    return(
        <div className="col-sm-12 col-md-6 col-xl-4 mt-2 mb-2">
            <article>
                <div className="card border-0" id="cartas">
                    {/*arrayImages[0]*/}
                        <img src={arrayImages[0]} className="img-responsivess card-image-top" alt=""/>
                    <div className="d-flex card-body justify-content-center card-modelo">
                        <h5>
                            <strong>Modelo: </strong>
                            {camara.modelo}
                        </h5>
                    </div>
                    <ul className="list-group list-group-flush ">
                        {campos}
                    </ul>
                    <div className="card-body cartas" id="footer-card">
                        <Link to={`/productos/camaras/${camara.modelo}`} className="card-link link-light">
                            Ver
                        </Link>
                    </div>
                </div>
            </article>
        </div>
    )
}
