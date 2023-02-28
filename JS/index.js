console.log("is this working?");

$("button").hover(function(){
    $(this).css("background-color", "#151D15");
  },
  function(){
    $(this).css("background-color", "#222E22");
  });