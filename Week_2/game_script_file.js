var colors = ["blue","cyan","gold","gray","green","manenta","orange","red","white","yellow"];
var target_color;
var target_index=0;
var input_color;
var finish = false;
var attempts = 0;

function do_game(){
	getInputColor();
	target_index = Math.floor(Math.random()*(colors.length));
	target_color = colors[target_index];
	while(!finish){
		attempts++;
		check_guess();
	}	
}

function check_guess(){
	if(colors.indexOf(input_color)<0){
		alert("Sorry! I don't recognizance your color\nPlease try again");
		finish = true;
	}else if(input_color > target_color){
		alert("Sorry! your guess is not correct\n\nHint:your color is alphabetically grater then mine\n\nPlease try again");
		getInputColor();
	}else if(target_color > input_color){
		alert("Sorry! your guess is not correct\n\nHint:your color is alphabetically lower then mine\n\nPlease try again");
		getInputColor();
	}else{
		myBody=document.getElementsByTagName("body")[0];
		myBody.style.background=input_color;
		alert("Congratulation! you have guessed the color\n\n It took you "+attempts+" guesses to finish the game!\n\nYou can see color in the background");
		finish = true;
	}
}

function getInputColor(){
	input_color = prompt("I am thinking of one of these colors:\n" + 
	colors.join(", ")+"\n\n" + 
	"What color I am thinking of?");
}

