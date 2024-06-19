document.addEventListener('DOMContentLoaded', function() {
    var gridImages = document.querySelectorAll('.grid-image');

    gridImages.forEach(function(img) {
        img.addEventListener('click', function() {
            this.classList.toggle('grayscale');
        });
    });

    var button = document.getElementById('left-button');
    var bottomImage = document.getElementById('bottom-image');
    var soundEffect = document.getElementById('sound-effect'); 

    function changeImageOnce() {
        var randomIndex = Math.floor(Math.random() * gridImages.length);
        var randomImageSrc = gridImages[randomIndex].src;
        bottomImage.src = randomImageSrc;

        button.removeEventListener('click', changeImageOnce);
    }

    button.addEventListener('click', changeImageOnce);

    if (button) {
        button.addEventListener('click', function() {
            soundEffect.play();
        });
    }
});