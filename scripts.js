/* Add Randomized Reminder */
$(".add").click(function (event) {
  var items = Array(
    "Say hi to everyone in the neighborhood.",
    "Go join the neighborhood clean up",
    "Spend the half the day cleaning my room",
    "Purchase pro on CodePen.io"
  );

  var item = items[Math.floor(Math.random() * items.length)];

  $("ul")
    .add(
      "<li><a href='#'><div class='fa fa-check'></div></a> " + item + "</li>"
    )
    .fadeIn()
    .appendTo("ul");
  shuffle(item);
});

/* Closes Reminder when Check Button is clicked*/
$("ul > li > a").click(function () {
  $(this).parent("li").slideUp(200);
});
