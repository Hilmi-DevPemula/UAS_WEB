function cekJawaban() {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');
  const hasilDiv = document.getElementById("hasil");

  if (!q1 || !q2) {
    hasilDiv.classList.remove("d-none", "alert-success", "alert-danger");
    hasilDiv.classList.add("alert", "alert-warning");
    hasilDiv.innerText =
      "⚠️ Harap jawab semua pertanyaan kuis terlebih dahulu!";
    return;
  }

  let skor = 0;
  if (q1.value === "correct") skor += 50;
  if (q2.value === "correct") skor += 50;

  hasilDiv.classList.remove("d-none", "alert-warning");

  if (skor === 100) {
    hasilDiv.classList.remove("alert-danger");
    hasilDiv.classList.add("alert", "alert-success");
    hasilDiv.innerHTML = `<strong>Luar Biasa! 🎉</strong><br>Skor Anda: 100/100. Anda sudah sangat kenal dengan suara hewan!`;
  } else {
    hasilDiv.classList.remove("alert-success");
    hasilDiv.classList.add("alert", "alert-danger");
    hasilDiv.innerHTML = `<strong>Masih Ada yang Salah! ❌</strong><br>Skor Anda: ${skor}/100. Coba periksa kembali jawaban Anda!`;
  }
}
