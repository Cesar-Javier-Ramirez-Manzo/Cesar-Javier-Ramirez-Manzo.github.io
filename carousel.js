if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then(ref=>console.log('Exito',reg))
    .catch(err=>console.warn('Error'))
}
var cont = 1
var whi = true


function Next() {

    cont++
    whi = true
    if (cont > 5) {
        cont = 1
    }
    var image = document.getElementById("imagen")
    image.src = cont + ".png"

    clearInterval(int)
    int=setInterval(It,3000)


}


function Prev() {

    cont--
    whi = false
    if (cont < 1) {
        cont = 5
    }

    var image = document.getElementById("imagen")
    image.src = cont + ".png"

    clearInterval(int)
    int=setInterval(It,3000)
}

function It() {
    if (whi == true) {
        cont++
        if (cont > 5) {
            cont = 1
        }
    } else {
        cont--

        if (cont < 1) {
            cont = 5
        }
    }

    var image = document.getElementById("imagen")
    image.src = cont + ".png"

}


var int = setInterval(It, 3000)