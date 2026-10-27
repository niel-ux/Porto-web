document.getElementById('contactForm').addEventListener('submit', function(event) {
    // 1. Mencegah halaman refresh/loading ulang saat klik tombol kirim
    event.preventDefault(); 
    
    // 2. Mengambil teks data yang diketik oleh user di form
    const inputNama = document.getElementById('nama').value;
    const inputEmail = document.getElementById('email').value;
    const inputPesan = document.getElementById('pesan').value;
    
    // 3. Menampilkan teks tersebut ke dalam tag penampung hasil di bawah form
    document.getElementById('tampilNama').textContent = inputNama;
    document.getElementById('tampilEmail').textContent = inputEmail;
    document.getElementById('tampilPesan').textContent = inputPesan;
});
