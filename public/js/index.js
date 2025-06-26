let navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    navbar.classList.remove("scrolled");
  } else {
    navbar.classList.add("scrolled");
  }
});

let menu = document.querySelector(".menu");

window.addEventListener("scroll", function () {
  if (window.scrollY === 0) {
    menu.classList.remove("scrolling");
  } else {
    menu.classList.add("scrolling");
  }
});

document.getElementById("btn-akbant").addEventListener("click", function () {
  showInfo("akbant");
});

document.getElementById("btn-freze").addEventListener("click", function () {
  showInfo("freze");
});

document.getElementById("btn-3d").addEventListener("click", function () {
  showInfo("3d");
});

document.getElementById("btn-sujeti").addEventListener("click", function () {
  showInfo("sujeti");
});

document.getElementById("btn-yoga").addEventListener("click", function () {
  showInfo("yoga");
});

document.getElementById("btn-group").addEventListener("click", function () {
  showInfo("group");
});

document.getElementById("btn-solo").addEventListener("click", function () {
  showInfo("solo");
});

document.getElementById("btn-streching").addEventListener("click", function () {
  showInfo("streching");
});


function showInfo(infoType) {
  document.querySelectorAll(".info").forEach(function (info) {
    info.style.display = "none";
  });

  document.getElementById("info-" + infoType).style.display = "flex";
}

document.addEventListener("DOMContentLoaded", function () {
  let yogaButton = document.getElementById("btn-yoga");
  if (yogaButton) {
    yogaButton.focus();
    window.scrollTo(0, 0);
  }
});



document.addEventListener("DOMContentLoaded", function () {
  let form = document.querySelector(".form");
  let sendButton = form.querySelector('button[type="submit"]');
  let inputName = form.querySelector("#yourName");
  let inputEmail = form.querySelector("#yourEmail");
  let textareaMessage = form.querySelector("#message");

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    inputName.value = "";
    inputEmail.value = "";
    textareaMessage.value = "";
  });

  document.getElementById("menu-icon").addEventListener("click", function () {
    document.querySelectorAll(".menu").forEach(function (menu) {
      if (menu.style.display === "block") {
        menu.style.display = "none";
      } else {
        menu.style.display = "block";
      }
    });
  });
});
