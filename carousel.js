if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(ref => console.log('Exito', reg))
        .catch(err => console.warn('Error equisde'))
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
    int = setInterval(It, 3000)


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
    int = setInterval(It, 3000)
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


//Formulario

let array = []
let array2 = []
if (localStorage.getItem("keys") != null) {
    let a = localStorage.getItem("keys")
    array = JSON.parse(a)
    let b = localStorage.getItem("array")
    array2 = JSON.parse(b)
} else {
    let array = []
    let array2 = []
}




   function saveado(){
  
        var aidi = $("#id").val();
        var n = $('#name').val();
        var a = $("#age").val();
        var ci = $("#city").val();
        var sco = $("#sco").val();
        var arr = {
            id: aidi,
            name: n,
            age: a,
            city: ci,
            school: sco
        }
        array.push(arr)
        array2.push(arr)
        localStorage.setItem("keys", JSON.stringify(array))

        localStorage.setItem("array", JSON.stringify(array2))

        charge()
   }
        
   

 

 


function charge() {
    var table = document.getElementById("tabla");
    table.innerHTML = ''
    var back = localStorage.getItem("keys")
    var obj = JSON.parse(back)

    for (var element in obj) {
        $('tbody').append("<tr><td>" + obj[element].id + "</td><td>" + obj[element].name + "</td><td>" + obj[element].city + "</td><td>" + obj[element].age + "</td><td>" + obj[element].school + "</td></tr>");

    }

}

function remove() {
    console.log("entro")
    var num = document.getElementById("borrar").value
    var back = localStorage.getItem("keys")
    var obj = localStorage.getItem("array")
    var array2 = JSON.parse(obj)
    for (var element in array2) {
        if (array2[element].id == num) {
            array2.splice(element, 1)
            localStorage.setItem("keys", JSON.stringify(array2))
        }
    }
    localStorage.setItem("array", JSON.stringify(array2))
    charge()
}

function search() {
    var categorie = document.getElementById("search").value
    var thing = document.getElementById("textS").value
    var table = document.getElementById("tabla");
    table.innerHTML = ''
    var back = localStorage.getItem("keys")
    var obj = JSON.parse(back)
    switch (categorie) {
        case "id":
            for (var element in obj) {


                if (obj[element].id == thing) {
                    $('tbody').append("<tr><td>" + obj[element].id + "</td><td>" + obj[element].name + "</td><td>" + obj[element].city + "</td><td>" + obj[element].age + "</td><td>" + obj[element].school + "</td></tr>");

                }

            }
            break;
        case "name":
            for (var element in obj) {


                if (obj[element].name == thing) {
                    $('tbody').append("<tr><td>" + obj[element].id + "</td><td>" + obj[element].name + "</td><td>" + obj[element].city + "</td><td>" + obj[element].age + "</td><td>" + obj[element].school + "</td></tr>");

                }

            }
            break;
        case "city":
            for (var element in obj) {


                if (obj[element].city == thing) {
                    $('tbody').append("<tr><td>" + obj[element].id + "</td><td>" + obj[element].name + "</td><td>" + obj[element].city + "</td><td>" + obj[element].age + "</td><td>" + obj[element].school + "</td></tr>");

                }

            }
            break;
        case "age":
            for (var element in obj) {


                if (obj[element].age == thing) {
                    $('tbody').append("<tr><td>" + obj[element].id + "</td><td>" + obj[element].name + "</td><td>" + obj[element].city + "</td><td>" + obj[element].age + "</td><td>" + obj[element].school + "</td></tr>");

                }

            }
            break;
        case "school":
            for (var element in obj) {


                if (obj[element].school == thing) {
                    $('tbody').append("<tr><td>" + obj[element].id + "</td><td>" + obj[element].name + "</td><td>" + obj[element].city + "</td><td>" + obj[element].age + "</td><td>" + obj[element].school + "</td></tr>");

                }

            }
            break;
        default:
            break;
    }


}















