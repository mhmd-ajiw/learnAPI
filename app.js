// Soal 2 (Chaining)
function ambilBuah() {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve("Apel"); }, 1000);
  });
}

function masakBuah(buah) {
  return new Promise(function (resolve) {
    setTimeout(function () { resolve(buah + " Jus"); }, 1000);
  });
}

ambilBuah()
  .then((take) => {
    return masakBuah(take);
  })
  .then((buah) => {
    console.log(buah);
  })
  .catch((error) => {
    console.log("Gagal mengambil buah.");
  });