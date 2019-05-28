// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function () {
     $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
     $(this).parent().fadeOut(500, function () {
          $(this).remove();
     });
     event.stopPropagation();
});

$("input[type='text']").on("keyup", function (e) {
     if (e.which === 13 && $(this).val() != "") {
          var newToDoText = $(this).val();
          newToDoText = newToDoText.charAt(0).toUpperCase() + newToDoText.slice(1);
          $(this).val("");
          $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + newToDoText + "</li>");
     }
});

$(".fa-plus").on("click", function () {
     $("input[type='text']").fadeToggle();
});