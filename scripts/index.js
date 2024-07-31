// @todo: Темплейт карточки
const cardTemplate = document.querySelector("#card-template").content;

// @todo: DOM узлы

const placesList = document.querySelector(".places__list");

// @todo: Функция создания карточки

function createCard(card, { deleteCard }) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardTitle = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  cardImage.alt = card.name;
  cardImage.src = card.link;
  cardTitle.textContent = card.name;
  cardDeleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  return cardElement;
}
// @todo: Функция удаления карточки

function deleteCard(cardElement) {
  cardElement.remove();
}

// @todo: Вывести карточки на страницу

initialCards.forEach(function (card) {
  const cardElement = createCard(card, { deleteCard });
  placesList.append(cardElement);
});
