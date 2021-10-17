$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search)
  if (searchParams.has('id')){
    let id = searchParams.get('id');
    consultarById(id);
  }
});

function consultarById(id){
  $.ajax({
    url: "http://localhost:8080/api/Reservation/" + id,
    type: 'GET',
    dataType: 'json',
    success: function(respuesta){
      if (JSON.stringify(respuesta.name) !== "null"){
        llenarDatos(respuesta);
      }else{
        $("#modificar").hide();
        alert('No se encuentra la reserva con el id '+id);
      }
    },
    error: function (xhr, status) {
      alert('Se ha presentado un problema al consultar el registro');
    }
  });
}

function llenarDatos(item){
  var date1= new Date(item.startDate);
  var date2= new Date(item.devolutionDate);
  var startDate = date1.getUTCFullYear() + "-" + (date1.getUTCMonth()+1) + "-" + date1.getUTCDate();
  var devolutionDate = date2.getUTCFullYear() + "-" + (date2.getUTCMonth()+1) + "-" + date2.getUTCDate();

  var status = "";
  if (item.status === "created") {
    status = "Creada";
  }

  $("#id").val(item.idReservation);
  $("#startDate").val(startDate);
  $("#devolutionDate").val(devolutionDate);
  $("#status").val(status);
  var optionOr = "#orthesis option[value='"+ item.ortopedic.id +"']";
  $(optionOr).attr("selected", true);
  var optionCli = "#client option[value='"+ item.client.idClient +"']";
  $(optionCli).attr("selected", true);
}