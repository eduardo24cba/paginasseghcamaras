const {createSlice, current} = RTK;

const initialState = [
            {
                "id":1,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"No",
                "camara inteligente":"No",
                "descripcion":"Resolución: 4MP 2K (2560 x 1440);  Visión Nocturna: Distancia de 10m (33ft); Lente : 3,6mm;  Campo De Visión : 93°(H), 48°(V), 118°(D);  Ángulo de Motorizada: 355°Pan y -5~80°Tilt;  Detección De Movimiento: Si;  Detección Humana: Si;  Región Configurable: Si ; Alarma De Sonora.",
                "diseño":"Interior",
                "resolucion":"4 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Domo",
                "modelo":"IPC-TA42P-D",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-TA42P-D.jpeg"
                ]
            },
            {
                "id":2,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"CAMARA IMOU DOMO INTERIOR PAN TILT RANGER 2C WI-FI; COBERTURA DE 360°, H2.65, ALTA VOZ, MICRÓFONO, SIRENA INCORPORADO, RANURA PARA TARJETA MICRO SD, DETECCIÓN DE MOVIMIENTO, DETECCIÓN HUMANO, ALARMA DE SONIDO",
                "diseño":"Interior",
                "resolucion":"2 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Bullet",
                "modelo":"IPC-TA22CP-D-0360B",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-TA22CP-D-0360B.jpeg"
                    ]
            },
            {
                "id":3,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"IMOU Cruiser SE / 4MP QHD Resolución: 4MP QHD (2560x1440) Visión Nocturna: Distancia de 30m (98ft) Full Color: Si Micrófono incorporado: Si Detección De Movi",
                "diseño":"Exterior",
                "resolucion":"4 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Domo",
                "modelo":"IPC-S41FP",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-S41FP.jpeg"
                    ]
            },
            {
                "id":4,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"MODELO VIEJO 2 MP Referencia IPC-S22FP-0360B Marca IMOU CAMARA IMOU DOMO EXTERIOR CRUISER, IR 30M, LENTE FIJO 3,6 MM, H.265/H.264, AUDIO BIDERECCIONAL, ZOOM 16X, IP66",
                "diseño":"Exterior",
                "resolucion":"2 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Domo",
                "modelo":"IPC-S22FP-0360B",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-S22FP-0360B.jpeg"
                    ]
            },
            {
                "id":5,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"CAMARA IMOU BULLET IP WI-FI 4MPX H.265+, 2E, FULL COLOR, H.265, MICRÓFONO INCORPORADO, RANURA PARA TARJETA MICRO SD, DETECCIÓN DE MOVIMIENTO, DETECCIÓN HUMANO, IP67",
                "diseño":"Exterior",
                "resolucion":"4 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Bullet",
                "modelo":"IPC-F42FP-D-0280B",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-F42FP-D-0280B.jpeg"
                    ]
            },
            {
                "id":6,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"CAMARA IMOU BULLET IP WI-FI 2MPX H.265+, 2C-D, PLÁSTICA; H.265; WI-FI, MICRÓFONO INCORPORADO, RANURA PARA TARJETA MICRO SD, DETECCIÓN DE MOVIMIENTO, DETECCIÓN HUMANO, IP67",
                "diseño":"Exterior",
                "resolucion":"2 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Bullet",
                "modelo":"IPC-F22P-D-0280B",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-F22P-D-0280B.jpeg"
                    ]
            },
            {
                "id":7,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"CAMARA IMOU BULLET IP WI-FI 2MPX H.265+, FULL COLOR PLÁSTICA; H.265; WI-FI, MICRÓFONO INCORPORADO, RANURA PARA TARJETA MICRO SD, DETECCIÓN DE MOVIMIENTO, DETECCIÓN HUMANO, DISUASIÓN ACTIVA,IP67",
                "diseño":"Exterior",
                "resolucion":"2 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Bullet",
                "modelo":"IPC-F22FEP",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-F22FEP.jpeg"
                    ]
            },
            {
                "id":8,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"CAMARA IMOU DOMO EXTERIOR CRUISER, IR 30M, LENTE FIJO 3,6 MM, H.265/H.264, AUDIO BIDERECCIONAL, ZOOM 16X, IP66",
                "diseño":"Exterior",
                "resolucion":"5 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Domo",
                "modelo":"IPC-CRUISER2",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/IPC-CRUISER2.jpeg"
                    ]
            },
            {
                "id":9,
                "marca":"imou",
                "dimensiones":"93.4 mm × 79.4 mm",
                "vision nocturna":"Si",
                "camara inteligente":"Si",
                "descripcion":"Definición de la cámara: 2MP. - Capacidad de almacenamiento de 256GB.- Audio bidireccional. - Incluye - visión nocturna. - Peso: 395g. - Con sensor de movimiento. - Ideal para control y seguridad de hogares, oficinas y edificios.",
                "diseño":"Exterior",
                "resolucion":"2 mp",
                "conectividad":"Wifi",
                "tipo_de_camara":"Domo",
                "modelo":"Cruiser-SE-2MP",
                "imagenes":[
                    "https://raw.githubusercontent.com/eduardo24cba/dataSsegh/main/imagenes/Cruiser_SE_2MP.jpeg"
                    ]
            }
]


const camarasSlice = createSlice({
    name: "camaras",
    initialState,
    reducers: {
        filterCamara:(state, action) => {
            const id = action.payload
            return state.filter((camara) => camara.id === id)
        },
        filterModelo:(state, action) => {
            const modelo = action.payload
            return state.filter((camara) => camara.modelo === modelo)
        },
        filterCamarasAside:(state, action) => {
            const value = action.payload
            let new_state = []
            for(let cam of state){
                Object.values(cam).forEach((value_state) => {
                        if (capitalize(value[0]) === value_state) new_state.push(current(cam))
                    }
                )
            }
            if(value.length > 1){
                //son mas filtros
                new_state = new_state.filter((element, index, array) =>
                    //cheackeamos que cada uno cumpla la condicion    
                    value.every( filtro => {
                            return Object.values(element).includes(capitalize(filtro))
                        })
                    )
            }
            return new_state
        },
        returnPreviousState: (state, action) => {
            camarasSlice.caseReducers.backToInitialState(state, action)
            //camarasSlice.caseReducers.filterCamarasAside(state, action)
        },
        backToInitialState:(state, action) => {
            return [...initialState]
        }
    }
})

const {filterCamara, filterModelo, backToInitialState, filterCamarasAside, returnPreviousState} = camarasSlice.actions