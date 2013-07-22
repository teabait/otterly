var otters = new Array(
	"otter1.gif",
	"otter2.gif",
	"otter3.gif",
	"otter4.gif",
	"otter5.gif",
	"otter6.gif",
	"otter7.gif",
	"otter8.gif",
	"otter9.gif",
	"otter10.gif"
);


$(document).ready(function () {
	$("#button_id").bind('click',function () {
		var new_otter = "images/"+ randomOtter(otters);
		$("#otter_image").attr("src",new_otter);
	});
});




function randomOtter(all_the_otters) {
	var i = Math.floor(Math.random()*10);
	console.log(i);
	return all_the_otters[i];	
}
