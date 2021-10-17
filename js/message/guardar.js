function guardar(){
  let message = {
    messageText: $("#messagetext").val(),
    ortopedic: {
      id: +$("#orthesis").val()
    },
    client: {
      idClient: +$("#client").val()
    }
  };

  $.ajax({
    url: "http://localhost:8080/api/Message/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(message),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="./index.html";
      }
    },
  });
}