$(document).ready(function() {
  $("#formLetter").submit(function(event) {
    let name = $("name").val();
    let message = $("message").val();

    $(".name").text(name);
    $(".message").text(message);

    $("#letter").show();

    event.preventDefault();

  });

  
});
