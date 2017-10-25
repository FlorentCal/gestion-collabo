$(document).ready(function() {
  $('#contact_form').bootstrapValidator({
      framework: 'bootstrap',
      icon: {
          valid: 'glyphicon glyphicon-ok',
          invalid: 'glyphicon glyphicon-remove',
          validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
          nom: {
              validators: {
                      stringLength: {
                      min: 2,
                      message: 'Le nom doit comporter au moins 2 caractères'
                  },
                      notEmpty: {
                      message: 'Le nom est obligatoire'
                  }
              }
          },
           prenom: {
              validators: {
                   stringLength: {
                      min: 2,
                      message: 'Le prénom doit comporter au moins 2 caractères'
                  },
                  notEmpty: {
                      message: 'Le prénom est obligatoire'
                  }
              }
          },
          adresse: {
              validators: {
                  notEmpty: {
                      message: 'L\'adresse est obligatoire'
                  }
              }
          },
          date_naissance: {
              validators: {
                  notEmpty: {
                      message: 'La date de naissance est obligatoire'
                  }
              }
          },
          secu: {
             validators: {
                  stringLength: {
                     min: 13,
                     max: 13,
                     message: 'Le numéro de ss doit être d\'exactement 13 caractères'
                 },
                 notEmpty: {
                     message: 'Le numéro de sécurité social est obligatoire'
                 }
             }
         }
       }
      })
      .on('success.form.bv', function(e) {
          $('#success_message').slideDown({ opacity: "show" }, "slow") // Do something ...
              $('#contact_form').data('bootstrapValidator').resetForm();

          // Prevent form submission
          e.preventDefault();

          // Get the form instance
          var $form = $(e.target);

          // Get the BootstrapValidator instance
          var bv = $form.data('bootstrapValidator');

      });
});
