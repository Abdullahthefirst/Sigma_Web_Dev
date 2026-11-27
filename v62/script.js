// create a business name generator by combining list of adjectives, shop name, and another word

// crazy, amazing, fire -- adjectives

//engine, foods, garments -- shop names

// bros, limited, hub -- other words
function nameGenerator() {
    let rand = Math.random();
    if (rand < 0.5) {
        var adj = "crazy"
    } else {
        var adj = "amazing";
    }
    rand = Math.random();
    if (rand < 0.5) {
        var shop = "engine"
    } else {
        var shop = "foods";
    }
    rand = Math.random();
    if (rand < 0.5) {
        var other = "bros"
    } else {
        var other = "limited";
    }
    let name = `${adj} ${shop} ${other}`;
    console.log(name);
}
