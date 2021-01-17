const formPopUp = new PopupForm(
  requestPopupForm,
  popupButtonClose,
  body,
  formRequest,
  requestButton
);
const validator = new Validation(
  inputsArr,
  inputErrorMessages,
  formRequest,
  requestButton,
  requestPopupForm,
  arrInputs
);

const createCardFunction = (
  name,
  img,
  price,
  popUpFunction,
  validatorFunction
) => new Card(name, img, price, popUpFunction, validatorFunction);

const createCardFunctionAdd = new CardList(createCardFunction, newsCardSection);

function cardProcessing(arrCards) {
  arrCards.forEach((item) => {
    createCardFunctionAdd.add(
      item.name,
      item.img,
      item.price,
      formPopUp,
      validator
    );
  });
}

const createListFunction = (name, price) => new RecordList(name, price);

const createListFunctionAdd = new RecordListAdd(
  createListFunction,
  listSection
);

function listProcessing(arrCards) {
  arrCards.forEach((item) => {
    createListFunctionAdd.addList(item.name, item.price);
  });
}

formPopUp.closeEvent();

createListFunctionAdd.recordList();

createCardFunctionAdd.cardList();

cardProcessing(initialCards.product);
listProcessing(initialCards.product);
