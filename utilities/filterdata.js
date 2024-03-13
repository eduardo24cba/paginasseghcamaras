//filtro que se aplica a las camaras
const filterDataUnique = (obj, value) => {
    let newDict = null
    Object.values(obj).forEach(dictCam => {
        newDict = dictCam.filter((camara) => {
           return camara.diseño.toLowerCase() !== value 
        })
    })
}

const findCamara = (camara, params) => camara.filter(
    cam => cam.modelo === params)

const filterCamaras = (listCams, key, value) => {

    const cams = Object.values(listCams)
    //console.log(cams)
    
    let resultCams = []
    for(cam of cams){
        Object.entries(cam).forEach(ck => {
            if(ck[0]=== normalizeString(key).toLowerCase() && value === ck[1])resultCams.push(cam)
        })
    }
    return resultCams
}
//funcion para generar un archivo de texto con los datos de la api
var textFile = null,
    makeTextFile = function (text) {
        var data = new Blob([text], {type: 'text/plain'});

        // If we are replacing a previously generated file we need to
        // manually revoke the object URL to avoid memory leaks.
        if (textFile !== null) {
        window.URL.revokeObjectURL(textFile);
        }

        textFile = window.URL.createObjectURL(data);


        // returns a URL you can use as a href
        return textFile;
    };

function click(){
    let create = document.getElementById("create"),
    link = document.getElementById("downloadlink")
    
    link.href = makeTextFile(JSON.stringify(data))
    setDisplay('block')


}
