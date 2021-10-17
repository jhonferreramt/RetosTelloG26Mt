function eliminar(identificador){
  let client = {
    idClient: +identificador
  };

  $.ajax({
    url: "http://localhost:8080/api/Client/delete",
    type: 'DELETE',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(client),
    statusCode:{
      204:function(){
        alert('Se ha eliminado el registro');
        window.location="./index.html";
      }
    },
  });
}