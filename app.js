const {useState, useEffect} = React;

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
    
     : <p> Cargando </p>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<ListItem/>)