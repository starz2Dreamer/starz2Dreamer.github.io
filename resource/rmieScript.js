function playSound(url){
	var audio = new Audio(url);
	audio.play();
}
function setText(id,text){
	a=document.getElementById(id);
	a.innerHTML=text;
}
function addAttByQuery(queryName,att,value){
	ab = document.querySelectorAll(queryName);
	for(i=0;i<ab.length;i++){
		ab[i].setAttribute(att,value);
	}
}
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min+1)) + min;
}
function randomColor(){
	var R=randomNumber(0,255);
	var G=randomNumber(0,255);
	var B=randomNumber(0,255);
	return "rgb("+R+","+G+","+B+")";
}
function limit(value,min,max){
	if(value<min){
		return min;
	} else if(value>max){
		return max;
	} else {
		return value;
	}
}
// function wrap(value,min,max){
	// if(value<min){
		// return max;
	// } else if (value>max){
		// return min;
	// } else {
		// return value;
	// }
// }
function log(txt){
	document.getElementById("my_log").innerHTML+=txt+"<br>";
}
function noRepeatArray(min,max){ //Generate an array of numbers that not repeated
	var myArray=[],myArray2=[];
	for(i=min;i<=max;i++){
		myArray[myArray.length]=i; //user myArray.length to append and i is its content
	}
	while(myArray.length>0){
		var myNum=randomNumber(0,myArray.length-1);
		myArray2[myArray2.length]=myArray.splice(myNum,1); // delete array from myArray and add new array to myArray2 at one line
	}
	return myArray2;
}
function deleteArrayItem(array,arg){
	for(i=0;i<array.length;i++){
		if(array[i]==arg){
			array.splice(i,1);
		}
	}
	return array;
}