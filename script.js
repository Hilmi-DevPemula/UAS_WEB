// Navbar menambahkan bayangan saat di-scroll
window.addEventListener("scroll", function () {
  const nav = document.getElementById("mainNav");
  nav.classList.toggle("scrolled", window.scrollY > 40);
});

// Efek kartu hewan 3D mengikuti gerakan kursor
document.querySelectorAll(".card-3d").forEach(function (card) {
  card.addEventListener("mousemove", function (e) {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform =
      "rotateY(" + x * 18 + "deg) rotateX(" + y * -18 + "deg) scale(1.05)";
  });
  card.addEventListener("mouseleave", function () {
    card.style.transform = "rotateY(0) rotateX(0) scale(1)";
  });
});

// Kuis tebak suara hewan
function cekJawaban() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const hasilDiv = document.getElementById("hasil");

  if (!q1 || !q2) {
    hasilDiv.classList.remove("d-none", "alert-success", "alert-danger");
    hasilDiv.classList.add("alert", "alert-warning");
    hasilDiv.innerText = "⚠️ Harap jawab semua pertanyaan kuis terlebih dahulu!";
    return;
  }

  let skor = 0;
  if (q1.value === "correct") skor += 50;
  if (q2.value === "correct") skor += 50;

  hasilDiv.classList.remove("d-none", "alert-warning");

  if (skor === 100) {
    hasilDiv.classList.remove("alert-danger");
    hasilDiv.classList.add("alert", "alert-success");
    hasilDiv.innerHTML =
      "<strong>Luar Biasa! 🎉</strong><br>Skor Anda: 100/100. Anda sudah sangat kenal dengan suara hewan!";
  } else {
    hasilDiv.classList.remove("alert-success");
    hasilDiv.classList.add("alert", "alert-danger");
    hasilDiv.innerHTML =
      "<strong>Masih Ada yang Salah! ❌</strong><br>Skor Anda: " +
      skor +
      "/100. Coba periksa kembali jawaban Anda!";
  }
}

// Form kontak sederhana
function kirimPesan(e) {
  e.preventDefault();
  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const pesan = document.getElementById("pesan").value;
  const hasil = document.getElementById("hasilKontak");

  if (!nama || !email || !pesan) {
    hasil.classList.remove("d-none", "alert-success");
    hasil.classList.add("alert", "alert-danger");
    hasil.innerText = "⚠️ Mohon lengkapi semua kolom!";
    return false;
  }

  hasil.classList.remove("d-none", "alert-danger");
  hasil.classList.add("alert", "alert-success");
  hasil.innerHTML =
    "✅ Terima kasih <b>" +
    nama +
    "</b>! Pesan Anda sudah kami terima dan akan dibalas ke <b>" +
    email +
    "</b>.";
  return false;
}
