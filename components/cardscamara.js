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
                    <a className="card-link link-light" href="#">Ver</a>
                </div>
                </div>
            </article>
        </div>
    )
}