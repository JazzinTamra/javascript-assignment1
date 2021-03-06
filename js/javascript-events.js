/**
 * changes the text on a click event
 **/
function clickEvent() {
	document.getElementById("click").innerHTML = "A week later, the fugitive horse sauntered back to the homestead, accompanied by six wild horses. The farmer and his son managed to corral all of them. Again the neighbors descended. &#34;What great luck!&#34; they exclaimed. &#34;Maybe,&#34; the farmer replied. &#34;Maybe not.&#34; ";
}

/**
 * changes the background color when moused over
 **/
function mouseOver() {
	document.getElementById("mouse").style.backgroundColor = "red";
}

/**
 * changes background color when moused out
 **/
function mouseOut() {
	document.getElementById("mouse").style.backgroundColor = "blue";
}

/**
 * hides/shows the textarea when the checkbox is unchecked/checked
 **/
function showMoreInfo() {
	if(document.getElementById("moreInfo").style.display === "block")
	{
		document.getElementById("moreInfo").style.display = "none";
	} else {
		document.getElementById("moreInfo").style.display = "block";
	}
}

/**
 * shows a modal window when clicked
 **/
function popUp() {
	document.getElementById("signUp").style.display = "block";
}

/**
 * closes the modal window when clicked
 **/
function closeSignUp() {
	document.getElementById("signUp").style.display = "none";
}

/**
 * generates a kitty based on the dimensions entered =^.^=
 **/
function resizeKitty() {
	var dimension = document.getElementById("dimension").value;
	var imageUrl  = "http://placekitten.com/g/" + dimension + "/" + dimension;
	document.getElementById("dimensionValue").innerHTML = dimension;
	document.getElementById("kitten").src = imageUrl;
}