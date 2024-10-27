window.addEventListener('scroll', function(){
    const icon = document.getElementById('gambar1');
    const iconPosition = icon.getBoundingClientRect().top;
    const screenPosition = 791 / 1.3;
    icon.style.opacity = '0';
    if(iconPosition < screenPosition){
        icon.classList.add('active');
        icon.style.opacity = '100';
    }
    else{
        icon.classList.remove('active');
        icon.classList.add('out');
    }
});
let jumlahAktif = 0;
const btn = document.getElementById('lanjut');
btn.style.display = 'none';
function bintang() {
    // Ambil semua elemen dengan class 'bintangku'
    const m_bintang = document.getElementsByClassName('bintangku');
    if (jumlahAktif < m_bintang.length) {
        m_bintang[jumlahAktif].src = 'Anu/Star 2.png';

        jumlahAktif++;
        if(jumlahAktif === m_bintang.length){
            btn.style.display = 'block';
            btn.classList.add('active');
        }
        console.log('Jumlah bintang aktif = ' + jumlahAktif);
    } else {
        console.log('Semua bintang sudah aktif');
    }
}
function openTab(namaTab, elemnt) {
    var i, tabContent, tablinks;
    
    // Hide all tab content
    tabContent = document.getElementsByClassName('tabContent');
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = 'none';

    }
    
    // Reset all tab button styles
    tablinks = document.getElementsByClassName('tablink');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = '';
        tablinks[i].classList.remove('active');
        tablinks[i].style.color = ''; // Reset color if needed
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Show the selected tab content and style the clicked tab button
    document.getElementById(namaTab).style.display = 'block';
    elemnt.style.backgroundColor = '';
    elemnt.classList.add('active');
    elemnt.style.color = '#76FF03';
}
document.getElementById('defaultOpen').click();