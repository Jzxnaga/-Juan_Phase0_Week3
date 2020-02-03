/**
 * Instruksi
 *
 * ===============
 * Count Stuff
 * ===============
 *
 * Pada program ini kalian harus mencari beberapa hal yang terdapat di dalam sebuah string.
 * Kalian diberikan 2 input, 'line' dan 'param'.
 * String line berisi angka (0-9), huruf (lowercase) atau karakter lain yang sembarang ('/', '#', '@', '$', dll). String ini merupakan string yang akan kalian proses.
 * Contoh line: '123abcdfghi9657$%^&*'
 * String param berisi parameter yang akan menentukan barang yang kalian cari di dalam string tersebut.
 * param bisa berupa: - 'sigma'
 *                         jika param berupa sigma, maka jumlahkan semua angka di dalam string.
 *                     - 'letters'
 *                         jika param berupa letters, maka carilah jumlah huruf di dalam string.
 *                     - 'length'
 *                         jika param berupa length, maka program akan mengoutput panjang dari elemen string yang berupa huruf dan angka.
 *                     - Selain ketiga param diatas, maka program akan mengoutput 'Parameter salah'
 * Contoh
 *
 * 1.
 * 'line' : 'abcdefghijklmonjasd'
 * 'param': 'letters'
 *
 * Output: 19
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'sigma'
 *
 * Output: 0
 *
 * 'line': 'abcdefghijklmonjasd'
 * 'param': 'length'
 *
 * Output: 19
 *
 * 2. line: 'abcde12345
 *
 * param : 'sigma'
 *
 * Output: 15
 *
 * line: 'abcde12345
 *
 * param : 'length'
 *
 * Output: 10
 *
 * RULES :
 * - HANYA BOLEH MENGGUNAKAN BUILT-IN METHOD / FUNCTION dari tipe data Number
 *
 */

var lines = 'abcde&12345' //kalian bisa mengubah isi dari 'line' untuk menguji contoh-contoh string yang lainnya
var param = '' //kalian bisa mengisi param ini dengan 'sigma', 'letters', 'length', dll
var param2 = ''
// // //tulis kode kalian disini

var huruf = 'abcdefghijklmnopqrstuvwxyz';
var angka = '0123456789';
var jumlah = 0;
var cekhuruf = 0;
var ceklength = 0;

if (param == 'sigma') {
  for (i = 0; i < line.length; i++) {
    let numbering = Number(line[i]);
    if (numbering) {
      jumlah += numbering;
    }
  }
  console.log(jumlah);
} else if (param == 'letters') {
  for (j = 0; j < line.length; j++) {
    for (k = 0; k < huruf.length; k++) {
      if (line[j] == huruf[k]) {
        cekhuruf++;
      }
    }
  }
  console.log(cekhuruf);
} else if (param == 'length') {
  for (a = 0; a < line.length; a++) {
    for (b = 0; b < huruf.length; b++) {
      if (line[a] == huruf[b]) {
        ceklength++;
      }
    }
    for (c = 0; c < angka.length; c++) {
      if (line[a] == angka[b]) {
        ceklength++;
      }
    }
  }
  console.log(ceklength);
}