$(function() {
    $('#btnConfirmUserUpdate').click(function() {
        $.ajax({
            url: '/submitUserUpdate',
            data: $('form').serialize(),
            type: 'POST',
            success: function(response) {
                console.log(response);
                document.open();
                document.write(`${response}`);
                document.close();
            },
            error: function(error) {
                console.log(error);
            }
        });
    });
});