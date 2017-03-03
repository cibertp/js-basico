(function(){
var lista= document.getElementById("lista");
var tareaInput =document.getElementById("tareaInput");
var btnNuevaTarea= document.getElementById("btn-agregar");



///fucniones
var agregarTarea = function(){
alert("ageregar tarea");
};
var comprobarInput = function(){
alert("comprobar input");
};
var eleminarTarea= function(){
  alert("elimiar tarea");
}


///eventos
//agregar tarea del campo llenado
btnNuevaTarea.addEventListener("click", agregarTarea);

//comprobar input que no este basio
tareaInput.addEventListener("click",comprobarInput);

//agreger listener

for( var i=0; i<=lista.children.length-1;i++) {
  expression;
}

}());
