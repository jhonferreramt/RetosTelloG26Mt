function guardar(){
  let admin = {
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#password").val()
  };

  $.ajax({
    url: "http://localhost:8080/api/Admin/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(admin),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="./index.html";
      }
    },
  });
}