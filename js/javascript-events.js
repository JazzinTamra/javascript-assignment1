

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
