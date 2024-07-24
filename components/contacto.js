const Contacto = () => {
    return(
        <div className="container-fluid w-100 h-100" id="principal">
            <div className="row mt-2" id="contacto">
                <div className="col-12 d-flex">
                    <h3 className="mx-auto my-auto">Contacto</h3>
                </div>
                <div className="col-sm-12 col-lg-6 mt-2 text-center">
                    <i className="fa fa-phone fa-5x" aria-hidden="true"></i>
                    <p>Por teléfono</p>
                    <p>
                        Llamenos al n&uacute;mero
                        <br/>
                        <span>3547461901</span>
                    </p>
                </div>
                <div className="col-sm-12 col-lg-6 mt-2 text-center">
                    <i className="fa fa-envelope fa-4x" aria-hidden="true"></i>
                    <p>Por e-mail</p>
                    <p>
                        Escribanos a
                        <br/>
                        <a href="mailito:sseghseguridad@gmail.com" target="_blank" rel="noopener">sseghseguridad@gmail.com</a>
                    </p>
                </div>
            </div>
        </div>
    )
}