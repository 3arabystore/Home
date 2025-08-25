
const pics = ["image1", "image2", "image3"];


function next(){
    var image = document.getElementById("image")
    var img = image.style.backgroundImage.replace('url(', '').replace(')', '').replace(/["']/g, "");

    if(img == "image1.jpeg"){
        image.style.backgroundImage = "url('image2.jpeg')"
    }
    else if(img == "image2.jpeg"){
        image.style.backgroundImage = "url('image3.png')"
    }
    else if(img == "image3.png"){
        image.style.backgroundImage = "url('image1.jpeg')"
    }
    
    
}

function submit_order(){
            var form = getElementById("orderform")


            html2pdf().from(form).save();
        }