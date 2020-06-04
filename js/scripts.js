$(document).ready(function(){
  $("form#form").submit(function(){
    const age = parseInt($("input#age".val());
    const brad = $("option#brad").val();
    console.log(brad);
 
    if (age < 18) {
      alert('You are too young for this quiz');
    } else if (age >= 18) {

    } else {
      alert ("Please enter an age")
    }


  });
});