var $sendButton = $('#send-button');
var $humanCheck = $('input[name="human"]');

$humanCheck.on('click', function() {
    if ( $(this).is(':checked') )
        $sendButton.prop('disabled', false);
    else
        $sendButton.prop('disabled', true);
});

var $contactSection = $('#contact');

$sendButton.on('click', function() {
  $contactSection.empty();
  $contactSection.append("<h2>Thanks for reaching out!</h2>");
})