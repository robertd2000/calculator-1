let isPlus = false;
let isMinus = false;
let isMult = false;
let isDelit = false;
let first = 0;
let second = 0;
let summ = 0;
function calc(e) {
  if (
    isPlus == false &&
    isMinus == false &&
    isMult == false &&
    isDelit == false
  ) {
    first += e.target.value;
    start.value += e.target.value;
  } else {
    second += e.target.value;
    end.value += e.target.value;
  }

  console.log(first + ", " + second);
}
plus.onclick = function (e) {
  isPlus = true;
  op.value = e.target.value;
};

minus.onclick = function (e) {
  isMinus = true;
  op.value = e.target.value;
};

mult.onclick = function (e) {
  isMult = true;
  op.value = e.target.value;
};

delit.onclick = function (e) {
  isDelit = true;
  op.value = e.target.value;
};

res.onclick = function name(params) {
  if (isPlus == true) {
    summ = +first + +second;
  } else if (isMinus == true) {
    summ = +first - +second;
  } else if (isMult == true) {
    summ = +first * +second;
  } else if (isDelit == true) {
    summ = +first / +second;
  }

  
  isPlus = false;
  isMinus = false;
  isMult = false;
  isDelit = false;
  first = summ;
  second = 0;
  start.value = summ;
  op.value = "";
  end.value = "";
  sum.innerHTML = "Result: " + summ;
};

rem.onclick = function () {
  isPlus = false;
  isMinus = false;
  isMult = false;
  isDelit = false;
  first = 0;
  second = 0;
  summ = 0;
  start.value = "";
  op.value = "";
  end.value = "";
  sum.innerHTML = "Result: " + summ;
};
//     document.getElementById('plus').onclick = function() {
//      alert("button was clicked")
//   }​
//   let first = 0;
//   one.onclick = function (e) {
//     //   alert(e.target.value)
//     first += +e.target.value;
//     start.value += e.target.value;
//   };
//   let sum = 0;
//   let second = 0;
//   two.onclick = function (e) {
//     //   alert(e.target.value)
//     second += +e.target.value;
//     start.value += e.target.value;
//   };

//   res.onclick = function () {
//     sum = +first + +second;
//     start.value = sum;
//   };
