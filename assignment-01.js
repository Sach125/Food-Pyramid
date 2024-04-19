const add = document.querySelector(".sadd"),
  subtract = document.querySelector(".ssub"),
  num = document.querySelector(".snum");

let tempCount = 0;
add.addEventListener("click", () => {
  tempCount++;
  tempCount = tempCount < 10 ? +tempCount : tempCount;
  num.innerText = tempCount;
});
subtract.addEventListener("click", () => {
  if (tempCount > 0) {
    tempCount--;
    tempCount = tempCount < 10 ? +tempCount : tempCount;
    num.innerText = tempCount;
  }
});


const add2 = document.querySelector(".vadd"),
  subtract2 = document.querySelector(".vsub"),
  num2 = document.querySelector(".vnum");

let tempCount2 = 0;
add2.addEventListener("click", () => {
  tempCount2++;
  tempCount2 = tempCount2 < 10 ? +tempCount2 : tempCount2;
  num2.innerText = tempCount2;
});
subtract2.addEventListener("click", () => {
  if (tempCount2 > 0) {
    tempCount2--;
    tempCount2 = tempCount2 < 10 ? +tempCount2 : tempCount2;
    num2.innerText = tempCount2;
  }
});


const add3 = document.querySelector(".cadd"),
  subtract3 = document.querySelector(".csub"),
  num3 = document.querySelector(".cnum");

let tempCount3 = 0;
add3.addEventListener("click", () => {
  tempCount3++;
  tempCount3 = tempCount3 < 10 ? +tempCount3 : tempCount3;
  num3.innerText = tempCount3;
});
subtract3.addEventListener("click", () => {
  if (tempCount3 > 0) {
    tempCount3--;
    tempCount3 = tempCount3 < 10 ? +tempCount3 : tempCount3;
    num3.innerText = tempCount3;
  }
});


const add4 = document.querySelector(".oiladd"),
  subtract4 = document.querySelector(".oilsub"),
  num4 = document.querySelector(".oilnum");

let tempCount4 = 0;
add4.addEventListener("click", () => {
  tempCount4++;
  tempCount4 = tempCount4 < 10 ? +tempCount4 : tempCount4;
  num4.innerText = tempCount4;
});
subtract4.addEventListener("click", () => {
  if (tempCount4 > 0) {
    tempCount4--;
    tempCount4 = tempCount4< 10 ? +tempCount4 : tempCount4;
    num4.innerText = tempCount4;
  }
});


const add5 = document.querySelector(".dairyadd"),
  subtract5 = document.querySelector(".dairysub"),
  num5 = document.querySelector(".dairynum");

let tempCount5 = 0;
add5.addEventListener("click", () => {
  tempCount5++;
  tempCount5 = tempCount5 < 10 ? +tempCount5 : tempCount5;
  num5.innerText = tempCount5;
});
subtract5.addEventListener("click", () => {
  if (tempCount5 > 0) {
    tempCount5--;
    tempCount5 = tempCount5 < 10 ? +tempCount5 : tempCount5;
    num5.innerText = tempCount5;
  }
});


const add6 = document.querySelector(".meatadd"),
  subtract6 = document.querySelector(".meatsub"),
  num6 = document.querySelector(".meatnum");

let tempCount6 = 0;
add6.addEventListener("click", () => {
  tempCount6++;
  tempCount6 = tempCount6 < 10 ? +tempCount6 : tempCount6;
  num6.innerText = tempCount6;
});
subtract6.addEventListener("click", () => {
  if (tempCount6 > 0) {
    tempCount6--;
    tempCount6 = tempCount6 < 10 ? +tempCount6 : tempCount6;
    num6.innerText = tempCount6;
  }
});

