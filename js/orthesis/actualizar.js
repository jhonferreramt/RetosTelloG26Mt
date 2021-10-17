function actualizar(){
  let orthesis = {
    id: +$("#id").val(),
    name: $("#name").val(),
    description: $("#description").val(),
    brand: $("#brand").val(),
    year: +$("#year").val(),
    category: {
      id: +$("#category").val()
    }
  };
    
  $.ajax({
    url: "http://localhost:8080/api/Ortopedic/update",
    type: 'PUT',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(orthesis),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="./index.html";
      }
    },
  });
}