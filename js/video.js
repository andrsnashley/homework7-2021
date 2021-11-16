var video = document.getElementById("player1");
var speed = 1.0;
var volume = 1.0;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video.pause();
});

document.querySelector("#play").addEventListener("click", function() {

	let slider = document.getElementById("slider");
	let output = document.getElementById("volume");

	output.innerHTML = slider.value;
  	volume = slider.value / 100;
	video.volume = volume;

	console.log("Play Video");
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	speed = speed * 0.95;
	video.playbackRate = speed;
	console.log("New Speed is " + speed);
});

document.querySelector("#faster").addEventListener("click", function() {
	speed = speed / 0.95;
	video.playbackRate = speed;
	console.log("New Speed is " + speed);
});

document.querySelector("#skip").addEventListener("click", function() {
	let currentTimestamp = video.currentTime;
	console.log("Original Location " + currentTimestamp);
	currentTimestamp = currentTimestamp + 15;

	if (currentTimestamp >= 68.92 ) {
		currentTimestamp = 0;
		console.log("Going back to beginning");
		video.currentTime = currentTimestamp;
		console.log("New Locaation " + currentTimestamp);
	}

	else {
		video.currentTime = currentTimestamp;
		console.log("New Locaation " + currentTimestamp);
	}
});

document.querySelector("#mute").addEventListener("click", function() {
	let mute = document.getElementById("mute");
	if (mute.innerHTML == "Mute") {
		mute.innerHTML = "Unmute";
	}
	else if (mute.innerHTML == "Unmute") {
		mute.innerHTML = "Mute";
	}
	volume = 0;
	video.volume = volume;
});

document.querySelector("#slider").addEventListener("input", function() {

	let slider = document.getElementById("slider");
	let output = document.getElementById("volume");

	output.innerHTML = slider.value;
	volume = slider.value / 100;
	console.log(volume);

	video.volume = volume;
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove("oldSchool");
});