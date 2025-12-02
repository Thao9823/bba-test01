function couple() {
    let list = [];
    for (let i = 0; i <= 100; i++) {
        for (let j = 0; j <= 100; j++) {
            if ((i + j) % 17 === 0) {
                list.push([i, j]);

                console.log("(" + [i] + ", " + [j] + ")" + " = " + (i + j));
            }
        }
    }
    console.log("Tổng cộng: " + list.length + " cặp");
}
couple();