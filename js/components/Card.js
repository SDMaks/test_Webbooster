class Card {
  constructor(name, img, price, popUpFunction, validator) {
    this.name = name;
    this.img = img;
    this.price = price;
    this.popUpFunction = popUpFunction;
    this.validator = validator;
    this.imageValueError = "../../images/no-photo.png";
    this.currency = "&#8381;";
  }

  create = () => {
    const placeCard = document.createElement("div"); //контейнер с карточкой
    placeCard.classList.add("card"); //

    const image = document.createElement("img"); //
    image.classList.add("card__image");

    image.setAttribute("alt", "картинка к карточке товара");
    image.setAttribute(
      "onerror",
      `this.onerror=null;this.src='${this.imageValueError}';`
    );
    image.setAttribute("src", `${this.img}`);

    const cardDescription = document.createElement("p"); //
    cardDescription.classList.add("card__description");
    cardDescription.textContent = this.name;

    const cardPrice = document.createElement("p"); //
    cardPrice.classList.add("card__price");
    cardPrice.textContent = this.price;

    const cardPriceCurrency = document.createElement("span"); //
    cardPriceCurrency.classList.add("card__price-currency");
    cardPriceCurrency.innerHTML = " " + this.currency;

    const cardButtonIcon = document.createElement("button");
    cardButtonIcon.classList.add("button");
    cardButtonIcon.classList.add("card__button");
    cardButtonIcon.textContent = "Купить";

    cardPrice.appendChild(cardPriceCurrency);
    placeCard.appendChild(image);
    placeCard.appendChild(cardDescription);
    placeCard.appendChild(cardPrice);
    placeCard.appendChild(cardButtonIcon);

    this._view = placeCard;
    this.setEventListeners();
    return this._view;

    /* *********************** */
  };

  setEventListeners() {
    const button = this._view.querySelector(".button");
    this._view
      .querySelector(".card__button")
      .addEventListener("click", this.popUpFunction.setEventListeners(button));
    this._view
      .querySelector(".card__button")
      .addEventListener("click", this.validator.setEventListeners(button));
  }
}
