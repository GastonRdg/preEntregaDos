let nombre = prompt("Ingrese su nombre")
function saludo() {

    alert("hola bienvenido " + nombre)

}
saludo();

class producto{

    constructor(id, nombre, precio, stock){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}

const producto0 = new producto(0, "Porta Notebook", 1500, 100);
const producto1 = new producto(1, "Mesa", 5000, 10);
const producto2 = new producto(2, "biblioteca", 6000, 8)

const misProductos = [producto0, producto1, producto2];

function ivaPorta(peso){
    let impuesto = ((producto0.precio*21)+producto0);
    return impuesto;
}
function ivaMesa(peso){
let impuesto = ((producto1.precio*21)+ producto1);
return impuesto
}
function ivaBiblio(peso){
let impuesto = ((producto2.precio*21)+producto2);
return impuesto
}
 
let mensajePantalla = " Estos son nuestros productos \n "
for (elemento of misProductos){
   
    mensajePantalla += `${elemento.id} - ${elemento.nombre} a tan solo ${elemento.precio} \n`
}

let opcionUser = prompt(mensajePantalla)

const productoElegido = misProductos.find(elemento => elemento.id == opcionUser)

switch(opcionUser){

    case "0":
        alert(`Elegiste Porta notebook que tiene un costo de ${producto0.precio}`) ;
        let compra1 = prompt("ingresa 5 para confirmar compra")
        if(compra1 == "5"){
            let total1 = ivaPorta(producto0.nombre);
            alert("lo que debes abonar es $" + total1);
        }
        else{
            alert("error")

        }
        break;
        case "1":
        alert(`Elegiste mesa que tiene un costo de ${producto1.precio}`);
        let compra2 = prompt("ingresa 5 para confirmar compra")
        if(compra2 == "5"){
            let total2 = ivaMesa(producto1.nombre);
            alert("lo que debes abonar es $" + total2);
        }
        else{
            alert("error")

        }
        break;

        case "2":
        alert(`Elegiste biblioteca que tiene un costo de ${producto2.precio}`);
        let compra3 = prompt("ingresa 5 para confirmar compra")
        if(compra1 == "5"){
            let total3 = ivaBiblio(producto2.nombre);
            alert("lo que debes abonar es $" + total3);
        }
        else{
            alert("error")

        }
        break;

        //case "s":
            //alert("Hasta luego")
            //break;

        default:
            alert("Producto sin stock")
            break;
        
}


//alert(`te vas a llevar ${productoElegido.nombre} a tan solo ${productoElegido.precio}`);
