var subButton = document.querySelector("#submit");
var magicNumber = document.querySelector('#magicno');
var amount = 0;

subButton.addEventListener("click", function(){
	var goal = document.querySelector("#goal");
	amount = (goal.value)/0.04;
	if (amount <= 0){
		magicNumber.textContent = "Aim a little higher ;)";
	}
	else{
		magicNumber.textContent = ("$"+String(amount));
		magicno.classList.add("magic");
	}
})
