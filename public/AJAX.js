"use strict"


function encode() {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
	if (this.readyState == 4 && this.status == 200) {

		var res = this.responseText;
		console.log(JSON.parse(res));
		}
	};

	var storyRaw = document.getElementById("story").value;
	var story = encodeURIComponent(storyRaw);
	var request = "/add?" + "story=" + story;
	// var clear = document.getElementById("story").reset();
	xhttp.open("GET",request, true);
	xhttp.send();
	document.getElementById("story").value = ""


};





