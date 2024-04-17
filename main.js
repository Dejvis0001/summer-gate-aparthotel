//Moving Animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
const observer2 = new IntersectionObserver((entries2) => {
  entries2.forEach((entry2) => {
    if (entry2.isIntersecting) {
      entry2.target.classList.add("show2");
    }
  });
});
const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el2) => observer2.observe(el2));
const observer3 = new IntersectionObserver((entries3) => {
  entries3.forEach((entry3) => {
    if (entry3.isIntersecting) {
      entry3.target.classList.add("show3");
    }
  });
});
const hiddenElements3 = document.querySelectorAll(".hidden3");
hiddenElements3.forEach((el3) => observer3.observe(el3));
const observer4 = new IntersectionObserver((entries4) => {
  entries4.forEach((entry4) => {
    if (entry4.isIntersecting) {
      entry4.target.classList.add("show4");
    }
  });
});
const hiddenElements4 = document.querySelectorAll(".hidden4");
hiddenElements4.forEach((el4) => observer4.observe(el4));
const observer5 = new IntersectionObserver((entries5) => {
  entries5.forEach((entry5) => {
    if (entry5.isIntersecting) {
      entry5.target.classList.add("show5");
    }
  });
});
const hiddenElements5 = document.querySelectorAll(".hidden5");
hiddenElements5.forEach((el5) => observer5.observe(el5));
//Index-Home
document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 6000, // Set autoplay delay to 6 seconds
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // Get the next and prev buttons
  var nextButton = document.querySelector(".swiper-button-next");
  var prevButton = document.querySelector(".swiper-button-prev");

  // Attach click event handlers
  nextButton.addEventListener("click", function () {
    swiper.slideNext();
  });

  prevButton.addEventListener("click", function () {
    swiper.slidePrev();
  });
});
//Index-Rooms
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel for room and gallery carousels
  initializeCarousel(".room-carousel");

  // Function to initialize Owl Carousel
  function initializeCarousel(selector) {
    var owl = $(selector);

    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 2,
        },
        1000: {
          items: 3,
        },
      },
    });

    // Get the next and prev buttons
    var nextButton = owl.parent().find(".owl-next");
    var prevButton = owl.parent().find(".owl-prev");

    // Attach click event handlers
    nextButton.on("click", function () {
      owl.trigger("next.owl.carousel");
    });

    prevButton.on("click", function () {
      owl.trigger("prev.owl.carousel");
    });

    // Handle carousel loop
    owl.on("translated.owl.carousel", function (event) {
      var items = event.item.count; // Total number of items in the carousel
      var currentItem = event.item.index; // Index of the current item
      if (currentItem === items - 1) {
        // If the last item is reached, go back to the first item
        setTimeout(function () {
          owl.trigger("to.owl.carousel", [0, 500]);
        }, 6000); // Delay to match autoplayTimeout
      }
    });
  }
});
//Index-Gallery
document.addEventListener("DOMContentLoaded", function () {
  // Initialize Owl Carousel for gallery carousel
  var owl = $(".gallery-carousel");

  owl.owlCarousel({
    loop: true,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: false,
    nav: false, // Remove nav option
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  // Manually handle next and previous buttons
  $(".gallery-next-button").click(function () {
    owl.trigger("next.owl.carousel");
  });
  $(".gallery-prev-button").click(function () {
    owl.trigger("prev.owl.carousel");
  });

  // Handle carousel reset when reaching the last item
  owl.on("changed.owl.carousel", function (event) {
    var currentIndex = event.item.index;
    var itemsCount = event.item.count;

    if (currentIndex === itemsCount - 1) {
      // Reset the carousel to the first item
      owl.trigger("to.owl.carousel", [0, 500]);
    }
  });
});
//Index-Testimonials
document.addEventListener("DOMContentLoaded", function () {
  initializeCarousel(".testimonial-carousel");

  // Function to initialize Owl Carousel
  function initializeCarousel(selector) {
    var owl = $(selector);

    owl.owlCarousel({
      loop: true,
      margin: 30,
      autoplay: true,
      autoplayTimeout: 6000,
      autoplayHoverPause: false,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
      items: 1, // Set to show only 1 item at a time
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        1000: {
          items: 1,
        },
      },
    });

    // Get the next and prev buttons
    var nextButton = owl.parent().find(".owl-next");
    var prevButton = owl.parent().find(".owl-prev");

    // Attach click event handlers
    nextButton.on("click", function () {
      owl.trigger("next.owl.carousel");
    });

    prevButton.on("click", function () {
      owl.trigger("prev.owl.carousel");
    });

    // Handle carousel loop
    owl.on("translated.owl.carousel", function (event) {
      var items = event.item.count; // Total number of items in the carousel
      var currentItem = event.item.index; // Index of the current item
      if (currentItem === items - 1) {
        // If the last item is reached, go back to the first item
        setTimeout(function () {
          owl.trigger("to.owl.carousel", [0, 500]);
        }, 6000); // Delay to match autoplayTimeout
      }
    });
  }
});

