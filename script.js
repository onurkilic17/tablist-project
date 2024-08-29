 // Tüm sekme butonlarını ve içeriklerini seç
 const buttons = document.querySelectorAll('.tab-button');
 const contents = document.querySelectorAll('.tab-content');

 // Butonlara tıklama olayları ekleme
 buttons.forEach((button, index) => {
     button.addEventListener('click', () => {
         // sekme içeriklerinin hepsini gizleme
         contents.forEach(content => content.style.display = 'none');

         // Butonların hepsinin aktifini kaldır
         buttons.forEach(btn => btn.classList.remove('active-tab'));

         // Tıklanan sekme butonuna aktif sınıfını ekle ve içeriği göster
         button.classList.add('active-tab');
         contents[index].style.display = 'block';
     });
 });