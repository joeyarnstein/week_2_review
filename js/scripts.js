$(document).ready(function() {
  $("#infoInput form").submit(function(event) {
    var familySelect = parseInt($("select#family").val());
    var excitementSelect = parseInt($("select#excitement").val());
    var ageInput = parseInt($("input#age").val());
    var arrayInputs = [familySelect, excitementSelect, ageInput];
    debugger;

  //  if (familySelect === "alone" && ) {
  //  }

  //  event.preventDefault();
  });
});
