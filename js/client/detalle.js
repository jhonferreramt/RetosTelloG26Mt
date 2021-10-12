$(document).ready(function () {
  let searchParams = new URLSearchParams(window.location.search)
  if (searchParams.has('id')){
    let id = searchParams.get('id');
    consultarById(id);
  }
});

function consultarById(id){
  $.ajax({
    url: "https://ga46e7de0098fb0-alquiler.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client/"+id,
    type: 'GET',
    dataType: 'json',
    success: function(respuesta){
      if (respuesta.items.length==1){
        llenarDatos(respuesta.items[0]);
      }else{
        $("#modificar").hide();
        alert('No se encuentra el cliente con el id '+id);
      }
    },
    error: function (xhr, status) {
      alert('Se ha presentado un problema al consultar el registro');
    }
  });
}

function llenarDatos(item){
  $("#id").val(item.id);
  $("#name").val(item.name);
  $("#email").val(item.email);
  $("#age").val(item.age);
}