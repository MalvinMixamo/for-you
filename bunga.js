onload = () =>{
    document.body.classList.remove("container");
};
function kirimWhatsApp(){
    const nomorHP = "628812430700"; // ganti dengan nomor HP kamu dalam format internasional (gunakan kode negara, misal 62 untuk Indonesia)
    const pesan = "Halo, saya ingin bertanya tentang produk Anda."; // bisa disesuaikan dengan pesan default
    window.location.href = `https://wa.me/${nomorHP}?text=${encodeURIComponent(pesan)}`;
}