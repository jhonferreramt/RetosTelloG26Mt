function actualizar(){
  let category = {
    id: +$("#id").val(),
    name: $("#name").val(),
    description: $("#description").val()
  };
    
  $.ajax({
    url: "http://localhost:8080/api/Category/update",
    type: 'PUT',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(category),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="./index.html";
      }
    },
  });
}