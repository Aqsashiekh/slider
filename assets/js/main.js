let items = document.querySelectorAll(".carousel .carousel-item");

items.forEach((el) => {
  const minPerSlide = 6;
  let next = el.nextElementSibling;
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0];
    }
    let cloneChild = next.cloneNode(true);
    el.appendChild(cloneChild.children[0]);
    next = next.nextElementSibling;
  }
});
document.querySelector(".navbar-toggler").onclick = function () {
  document.querySelector(".navbar-toggler-icon").classList.toggle("hidden");
  document.querySelector("#navbar-toggle-cross").classList.toggle("hidden");
  document.querySelector(".overlay").classList.toggle("overlay_active");
  document.querySelector("#mynavbar").classList.toggle("overlay_active1");
  //document.querySelector('body').classList.toggle('everything_block');
  document.querySelector(".logo-img").classList.toggle("hidden");
  document.querySelector(".nav-btn").classList.toggle("hidden");
};

AOS.init({
  disable: "tablet",
  disable: "mobile",
});

$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  navText: [
    '<i class="fa fa-chevron-left"></i>',
    '<i class="fa fa-chevron-right"></i>',
  ],
  responsive: {
    0: {
      items: 3,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

let allAchor = document.querySelectorAll(".card-header");
allAchor.forEach(function (singleItem) {
  singleItem.addEventListener("click", function () {
    allAchor.forEach(function (item) {
      item.classList.remove("product_active");
      // item.parentElement.classList.remove('parentBorder');

    });
    if (this.classList.contains("product_active")) {
      this.classList.remove("product_active");
      // this.parentElement.classList.remove('parentBorder');
    } else {
      this.classList.add("product_active");
      // this.parentElement.classList.add('parentBorder');
    }
  });
});
// window.addEventListener('resize', function(event) {
  if(window.innerWidth<=1024){
    console.log("clicked")
  let navLink=document.querySelectorAll('.nav-ul .nav-item');
  navLink.forEach(function(item){
  item.addEventListener("click", function(){
    document.querySelector(".navbar-toggler-icon").classList.toggle("hidden");
    document.querySelector("#navbar-toggle-cross").classList.toggle("hidden");
    document.querySelector(".overlay").classList.remove("overlay_active");
    document.querySelector("#mynavbar").classList.remove("overlay_active1");

   // document.querySelector('body').classList.toggle('everything_block');
    document.querySelector(".logo-img").classList.toggle("hidden");
    document.querySelector(".nav-btn").classList.toggle("hidden");
    document.querySelector(".navbar-collapse").classList.remove('show');
  })
  });
  }
// }, true);
