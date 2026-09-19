// Soal 1
const nama = ["aji", "budi", "citra"];

const namaBaru = nama.map(function (target) {
  return target.charAt(0).toUpperCase() + target.slice(1);
});

console.log(nama);
console.log(namaBaru);

// Soal 2
const mahasiswa = [
  { nama: "Aji", ipk: 3.8 },
  { nama: "Budi", ipk: 2.9 },
  { nama: "Citra", ipk: 3.5 },
  { nama: "Dedi", ipk: 3.9 },
];

const data = mahasiswa
    .filter((target) => target.ipk >= 3.5)
    .map((target) => target.nama);

console.log(data);

// Soal 3
const belanja = [
    {item: "Roti", harga: 15000},
    {item: "Susu", harga: 20000},
    {item: "Telur", harga: 30000}
]

const total = belanja.reduce((accumulator, item) => {
    return accumulator + item.harga;
}, 0);

console.log(total);

// Soal 4
const buku = {judul: "Laskar Pelangi", penulis: "Andrea Hirata", tahun: 2005}

function tampilkanBuku({judul, penulis, tahun}){
    console.log(`${judul} oleh ${penulis} (${tahun})`);
}

tampilkanBuku(buku);