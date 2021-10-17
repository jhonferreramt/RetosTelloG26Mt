$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search)
  if (searchParams.has('id')){
    let id = searchParams.get('id');
    consultarById(id);
  }
});

function consultarById(id){
  $.ajax({
    url: "http://localhost:8080/api/Message/" + id,
    type: 'GET',
    dataType: 'json',
    success: function(respuesta){
      if (JSON.stringify(respuesta.name) !== "null"){
        llenarDatos(respuesta);
      }else{
        $("#modificar").hide();
        alert('No se encuentra el mensaje con el id '+id);
      }
    },
    error: function (xhr, status) {
      alert('Se ha presentado un problema al consultar el registro');
    }
  });
}

function llenarDatos(item){
  $("#id").val(item.idMessage);
  $("#messagetext").val(item.messageText);
  var optionOr = "#orthesis option[value='"+ item.ortopedic.id +"']";
  $(optionOr).attr("selected", true);
  var optionCli = "#client option[value='"+ item.client.idClient +"']";
  $(optionCli).attr("selected", true);
}