const {useState, useEffect, createContext} = React;

CamaraContext["CamaraContext"] = createContext()
const ComponentCamaraContext = CamaraContext["CamaraContext"]

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
        }
        filterData()
    }, [])

    return(
        data ?
            <ComponentCamaraContext.Provider value={data}>            
                <HashRouter  basename="/">
                <NavbarTop data={data}/>
                    <Routes>
                        <Route path="/productos" element={<Main />}>                        </Route>
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
