// 1. Deklarasi DOM
const inputNama = document.getElementById("input-nama");
const inputMatkul = document.getElementById("input-matkul");
const btnDaftar = document.getElementById("btn-daftar");
const notifikasi = document.getElementById("notifikasi-sistem");

// API Endpoint Simulasi: https://jsonplaceholder.typicode.com/posts

async function kirimDataPendaftaran(valNama, valMatkul) {
  const data = {
    name: valNama,
    course: valMatkul,
  };

  try {
    const respon = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (respon.ok) {
      const hasil = await respon.json();
      notifikasi.textContent = `\Pendaftaran sukses! ID Anda: ${hasil.id}`;
      notifikasi.style.color = "green";
    } else {
      notifikasi.textContent = `\Gagal mengirim data. Kode: ${respon.status}`;
      notifikasi.style.color = "red";
    }

    inputNama.value = "";
    inputMatkul.value = "";
  } catch (error) {
    notifikasi.textContent = "Koneksi terputus.";
    notifikasi.style.color = "red";
  }

  btnDaftar.disabled = false;
}

btnDaftar.addEventListener("click", function () {
  const valNama = inputNama.value;
  const valMatkul = inputMatkul.value;

  if (valNama === "" || valMatkul === "") {
    notifikasi.textContent = "Semua kolom wajib diisi!";
    notifikasi.style.color = "red";
    return;
  }

  notifikasi.textContent = "Sedang mengirim data ke server...";
  notifikasi.style.color = "blue";
  btnDaftar.disabled = true;

  kirimDataPendaftaran(valNama, valMatkul);
});
