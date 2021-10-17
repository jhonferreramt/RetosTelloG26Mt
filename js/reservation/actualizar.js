function actualizar(){
  let reservation = {
    idReservation: +$("#id").val(),
    startDate: $("#startDate").val(),
    devolutionDate: $("#devolutionDate").val(),
    ortopedic: {
      id: +$("#orthesis").val()
    },
    client: {
      idClient: +$("#client").val()
    },
    status: $("#status").val()
  };
    
  $.ajax({
    url: "http://localhost:8080/api/Reservation/update",
    type: 'PUT',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(reservation),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="./index.html";
      }
    },
  });
}