function guardar(){
  let client = {
    name: $("#name").val(),
    email: $("#email").val(),
    age: +$("#age").val(),
    password: $("#password").val()
  };

  $.ajax({
    url: "http://localhost:8080/api/Client/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(client),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="./index.html";
      }
    },
  });
}