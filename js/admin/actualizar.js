function actualizar(){
  let admin = {
    idAdmin: +$("#id").val(),
    name: $("#name").val(),
    email: $("#email").val(),
    password: $("#password").val()
  };
    
  $.ajax({
    url: "http://localhos:8080/api/Admin/update",
    type: 'PUT',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(admin),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="./index.html";
      }
    },
  });
}