class RecordList {
  constructor(name, price) {
    this.name = name;
    this.price = price;
    this.currency = "&#8381;";
  }

  create = () => {
    //  const placeCard = document.createElement("ol");

    const liItem = document.createElement("li"); //
    liItem.classList.add("card-list__item");
    liItem.textContent = this.name;

    const ulItem = document.createElement("ul"); //

    const liPrice = document.createElement("li"); //
    liPrice.classList.add("card-list__item-price");
    liPrice.textContent = "Цена: " + this.price;

    const spanCurrency = document.createElement("span"); //
    spanCurrency.classList.add("card-list__item-currency");
    spanCurrency.innerHTML = " " + this.currency;

    liPrice.appendChild(spanCurrency);
    ulItem.appendChild(liPrice);
    liItem.appendChild(ulItem);
    //placeCard.appendChild(liItem);

    this._view = liItem;

    return this._view;

    /* *********************** */
  };
}
