let cards = [];
const nameElement = document.getElementById('name');
const rarityOption = document.getElementById('rarity');
const addCardButton = document.getElementById('add-card');;
addCardButton.addEventListener('click', () => {
    const name = nameElement.value;
    const rarity = rarityOption.value;
    cards.push({name: name, rarity: rarity});
});