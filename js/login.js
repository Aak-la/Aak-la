$("input").focusin(function () {
	$(this).attr({
		placeholder: ""
	});
});
$("input[type='text']").focusout(function () {
	if ($("input[type='text']").val() == "") {
		$(this).attr({
			placeholder: "UserName"
		});
	}
	return;
});
$("input[type='password']").focusout(function () {

	if ($("input[type='password']").val() == "") {
		$(this).attr({
			placeholder: "Password"
		});
	}
	return;
});

$(".enterBut").click(function () {
	const zh = $("input[type='text']").val()
	const ps = $("input[type='password']").val()
	if (zh == "admin" && ps == "123") {
			window.location.href = "../views/index.html"
		
      
	} else {
		alert("账户或密码有错")
	}

})