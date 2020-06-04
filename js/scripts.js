// Business Logic





// UI Logic
$(document).ready(function(){
  $("form#quiz").submit(function(){
    const age = parseInt($("input#age").val());
    var count = $('#brad option:checked').length;
    window.alert( $(count).val());
    //const brad = parseInt($("select#brad option:checked").val());
    console.log(count);

    // if (age < 18) {
      // alert('You are too young for this quiz');
    // } else if (age >= 18) {

    // } else {
    //   alert ("Please enter an age")
    // }


  });
});