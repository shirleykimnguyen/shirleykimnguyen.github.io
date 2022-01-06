const buttonLeft = document.getElementById("slide_left");
const buttonRight = document.getElementById("slide_right");

buttonLeft.onclick = function () {
    document.getElementById("photo_list").scrollLeft -= getImageSize();
};
buttonRight.onclick = function () {
    document.getElementById("photo_list").scrollLeft += getImageSize();
};
let galleryMovement;

if (screen.width > 600 && screen.height > 600) {
    galleryMovement = 450;
} else {
    galleryMovement = 200;
}

const getImageSize = () => {
    const sampleImage = document.getElementsByClassName("headshot_img")[0];
    const imageSize = sampleImage.scrollWidth;
    return imageSize;
};
