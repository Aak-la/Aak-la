
$("#btn").click(function () {
   var result= $("button").hasClass('disabled')
    if (!result) {
        $('#mian').clone().appendTo("#mian");
        $("#btn").addClass('disabled')
    }
});