function guardar(){
  let orthesis = {
    name: $("#name").val(),
    description: $("#description").val(),
    brand: $("#brand").val(),
    year: +$("#year").val(),
    category: {
      id: +$("#category").val()
    }
  };

  $.ajax({
    url: "http://localhost:8080/api/Ortopedic/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(orthesis),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="./index.html";
      }
    },
  });
}