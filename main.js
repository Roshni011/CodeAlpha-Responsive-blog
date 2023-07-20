// nav background
let header = document.querySelector("header");

window.addEventListener("scroll", () => {
    header.classList.toggle("shadow", window.scrollY > 0)
})

//Filter
$(document).ready(function () {
    $(".filter-item").click(function () {
        const value = $(this).attr("data-filter");
        if (value == "all"){
            $(".post-box").show("1000")
        } else{
            $(".post-box")
                .not("." + value)
                .hide(1000);
            $(".post-box")
            .filter("." + value)
            .show("1000")
        }
    });
    $(".filter-item").click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter")
    });
});
//click event
let myWindow;

function openWin1() {
  myWindow = window.open("https://wordpress.com/create-blog/", "_blank", "width=500, height=500");
}
function openWin2() {
    myWindow = window.open("https://www.freecodecamp.org/news/learn-frontend-web-development/", "_blank", "width=500, height=500");
  }
  function openWin3() {
    myWindow = window.open("https://www.sanjeevkapoor.com/Festival/10-monsoon-perfect-recipes", "_blank", "width=500, height=500");
  }
  function openWin4() {
    myWindow = window.open("https://timesofindia.indiatimes.com/news", "_blank", "width=500, height=500");
  }
  function openWin5() {
    myWindow = window.open("https://www.cnet.com/tech/computing/best-laptop/", "_blank", "width=500, height=500");
  }
  function openWin6() {
    myWindow = window.open("https://www.hindustantimes.com/", "_blank", "width=500, height=500");
  }
  function openWin7() {
    myWindow = window.open("https://www.weforum.org/agenda/2020/11/heres-how-technology-has-changed-and-changed-us-over-the-past-20-years/", "_blank", "width=500, height=500");
  }
  function openWin8() {
    myWindow = window.open("https://www.aajtak.in/", "_blank", "width=500, height=500");
  }
  function openWin9() {
    myWindow = window.open("https://www.holidify.com/pages/south-indian-food-3726.html", "_blank", "width=500, height=500");
  }
//   REad more function
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    }else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less"; 
        moreText.style.display = "inline";
      } }
  
    //   signup page
    var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}