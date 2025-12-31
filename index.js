let cards = []; //list of cards in collection
const nameElement = document.getElementById("name"); //name element
const rarityOption = document.getElementById("rarity"); //rarity option selection
const addCardButton = document.getElementById("add-card"); //add card button
const generateRandomCardButton = document.getElementById(
    "generate-random-card",
); //generate random card button
const output = document.getElementById("output"); //output display text
const randomCardOutput = document.getElementById("random-card-output"); //random card output display text
addCardButton.addEventListener("click", () => {
    //when add card button is pressed
    const name = nameElement.value; //get name value
    const rarity = rarityOption.value; //get rarity value
    cards.push({ name: name, rarity: rarity }); //add card to list of cards in collection
    output.innerText = `Number of cards: ${cards.length}\n${JSON.stringify(cards, null, 2)}`; //update output text
    nameElement.value = ""; //clear name value
    rarityOption.value = "common"; //reset rarity value
});
generateRandomCardButton.addEventListener("click", () => {
    //when generate random card button is pressed
    const totalWeight = cards.reduce(
        (total, card) =>
            total + card.rarity === "common"
                ? 0.5
                : card.rarity === "uncommon"
                  ? 0.25
                  : card.rarity === "rare"
                    ? 0.15
                    : card.rarity === "epic"
                      ? 0.075
                      : card.rarity === "legendary"
                        ? 0.025
                        : 0,
        0,
    ); //calculate total weight of all cards based on card rarity
    const number = Math.random() * totalWeight; //generate random number between 0 and total weight
    let weightSum = 0; //initialize weight sum
    for (const card of cards) {
        //for each card in collection
        weightSum +=
            card.rarity === "common"
                ? 0.5
                : card.rarity === "uncommon"
                  ? 0.25
                  : card.rarity === "rare"
                    ? 0.15
                    : card.rarity === "epic"
                      ? 0.075
                      : card.rarity === "legendary"
                        ? 0.025
                        : 0; //add card weight to weight sum
        if (number <= weightSum && cards.length > 0) {
            //if random number is less than or equal to weight sum
            randomCardOutput.innerText = `You got a ${card.rarity} card: ${card.name}`; //display generated random card
            return; //exit function
        } else {
            //if there are no cards in collection
            alert(
                "No cards in collection! Please add cards to the collection first.",
            ); //alert user that there are no cards in collection
        }
    }
});
