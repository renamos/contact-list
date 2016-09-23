$(document).ready(function (){
    $(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='contactform']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      first_name: "required",
      last_name: "required",
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true,
        minlength: 5
      }
    },
    messages: {
      first_name: "Please enter your first name",
      last_name: "Please enter your last name",
      phone: {
        required: "Please provide a phone number",
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

});