const {Provider} = ReactRedux;

const App = () => {
    const {useState, useEffect} = React;
    const [data, setData] = useState(null)
    const {useSelector} = ReactRedux
    const camaras = useSelector((state) => state.camaras)
        
    
    useEffect(() => {
        setData(camaras)
    }, [])

    return(
        data ?  
            <HashRouter  basename="/">
                <NavbarTop/>
                    <Routes>
                        <Route path="/" element={<Principal />}></Route>
                        <Route path="/productos" element={<Main />}></Route>
                        <Route path="/nosotros" element={<Nosotros />}></Route>
                        <Route path="/contacto" element={<Contacto />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path="/productos/camaras/:modelo" element={<ViewCamera />}></Route>
                        <Route path="/productos/camaras/filtro/:filter" element={<FilterCamara />}></Route>
                    </Routes>
            </HashRouter>
        : <OnLoad />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
)
