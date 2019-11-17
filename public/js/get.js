$(document).ready(function () {
    get();
});

function get() {
    $.get('/student', function (data) {
        // $.each(data, function (i, value) {
        //     var tr = $("<tr/>");
        //     tr.append($("<td/>", {
        //         text: i+1
        //     })),
        //     tr.append($("<td/>", {
        //         text:value.fname
        //     })),
        //         tr.append($('<td/>', {
        //             text:value.lname
        //         })),
        //         tr.append($("<td/>", {
        //             html: "<a href='' class='btn btn-primary'>View</a>" + " " + "<a href='' class='btn btn-danger'>Delete</a>" + " " + "<a href='' class='btn btn-success'>Edit</a>"
        //         })),

        //     $('#studentinfo').append(tr);

        // });
        // console.log(data);
        $('#studentinfo').empty().html(data);
    });
}