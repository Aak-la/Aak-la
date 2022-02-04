 $('.dropdown').mouseover(function () {
   $('.dropdown-menu').show()
 })
 $('.dropdown').mouseout(function () {
   $('.dropdown-menu').hide()
 })
 $('.menu').hide()
 $('.drop').mouseover(function () {
   $('.menu').show();
   $('.drop').hide()
 })

 $(document).mousemove(function (e) {
   x = e.pageX;
   y = e.pageY;
 });

 $(document).mousemove(function (e) {
   if ($.contains($('.total')[0], e.target) || $.contains($('.box')[0] == e.target)) {
     return;
   } else {
     $('.menu').hide();
     $('.drop').show()
   }
 })
 $('.login').click(function () { 
  window.location.href = "../views/login.html"
 });














































 $('.A').show()
 $('.a').addClass('activation')
 $('.B').hide()
 $('.C').hide()
 $('.D').hide()

 function done(...arg) {
   if (arg.toString() == "A") {
     $('.a').addClass('activation')
     $('.c').removeClass('activation')
     $('.b').removeClass('activation')
     $('.d').removeClass('activation')
     $('.A').show()
     $('.B').hide()
     $('.C').hide()
     $('.D').hide()
   } else if (arg.toString() == "B") {
     $('.b').addClass('activation')
     $('.c').removeClass('activation')
     $('.a').removeClass('activation')
     $('.d').removeClass('activation')
     $('.A').hide()
     $('.B').show()
     $('.C').hide()
     $('.D').hide()
   } else if (arg.toString() == "C") {
     $('.c').addClass('activation')
     $('.b').removeClass('activation')
     $('.a').removeClass('activation')
     $('.d').removeClass('activation')
     $('.A').hide()
     $('.B').hide()
     $('.C').show()
     $('.D').hide()
   } else {
     $('.d').addClass('activation')
     $('.c').removeClass('activation')
     $('.a').removeClass('activation')
     $('.b').removeClass('activation')
     $('.A').hide()
     $('.B').hide()
     $('.C').hide()
     $('.D').show()
   }
 }