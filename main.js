$(document).ready(function() {
    $("#formTarefa").submit(function(event) {
      event.preventDefault(); 

      var novaTarefa = $("#tarefa").val();

      $("ul").append("<li>" + novaTarefa + "</li>");

      $("#tarefa").val("");
    });

    $("ul").on("click", "li", function() {
      $(this).toggleClass("completed");
    });
  });