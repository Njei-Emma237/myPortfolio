/*if (typeof jQuery == "undefined"){
    alert("hello my friend")
}
else{
    alert("goodbye")
}*/
  
$(".gate").click(function() {
    $(".heads").css("display", "contents");
});
$(".exit").click(function() {
    $(".heads").css("display", "none");
});/*
$(".gate").hover(function() {
    $(".gate").css("transform", "rotate(180deg)");
});
$(".gate").hover(function() {
    $(".gate").css("transition", "2s");
});
*/

 let seconds = 0;
 let miniute = 0;
  setInterval(() => {
    seconds++;
    document.getElementById('timer').innerText = seconds;
  }, 1000);

/*
  $("#timer").click(function () {
    $(".heads").css("display", "none");
  });
  */