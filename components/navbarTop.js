const NavbarOptionsTop = ({options}) => {
    const listItems = options.map((option, i, array) => {
        return(
            <li key={option} className="nav-item" style={{borderBottom: "1px"}}>
                <a className="links-barra" href="#">{option}</a>
                { i+1 !== array.length && <hr className="d-lg-none d-sm-block my-2 ms-3 bg-light" />}
            </li>
        )
    })
    return(
        <div className="ms-auto">
            <ul className="navbar-nav" id="nav-principal">
                {listItems}
            </ul>
        </div>
    )
}

const NavbarItemsTop = () => {
    return(
        <>
        <a className="navbar-brand" href="#">
            <h3>
                <svg xmlns="http://www.w3.org/2000/svg" width={40} height={40}
                     viewBox="0 0 24 24" fill="none" stroke="#85EA92" strokeWidth={2}
                     strokeLinecap="round" strokeLinejoin="round"  >
                    <path d="M15.6 11.6L22 7v10l-6.4-4.5v-1zM4 5h9a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2z"></path>
                </svg>
                Ssegh
            </h3>
        </a>
        <button id="button-toggler" className="navbar-toggler custom-toggler shadow-none"
                type="button" data-bs-toggle="collapse" data-bs-target="#navTop" aria-controls="navTop"
                aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" id="icon-hamburguer"></span>
            <span className="my-1 mx-2 span-close d-none" id="icon-close">X</span>
        </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navTop">
            <NavbarOptionsTop options={ITEMS_NAV_TOP} />
        </div>
        </>
    )
}

const NavbarTop = () => {
    return (
        <div className="col-12">
            <header className="barra">
                <nav className="navbar navbar-expand-lg">
                    <NavbarItemsTop />
                </nav>
            </header>
        </div>
    )
}
