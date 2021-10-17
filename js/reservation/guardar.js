function guardar(){
  let reservation = {
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
    ortopedic: {
      id: +$("#orthesis").val()
    },
    client: {
      idClient: +$("#client").val()
    }
  };

  $.ajax({
    url: "http://localhost:8080/api/Reservation/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(reservation),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="./index.html";
      }
    },
  });
}