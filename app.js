// Soal 1 (Basic)
function bagiDua(angka){
   return new Promise(function(resolve, rejected) {
    if(angka % 2 == 0){
      resolve(angka / 2);
    } else {
      rejected("Angka harus genap");
    }
   });
}

bagiDua(10)
  .then((num) => {
    console.log("Hasil bagi 2: ", num);
  })
  .catch((error) => {
    console.log(error);
  });