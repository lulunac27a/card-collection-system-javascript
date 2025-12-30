let cards = []; //list of cards in collection
const nameElement = document.getElementById("name"); //name element
const rarityOption = document.getElementById("rarity"); //rarity option selection
const addCardButton = document.getElementById("add-card"); //add card button
const output = document.getElementById("output"); //output display text
addCardButton.addEventListener("click", () => {
    //when add card button is pressed
    const name = nameElement.value; //get name value
    const rarity = rarityOption.value; //get rarity value
    cards.push({ name: name, rarity: rarity }); //add card to list of cards in collection
    output.innerText = `Number of cards: ${cards.length}\n${JSON.stringify(cards, null, 2)}`; //update output text
    nameElement.value = ""; //clear name value
    rarityOption.value = "common"; //reset rarity value
});
