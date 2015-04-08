$( document ).ready(function() {
    console.log( "ready!" );

    $(".resultItem").click(function(event){
      event.preventDefault();
      var id = $(this).attr("id");
      console.log( "Adding id "+id+"to cart!" );
      addToCart(id);
    });    

});

function addToCart(id){
  var parameters = { id:  id};
  $.ajax({type: "POST",
    url: "/cart",
    data: { id: id, qty:"1", operation:"add" },
    success:function(result){
        $("#add-to-cart-msg").html(result);
    }
  });
}


