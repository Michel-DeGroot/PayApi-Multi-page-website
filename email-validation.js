$('form[id="second_form"]').validate({
    rules: {
      user_email: {
        required: true,
        email: true,
      },
    },
    messages: {
      user_email: 'Enter a valid email',
      psword: {
        minlength: 'Password must be at least 8 characters long'
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
  });