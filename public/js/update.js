// $('body').delegate('#studentinfo #edit', 'click', function (e) {
//     alert('adfsa');
//     var id = $(this).data('id');
//     $.get('/student/' + id + '/edit', function (data) {
//         $('#form-update').find('#id').val(data.id)
//         $('#form-update').find('#fname').val(data.fname)
//         $('#form-update').find('#fname').val(data.fname)
//         $('#update-modal').modal('show')
//     });
// });

$('body').delegate('#studentinfo #edit', 'click', function (e) {
    var id = $(this).data('id');
    alert(id);
    $.get('/student/' + id + '/edit', function (data) {
        $('#form-update').find('#id').val(data.id)
        $('#form-update').find('#fname').val(data.fname)
        $('#form-update').find('#lname').val(data.lname)
        $('#update-modal').modal('show')
    });
});




$(document).ready(function () {
    $('#form-update').on('submit', function (e) {
        e.preventDefault();
        var id = $('#form-update #id').val();
        // var rid = $('#studentinfo tr td #no').val
        $.ajax({
            type: 'put',
            url: '/student/' + id,
            data: $('#form-update').serialize(),
            success: function (data) {
                $('#form-update').trigger('reset');
                var tr = $("<tr/>", {
                    id: data.id
                });
                tr.append($("<td/>", {
                    text: data.id
                })).append($("<td/>", {
                    text: data.fname
                })).append($("<td/>", {
                    text: data.lname
                })).append($('<td/>', {
                    html: '<a href="#" class="btn btn-success" id="edit" data-id="' + data.id + '">Edit</a>' + " " +
                        '<a href="#" class="btn btn-danger" id="delete" data-id="' + data.id + '">Delete</a>' + " " +
                        '<a href="#" class="btn btn-primary" id="view" data-id="' + data.id + '">View</a>'
                }));
                $('#studentinfo tr#' + data.id).replaceWith(tr);
                $('#update-modal').modal('hide')

            },
            error: function (error) {
                console.log(error);
            }
        });
    });
});
