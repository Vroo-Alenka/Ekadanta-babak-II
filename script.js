// Menyimpan status angka yang telah ditekan
let angkaTerkunci = [];

// Daftar soal umum
const soalList = [
    "Apa makna Burung Garuda pada Lambang negara Indonesia ?",
    "Apa tugas utama MPR dan UUD 1945?",
    "Apa arti sila pertama pada lembang negara Indonesia?",
    "Apa itu Lambang Paskibraka?",
    "Berapa panjang dan lebar rasio bendera Indonesia?",
    "Apa warna dominan pada Lambang Paskibraka?",
    "Kapan pertama Paskibraka terbentuk?",
    "Kapan UUD 1945 pertama kali disahkan ?",
    "Apa yang dimksud dengan Amandeman UUD 1945?",
    "Apa fungsi dari DPR menurut UUD 1945?",
    "Apa arti warna emas pada Lambang Negara?",
    "Apa makna warna putih pada bendera Indonesia?",
    "Apa arti warna merah pada Lambang Negara?",
    "Kapan bendera merah-putih pertama kali dikibarkan?",
    "Apa yang harus dilakukan saat bendera dikibarkan?",
    "Apa Lambang Paskibraka?",
    "Apa isi Pasal 1 UUD 1945?",
    "Apa yang dimaksud dengan Bhineka Tunggal Ika?",
    "Apa yang terkandung dalam Pasal 33 UUD 1945?",
    "Apa arti sila pertama pada lambang negara?",
    "Apa yang melambangkan padi dan kapas pada perisai Lambang Negara ?",
    "Apa makna warna merah bendera Indonesia?",
    "Bendera Indonesia disebut juga dengan nama apa ?",
    "Siapa yang mendesain lambang Negara Indonesia?",
    "Apa arti Filofosi dari warna merah dan putih pada bendera Indonesia ?",
    "Siapa yang menciptakan lambang Paskibraka?",
    "Apa Simbol yang paling mencolok di Lambang Paskibraka?",
    "Apa tujuan utama  adanya UUD 1945?",
    "Apa arti dari Lambang Paskibraka bagi Indonesia?",
    "Apa yang dimaksud Pancasila sebagai dasar negara dalam UUD 1945?"
];

// Menambahkan angka ke halaman
window.onload = () => {
    const angkaContainer = document.getElementById('angkaContainer');
    for (let i = 1; i <= 30; i++) {
        const angkaElement = document.createElement('div');
        angkaElement.classList.add('angka');
        angkaElement.textContent = i;
        angkaElement.onclick = () => tekanAngka(i);
        angkaContainer.appendChild(angkaElement);
    }
};

// Fungsi ketika angka ditekan
function tekanAngka(angka) {
    const angkaElement = document.querySelectorAll('.angka')[angka - 1];
    angkaElement.classList.add('disabled'); // Menonaktifkan angka yang sudah ditekan
    angkaElement.onclick = null; // Menghapus event listener setelah angka ditekan
    
    // Menampilkan soal berdasarkan nomor yang ditekan
    tampilkanSoal(angka);
}

// Menampilkan soal berdasarkan nomor
function tampilkanSoal(angka) {
    const soalContainer = document.getElementById('soalContainer');
    const soalElement = document.getElementById('soal');
    
    // Mengambil soal berdasarkan nomor yang ditekan
    const soal = soalList[angka - 1]; // Mengurangi 1 karena array dimulai dari indeks 0
    
    soalElement.textContent = soal;
    
    // Menampilkan kontainer soal
    soalContainer.classList.add('visible');
}

// Menutup soal dan kembali ke tampilan angka
function tutupSoal() {
    const soalContainer = document.getElementById('soalContainer');
    soalContainer.classList.remove('visible');
}
