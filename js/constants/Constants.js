const initialCards = {
  product: [
    {
      name: "Парикмахерское кресло «Норм» гидравлическое",
      img: "http://dev-wbooster.ru/test_task/img/img-1.png",
      price: "9900",
    },
    {
      name: "Парикмахерское кресло «Норм» гидравлическое",
      img: "http://dev-wbooster.ru/test_task/img/img-1.png",
      price: "9900",
    },
    {
      name: "Парикмахерское кресло «Норм» гидравлическое",
      img: "http://dev-wbooster.ru/test_task/img/img-1.png",
      price: "9900",
    },
    {
      name: "Парикмахерское кресло «Норм» гидравлическое",
      img: "http://dev-wbooster.ru/test_task/img/img-1.png",
      price: "9900",
    },
    {
      name: "Парикмахерское кресло «Норм» гидравлическое",
      img: "http://dev-wbooster.ru/test_task/img/img-1.png",
      price: "9900",
    },
    {
      name: "Парикмахерское кресло «Норм» гидравлическое",
      img: "http://dev-wbooster.ru/test_task/img/img-1.png",
      price: "9900",
    },
  ],
};

const inputErrorMessages = {
  telError: "Телефон введен не верно +7(777)777-7777",
  textError: "Поле введено не верно",
  emptyInputError: "Это обязательное поле",
  emailError: "Почта введена не корректно",
  inputErrorShortLong: "Поле для ввода от 2 до 30 символов",
};

const body = document.querySelector(".body");
const newsCardSection = body.querySelector(".card-section");
const listSection = body.querySelector(".card-record");
const cardListTemplate = body.querySelector(".template-list");
const cardListItemTemplate = body.querySelector(".template-list-item");
const requestPopupForm = body.querySelector("#request_popup");

const popupButtonClose = body.querySelector("#close_popup");
const formRequest = document.forms.goods;

const inputsnoArr = formRequest.querySelectorAll(".popup__input");
const arrInputs = Array.from(inputsnoArr);
const requestButton = formRequest.querySelector("#popup_button");

const inputs = body.querySelectorAll(".popup__input-error-message");
const inputsArr = Array.from(inputs);
