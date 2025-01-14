//your JS code here. If required.
function dayOfAYear(value){
	if(value%100 ==0){
		if(value%400 ==0){
			return 366;
		}else{
			return 365;
		}
	}else if(value%4==0){
		return 366;
	}else{
		return 365;
	}
}

let value = prompt("Enter valid Year");
alert(dayOfAYear(value));
