var people = [];
var template = $("#people-template").html();

$("peopleModule").find("button").on("click", function(){
  people.push($("#peopleModule").find("input").val());
  // data for mustache template
  var data = {
    people: people,
  };
  $('#peopleModule').find('ul').html(Mustache.render(template, data));
});

$('#peopleModule').find('ul').delegate('i.del', 'click', function(e){
  var $remove = $(e.target).closest('li');
  var i = $('#peopleModule').find('ul').find('li').index($remove);

  $remove.remove();
  people.splice(i, 1);
});

// Whats wrong

/*
  - Too nany global variables
  - Shold all be packed in a module
  - Seperation of concerns: Every peice of code is doing every kind of task which is messy
  - DRY Code - Dont repeat yourself; there's a lot of repating going on suck as $('#people.Module').find()
        Very slow javaScript
  - Efficient DOM usage by DOM caching: Limit the $('#peopleModule') and just cache it
      - Atleast one per module
  - No memory leaks
      - all events that are binded as an even listener has potential for a memory leak even if the $() is removed
      - creates the browser to be slow

*/
