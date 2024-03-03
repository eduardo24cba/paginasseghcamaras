const Aside = (camaras) => {
    return(
        <div className="col-12 col-md-3">
            <div className="row flex-column flex-md-row">
                <aside className="col-12 col-md-3 col-xl-2 p-0 flex-shrink-1">
                    <div className="container-fluid">
                        <NavbarAside camaras={camaras}/>
                    </div>
                </aside>
            </div>
        </div>
    )
}