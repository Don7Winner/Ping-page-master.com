$(document).ready(function () {
  const form = $("form");
  const button = $("button");
  const errorMsgEmail = $(".errorMsgEmail");
  form.click("submit", function (e) {
    e.preventDefault();
  });
  function validEmail() {
    const email = $("#email").val();
    const emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (emailPattern.test(email)) {
      return true;
    } else {
      return false;
    }
  }
  $("#email").keyup(function () {
    if (validEmail()) {
      $("#email").css("border", "2px solid hsl(223, 87%, 63%)");
      errorMsgEmail.html("Valid").css("color", "hsl(223, 87%, 63%)");
    } else {
      $("#email").css("border", "2px solid  hsl(0, 66%, 54%)");
      errorMsgEmail
        .html("Please enter a valid email address")
        .css("color", " hsl(0, 66%, 54%)");
    }
  });
  button.click(function () {
    const email = $("#email").val();
    var emailPattern = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
    if (emailPattern.test(email)) {
      alert("Successfully submitted 👍");
      location.reload();
    } else {
      form.click("submit", function (e) {
        e.preventDefault();
      });
    }
  });
});
