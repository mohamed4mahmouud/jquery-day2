$(function () {
  $(".btn-add").on("click", function () {
    let value = $("#txt").val();
    $(".list").append(`<li>${value}
        <button class="dn">Done</button>
        <button class="del">Delete</button></li>`);
  });

  $(".list").on("click", ".dn", function () {
    $(this).closest("li").css({ "background-color": "green" });
  });

  $(".list").on("click", ".del", function () {
    $(this).closest("li").remove();
  });
});
