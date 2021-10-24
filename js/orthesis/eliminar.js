function eliminar(identificador){
  let orthesis = {
    id: +identificador
  };

  $.ajax({
    url: "http://localhost:8080/api/Ortopedic/"+identificador,
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