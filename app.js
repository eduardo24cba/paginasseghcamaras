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

const ListItem = () => {
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
root.render(<ListItem/>)
