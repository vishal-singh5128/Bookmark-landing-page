/*ACCORDION FOR FAQ*/
let accOpen = null;
$(".question").on("click", function () {
  if (this == accOpen) {
    $(".answer").slideUp();
    accOpen = null;
  } else {
    $(".arrow").removeClass("arrow-exp");
    $(".answer").slideUp();
    $(this).next(".answer").slideDown();

    accOpen = this;
  }
});

$(".answer").click(function () {
  $(".answer").slideUp();
});

/*
menu-simple-bookmarking
menu-speedy-searching" 
menu-easy-sharing" href
*/
/*Feature Carsousel*/

$(".menu-simple-bookmarking").on("click", function () {
  $(".speedy-searching").hide();
  $(".easy-sharing").hide();
  $(".menu-speedy-searching").removeClass("menu-border");
  $(".menu-easy-sharing").removeClass("menu-border");
  $(".simple-bookmarking").css("display", "flex");
  $(".menu-simple-bookmarking").addClass("menu-border");
});

$(".menu-speedy-searching").on("click", function () {
  $(".menu-simple-bookmarking").removeClass("menu-border");
  $(".menu-easy-sharing").removeClass("menu-border");
  $(".simple-bookmarking").hide();
  $(".easy-sharing").hide();
  $(".speedy-searching").css("display", "flex");

  $(".menu-speedy-searching").addClass("menu-border");
});

$(".menu-easy-sharing").on("click", function () {
  $(".menu-simple-bookmarking").removeClass("menu-border");
  $(".menu-speedy-searching").removeClass("menu-border");
  $(".simple-bookmarking").hide();
  $(".speedy-searching").hide();
  $(".easy-sharing").css("display", "flex");

  $(".menu-easy-sharing").addClass("menu-border");
});

/* Email Validation */

$(".contact-button").click(function () {
  var inputEmail = $("#email").val();
  if (inputEmail.includes("@")) {
    $(".icon-error").slideUp();
    $(".msg-error").slideUp();
  } else {
    $(".icon-error").slideDown();
    $(".msg-error").slideDown();
  }
});
