$(document).ready(function () {

  $("form").submit(function (event) {
    var $form = $(this);
    event.preventDefault(); 

    var formData = $form.serialize(); 

    $.ajax({
      url: $form.attr("action"), 
      type: "POST",
      dataType: "json",
      data: formData, 
      success: function (response) {
        console.log(response)
        console.log(response["success"])
        if (response.success) { 
          $form.replaceWith('<div style="color:green;">' + response.message + '</div>');
        } else { 
          var $errorDiv = $form.prev(".error-msg");
          if ($errorDiv.length == 0) {
            $errorDiv = $('<div class="error-msg" style="color:red;">' + response.message + '</div>');
            $form.before($errorDiv);
          } else {
            $errorDiv.text(response.message);
          }
        }
      },
      error: function (jqXHR, textStatus, errorThrown) { 
        var $errorDiv = $form.prev(".error-msg");
        if ($errorDiv.length == 0) {
          $errorDiv = $('<div style="color:red;">' + textStatus + ' : ' + errorThrown + '</div>');
          $form.before($errorDiv);
        } else {
          $errorDiv.text(textStatus + ' : ' + errorThrown);
        }
      }
    });
  });

  $("form").find(':input').filter(function () {
    return $(this).val().length === 0;
  }).css('border-color', 'red');

  $("form").find(':input').on('input', function () {
    var value = $(this).val();
    if (value.length > 0) {
      $(this).css('border-color', '');
    } else {
      $(this).css('border-color', 'red');
    }
    if (value.length > 255) {
      $(this).css('border-color', 'red');
    }
  });
})