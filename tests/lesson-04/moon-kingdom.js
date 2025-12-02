//bai1
function createCharacters() {
    const characters = [
        { name: "thao", levelg: 1, healthg: 1200 },
        { name: "sang", levelg: 2, healthg: 200 },
        { name: "bao", levelg: 2, healthg: 360 }
    ];
    const charactersPowerUp = characters.map(a =>
    ({
        nameUpperCase: a.name.toUpperCase(),
        level: a.levelg * 2,
        health: a.healthg * 3
    }));
    const possibleWinners = charactersPowerUp.filter(a => a.health > 1000);
    console.log(charactersPowerUp);
    console.log(possibleWinners);
}
createCharacters()

//bai2
function printLeaderboard() {
    const players = [
        { name: "Mario", score: 609 },
        { name: "Luigi", score: 800 },
        { name: "Peach", score: 850 },
        { name: "Yoshi", score: 1000 },
        { name: "Yokki", score: 500 }
    ];
    const sorted = players.sort((a, b) => b.score - a.score);
    const playerslist = sorted.map((a, index) => {
        let medal = "  ";
        if (index === 0) {
            medal = "🥇";
        }
        else if (index === 1) {
            medal = "🥈";
        }
        else if (index === 2) {
            medal = "🥉";
        }
        return {
            medal: medal,
            rank: index + 1,
            ...a,
        };

    })
    playerslist.forEach(u => 
        {
        console.log(`${u.medal} ${u.rank} . ${u.name} - ${u.score}` + " pts");
        });
    }
    printLeaderboard()