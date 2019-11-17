// $(document).on('click', '#delete', function (e) { OR
$('body').delegate('#studentinfo tr #delete', 'click', function (e) {
    var id = $(this).data('id');

    $.ajax({
        type: 'delete',
        data: {
            "_token": $('#token').val(),
            "id": id
        },
        url: '/student/' + id,
        success: function (data) {
            console.log(data);
            $('tr#' + id).remove();
        },
        error: function (error) {
            console.log(error);
        }
    });
});
