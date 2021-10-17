function actualizar(){
  let message = {
    idMessage: +$("#id").val(),
    messageText: $("#messagetext").val(),
    ortopedic: {
      id: +$("#orthesis").val()
    },
    client: {
      idClient: +$("#client").val()
    }
  };
    
  $.ajax({
    url: "http://localhost:8080/api/Message/update",
    type: 'PUT',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(message),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="./index.html";
      }
    },
  });
}