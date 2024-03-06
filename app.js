const {useState, useEffect} = React;

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
        <HashRouter>

        <NavbarTop data={data}/>
        <Routes>
            <Route path="/" element={<h1>Pagina principal</h1>}></Route>
            <Route path="/productos" element={<Main />}></Route>
            <Route path="*" element={<h1>Todavia no esta lista...</h1>}></Route>
        </Routes>
        </HashRouter>
        : <OnLoad />
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />)
