// parallax
document.addEventListener("mousemove", parallax);

function parallax(e) {
  this.querySelectorAll("img").forEach((ele) => {
    const speed = ele.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 70;
    const y = (window.innerHeight - e.pageY * speed) / 70;

    ele.style.transform = `translateX(${x}px)  translateY(${y}px)`;
  });
}

// cursor
let cursor = document.getElementById("cursor");
let cursor2 = document.getElementById("cursor2");

document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText = `left:${e.x}px ; top:${e.y}px`;
});
