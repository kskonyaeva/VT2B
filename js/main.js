// Валидация электронной почты

const EMAIL_REGEXP =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const input = document.querySelector(".email");

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}

function onInput() {
  if (isEmailValid(input.value)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
  }
}

input.addEventListener("input", onInput);

// Маска номера телефона
const phoneInput = document.querySelector(".phone");
const phoneMask = new IMask(phoneInput, {
  mask: "+{7}(000)000-00-00",
});

// // Отправляем номер телефона
// async function btnHandler(e) {
//   e.preventDefault();
//   return await fetch("send_msg.php", {
//     method: "POST",
//     body: phoneMask.unmaskedValue,
//   });
// }

// Дропдаун
function show(a) {
  document.querySelector(".text2").value = a;
}
let dropdown = document.querySelector(".dropdown");
dropdown.onclick = function () {
  dropdown.classList.toggle("active");
};

// Выбор тарифа

const radio1 = document.querySelector(".radio-1");
const radio2 = document.querySelector(".radio-2");
const radio3 = document.querySelector(".radio-3");

const wrapper1 = document.querySelector(".wrapper-1");
const wrapper2 = document.querySelector(".wrapper-2");
const wrapper3 = document.querySelector(".wrapper-3");

radio1.addEventListener("click", function () {
  wrapper2.classList.remove("active");
  wrapper3.classList.remove("active");
  wrapper1.classList.add("active");
});

radio2.addEventListener("click", function () {
  wrapper1.classList.remove("active");
  wrapper3.classList.remove("active");
  wrapper2.classList.add("active");
});

radio3.addEventListener("click", function () {
  wrapper1.classList.remove("active");
  wrapper2.classList.remove("active");
  wrapper3.classList.add("active");
});

const hallRadio1 = document.querySelector(".hall__radio1");
const hallRadio2 = document.querySelector(".hall__radio2");
const hallRadio3 = document.querySelector(".hall__radio3");
const hallRadio4 = document.querySelector(".hall__radio4");
const hallRadio5 = document.querySelector(".hall__radio5");
const hallRadio6 = document.querySelector(".hall__radio6");
const hallRadio7 = document.querySelector(".hall__radio7");
const hallRadio8 = document.querySelector(".hall__radio8");

const hallPay1 = document.querySelector(".hall__pay1");
const hallPay2 = document.querySelector(".hall__pay2");
const hallPay3 = document.querySelector(".hall__pay3");
const hallPay4 = document.querySelector(".hall__pay4");
const hallPay5 = document.querySelector(".hall__pay5");
const hallPay6 = document.querySelector(".hall__pay6");
const hallPay7 = document.querySelector(".hall__pay7");
const hallPay8 = document.querySelector(".hall__pay8");

hallRadio1.addEventListener("click", function () {
  hallPay1.classList.add("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.remove("active2");
});
hallRadio2.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.add("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.remove("active2");
});
hallRadio3.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.add("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.remove("active2");
});
hallRadio4.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.add("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.remove("active2");
});
hallRadio5.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.add("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.remove("active2");
});
hallRadio6.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.add("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.remove("active2");
});
hallRadio7.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.add("active2");
  hallPay8.classList.remove("active2");
});
hallRadio8.addEventListener("click", function () {
  hallPay1.classList.remove("active2");
  hallPay2.classList.remove("active2");
  hallPay3.classList.remove("active2");
  hallPay4.classList.remove("active2");
  hallPay5.classList.remove("active2");
  hallPay6.classList.remove("active2");
  hallPay7.classList.remove("active2");
  hallPay8.classList.add("active2");
});


// Рабочее место
const tariffWorkplace = document.querySelector(".dropdown__workplace");
const tariffWorkplaceOn = document.querySelector(".tariff__workplace");

tariffWorkplace.addEventListener("click", function () {
  tariffHallOn.classList.remove("hidden");
  tariffMeetingOn.classList.remove("hidden");
  tariffWorkplaceOn.classList.add("hidden");
});

// Конференц зал
const tariffHall = document.querySelector(".dropdown__hall");
const tariffHallOn = document.querySelector(".tariff__hall");

tariffHall.addEventListener("click", function () {
  tariffWorkplaceOn.classList.remove("hidden");
  tariffMeetingOn.classList.remove("hidden");
  tariffHallOn.classList.add("hidden");
});

//Переговорка

const tariffMeeting = document.querySelector(".dropdown__meeting");
const tariffMeetingOn = document.querySelector(".tariff__meeting");

tariffMeeting.addEventListener("click", function () {
  tariffWorkplaceOn.classList.remove("hidden");
  tariffHallOn.classList.remove("hidden");
  tariffMeetingOn.classList.add("hidden");
});
