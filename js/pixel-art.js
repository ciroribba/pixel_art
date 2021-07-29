var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

/**Paso 1: Seleccionar elementos del DOM ---- Guía 1 */
var paleta = document.getElementById('paleta');
var grillaPixeles = document.getElementById('grilla-pixeles');
var $indicadorColor= $("#indicador-de-color");
var $indicadorColorMensaje= $("#indicador-de-color-mensaje");

/**Paso 2: Generá la paleta de colores en pantalla ---- Guía 1 */
function paletaDeColores(){
  for(var i=0; i<nombreColores.length; i++){
    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = "color-paleta";
    paleta.appendChild(nuevoDiv);
    }
};

paletaDeColores();

/*Paso 3: Creá la grilla de pixeles ----- Guía 1 */

function grillaDePixeles(){
  for(var i=0; i<1750; i++){
    var nuevoDiv = document.createElement("div");
    grillaPixeles.appendChild(nuevoDiv);
  }
};

grillaDePixeles();

/*Paso 1: Seleccioná un color de la paleta y mostralo en el indicador de color ---- guía 2 */

var divsColoresPaleta = document.getElementsByClassName("color-paleta");

for (var i=0; i<divsColoresPaleta.length; i++) {
  divsColoresPaleta[i].addEventListener("click", colorSeleccionoMuestro);
};



function colorSeleccionoMuestro(e){
  var colorEscogido = window.getComputedStyle(e.target).getPropertyValue("background-color");
  $indicadorColor.css("background-color",colorEscogido);
  $indicadorColorMensaje.text(colorEscogido); 
};

/* Paso 2: Pintá un pixel de la grilla ---- Guia 2 */
var $divGrilla = $("#grilla-pixeles div");


for (var i = 0; i<$divGrilla.length; i ++){
  $divGrilla[i].addEventListener("click",escucharColorPixel);
};



function escucharColorPixel(e){ 
  var cambioColor = $indicadorColor.css("background-color"); 
  e.target.style.backgroundColor = cambioColor;
};

/*Paso 3: Terminá la funcionalidad de Rueda de Colores ----  Guía2 */
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', 
  (function() {
    colorActual = colorPersonalizado.value;
    $indicadorColor.css("background-color", colorActual);
    $indicadorColorMensaje.text(colorActual);
  })
);

/**Paso 4: Detectá si el Mouse está Apretado o no ----  Guía2*/
var isDown = false;   

$divGrilla.mousedown(function() {
  isDown = true;
  $(this).css("background-color", $indicadorColor.css("background-color"));      
});

$divGrilla.mouseup(function() {
  isDown = false;    
});

$divGrilla.mouseover(function(){
  if(isDown) {        
      $(this).css("background-color", $indicadorColor.css("background-color"));
  }
});

/**Paso 1: Permití borrar la pantalla apretando un botón ----- Guía-3 */
var $borrar = $("#borrar");

$borrar.click(borradoGrilla);

function borradoGrilla(){
  $("#grilla-pixeles").children().animate({"background-color": "white"}, 1000);
}

/**Paso 2: Cargá a los superhéroes en forma de píxeles ----  Guía3 */

$("#batman").click(cargarBatman);

function cargarBatman(){
  cargarSuperheroe(batman)
};

$("#wonder").click(cargarWonder);

function cargarWonder(){
  cargarSuperheroe(wonder)
};

$("#flash").click(cargarFlash);

function cargarFlash(){
  cargarSuperheroe(flash)
};

$("#invisible").click(cargarInvisible);

function cargarInvisible(){
  cargarSuperheroe(invisible)
};

//Optimizado
/*function personajeSeleccionado(superheroe) {
  return cargarSuperheroe(superheroe)
};

$('#invisible').click(personajeSeleccionado(invisible));
$('#flash').click(personajeSeleccionado(flash));
$('#wonder').click(personajeSeleccionado(wonder));
$('#batman').click(personajeSeleccionado(batman));*/

/*Paso 3: Habilitá la descarga de cada obra de arte ----  Guía3*/
$("#guardar").click(guardarPixelArt);
