$( document ).ready(function() {
    console.log( "ready!" );

        $('#page-selection').bootpag({
            total: 10
        }).on("page", function(event, /* page number here */ num){
             //$("#content").html("Insert content"); // some ajax content loading...
		window.location = 'http://localhost:3000/search?search='+$(this).val()+'&page='+num;
        });
});



