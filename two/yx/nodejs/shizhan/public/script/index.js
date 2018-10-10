$(function() {
    $("#send").click(function() {
        $.ajax({
            type: "get",
            dataType: "JSON",
            url: "/setName",
            data: {
                username: $("#username").val()
            },
            success: function(res) {
                console.log(res);
            },
            error: function(err) {
                console.log(err)
            }
        })
    })
})