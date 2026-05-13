function addStars(){
    // find element to put stars on
    const background = document.querySelector(".stars");

    // check screen size to fingd number of stars to put in
    var screenSize = getScreenSize(background);

    // make stars prob check screen size for number of stars
    for (let i = 0; i<screenSize*0.00005; i++){
        // create star
        const star = document.createElement("div");
        star.className = "star";

        let starType = Math.floor(Math.random()*3) + 1;
        star.style.backgroundImage = "url(\'../assets/stars/star"+starType+".png\')"

        // add an offset vertically
        star.style.top = Math.random() * 85 + "%";

        // add offset horizontally
        star.style.left = Math.random() * 100 + "%";

        var size = Math.random() * 40 + 30 + "px";
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

const products = [
    {
    
    title: "Hatsune Miku Powder",
    img: "assets/products/powderM.png",
    desc: "Supports your everyday bulking needs!",
    price: "£12"
    
    },
    {
    
    title: "Kasane Teto Powder",
    img: "assets/products/powderT.png",
    desc: "Supports your everyday bulking needs!",
    price: "£12"
    
    },
    {
    
    title: "Akita Neru Powder",
    img: "assets/products/powderN.png",
    desc: "Supports your everyday bulking needs!",
    price: "£12"
    
    },
    {
    
    title: "Hatsune Miku Shaker Bottle",
    img: "assets/products/cupM.png",
    desc: "Supports your everyday bulking needs!",
    price: "£8"
    
    },
    {
    
    title: "Kasane Teto Shaker Bottle",
    img: "assets/products/cupT.png",
    desc: "Supports your everyday bulking needs!",
    price: "£8"
    
    },
    {
    
    title: "Akita Neru Shaker Bottle",
    img: "assets/products/cupN.png",
    desc: "Supports your everyday bulking needs!",
    price: "£8"
    
    },
    {
    
    title: "Hatsune Miku T-Shirt",
    img: "assets/products/teeM.png",
    desc: "Fully plastic - single use. !DO NOT GET WET!",
    price: "£16"
    
    },
    {
    
    title: "Kasane Teto T-Shirt",
    img: "assets/products/teeT.png",
    desc: "Fully plastic - single use. !DO NOT GET WET!",
    price: "£16"
    
    },
    {
    
    title: "Akita Neru T-Shirt",
    img: "assets/products/teeN.png",
    desc: "Fully plastic - single use. !DO NOT GET WET!",
    price: "£16"
    
    },
    {
    
    title: "Hatsune Miku Keychain",
    img: "assets/products/keyM.png",
    desc: "So everyone knows how awesome sauce you truly are!",
    price: "£4"
    
    },
    {
    
    title: "Kasane Teto Keychain",
    img: "assets/products/keyT.png",
    desc: "So everyone knows how awesome sauce you truly are!",
    price: "£4"
    
    },
    {
    
    title: "Akita Neru Keychain",
    img: "assets/products/keyN.png",
    desc: "So everyone knows how awesome sauce you truly are!",
    price: "£4"
    
    },
    
];

const container = document.getElementById("product-container");

products.forEach(product =>{
    const card = `
    <div class="card border-0" style="width: 18rem;">
      <img src="${product.img}" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${product.desc}</p>
        <div class="d-flex justify-content-between">
            <p class="card-text font-weight-bold">${product.price}</p>
            <a href="#" class="btn btn-primary border-0">Add to Basket</a>
        </div>
      </div>
    </div>
    `;

    container.innerHTML += card;
});