
var numOfPhotos =  7;
var currentPic = 1;



function hidePhotos() {



	for(var p = 2; p <= numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}
}

function doRightClick(){
	//alert("You clicked the Left Arrow");
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";
	// go to next photo
	currentPic--;
	if(currentPic < 1){
		currentPic=numOfPhotos-1;
	}
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";
	
}

function doLeftClick(){
	//alert("You clicked the Left Arrow");
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";
	// go to next photo
	currentPic++;
	if(currentPic >= numOfPhotos){
		currentPic=1;
	}
	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "block";


}

hidePhotos();