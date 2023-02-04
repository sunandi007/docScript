# Belajar Typescript: Pengenalan Dasar Typescript untuk Pemula

---

![alt main_image](https://www.petanikode.com/img/cover/typescript.png)

Halo 👋.. selamat datang di tutorial Typescript untuk Pemula.

Pada tutorial ini, kamu akan belajar tentang dasar-dasar Typescript yang perlu diketahui. Sehingga nanti dapa menulis
program Typescript-mu sendiri.

Typescript ini memang bahasa pemrograman yang lagi banyak dipakai di industri. Teman-teman saya yang kerja sebagai web
developer, sering merekomendasikan bahasa ini.

Apa itu Typescript?

Mengapa harus pakai Typescript?

Gimana cara mulai belajar coding Typescript?

Mari kita bahas…

## Apa itu Typescrtipt?

Typescript adalah bahasa pemrograman superset dari Javascript yang dibuat oleh Microsoft.

Superset artinya Typescript merupakan bagian dari Javascript. Semua fitur yang ada di Javascipt akan ada juga di
Typescript. Tapi tidak semua fitur di Typescript akan ada di Javascript.

![alt main_image](https://www.petanikode.com/img/typescript-pemula/typescript-superset-javascript.avif)

Fitur-fitur yang membuat Typescript lebih dari Javascript:

- Menggunakan Static Typing sehingga lebih aman.
- Memiliki fitur OOP yang lebih lengkap dibandingkan Javascript.

## Mengapa pakai Typescript?

Typescript sebenarnya hadir untuk menutupi kekurangan di Javascript.

Kekurangan apa tuh?

Jadi gini:

Javascript itu adalah scripting language, jadi nggak perlu dicompile untuk menjalankannya.

Ini kurang aman, karena kita cuma bisa tahu ada error saat program dijalankan saja (runtime).

Selain itu, Javascript juga menggunakan sistem dynamic typing untuk tipe data. Kadang ini menyebabkan kesalahan yang
sulit terdeteksi saat runtime.

Buat kamu yang belum tahu dynamic typing:

Dynamic Typing adalah metode menentukan tipe data pada variabel yang mana ditentukan secara otomatis berdasarkan isi
dari variabel tersebut.

Misalnya:

```typescript
var a = "Dian"; // variabel a akan otomatis bertpe String
var b = 12; // variabel b akan otomatis bertipe integer/number
```

Kadang saat membuat operasi tertentu dengan tipe data yang berbeda, hasilnya akan valid saat dijalankan.

Misalnya:

```typescript
var x = 12; // x adalah number
var y = true; // y adalah boolan
console.log(x + y); // hasilnya 13
```

Operasi ini dianggap valid saat dijalankan (runtime), padahal ini kurang aman dan berpotensi error. Karena itulah, kita
disarankan pakai Typescript.

## Konsep Dasar Coding dengan Typescript

Typescript adalah bahasa yang harus di-compile dulu, baru bisa dijalankan. Dengan demikian, kita bisa tahu ada error saat compile time.

Typescript di-compile menjadi Javascript dengan tsc (Typescript Compiler), setelah itu kita bisa jalankan dengan runtime Javascript seperti Nodejs, Deno, Bun, dan Web browser.

![alt main_image](https://www.petanikode.com/img/typescript-pemula/ts-to-js.avif)

Ini adalah alur yang kita pakai dalam coding dengan Typescript.

Pertama, kita menulis kode Typescript menggunakan teks editor. Seteilah itu, kita compile dengan tsc dan dijalankan dengan Nodejs.

Karena sudah tahu alur coding Typescript, sekarang mari kita:

## Persiapkan Alat untuk Belajar Typescript

Berikut ini alat yang perlu dipersiapkan untuk belajar Typescript:

1. Text Editor (rekomendasi pakai VS Code)
2. Nodejs untuk menajankan Javascript (hasil compile Typescript)
3. NPM untuk menginstal library dan compiler Typescript
4. Typescript Compiler (tsc) untuk compiler program Typescript mejadi Javascript.

Mari kita siapkan semuanya..

## 1. Install Teks Editor

Sebenarnya kita bisa pakai teks editor apa saja. Namun saya merekomendasikan pakai VSCode agar mudah mengikuti.

![alt main_image](https://www.petanikode.com/img/vscode/git-vscode.png)

Silahkan baca-baca di sini tentang cara install VS Code dan teks editor yang lainnya:

- Review Teks Editor VSCode
- Review Teks Editor Atom

## 2. Install Nodejs dan NPM

Pastikan di komputermu sudah tersintal Nodejs dan NPM, karena ini akan kita gunakan untuk menginstal Typescript.

Silahkan instal nodejs terlebih dahulu.

Caranya:

Ketik perintah berikut di terminal!

```
sudo apt install -y nodejs
```

Untuk pengguna Windows, silahkan download Nodejs di website resminya lalu tinggal diinstal saja.

Setelah itu coba periksa versi Nodejs dan NPM yang terinstal.

![alt main_image](https://www.petanikode.com/img/ionic/versi-node.png)

NPM akan ikut terinsal secara otomatis saat kita menginstal Nodejs. Jadi kamu tidak perlu mengisntalnya.


## 3. Install Typescript Compiler
   Typescript compiler bisa kita install dengan npm.

Caranya:

Ketik perintah berikut di terminal untuk menginstal tsc!

```
[sudo] npm install -g typescript
```
Gunakan sudo jika kamu di Linux dan menginstal nodejs di root

Tunggu sampai prosesnya selesai.

![alt main_image](https://www.petanikode.com/img/typescript-pemula/install-typescript.gif)

Setelah itu, silahkan ketik perintah..

```
tsc --version
```
..untuk memeriksa versi Typescript yang terinstal.

![alt content_image](https://www.petanikode.com/img/typescript-pemula/versi.avif)

Pada komputer saya, sudah terinstal Typescript versi 4.6.4.

Semua sudah siap, sekarang kita bisa mulai coding Typescript.

## Hello World: Membuat Program Typescript Pertamamu

Buatlah folder baru dengan nama belajar-typescript lalu buka folder ini dengan VSCode.

Caranya:

Klik menu `File` di VS Code, lalu pilih `Open Folder.`

![alt content_image](https://www.petanikode.com/img/typescript-pemula/vscode-open-folder.avif)

Setelah itu buat file baru bernama `hello_world.ts` di dalam folder `belajar-typescript` dengan isi sebagai berikut:

```javascript
var message:String = "Hello World";
console.log(message);
```

Berikutnya, buka terminal di VS Code dengan menekan tombol `Ctrl`+` atau buka melalui menu Terminal.

Lakukan compile program `hello_world.ts` dengan perintah ini:

```
tsc hello_world.ts
```

Hasilnya:

![alt content_image](https://www.petanikode.com/img/typescript-pemula/hasil-compile-ts.avif)


Akan ada file `hello_world.js` yang merupakan hasil compile dari program `hello_world.ts`.

Setelah itu, barulah kita bisa jalankan programnya dengan perintah:


```
node hello_world.js
```

Hasilnya:

![alt content_image](https://www.petanikode.com/img/typescript-pemula/run-program-ts.avif)

Selamat, program Typescript pertamamu berhasil dibuat.

## Apa Selanjutnya?

Kita baru saja belajar tentang dasar-dasr yang perlu diketahui di Typescript dan berhasil membuat program pertama.

Selanjutnya, kamu bisa belajar lebih dalam lagi tentang Typescript seperti.

- Cara Setup Project Typescript
- Cara menulis variabel dan tipe data di Typescript
- Operator di Typescript
- dan sebagainya.

Jika ada pertanyaan, silahkan sampaikan di kolom komentar ya.

Selamat belajar.
