var images = []
images[0] = "g1.jpg";
images[1] = "g2.jpg";
images[2] = "g3.jpg";
images[3] = "g4.jpg";
images[4] = "g5.jpg";
images[5] = "g6.jpg";
images[6] = "g7.jpg";

used = [];

changeImage();

function changeImage() {
    var index = Math.floor(Math.random() * (images.length)),
    thisImage = images[index];
    var delay = 4000;
    setTimeout(changeImage, delay);

    used.push(thisImage);
    images.splice(index, 1);

    if (images.length < 1) {
        images = used.splice(0, used.length);
    }

    var imgStr = '<img src="' + thisImage + '" alt = "">';
    document.write(imgStr); 
    document.close();
}