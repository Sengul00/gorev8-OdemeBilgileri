
💳 #Kredi Kartı Ödeme Formu Uygulaması
Bu proje, bir kredi kartı ödeme bilgilerini güvenli bir şekilde toplamak için oluşturulmuş tek sayfalık (Single Component) bir React uygulamasıdır. Tailwind CSS ile hızlı ve modern bir arayüz tasarlanmıştır.

Özellikler
Form Kontrolü: Tüm input alanları (İsim, Kart Numarası, Güvenlik Kodu) React'in useState Hook'u ile yönetilir.

Dinamik Seçiciler: Ay (1-12) ve Yıl (Mevcut yıldan itibaren 11 yıl) seçenekleri dinamik olarak oluşturulur.

Veri Toplama: "Şimdi Öde" butonuna tıklandığında, form verileri toplanır ve bir alert mesajı ile kullanıcıya gösterilir.

Güvenli Gönderim: Form gönderildiğinde sayfanın yenilenmesi e.preventDefault() metodu ile engellenir.

Boş Değer Uyarısı: Alert mesajında, boş bırakılan alanlar için "Girilmedi" veya "Seçilmedi" ibaresi gösterilir.

Kurulum ve Çalıştırma
Bu proje React (JSX) ve Tailwind CSS kullanılarak geliştirilmiştir.

Ön Gereksinimler
Node.js ve npm (veya yarn/pnpm) kurulu olmalıdır.

Adımlar
Projeyi Klonlayın:

git clone [REPO_ADRESİNİZ]
cd [PROJE_KLASÖRÜ]

Bağımlılıkları Yükleyin:

npm install
veya
yarn install

Uygulamayı Başlatın:

npm run dev  # Vite, yeni standartlar için genellikle 'dev' kullanır
veya
npm start    # Eski standartlar için 'start' kullanır

Uygulama genellikle http://localhost:5173 veya http://localhost:3000 adresinde açılacaktır. Lütfen terminal çıktınızı kontrol ediniz.

Kullanılan Teknolojiler
React: Kullanıcı arayüzü kütüphanesi.

Tailwind CSS: Hızlı ve esnek stil oluşturmak için.

JavaScript (ES6+): Uygulama mantığı.

Katkıda Bulunma
Hata raporları ve geliştirme önerileri kabul edilir. Lütfen yeni bir özellik eklemeden önce bir 'Issue' (Sorun) açınız.
