document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const inputNama = document.getElementById('nama').value;
    const inputEmail = document.getElementById('email').value;
    const inputPesan = document.getElementById('pesan').value;
    
    document.getElementById('tampilNama').textContent = inputNama;
    document.getElementById('tampilEmail').textContent = inputEmail;
    document.getElementById('tampilPesan').textContent = inputPesan;
});
