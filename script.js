const isiPesan = document.getElementById('isiPesan');
isiPesan.style.display = 'none';
const tabC = document.getElementsByClassName('tabContent');
for(var a = 0; a < tabC.length; a++){
    tabC[a].style.display = 'none';
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

// const rotatingElements = document.querySelectorAll('#gambar-1');

// function checkScroll() {
    //     rotatingElements.forEach(element => {
        //         const rect = element.getBoundingClientRect();
        //         const elementCenter = rect.top + rect.height / 2;
        //         const screenCenter = window.innerHeight / 2;
        
        //         if (Math.abs(elementCenter - screenCenter) < 10 && !element.classList.contains('active')) {
//             element.classList.add('active');
//         }
//     });
// 
const giftBox = document.getElementById('giftBox');
        let giftBoxAktif = false;
        const tabB = document.getElementsByClassName('tabContent');
        // Tambahkan event listener untuk membuka hadiah
        giftBox.addEventListener('click', function() {
            giftBox.classList.add('open');
            giftBoxAktif = true;
            for(var t = 0; t < tabB.length; t++){
                tabB[t].style.display = 'none';
            }
            isiPesan.style.display = 'flex';
        });
const background = document.getElementById('backgroundIfGiftOn');
background.style.display = 'none';

function mengaktifkanBackground(){
    background.style.display = 'block';
    background.classList.add ('thisAktive');
}
function menonaktifkanGift(popampim){
    const gift = document.getElementsByClassName('gift');
    for(var x = 0; x < gift.length; x++){
        gift[x].style.display = 'none';
    }
    popampim.style.display = 'none';
}
function openGift(namaGift, btn){
    const gift = document.getElementsByClassName('gift');
    const gambar = document.getElementsByClassName('openGift');
    const apalah = document.getElementById('kosongg');
    for(i = 0; i < gambar.length; i++){
        gambar[i].classList.remove('aktif');
    }

    var i;
    for(i = 0; i < gift.length; i++){
        gift[i].style.display = 'none';
        gift[i].classList.remove('giftAktif');
    }
    btn.classList.add('aktif');
    // background.style.display = 'block';
    document.getElementById(namaGift).classList.add('giftAktif');
    document.getElementById(namaGift).style.display = 'flex';
}
document.getElementById('defaultOpenGift').click();
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
    } else{
        console.log('Semua bintang sudah aktif');
    }
}

const title = document.getElementById('title');
const head = document.getElementById('iconHead');
head.href = 'Anu/cancel.png';
title.textContent = 'null';
document.getElementById('btnKosong').click();
let nama = prompt('Masukan nama panggilanmu : ');
let tab = document.querySelector('.namaTidakSesuai');
document.getElementById('kosong').style.display = 'block';
const music = document.getElementById('music');
document.getElementById('lanjut').addEventListener('click', function(){
    const music = document.getElementById('music');
    music.play();
});
const nav = document.getElementById('nav');
let text;
if(nama === null || nama === ''){
    alert('nama belum dimasukkan!');
    tab.style.display = 'flex';
    nav.style.display = 'none';
    title.textContent = 'null';
    head.href = 'Anu/cancel.png';
    document.getElementById('tidakSesuai').click();
}else if(nama === 'aura' || nama === "Aura" || nama === 'Aura ' || nama === 'auraa' || nama === 'aura dhia syarafana' || nama === 'Aura Dhia Syarafana' || nama === 'Pacarnya Malvin' || nama === 'Pacarnya malvin' || nama === 'pacarnya malvin' || nama === 'Aura imut'){
    document.getElementById('defaultOpen').click();
    tab.style.display = 'none';
    nav.style.display = 'flex';
    head.href = 'Anu/icon.png';
    title.textContent = 'For Youuu❤️';
    document.getElementById('nama').innerText = nama;
}else{
    alert('ini bukan untuk anda!');
    tab.style.display = 'flex';
    nav.style.display = 'none';
    head.href = 'Anu/cancel.png';
    document.getElementById('tidakSesuai').click();
}

function appendToDisplay(value){
    document.getElementById('display').value += value;
}
function clearDisplay(){
    document.getElementById('display').value = '';
}
function calculate(){
    let random = Math.random();
    console.log(random);
    const tulisan = Math.random();
    const result = document.getElementById("display");
    if(random < 0.1){
        try{
            let result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        }catch(error){
            document.getElementById('display').value = 'calculatol nya ]        ucak';
        }
    }else if(random < 0.2){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'Calculatolnya agi ucak >.<';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }else if(random < 0.3){
        try{
            let result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        }catch(error){
            document.getElementById('display').value = 'calculatol nya ucak';
        }
    }else if(random < 0.4){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'Calculatolnya agi ucak >.<';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }else if(random < 0.5){
        try{
            let result = eval(document.getElementById('display').value);
            document.getElementById('display').value = result;
        }catch(error){
            document.getElementById('display').value = 'calculatol nya ucak';
        }
    }else if(random < 0.6){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'kamuu cantik';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolnya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }else if(random < 0.7){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'Calculatolnya agi ucak >.<';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }else if(random < 0.8){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'Calculatolnya agi ucak >.<';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }else if(random < 0.9){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'Calculatolnya agi ucak >.<';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }else if(random <= 1){
        if(tulisan < 0.1){
        }else if(tulisan < 0.2){
            result.value = 'Kamuu maniss';
        }else if(tulisan < 0.3){
            result.value = 'Kamuu lucuuu';
        }else if(tulisan < 0.4){
            result.value = 'Kamuu imuutt';
        }else if(tulisan < 0.5){
            result.value = 'kamuu unyuuu';
        }else if(tulisan < 0.6){
            result.value = 'Calculatolnya agi ucak >.<';
        }else if(tulisan < 0.7){
            result.value = 'Love you ❤️';
        }else if(tulisan < 0.8){
            result.value = 'Apalagi yaww🤔';
        }else if(tulisan < 0.9){
            result.value = 'Calculatolya salying😣';
        }else if(tulisan < 1){
            result.value = 'Huwaaaaa 😫'; 
        }
    }
}