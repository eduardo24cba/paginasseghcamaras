const {useState, useEffect, useContext, createContext} = React;

CamaraContext["CamaraContext"] = createContext()
const ComponentCamaraContext = CamaraContext["CamaraContext"]

const OnLoad = () => {
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col d-flex row justify-content-center align-items-center vh-100">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

const EnProceso = () => {
    return(
        <div className="row text-center">
            <div className="col">
                <h3>En construcción</h3>
                <img style={{width:"200px", height:"200px"}} src="./static/enconstruccion.png" />
            </div>
        </div>
    )
}
const App = () => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        async function filterData(){
            let camaras = await f()
            setData(camaras)
            //console.log(camaras)
            //console.log(history)
        }
        filterData()
    }, [])

    return(
        data ?
            <ComponentCamaraContext.Provider value={data}>            
                <HashRouter  basename="/">

                <NavbarTop data={data}/>
                    <Routes>
                        <Route path="/productos" element={<Main />}>
                        <Route path="*" element={<NotFound />}></Route>    
                        </Route>
                        <Route path="/nosotros" element={<EnProceso />}></Route>
                        <Route path="/contacto" element={<EnProceso />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                        <Route path="/productos/:modelo" element={<ViewCamera />}></Route>
                    </Routes>
                </HashRouter>
            </ComponentCamaraContext.Provider>
        : <OnLoad />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
