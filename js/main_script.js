// // hamburger menu
// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector(".nav-menu");

// $(".hamburger").click(function () {
//   hamburger.classList.toggle("active");
//   navMenu.classList.toggle("active");
// });

// toast - notification
let btn1 = document.getElementById("anct1");
let btn2 = document.getElementById("anct2");

btn1.addEventListener("click", (event) => {
  myFunction();
});
btn2.addEventListener("click", (event) => {
  myFunction();
});

function myFunction() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "hide");
  }, 3000);
}


// splash screen
$(document).ready(function () {
  setTimeout(() => {
    $(".splash").addClass("display-none");
  }, 2000);
});

// quote changer
var quote_array = [
  "The things we fear most in organizations – fluctuations, disturbances, imbalances – are the primary sources of creativity",
  "The difference between successful people and very successful people is that very successful people say no to almost everything",
  "You don’t have to be a genius or a visionary or even a college graduate to be successful. You just need a framework and a dream",
  "New frameworks are like climbing a mountain – the larger view encompasses rather than rejects the more restricted view",
  "The advance of technology is based on making it fit in so that you don’t really even notice it, so it’s part of everyday life",
];

$(document).ready(function () {
  $("#next").click(function () {
    let data = quote_array[parseInt(Math.random() * 5)];

    $("blockquote").replaceWith("<blockquote>" + data + "</blockquote>");
  });
});

// toggle

$(document).ready(function () {
  $("#switch").click(function () {
    var color = window
      .getComputedStyle(document.body)
      .getPropertyValue("background-color");
    if (color == "rgb(255, 255, 255)") {
      $("body").css("background-color", "#EAE3D2");
    } else {
      $("body").css("background-color", "white");
    }
  });
});

// filter services
$(document).ready(function (e) {
  $("#all,#management,#financial,#it").click(function () {
    $(".column").css("animation","none");
  });

  $("#all").click(function () {
    $(".column#it-sel, .column#management-sel, #financial-sel ").show();
    $("#footer").css("margin-top", "110rem");
  });
  $("#it").click(function () {
    $(".column#financial-sel, .column#management-sel").hide();
    $(".column#it-sel").show();
    $("#footer").css("margin-top", "-3rem");
  });
  $("#financial").click(function () {
    $(".column#it-sel, .column#management-sel").hide();
    $(".column#financial-sel").show();
    $("#footer").css("margin-top", "-3rem");
  });
  $("#management").click(function () {
    $(".column#it-sel, .column#financial-sel").hide();
    $(".column#management-sel").show();
    $("#footer").css("margin-top", "0rem");
      });
});


// Scroll to top
$(document).ready(function(){
  $("#topp").click(function(){
    window.scrollTo({top: 0, behavior: 'smooth'});
  })
})
