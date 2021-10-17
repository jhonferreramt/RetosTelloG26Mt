function actualizar(){
  let score = {
    idScore: +$("#id").val(),
    score: +$("#score").val(),
    message: $("#message").val(),
    reservation: {
      idReservation: +$("#idReservation").val()
    }
  };

  $.ajax({
    url: "http://localhost:8080/api/Score/update",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(score),
    statusCode:{
      201:function(){
        alert('Se ha modificado el registro');
        window.location="../reservation/index.html";
      }
    },
  });
}