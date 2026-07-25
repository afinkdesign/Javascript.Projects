/*Name this external file gallery.js*/

function upDate(previewPic){
 let imgDiv = document.getElementById("image");
  
  imgDiv.style.backgroundImage = "url('" + previewPic.src + "')";
  imgDiv.innerHTML = previewPic.alt;
  imgDiv.style.backgroundColor = "plum";
  
	}

	function unDo(){
    let imgDiv = document.getElementById("image");
    
    imgDiv.style.backgroundImage = "url('')";
    imgDiv.innerHTML = "Hover over an image below to display here.";	
    imgDiv.style.backgroundColor = "";
	}