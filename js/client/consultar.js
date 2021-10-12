$(document).ready(function(){
  $.ajax({
    url: "https://ga46e7de0098fb0-alquiler.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client",
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
             <td>${items[i].name}</td>
             <td>${items[i].email}</td>
             <td>${items[i].age}</td>
             <td>
             <a href="./client_detail.html?id=${items[i].id}" data-toggle="tooltip" data-placement="top" title="Ver detalles" class="btn btn-primary">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-fill" viewBox="0 0 16 16">
             <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
             <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
             </svg>
             </a>            
             </td>
             </tr>`;
  }
  $("#client").append(tabla);
}
