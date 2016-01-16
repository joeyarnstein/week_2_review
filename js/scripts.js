$(document).ready(function() {
  $("#infoInput form").submit(function(event) {

    var familySelect = $("select#family").val();
    var excitementSelect = $("select#excitement").val();
    var ageInput = parseInt($("input#age").val());
    var arrayInputs = [familySelect, excitementSelect, ageInput];

    if (familySelect === "kids") {
      /* All rules for kids */
      if (excitementSelect === "beach") {
        /* beach */
        if (ageInput > 50) {
          $(".notshown").hide();
          $("#florida").show();
          $("body").css('background-color','yellow');
        }
        else
        {
          $(".notshown").hide();
          $("#jamaica").show();
          $("body").css('background-color','green');
        }
      } else if (excitementSelect === "party") {
        /* club hopper */
        if (ageInput > 35) {
          $(".notshown").hide();
          $("#florida").show();
          $("body").css('background-color','yellow');
        } else {
          $("#vegas").show();
          $("body").css('background-color','#da80fb');
        }
      } else {
        /* home-body */
        $(".notshown").hide();
        $("#whocares").show();
      }
      /* end rules for kids --------------
      -start rules for Friends */
    } else if (familySelect === "friend") {
      /* All rules for friends */
      if (excitementSelect === "beach") {
        /* beach */
        if (ageInput > 50) {
          $(".notshown").hide();
          $("#florida").show();
          $("body").css('background-color','yellow');
        }
        else
        {
          $(".notshown").hide();
          $("#jamaica").show();
          $("body").css('background-color','green');
        }
      } else if (excitementSelect === "party") {
        /* club hopper */
        if (ageInput > 50) {
          $(".notshown").hide();
          $("#florida").show();
          $("body").css('background-color','yellow');
        } else {
          $(".notshown").hide();
          $("#whocares").show();
          $("body").css('background-color','#da80fb');
        }
      } else {
        /* home-body */
        $(".notshown").hide();
        $("#jonestown").show();
        $("body").css('background-color', 'pink')
      }
      /* end rules for friends traveling */
    } else {
      /* Rules for traveling alone */
      if (excitementSelect === "beach") {
        /* beach */
        if (ageInput > 50) {
          $(".notshown").hide();
          $("#florida").show();
          $("body").css('background-color','yellow');
        }
        else
        {
          $(".notshown").hide();
          $("#jamaica").show();
          $("body").css('background-color','green');
        }
      } else if (excitementSelect === "party") {
        /* club hopper */
        if (ageInput > 35) {
          $(".notshown").hide();
          $("#florida").show();
          $("body").css('background-color','yellow');
        } else {
          $(".notshown").hide();
          $("#whocares").show();
          $("body").css('background-color','#da80fb');
        }
      } else {
        /* home-body */
        $(".notshown").hide();
        $("#jonestown").show();
        $("body").css('background-color', 'pink')
      }
    }

    event.preventDefault();
  });
});
