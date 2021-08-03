        // Variables
var x = document.getElementById("myAudioOne");
var y = document.getElementById("myAudioTwo");
var z = document.getElementById("myAudioThree");

        // SOUND
function playAudioOne() {
    x.play();
}
function playAudioTwo() {
    y.play();
}
        // function playAudioThree() {
        //     z.play();
        // }
        // function pauseAudioThree() {
        //     z.pause();
        // }

var imageSong = false;
function imagePlay() {
    imageSong = !imageSong;
    if (imageSong) {
        z.play();
    }
    else {
         z.pause();
    }
}

        // Images
var imageRotate = false;
function imageMove() {
    imageRotate = !imageRotate;
    if (imageRotate) {
        var img = document.getElementById("moumi");
         img.setAttribute("class", "rotated-image");
         window.setTimeout(imageMove, 240500);
    }
     else {
        var img = document.getElementById("moumi");
        img.setAttribute("class", "rotated-image-stop");
    }
}

        // Button
var hidden = false;
function action() {
    hidden = !hidden;
    if (hidden) {
        document.getElementById('toggler').style.visibility = 'hidden';
        document.getElementById('head').style.visibility = 'hidden';
        document.getElementById('togglee').style.visibility = 'hidden';
        document.getElementById('mylove').style.visibility = 'visible';
      }
 }

var visibility = false;
function actionBack() {
    visibility = !visibility;
    if (visibility) {
        document.getElementById('toggler').style.visibility = 'visible';
        document.getElementById('head').style.visibility = 'visible';
        document.getElementById('togglee').style.visibility = 'visible';
        document.getElementById('mylove').style.visibility = 'hidden';
        x.pause();
        x.currentTime = 0;
        y.pause();
        y.currentTime = 0;
    }
}