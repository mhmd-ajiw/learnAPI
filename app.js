// Soal 1
const mobil = {
    merek : "Toyota",
    model : "Avanza",
    tahun : 2023,
};

const mobilJSON = JSON.stringify(mobil);
console.log(mobilJSON);
console.log(typeof mobilJSON);

const mobilJS = JSON.parse(mobilJSON);
console.log(mobilJS);
console.log(typeof mobilJS);

// Soal 2
// output : {"nama":"Laptop","harga":8000000,"spek":{"ram":"16GB","storage":"512GB"}}
