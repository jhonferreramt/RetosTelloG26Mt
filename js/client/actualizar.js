function actualizar(){
  let client = {
    idClient: +$("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    age: +$("#age").val(),
    password: $("#password").val()
  };
    
  $.ajax({
    url: "http://localhos:8080/api/Client/update",
    type: 'PUT',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(client),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="./index.html";
      }
    },
  });
}