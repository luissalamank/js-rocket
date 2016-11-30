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

			if (countDownNunber == 4 && countDownNunber <= 7) {
				// be nervous
				document.getElementById('nervous').className = 'nervous show';
			} else {
				document.getElementById('nervous').className = 'nervous';
			}

			if (countDownNunber == 1 && countDownNunber <= 4) {
				document.getElementById('cant-wait').className = 'cant-wait show';
			} else {
				document.getElementById('cant-wait').className = 'cant-wait';
			}

		}, 500);
	} else if (state === 3) {
		var success = setTimeout(function () {
			var randomNumber = Math.round(Math.random() * 10);

			console.log(randomNumber);

			if (randomNumber > 9) {
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