function eliminar(identificador){
  let orthesis = {
    id: +identificador
  };

  $.ajax({
    url: "https://ga46e7de0098fb0-alquiler.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
    type: 'DELETE',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(orthesis),
    statusCode:{
      204:function(){
        alert('Se ha eliminado el registro');
        window.location="./index.html";
      }
    },
  });
}