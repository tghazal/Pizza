
var date = new Date();
// get the date as a string
var n = date.toDateString();
// get the time as a string
var time = date.toLocaleTimeString();

// log the date in the browser console
console.log('date:', n);

// log the time in the browser console
console.log('time:',time);
var i=0;

var array=["Never eat more than you can life.– Miss Piggy","A recipe has no soul. You, as the cook, must bring soul to the recipe. –Thomas Keller","Life is uncertain. Eat dessert first.– Ernestine Ulmer","The best comfort food will always be greens, cornbread, and fried chicken.– Maya Angelou"]
var myInterval;
//call displayQuote function every 10 seconds
myInterval = setInterval(displayQuote, 5000);
function displayQuote() {
	
	if(i>4)
	{
		i=0;
	}
	console.log(array[i])
	document.getElementById("quote").innerHTML= array[i++]
}

function getInputValue(){
	
	// Selecting the input element and get its value 
	var FirstName = document.getElementById("FirstName").value;
	var LastName= document.getElementById("LastName").value;
	var Phone= document.getElementById("Phone").value;
	var Ext= document.getElementById("Ext").value;
	var Email= document.getElementById("Email").value;
	var checked=document.getElementById("delivery").checked
	var delivery;
	if(checked){
    delivery="Needs delivery"
	}
	else{
		delivery="No Delivery"
	}
	alert("welcome"+" " +FirstName+""+LastName);
	//alert(checked)
	var specialsList= document.getElementById("specials");
	 var specials = specialsList.value;
	// alert(specials)
	 var Customizations = document.getElementById("customizations").value;
	// alert(Customizations)
	var subject="order Pizza"
	var body= FirstName+" " +LastName +" " +"phone number is"+" " + Phone+" "+ "and email is "+" "+ Email+" " +"The order is :  "+" " +specials+" "+Customizations+" "+delivery;
	alert("will send your order by Email " + body)

	 window.open('mailto:order@ssupizza.com?subject=subject&body=body');


}




function contactUs(){
	var name = document.getElementById("name").value;
	var email= document.getElementById("email").value;
	var subject= document.getElementById("subject").value;
	var message= document.getElementById("message").value;

	if(name===null)
	{
		alert("Please ener your name ")
	}


	window.open('mailto:contactr@ssupizza.com?subject=subject&body=message');
}


