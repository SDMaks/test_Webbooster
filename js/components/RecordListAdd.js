class RecordListAdd {
  constructor(createListFunction, listSection) {
    this._createListFunction = createListFunction;
    this.listSection = listSection;
  }

  recordList = () => {
    this.headerSection = document.createElement("h1");
    this.headerSection.classList.add("card-record__title");
    this.headerSection.textContent = "Список товаров:";

    this.listContainer = document.createElement("div");
    this.listContainer.classList.add("card-list");

    this._listContainerOl = document.createElement("ol");

    this.listSection.appendChild(this.headerSection);
    this.listSection.appendChild(this.listContainer);
    this.listSection.appendChild(this._listContainerOl);
  };

  addList = (name, price) => {
    this.card = this._createListFunction(name, price).create();
    this._listContainerOl.appendChild(this.card);
  };
}
