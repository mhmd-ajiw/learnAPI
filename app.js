//soal 1 (Basic)
function cekStok(barang) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (barang === "sold-out") {
        reject("Stok habis");
      } else {
        resolve(`Stok ${barang} tersedia`);
      }
    }, 1000);
  });
}

async function pesanBarang() {
  try {
    const pesan = await cekStok("baju");
    console.log(pesan);
  } catch(err) {
    console.error(err);
  }
}
pesanBarang()

// Soal 2 (Sequential vs Parallel)
// saya tidak memahami cara menjawab soal ini

// Soal 3 (Prediksi Output)
// Output : A B D C E