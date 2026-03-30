function addStars(){
    // find element to put stars on
    const background = document.querySelector(".stars");

    // check screen size to fingd number of stars to put in
    var screenSize = getScreenSize(background);

    // make stars prob check screen size for number of stars
    for (let i = 0; i<screenSize*0.0001; i++){
        // create star
        const star = document.createElement("div");
        star.className = "star";

        // add an offset vertically
        star.style.top = Math.random() * 85 + "%";

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

function getScreenSize(background){
    var w = background.offsetWidth;
    var h = background.offsetHeight;

    return w * h;
}

function getComponents(){
    $(function() {
        $('#navbar').load('/assets/components/navbar.html');
        $('#footer').load('/assets/components/footer.html')
    });
}
