$( document ).ready(function() {
    console.log( "ready!" );

    $("#location-input").keyup(function(event){
      if(event.keyCode == 13){
          console.log( "pressed enter!" );
          window.location = 'http://localhost:3000/search?search='+$(this).val();
          //locationSearch($(this).val());
      }
    });

    $('#location-input').typeahead({
      hint: true,
      highlight: true,
      minLength: 1
    },
    {
      name: 'states',
      displayKey: 'value',
      source: substringMatcher(states)
    });    

});

function locationSearch(location){
  var parameters = { search:  location};
  $.get( '/search',parameters, function(data) {
       console.log(data);
     });
}

var states = ['Hyderabad','Chennai','Bangalore','Tirupati','Vijayawada','Vishakapatnam','Kadapa',
'Ooty','Mysore','Coorg','Madhurai','Coimabtore'
];

var substringMatcher = function(strs) {
  return function findMatches(q, cb) {
    var matches, substrRegex;
 
    // an array that will be populated with substring matches
    matches = [];
 
    // regex used to determine if a string contains the substring `q`
    substrRegex = new RegExp(q, 'i');
 
    // iterate through the pool of strings and for any string that
    // contains the substring `q`, add it to the `matches` array
    $.each(strs, function(i, str) {
      if (substrRegex.test(str)) {
        // the typeahead jQuery plugin expects suggestions to a
        // JavaScript object, refer to typeahead docs for more info
        matches.push({ value: str });
      }
    });
 
    cb(matches);
  };
};




