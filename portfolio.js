"use strict";
//navigation bar
const getNavLinks = document.querySelectorAll(".nav__link");
getNavLinks.forEach((nav) =>
  nav.addEventListener("mouseenter", function (e) {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const otherLink = link
        .closest(".nav__links")
        .querySelectorAll(".nav__link");
      const logo = link.closest("header").querySelector(".logo");
      otherLink.forEach(function (li) {
        if (li !== link) {
          li.style.opacity = 0.5;
          logo.style.opacity = 0.5;
        }
      });
    }
  })
);
getNavLinks.forEach((nav) =>
  nav.addEventListener("mouseout", function (e) {
    if (e.target.classList.contains("nav__link")) {
      const link = e.target;
      const otherLink = link
        .closest(".nav__links")
        .querySelectorAll(".nav__link");
      const logo = link.closest("header").querySelector(".logo");
      otherLink.forEach(function (li) {
        if (li !== link) {
          li.style.opacity = 1;
          logo.style.opacity = 1;
        }
      });
    }
  })
);
//hide logo when scrolling
const sectionAbout = document.getElementById("abt");
const sectionSkill = document.getElementById("sk");
const logo = document.querySelector(".logo");
const hideLogo = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    logo.classList.add("logo--hidden");
  } else {
    logo.classList.remove("logo--hidden");
  }
};
const obsOptions = {
  root: null,
  threshold: 0.7,
};
const headerObserver = new IntersectionObserver(hideLogo, obsOptions);
headerObserver.observe(sectionAbout);
//Skill display
const getBtn = document.querySelectorAll(".btn");
let resetBtn;
getBtn.forEach(function (btn) {
  btn.addEventListener("click", function (click) {
    clearInterval(autoChangeText);
    document
      .querySelectorAll(".progress--bar")
      .forEach((bar) => (bar.style.display = "none"));
    clearTimeout(resetBtn);
    const clickedBtn = click.target.closest("button");
    if (!clickedBtn) return;
    const removeBtn = function () {
      getBtn.forEach((rmvBtn) => rmvBtn.classList.remove("skill__btn--active"));
    };
    removeBtn();
    clickedBtn.classList.add("skill__btn--active");
    resetBtn = setTimeout(removeBtn, 10000);
    const getDescription = document.querySelector(
      `.description__${clickedBtn.dataset.type}`
    );
    document
      .querySelectorAll(".description")
      .forEach((desc) => desc.classList.remove("description--active"));
    getDescription.classList.add("description--active");
  });
});
//auto change text
let idx = 1;
const updateDesc = function () {
  document
    .querySelectorAll(".description")
    .forEach((desc) => desc.classList.remove("description--active"));
  document
    .querySelector(`.description${idx}`)
    .classList.add("description--active");
  idx++;
  if (idx > 2) {
    idx = 0;
  }
};
const autoChangeText = setInterval(updateDesc, 10000);
//project modal popup
const modal1 = document.querySelector(".project1__modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal1 = document.querySelector(".modal1__close");
const btnOpenModal1 = document.querySelector(".project1__popup");

const openModal1 = function () {
  modal1.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal1 = function () {
  modal1.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal1.addEventListener("click", openModal1);
btnCloseModal1.addEventListener("click", closeModal1);
overlay.addEventListener("click", closeModal1);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal1.classList.contains("hidden")) {
    closeModal1();
  }
});

const modal2 = document.querySelector(".project2__modal");
const btnCloseModal2 = document.querySelector(".modal2__close");
const btnOpenModal2 = document.querySelector(".project2__popup");

const openModal2 = function () {
  modal2.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal2 = function () {
  modal2.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnOpenModal2.addEventListener("click", openModal2);
btnCloseModal2.addEventListener("click", closeModal2);
overlay.addEventListener("click", closeModal2);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal2.classList.contains("hidden")) {
    closeModal2();
  }
});
//dropdown menu
const getBars = document.getElementById("menu");
const getNav = document.querySelector(".nav__links");
getBars.addEventListener("click", function () {
  getNav.classList.toggle("active");
});
getNavLinks.forEach(function (link) {
  link.addEventListener("click", () => getNav.classList.remove("active"));
});
//title Read more
const dots = document.querySelector(".title__contain--dots");
const moreText = document.querySelector(".title__contain--more");
const btnText = document.querySelector(".title__contain--btn");
const readmore = function () {
  if (moreText.style.display === "none") {
    moreText.style.display = "block";
    btnText.textContent = "Read less";
  } else if (moreText.style.display === "block") {
    moreText.style.display = "none";
    btnText.textContent = "Read more";
  }
};
btnText.addEventListener("click", readmore);
//error submit popup
const getError = document.querySelector(".contact__error");
const getSubmitBtn = document.querySelector(".btn__form");
const btnCloseError = document.querySelector(".error__close");
const closeError = function () {
  getError.classList.add("hidden");
  overlay.classList.add("hidden");
};
getSubmitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  getError.classList.remove("hidden");
  overlay.classList.remove("hidden");
});
btnCloseError.addEventListener("click", closeError);
overlay.addEventListener("click", closeError);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !getError.classList.contains("hidden")) {
    closeError();
  }
});
//music player
const songs = ["DrunkGroove", "ThoiKhongSaiLech", "YoruNiKakeru"];
let songIndex = 0;
const songInfo = document.querySelector(".music__info");
const play = document.querySelector(".logo__player");
const previous = document.querySelector(".player--previous");
const next = document.querySelector(".player--next");
const audio = document.getElementById("music");
const songTitle = document.querySelector(".music__info");
const amountOfSong = songs.length;

const loadSong = function (song) {
  songInfo.textContent = song;
  audio.src = `./music/${song}.mp3`;
};
const autoNextSong = function () {
  audio.addEventListener("ended", nextSong);
};
const playSong = function () {
  play.classList.remove("player--deactive");
  previous.classList.remove("hidden");
  next.classList.remove("hidden");
  songTitle.classList.remove("logo--hidden");
  audio.play();
};
const pauseSong = function () {
  play.classList.add("player--deactive");
  previous.classList.add("hidden");
  next.classList.add("hidden");
  songTitle.classList.add("logo--hidden");
  audio.pause();
};
const nextSong = function () {
  songIndex++;
  if (songIndex > amountOfSong - 1) {
    songIndex = 0;
  }
  loadSong(songs[songIndex]);
  fetchAndPlaySong();
};

const previousSong = function () {
  songIndex--;
  if (songIndex < 0) {
    songIndex = amountOfSong - 1;
  }
  loadSong(songs[songIndex]);
  fetchAndPlaySong();
};
const fetchAndPlaySong = function () {
  fetch(audio.src)
    .then((response) => response.blob())
    .then((blob) => {
      audio.srcObject = blob;
      return audio.play();
    })
    .then((_) => {
      playSong();
    })
    .catch((e) => {
      playSong();
    });
};
next.addEventListener("click", nextSong);
previous.addEventListener("click", previousSong);
logo.addEventListener("click", function () {
  loadSong(songs[songIndex]);
  const isPlaying = play.classList.contains("player--deactive");
  if (isPlaying) {
    playSong();
  } else pauseSong();
});
autoNextSong();
