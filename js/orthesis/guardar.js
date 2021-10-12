function guardar(){
  let orthesis = {
    id: +$("#id").val(),
    name: $("#name").val(),
    brand: $("#brand").val(),
    model: +$("#model").val(),
    category_id: +$("#category_id").val()
  };

  $.ajax({
    url: "https://ga46e7de0098fb0-alquiler.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/orthesis/orthesis",
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