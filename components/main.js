const Main = () => {
    const {useSelector, useDispatch} = ReactRedux
    const {useEffect} = React
    const dispatch = useDispatch()
        
    useEffect(() => {
        dispatch(backToInitialState('reset'))
    }, [dispatch])

    const data = useSelector((state) => state.camaras)

    return(
        <div className="col-12">
            <div className="container">
                <div className="row">
                    <NavbarAside camaras={data}/>
                    <ListCam camaras={data}/>
                    <WhatsappIcon />
                </div>
            </div>
        </div>
    )
}
