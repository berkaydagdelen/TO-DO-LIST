$(document).ready(function () {
  $(".inputtext").change(function () {
    var tex = $(this).val();
    $("#liste").append(
      '<li><input type="checkbox" style="margin-right:3px" class="chck"/>' +
        "<span>" +
        tex +
        "</span>" +
        "</li>"
    );

    $(this).val("");

    $(".chck").change(function () {
      var selectedItems = [];
      $(".chck:checked").each(function () {
        var cizgi = $(this).closest("li").text();
        selectedItems.push(cizgi);
      });

      console.log(selectedItems);
      $("span").css("text-decoration", "none").css("color", "black");

      selectedItems.forEach(function (item) {
        $("span:contains(" + item + ")").css({
          "text-decoration": "line-through",
          color: "red",
        });
      });
    });
  });

  $("#temizle").click(function () {
    $("#liste").empty();
    $("input").val("");
  });
});
