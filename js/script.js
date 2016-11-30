var timer = null;
var countDownNunber = 10; 

var changeState = function(state) {
	document.body.className = 'body-state' + state;
	clearInterval(timer);
	countDownNunber = 10;
	document.getElementById('countdown').innerHTML = countDownNunber;

	if (state === 2) {
		timer = setInterval(function() {
			countDownNunber = countDownNunber - 1;
			document.getElementById('countdown').innerHTML = countDownNunber;
			
			if (countDownNunber <= 0) {
				changeState(3);
			}
		}, 500);
	} else if (state === 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random() * 10);

			console.log(randomNumber);

			if (randomNumber > 5) {
				changeState(4);
			} else {
				changeState(5);
			}
		}, 2000);
	}
}

// var startCountDown = function () {
// 	var rocketFly = document.getElementsByClassName('button').className;
// 	if (rocketFly === 'rocket') {
// 		document.getElementsByClassName('button').className = 'rocket flying';
// 	}
// }