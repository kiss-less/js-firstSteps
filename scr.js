var money = localStorage.getItem("money");
if (money >= 100){
		document.write("<center>Lucky you! You won the game! Your money is <b>$"+money+"</b><br><br><button id='back' onclick='window.open(\"index.html\", \"_self\");'>Exit</button></center>");
		exit;
}
const betCost = 5;
const winCost = betCost * 2;
function action(horse) {
	//cleaning the page
	document.body.innerHTML = "";
	if (money <= 0){
		document.write("<center>Sorry my friend, you don't have enough money to proceed!<br><br><button id='back' onclick='window.open(\"index.html\", \"_self\");'>Exit</button></center>");
		exit;
	} else if (money >= 100){
		document.write("<center>Lucky you! You won the game! Your money is <b>$"+money+"</b><br><br><button id='back' onclick='window.open(\"index.html\", \"_self\");'>Exit</button></center>");
		exit;
}
	money = money - betCost;
	localStorage.setItem("money", money);
	let iteration = 0;
	document.writeln('<center>Your money: <b>$'+money+'</b>. The race is starting!<br>');
	document.writeln('You have chosen<b> '+horse+'</b>!<br><br>');
	var horses = ['Elly','Gordon','Abloy','Simon'];
	var position = [0,0,0,0];
	do {
		let eventN = Math.floor(Math.random() * 10);
		let currentOne = Math.floor(Math.random() * 3);
		let msg = '';
		switch (eventN){
			case 0: 
			position[currentOne]++;
			msg = '<b>'+horses[currentOne]+'</b> is moving faster than others!<br>';
			break;
			case 1: 
			position[currentOne]--;
			msg = '<b>'+horses[currentOne]+'</b> is falling over, but keep on trying...<br>';
			break;
			case 2: 
			position[currentOne]++;
			msg = '<b>'+horses[currentOne]+'</b> is suddenly feeling reeeeally good!<br>';
			break;
			case 3: 
			position[currentOne]--;
			msg = '<b>'+horses[currentOne]+'</b> saw a mouse, but was able to restore!<br>';
			break;
			case 4: 
			position[currentOne]++;
			msg = '<b>'+horses[currentOne]+'</b> is blessed by the crowd and went faster!<br>';
			break;
			case 5: 
			position[currentOne]--;
			msg = '<b>'+horses[currentOne]+'</b> is stumbling.<br>';
			break;
			case 6: 
			position[currentOne]++;
			msg = '<b>'+horses[currentOne]+'</b> is in positive mood and going slightly faster<br>';
			break;
			case 7: 
			position[currentOne]--;
			msg = '<b>'+horses[currentOne]+'</b> ate something wrong and feeling not so good<br>';
			break;
			case 8: 
			position[currentOne]++;
			msg = '<b>'+horses[currentOne]+'</b> is using nitrooooo!<br>';
			break;
			case 9: 
			position[currentOne]--;
			msg = '<b>'+horses[currentOne]+'</b> is falling asleep.<br>';
			break;			
		}
		// if debug is required - uncomment document.write(position.toString());
		document.writeln(msg);
		iteration++;
	}
	while (iteration < 16);
//check if there are two winners
	if (indexOfMax(position).constructor == Array){
		// if debug is required - uncomment document.write(position.toString());
		winners = indexOfMax(position);
		// if debug is required - uncomment document.write('<br>indexOfMax(position) is an array: '+winners[0]+', '+winners[1]);
		//determine the lucky one
		let luckyOne = Math.round(Math.random());
		position[winners[luckyOne]]++;
		document.writeln('<br>Almost at the finish there was an intense struggle between <b>'+horses[winners[0]]+'</b> and <b>'+horses[winners[1]]+'</b>! <b>'+horses[winners[luckyOne]]+'</b> was a bit faster and won the race!');
	}
		
	// if debug is required - uncomment document.write('<br>indexOfMax(position)='+indexOfMax(position));
	var winner = horses[indexOfMax(position)];
	document.writeln('<br><br>And the winner is <b>'+winner+'</b>!!<br>Results: ');
	for (var y = 0; y < 4; y++){
		document.write(horses[y]+': '+position[y]+' ');
	}
if (winner === horse){
	money = money + winCost;
	localStorage.setItem("money", money);
	document.write('<br>Congratulations mate! Your horse won the race and you won <b>$'+winCost+'</b>! Your money: <b>$'+money+'</b>');
} else{
	document.write('<br>Do not worry my friend! Maybe your horse will win next time ;) Your money: <b>$'+money+'</b>');
}
document.write("<script type='text/javascript' src='scr.js'></script>");
document.write("<br><br>Let's do it again! Pick the horse:<br><button id='horse1' onclick='action(\"Elly\")'>Elly</button><button id='horse2' onclick='action(\"Gordon\")'>Gordon</button><button id='horse3' onclick='action(\"Abloy\")'>Abloy</button><button id='horse4' onclick='action(\"Simon\")'>Simon</button><br><br><button id='back' onclick='window.open(\"index.html\", \"_self\");'>Exit</button></center>");
}
//returns max value from array and returns array of equal max values if there are more than 1 equal max values
function indexOfMax(arr) {
/*
    if (arr.length === 0) {
        return -1;
    }
*/
    var max = arr[0];
    var maxIndex = 0;
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }		
    }
	    for (var i = 0; i < arr.length; i++) {
			if (i != maxIndex){
				if (arr[i] == max){
					return [maxIndex,i];
				}
			}		
			}
/*
		if (i === maxIndex){
			}else{
				if (arr[i] === max){
				return [arr[i],maxIndex];
			}
			}
			}
*/			
		
    return maxIndex;
}