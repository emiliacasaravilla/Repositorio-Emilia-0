const CATEGORIES_URL = "https://japceibal.github.io/emercado-api/cats/cat.json";
const PUBLISH_PRODUCT_URL = "https://japceibal.github.io/emercado-api/sell/publish.json";   
const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/"; 
//const PRODUCTS_URL = "https://japceibal.github.io/emercado-api/cats_products/101.json";    
const PRODUCT_INFO_URL = "https://japceibal.github.io/emercado-api/products/";
const PRODUCT_INFO_COMMENTS_URL = "https://japceibal.github.io/emercado-api/products_comments/";
const CART_INFO_URL = "https://japceibal.github.io/emercado-api/user_cart/";
const CART_BUY_URL = "https://japceibal.github.io/emercado-api/cart/buy.json";
const EXT_TYPE = ".json";

let showSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "block";
}

let hideSpinner = function(){
  document.getElementById("spinner-wrapper").style.display = "none";
}

let getJSONData = function(url){
    let result = {};
    showSpinner();
    return fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }else{
        throw Error(response.statusText);
      }
    })
    .then(function(response) {
          result.status = 'ok';
          result.data = response;
          hideSpinner();
          return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;
        hideSpinner();
        return result;
    });
}



function ponerNombreUsuario (){
   let htmlContentToAppend = localStorage.getItem('nombreUsuario');
  document.getElementById("nombreDeUsuario").innerHTML = htmlContentToAppend;
}

ponerNombreUsuario();

//Creé la función que a través del getitem accede a la info guardada en el alacenamiento local
//Agregué esa info (el mail) con en el espacio que ya estaba creado en todos los html
//(lo que les tuve que agregar fue un id igual a todos: nombreDeUsuario)
//Lo hice desde init porque es un archivo que esta anexado a todos los html, así esa info aparece en todas 
//las ventanas del sitio
//Luego invoqué la funcion 