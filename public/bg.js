var obraz = new Image(); 
obraz.src = "public/images/bg1.jpg";
console.log("image");
obraz.onload = function () {
    // Set the source of the image in the Pug file
    document.getElementsByClassName("code").src = obraz.src;
  };