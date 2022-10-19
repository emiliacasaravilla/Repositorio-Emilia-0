
let productosCarrito = [];


/*ENTREGA 5
Creé el array donde voy a guardar la info del producto que está en el json
*/


document.addEventListener("DOMContentLoaded", function(e){
  getJSONData(CART_INFO_URL + "25801.json").then(function(resultado){

      if (resultado.status === "ok"){
         productosCarrito = resultado.data.articles[0];

          mostrarProdCarrito();
          
       
          
         }})})

/*ENTREGA 5
-Hice una solicitud de carga con el url de CART INFO que estaba en init y lo concatené con el id 
del usuario birndado en la premisa (y agregar el .json)
-Guardé la info en la variable previamente definida productosCarrito
-Como curiosidad: para acceder a la info del producto, a pesar de que fuera solo 1, tuve que indexarlo [0] 
porque el el producto está guardado dentro de articles como un objeto dentro de un array de objetos 
(a pesar de que haya uno solo)
-Después llamé a la función de mostrarProdCarrito

*/



function mostrarProdCarrito(){
    let htmlContentToAppend = "";

   
        htmlContentToAppend += `
          
  <div class="container">
    <div class="row">
      <div class="col-2">
      <img src="${productosCarrito.image}" class="img-thumbnail">
      </div>
      <div class="col-2">
      ${productosCarrito.name} 
      </div>
      <div class="col-2">
      ${productosCarrito.currency} ${productosCarrito.unitCost}
      </div>
      <div class="col-2">
        <input type='number' oninput='ajustarSubtotal(productosCarrito)' min="1" id='cantidad' value='${productosCarrito.count}' class='input-carro'></input>
      </div>
      <div class="col-4">
      ${productosCarrito.currency} ${productosCarrito.count * productosCarrito.unitCost}; 
      </div>
    </div>
  </div>  
        `    
document.getElementById("infoProdCarrito").innerHTML = htmlContentToAppend;
};


/*ENTREGA 5
Creé la función que muestra info del producto.
-Para poner la cantidad de porductos creé un input con el value, por defecto, que tiene el json (1)
*/


function ajustarSubtotal(productosCarrito) {
  let cantidad = document.getElementById('cantidad').value;

productosCarrito.count = cantidad;
 
mostrarProdCarrito();

};


/*ENTREGA 5


*/

/*A PARTIR DE ACA: ENTREGA 6
*/

function mostrarCostoFinal(){
  let htmlContentToAppend = "";

  htmlContentToAppend += `

<div class="list-group-item list-group-item-action ">
<div class="d-flex  justify-content-between">
<h6>Subtotal</h6>
<p>USD</p>
</div>
</div>

<div class="list-group-item list-group-item-action ">
<div class="d-flex  justify-content-between">
<h6>Costo de envío</h6>
<p>USD</p>
</div>
</div>

<div class="list-group-item list-group-item-action">
<div class="d-flex  justify-content-between">
<h6>Total</h6>
<p>USD</p>
</div>
</div>

  `
  document.getElementById("costoFinal").innerHTML = htmlContentToAppend;

};

mostrarCostoFinal();

