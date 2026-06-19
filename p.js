const topBtn = document.getElementById("topBtn");

// Show button when user scrolls down
window.onscroll = function () {
    if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
    ) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

// Scroll to top when clicked
topBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});