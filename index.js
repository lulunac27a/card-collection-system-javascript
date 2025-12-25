let cards = [];
const nameElement = document.getElementById("name");
const rarityOption = document.getElementById("rarity");
const addCardButton = document.getElementById("add-card");
const output = document.getElementById("output");
addCardButton.addEventListener("click", () => {
    const name = nameElement.value;
    const rarity = rarityOption.value;
    cards.push({ name: name, rarity: rarity });
    output.innerText = JSON.stringify(cards);
});
