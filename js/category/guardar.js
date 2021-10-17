function guardar(){
  let category = {
    name: $("#name").val(),
    description: $("#description").val()
  };

  $.ajax({
    url: "http://localhost:8080/api/Category/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(category),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="./index.html";
      }
    },
  });
}