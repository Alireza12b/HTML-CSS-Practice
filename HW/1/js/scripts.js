$(document).ready(function () {
    $(".plus-button").click(function() {
        var quantityLabel = $(this).siblings("label");
        var currentQuantity = parseInt(quantityLabel.text());
        quantityLabel.text(currentQuantity + 1);
      });
  
      $(".minus-button").click(function() {
        var quantityLabel = $(this).siblings("label");
        var currentQuantity = parseInt(quantityLabel.text());
        if (currentQuantity > 1) {
          quantityLabel.text(currentQuantity - 1);
        }

      });
      
});