class CardList {
  constructor(createCardFunction, newsCardSection) {
    this._createCardFunction = createCardFunction;
    this.newsCardSection = newsCardSection;
  }

  cardList = () => {
    this._view = document.createElement("div");
    this._view.classList.add("card-section__grid");
    this.newsCardSection.appendChild(this._view);
  };

  add = (name, img, price, popUpFunction, validator) => {
    this.card = this._createCardFunction(
      name,
      img,
      price,
      popUpFunction,
      validator
    ).create();
    this._view.appendChild(this.card);
  };
}
