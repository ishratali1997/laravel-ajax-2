$(document).ready(function () {
    // $('.add-btn').click(function () {
    //     // $('#insert-modal').modal('show');
    // });
    $('#form-insert').on('submit', function (e) {
        e.preventDefault();
        $('#insert-modal').modal('hide');
        var data = $(this).serialize();
        $.ajax({
            type: 'post',
            url: '/student',
            data: data,
            dataType: 'json',
            success: function (data) {
                console.log(data);
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
                $('#studentinfo').append(tr);
                // get();
                $('#insert-update').trigger('reset');
                $('#insert-modal').modal('hide');
            },
            error: function (error) {
                console.log(error);
            }
        });
    })
});