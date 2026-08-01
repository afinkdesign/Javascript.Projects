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
    
    function myFunction() {
        alert("Page loaded!");
        tabfocus();
    }

    function tabfocus() {
        console.log('setting tabindex for images');

        let images = document.querySelectorAll('.preview');

        for (let i = 0; i < images.length; i++) {
            images[i].setAttribute('tabindex', '0');
        }
    }