$(document).ready(function(){
  $.ajax({
    url: "https://ga46e7de0098fb0-alquiler.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message",
    type: 'GET',
    dataType: 'json',
      success: function(respuesta){
        console.log(respuesta.items);
        mostrarInformacion(respuesta.items);
      },
      error: function (xhr, status) {
        alert('Se ha presentado un problema al consultar la información');
      }
  });
});

function mostrarInformacion(items){
  var tabla = '';
  for (var i=0; i < items.length; i++) {
    tabla += `<tr>
             <td>${items[i].id}</td>
             <td>${items[i].messagetext}</td>
             <td>
             <a onclick="eliminar(${items[i].id})" data-toggle="tooltip" data-placement="top" title="Eliminar mensaje" class="btn btn-danger">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash-fill" viewBox="0 0 16 16">
             <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
             </svg>
             </a>
             <a href="./message_detail.html?id=${items[i].id}" data-toggle="tooltip" data-placement="top" title="Ver detalles" class="btn btn-primary">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
             <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
             <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
             </svg>
             </a>            
             </td>
             </tr>`;
  }
  $("#message").append(tabla);
}
