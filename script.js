function addStars(){
    // find element to put stars on
    const background = document.querySelector(".stars");

    // check screen size to fingd number of stars to put in
    var screenSize = getScreenSize();

    // make stars prob check screen size for number of stars
    for (let i = 0; i<screenSize/4000; i++){
        // create star
        const star = document.createElement("div");
        star.className = "star";

        // add an offset vertically
        star.style.top = Math.random() * 100 + "%";

        // add offset horizontally
        star.style.left = Math.random() * 100 + "%";

        var size = Math.random() * 100 + 30 + "px";
        // add random size
        star.style.height = size;
        star.style.width = size;

        // random rotation
        var rotation = Math.random() * 360 + "deg"
        star.style.transform = 'rotate(' + rotation + ")";

        // put star on page
        background.appendChild(star);
    }

   
}

function getScreenSize(){
    var w = window.innerWidth;
    var h = window.innerHeight;

    return w * h;
}