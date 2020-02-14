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


//Formulario
let array=[]
let array2=[]
if(localStorage.getItem("keys")!=null){
    let a=localStorage.getItem("keys")
    array=JSON.parse(a)
    let b=localStorage.getItem("array")
    array2=JSON.parse(b)
}else{
    let array=[]
    let array2=[]
}


function Add(){

   let id=document.getElementById("id").value
    let name=document.getElementById("name").value
    let age=document.getElementById("age").value
    let city=document.getElementById("city").value
    let tel=document.getElementById("tel").value
    let pay=document.getElementById("pay").value

let arr={
    id:id,
    nombre:name,
    edad:age,
    ciudad:city,
    tele:tel,
    pago:pay
}


//let arr=[]
//arr=[id,name,age,city,tel,pay]
array.push(arr)
array2.push(arr)
localStorage.setItem("keys",JSON.stringify(array))

localStorage.setItem("array",JSON.stringify(array2))
Charge()
}

function Charge(){
    var table = document.getElementById("tabla");
    table.innerHTML=''
    var back=localStorage.getItem("keys")
    var obj=JSON.parse(back)
    for (var element in obj){

    var row = table.insertRow(0 );

// Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3= row.insertCell(2);
var cell4= row.insertCell(3);
var cell5= row.insertCell(4);
var cell6 = row.insertCell(5);



// Add some text to the new cells:
cell1.innerHTML = obj[element].nombre;
cell2.innerHTML = obj[element].edad;
cell3.innerHTML = obj[element].ciudad;
cell4.innerHTML = obj[element].tele;
cell5.innerHTML = obj[element].pago;
cell6.innerHTML=obj[element].id
    }
       //    var obj=JSON.parse(back)
// Create an empty <tr> element and add it to the 1st position of the table:
    
    }

function remove(){
    var num=document.getElementById("borrar").value
    var back=localStorage.getItem("keys")
    var obj=localStorage.getItem("array")
    var array2=JSON.parse(obj)
    for(var element in array2){
        if(array2[element].id==num){
            console.log("entro")
            array2.splice(element,1)
            localStorage.setItem("keys",JSON.stringify(array2) )
        }
    }
    localStorage.setItem("array",JSON.stringify(array2) )
    Charge()
}




