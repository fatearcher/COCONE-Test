var index = 0,
  s,
  s2;
var spans = document.querySelectorAll(".button span");
var silde = document.querySelector(".slide-auto");
var next = document.querySelector(".next");
var pre = document.querySelector(".pre");

next.addEventListener("click", (e) => {
  cle();
  clearTimeout(s2);
  if (index > 3) {
    index = -1;
  }
  index++;
  spans.forEach((item, i) => {
    item.className = "";
    if (i == index) {
      item.className = "active";
    }
  });
  silde.style = `right: ${320 * index}px;`;
  s2 = setTimeout(() => {
    set();
  }, 3000);
});

pre.addEventListener("click", (e) => {
  cle();
  clearTimeout(s2);
  if (index == 0) {
    index = 4;
  } else {
    index--;
  }
  spans.forEach((item, i) => {
    item.className = "";
    if (i == index) {
      item.className = "active";
    }
  });
  silde.style = `right: ${320 * index}px;`;
  s2 = setTimeout(() => {
    set();
  }, 3000);
});

pre.addEventListener("mouseleave", (e, i) => {
  console.log(33);
  clearTimeout(s2);
  s2 = setTimeout(() => {
    set();
  }, 3000);
});

next.addEventListener("mouseleave", (e, i) => {
  console.log(33);
  clearTimeout(s2);
  s2 = setTimeout(() => {
    set();
  }, 3000);
});

next.addEventListener("mouseover", () => {
  cle();
  clearTimeout(s2);
  console.log("悬浮");
});

pre.addEventListener("mouseover", () => {
  cle();
  clearTimeout(s2);
  console.log("悬浮");
});

silde.addEventListener("mouseover", () => {
  cle();
  clearTimeout(s2);
  console.log("悬浮");
});

silde.addEventListener("mouseleave", () => {
  s2 = setTimeout(() => {
    cle();
    set();
  }, 2000);
  console.log("离开");
});

spans.forEach((item, i) => {
  item.addEventListener("click", (e) => {
    cle();
    spans.forEach((span) => {
      span.className = "";
    });
    item.className = "active";
    index = i;
    silde.style = `right: ${320 * index}px;`;
    clearTimeout(s2);
    s2 = setTimeout(() => {
      set();
    }, 3000);
    console.log(e);
  });
  item.addEventListener("mouseover", (e, i) => {
    console.log(3);
    cle();
    clearTimeout(s2);
  });
  item.addEventListener("mouseleave", (e, i) => {
    console.log(33);
    clearTimeout(s2);
  });
});

function set() {
  s = setInterval(() => {
    if (index > 3) {
      index = -1;
    }
    index++;
    spans.forEach((item, i) => {
      item.className = "";
      if (i == index) {
        item.className = "active";
      }
    });
    silde.style = `right: ${320 * index}px;`;
  }, 3000);
}

function cle() {
  clearInterval(s);
}
set();
