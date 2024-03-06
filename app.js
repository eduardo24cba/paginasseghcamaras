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

const demora = () => {
    return new Promise((resolve, reject) => {
        setTimeout( function(){
            return resolve(f())
        }, 5000
        )
    }

    )
}

const Hola = () => <h3>Hola</h3>

const Adios = () => <h3>Chau</h3>

const Home = () => <h2>Home</h2>

const App = () => {
    console.log(BrowserRouter)
    return(
        <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/h" element={<Hola />} />
            <Route path="*" element={<h3>erroorroroororor</h3>} />
        </Routes>
        </>
    )
}
const ListItem = () => {
    const [data, setData] = useState(null)
    
    useEffect(() => {
        async function filterData(){
            let camaras = await demora()
            setData(camaras)
        }
        filterData()
    }, [])

return(
    data ? 
        <div className="row">
                <NavbarTop />
                <Main data={data}/>
                <Footer />
                {/*
                    <ListCam camaras={data}/>
                */}
        </div>
    
     : <OnLoad />
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <BrowserRouter basename="/">
        <App />
    </BrowserRouter>
)
