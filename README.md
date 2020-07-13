# child-care-project
Child Care project development

Goal:
1. Buat website
2. Buat Mobile App

Fitur:
1. Auth

note : (add two step verification)

- SignUP (Parents)
-------------
Form (signUP)
1. Username (verifikasi username)
2. Email (verifikasi email)
3. Password (verifikasi password)
4. full name (validation)
5. DOB (validation)
6. Sex (No need validation)
7. Kelurahan (validation)
8. Kode Pos (validation)
9. Alamat (validation)
10. Pin point (lat, lon (-6.263422, 106.884558)) (no need validation)
11. Phone (verifikasi phone number)
12. Alternate email (no need validation)

- Pada saat dia register, aplikasi akan mencari email yang didaftarkan pada database, jika email yang di input sudah ada, maka user harus mengganti emailnya dengan email lain
- Verifikasi username apakah sudah digunakan atau belum
- Verifikasi Phone number apakah sudah digunakan atau belum
- Pada saat dia selesai mendaftarkan dirinya, kita kasih verifikasi email
- Setelah dia verifikasi email, dia akan masuk ke page "Thank you for verifying you email => (text: "Klik here to enter website or wait (show how many seconds left to redirect))
- Setelah sign up, dia tidak perlu login dahulu untuk masuk ke web

- SignIN
-----------
Form Signin (Parents)
1. Email/Username 
2. Password


3. Button Lupa password
- Dia akan redirect ke halaman yang isinya form untuk mengisi email
- Kemudian dia akan verifikasi emailnya
- Direct to change password page
- redirect to login


-access_token
-redirect to home

- Social Media SignUP

2.

Brain Storm

Visi:
- Menjadi aplikasi terdepan dalam bidang parenting

Misi:
- Memudahkan orang tua untuk mendapatkan layanan daycare dan nursing anak

Goal:
1. Membuat Aplikasi mobile yang memiliki fitur pencarian daycare, agensi nursery dan independent nurse
2. Membuat aplikasi mobile yang dapat menunjukkan kepada user, daycare yang terdekat dari tempatnya (show map)
3. Membuat website SPA yang dapat melakukan video call kepada daycare, agensi atau independent nurse
4. Membuat UI/UX yang mudah digunakan dengan acuan seperti marketplace (Tokopedia)
5. Membuat nama yang mudah dijual

Deadline:
- Akhir bulan Juli 2020

Step Actions:
1. Buat backend
2. Buat tampilan kasar frontend
3. Buat fitur utama:
    1. User Signin
    2. User Signup
    3. Agency Signin
    4. Agency Signup
    5. Daycare Signin
    6. Daycare Signup
    7. Show all Agency
    8. Show all daycare
    9. Search agency by keyword
    10. Search daycare by keyword
    11. Search nearby agency
    12. Search nearby daycare
    13. Show calender
    14. Book nurse on agency
    15. Book daycare

Todo List:
1. Buat repository baru
2. Invite jojo dan romy
3. Buat backbone coding
4. Buat miniservice untuk fitur auth, book, show all
5. Setup database


Setup App:
1. Buat aplikasi end user
2. Buat aplikasi provider


Business Process

User
======
Rafatar punya orang tua yang namanya "Bodo amat". Bodo Amat ingin menyewa jasa penjaga anak (nurse) di aplikasi childCare. Amat buka aplikasi. Kemudian dia mendaftarkan dirinya dengan mengisikan biodatanya. Dia mencari agency yang paling dekat dengan rumahnya. Kemudian childCare menunjukkan list of agencies dan Daycares yang tersedia di sekitar rumahnya. Kemudian dia memilih salah satu agency yang ditampilkan. Kemudian childCare menunjukkan details dari agency dan list of nurses yang mereka punya dan available (nurse booked dan unbook). Lalu, amat memilih salah satu nurse yang masih available kedalam wish list. Kemudian, dia memilih salah satu nurse yang kondisinya not available kedalam wish list nya (karena dia suka dengan service tiup job nya). Lalu, Amat pergi ke page wish list. Kemudian, Amat menentukan durasi kerja nursenya (tanggal, hari dan jam). Amat kemudian menuliskan berapa banyak anak, umur dan kondisinya yang akan diurus. ChildCare akan menunjukkan tarif dari service yang diminta. Kemudian childCare menunjukkan page metode pembayaran. Amat melakukan checkout dan pembayaran. ChildCare kemudian menunjukkan hasil verifikasi pembayaran sudah selesai.

