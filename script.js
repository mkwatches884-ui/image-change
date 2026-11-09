
let images = [
    "https://picsum.photos/id/237/300/200",
    "https://picsum.photos/id/1025/300/200",
    "https://picsum.photos/id/1011/300/200",
    "https://picsum.photos/id/1003/300/200"
];

let currentImage = 0;

function changeImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("myImage").src =
        images[currentImage];
}
