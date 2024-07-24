const ITEMS_NAV_TOP = ["Productos", "Nosotros", "Contacto"]
const FIELDS_CARD = ["diseño", "resolucion", "conectividad", "marca", "tipo_de_camara"]

const Routes = ReactRouterDOM.Routes
const Route = ReactRouterDOM.Route
const BrowserRouter = ReactRouterDOM.BrowserRouter
const Link = ReactRouterDOM.Link
const Navigate = ReactRouterDOM.Navigate
const HashRouter = ReactRouterDOM.HashRouter
const useLocation = ReactRouterDOM.useLocation
const useNavigate = ReactRouterDOM.useNavigate
const useParams = ReactRouterDOM.useParams

//debemos usar un diccionario para agregar el contexto dado que
//no nos permite importar en archivos jsx, al menos ami
const CamaraContext = {}

const ReactRedux = window.ReactRedux
const RTK = window.RTK
