function guardar(){
  let score = {
    score: +$("#score").val(),
    message: $("#message").val(),
    reservation: {
      idReservation: +$("#idReservation").val()
    }
  };

  $.ajax({
    url: "http://localhost:8080/api/Score/save",
    type: 'POST',
    dataType: 'json',
    headers: {
      "Content-Type": "application/json"
    },
    data: JSON.stringify(score),
    statusCode:{
      201:function(){
        alert('Se ha guardado el registro');
        window.location="../reservation/index.html";
      }
    },
  });
}