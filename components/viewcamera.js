'use strict';

export function ViewCamera({camara}){
    let obj = camara[0]
    console.log(camara[0].modelo)
      return (
          <div className="container">
              <div className="row mt-5">
                  <div className="col-lg-8">
                      <span className="d-md-block d-md-none position-absolute m-3" style={{"fontWeight": "bold"}}>1 / 2</span>
                    <div className="d-flex container justify-content-center">
                        <img src={obj.imagenes[0]} alt="" />
                    </div>
                    <div className="mx-auto d-none d-md-block mt-4 border-0">
                        <img src={obj.imagenes[0]} style={{"width":"100px", "height": "100px"}} className="img-thumbnail" alt=""/>
                    </div>
                  </div>
                  
                  <div className="col-lg-4">
                    <div className="d-flex-column">
                      <p>Modelo: {obj.modelo}</p>
                      <p>Diseño: {obj.diseño}</p>
                      <p>Resolucion: {obj.resolucion}</p>
                      <p>Conectividad: {obj.conectividad}</p>
                      <p>Dimensiones: {obj.dimensiones}</p>
                      <p>Descripcion: <br/><br/> {obj.descripcion}</p>
                      <div className="d-flex justify-content-between">
                        <button className="btn btn-primary">
                          <i className="fa fa-share-alt"></i>
                          Compartir  
                        </button>
                        <button className="btn btn-secondary">
                          Volver al listado
                        </button>
                      </div>
                      
                    </div>  
                  </div>
              </div>
          </div>
      )
  }