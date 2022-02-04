$("#btn").click(function () {
    var result= $("button").hasClass('disabled')
     if (!result) {
         $('.container1').clone().appendTo(".container1");
         $("#btn").addClass('disabled')
     }
 });