Founds:
1. Nurses punya details (preferensi dan availability)
2. User harus pergi ke wish list untuk kemudian mengisi data anak yang akan diurus, durasi kerja dan tarif
3. Dari page wish list, user baru bisa pergi checkout page
4. Gunakan cron untuk set availability saat nurse sudah selesai kerja atau saat user klik 'job done'
5. Agency punya reputasi
6. Nurse punya reputasi
7. Ada table checkout
8. Ada table komentar

Relation:
1. User bisa pesan banyak nurses
2. User bisa pesan dari banyak agencies
3. agency punya banyak nurses
4. Nurses dimiliki oleh satu agency dan satu user



Agency
=======
Donald adalah sebuah agency yang memiliki banyak nurse. Dia ingin memasarkan agency nya di marketplace agar lebih dikenal orang. Kemudian dia mendaftarkan dirinya di ChildCare dengan datang ke kantor ChildCare. Donald membawa KTP pemilik, SIUP, SITU, NPWP Perusahaan (surat-surat Perusahaan). Di kantor childCare, admin mengisikan formulir pendaftaran dan menandatangani kontrak/surat perjanjian kerjasama. Lalu, admin akan melanjutkannya ke bagian pengecekan untuk diverifikasi perusahaannya. Setelah, Donald diverifikasi, dia akan dikirimi email persetujuan. Admin akan memasukkan Donald ke dalam database agency childCare. Lalu, Donald akan muncul di aplikasi ChildCare dan dapat dipilih oleh user.

Saat user memilih salah satu nurse yang dimiliki oleh Donald, childCare akan mengirimkan notifikasi ke hp dan email ke donald. Donald membuka aplikasi ChildCare khusus provider. Di aplikasi ini, Donald dapat melihat aktivitas agency nya, jadwal kerja, request nurse dan pendapatan. Lalu, ada tombol message yang berisikan semua message dan request nurse (terlihat berapa banyak unread messages). Kemudian, Donald memilih tombol request nurses. Lalu, Donald dialihkan ke halaman request nurse yang isinya adalah list request dari user ke nurses yang dia punya. Aplikasi provider childCare menampilkan 2 tombol accept dan decline yang gunanya adalah untuk menerima request dan menolak request dan ditiap request nurse ada jumlah tarif yang akan diterima oleh agency. Jika, agency menolak request, maka list request nurse akan berkurang dan user akan dikirimkan notifikasi + email bahwa agency menolak permintaannya. Lalu, agency akan dialihkan ke halaman provide solution untuk memberikan list reccomended nurses selain yang dipilih user. Jika agency menerima request, user akan dikirimkan notifikasi bahwa permintaannya diterima (tentatif adanya estimasi waktu sampai). Agency akan dialihkan ke halaman detail request.

Setelah pekerjaannya selesai, status nurse akan menjadi available, user akan dapat memberikan rating dan review kepada nurse, berikan notifikasi pada user bahwa nurse sudah menyelesaikan pekerjaannya, agency akan mendapatkan notifikasi selesainya pekerjaan, dikirimi uang hasil pekerjaannya, mendapatkan rating dan review dari user.


Finding:
1. Table rating & review
2. Kolom rating
3. Kolom review
4. Relation nurse many to many parents(user)


RECAP
======
1. User dapat memiliih nurse yang dia inginkan
2. Nurse memiliki status availability
3. Agency punya aplikasi childCare sendiri (provider)
4. User dapat memberikan rating dan review kepada nurse
5. User harus membayarkan tarifnya terlebih dahulu kepada childCare
6. Provider akan mendapatkan hasil pekerjaan setelah pekerjaannya selesai
7. Provider harus mendaftarkan dirinya dengan datang ke kantor ChildCare atau lewat online
8. Provider dapat menolak atau menerima request dari user
9. Provider dapat memberikan list of reccomended nurses jika dia menolak request
10. User dapat menyelesaikan requestnya jika pekerjaannya dirasa sudah selesai ataupun menunggu sampai waktu durasi pekerjaan habis


Kebutuhan:
1. Modal
2. Admin
3. Developer frontend
4. Developer backend
5. Akuntan
6. Marketing
7. HRD
8. Costumer Service
9. Project manager
10. Product Leader
11. Admission
12. Sales
13. Gedung
14. Investor
15. Business Developer
16. Data Scientist
17. Graphic Designer
18. Content Maker