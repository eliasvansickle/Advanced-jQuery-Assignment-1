$(document).ready(function() {
	$("form").submit(function(){
		return false
	});
	$("form").submit(function() {
		$("table tbody").append("<tr><td>.first</td><td>.last</td><td>.email</td><td>.contact</td></tr>")	
	});

});