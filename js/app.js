
// VALIDATION - REGISTRATION
$(document).ready(function(){
    let counter = 0;
    $(".loginbtn2").click(function(e){
      let password = $("#password").val();
      if(password.length == ""){
        alert("PASSWORD: password cannot be empty")
        counter = 1;
      }
      if(password.length <= 3){
        alert("PASSWORD: password must be greater than 3 digit")
        counter = 1;
      }
      
      // It can be only six digits.
      // It should not start with zero.
      // First digit of the pin code must be from 1 to 9.
      // Next five digits of the pin code may range from 0 to 9.
      // It should allow only one white space, but after three digits, although this is optional.

      if(!(/^[1-9]{1}[0-9]{2}[0-9]{3}$/.test($("#pincode").val()))){
        alert("PINCODE: It must be of 6 Digit Maximum");
        counter = 1;
      }
      if(!(/^[A-Za-z]/.test($("#namme").val()))){
        alert("NAME: Enter only Alphabets [A-Z and a-z]");
        counter = 1;
      }
      if(!(/^[A-Za-z]/.test($("#city").val()))){
        alert("CITY: Enter only Alphabets [A-Z and a-z]");
        counter = 1;
      }
      if(!(/^[0-9]{10}/.test($("#contact").val()))){
        alert("CONTACT: Enter proper Contact Number");
        counter = 1;
      }
      let emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if(!(emailregex.test($("#email").val()))){
        alert("Email: Enter proper Email ID");
        counter = 1;
      }
      if(!($("#email").val() == $("#cemail").val())){
        alert("Confirm Email: Entered Email donot Match");
        counter = 1;

      }
      if(counter == 0){
        alert("Successfully Registered")
      }
      e.preventDefault();
    })


    // login field validation
    $(".loginbtnx").click(function(e){
        let counter = 0;
        let password = $("#password").val();
        if(password.length <= 3){
            alert("PASSWORD: password must be greater than 3 digit")
            counter = 1;
          }
          if(!(/^[A-Za-z]/.test($("#namme").val()))){
            alert("NAME: Enter only Alphabets [A-Z and a-z]");
            counter = 1;
          }
          if(counter == 0){
            alert("Successfully Login")
          }
          e.preventDefault();
    })
  
  })
  
