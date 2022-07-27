"use strict";
window.addEventListener("resize", function () {
  adaptive_function();
});

function adaptive_header(w, h) {
  const headerMenu = document.querySelector(".header-menu");
  const headerTop = document.querySelector(".header-top");
  const headerTopLang = document.querySelector(".header-top-lang");
  const headerBottom = document.querySelector(".header-bottom");
  const headerBottomMenus = document.querySelectorAll(".header-bottom-menu");
  const headerBottomColumns = document.querySelectorAll(
    ".header-bottom__column"
  );
  const headerBottomMenuRight = document.querySelector(
    ".header-bottom-menu--right"
  );

  if (w < 767) {
    if (!headerTopLang.classList.contains("done")) {
      headerTopLang.classList.add("done");
      headerMenu.append(headerTopLang);
    }
  } else {
    if (headerTopLang.classList.contains("done")) {
      headerTopLang.classList.remove("done");
      headerTop.prepend(headerTopLang);
    }
  }

  if (w <= 767) {
    headerBottomMenus.forEach((headerBottomMenu) => {
      if (!headerBottomMenu.classList.contains("done")) {
        headerBottomMenu.classList.add("done");
        headerMenu.append(headerBottomMenu);
      }
    });
  } else {
    headerBottomMenus.forEach((headerBottomMenu) => {
      if (headerBottomMenuRight.classList.contains("done")) {
        headerBottomMenuRight.classList.remove("done");
        headerBottomColumns[2].prepend(headerBottomMenuRight);
      }
      if (headerBottomMenu.classList.contains("done")) {
        headerBottomMenu.classList.remove("done");
        headerBottomColumns[0].prepend(headerBottomMenu);
      }
    });
  }
}

function adaptive_function() {
  let w = window.innerWidth;
  let h = window.innerHeight;
  adaptive_header(w, h);
}

adaptive_function();

const headerMenuIcon = document.querySelector(".header-menu__icon");
const headerMenu = document.querySelector(".header-menu");

headerMenuIcon.addEventListener("click", function () {
  headerMenu.classList.toggle("active");
  headerMenuIcon.classList.toggle("active");
});

function ibg() {
  var ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();
