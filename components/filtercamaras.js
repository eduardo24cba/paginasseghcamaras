const FilterCamara = () => {
    const location = useLocation()
    const camaras = location.state
    //console.log(location)
    const results = filterCamaras(location.state.camaras, location.state.key, location.state.value)
    return(
        <>
        <Aside camaras={results}/>
        <ListCam camaras={results}/>
        <WhatsappIcon />
        </>
    )
}
