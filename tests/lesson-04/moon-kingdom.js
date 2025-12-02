function createCharacters () {
    const characters = [
        {name: "thao", levelg: 1, healthg: 1200},
        {name: "sang", levelg: 2, healthg: 200},
        {name: "bao", levelg: 2, healthg: 360}
    ];
    const charactersPowerUp = characters.map( a =>
    ({
        nameUpperCase: a.name.toUpperCase(),
        level: a.levelg * 2,
        health: a.healthg * 3
    })); 
    const possibleWinners = charactersPowerUp.filter(a => a.health > 1000);
    console.log (charactersPowerUp);
    console.log(possibleWinners);
    }
  createCharacters()