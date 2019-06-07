$(document).ready(function(){
    $("#btn").on("click", function() {
      var toSearch = $("#search").val().toUpperCase();
      $("tbody tr").filter(function() {
        $(this).toggle ($(this).text().toUpperCase().indexOf(toSearch) != -1)
       });
    });
  });