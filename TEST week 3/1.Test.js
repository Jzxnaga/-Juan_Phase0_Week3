/**
 * Tuliskan ALGORITMA dan PSEUDOCODE Untuk menyelesaikan kasus berikut:
 *
 * Pada tahun 2020, SeaWorld ingin mengganti harga tiketnya. Saat ini, aquarium tersebut memiliki HARGA DASAR dari tiket masuk Rp 25.000.
 * Harga tiket masuk akan disesuaikan dengan umur dan status pelajar dari pengunjung tersebut.
 * Kamu harus membuat program yang akan menghitung harga tiket masuk dari tiap pengunjung. Di program ini nantinya, pengunjung akan menginput NAMA, TAHUN KELAHIRAN,
 * dan STATUS PELAJAR.
 * STATUS PELAJAR bisa diisi: true jika merupakan pelajar
 *                            false jika bukan merupakan pelajar
 *
 * -Umur < 2 tahun: HARGA TIKET GRATIS
 * -Umur 2-10:  Harga tiket seharga HARGA DASAR
 * -Umur 11-18:  Jika bukan pelajar, maka harga adalah harga dasar dikalikan 1.5
 *               Jika pelajar, maka harga adalah harga dasar dikalikan 1.25
 * -Umur 19 keatas: Jika bukan pelajar, harga adalah harga dasar dikalikan 2
 *                  Jika pelajar, maka harga adalah harga dasar dikalikan 1.5
 * -Jika umurnya diatas 120 tahun ATAU dia kelahiran dibawah tahun 1900, maka tampilkan 'Invalid Age' dan hentikan program.
 *
 * Setelah menghitung harga, maka tampilkan NAMA dan HARGA TIKET dari pengunjung tersebut.
 *
 *
 */

// Your algorithm/pseudocode here


//Jika Umur < 2 tahun tiket gratis

//Jika pelajar di isi true
// 11 <= umur => 18 harga dasar x1.25
// umur >= 19 harga dasar x1.5

//Jika bukan pelajar di isi False
// 11<= umur =>18 harga dasar x1.5
// umur >= 19 harga dasar x 2

// Jika umur > 120 / kelahiran 1900 Printl "Invalid Age" "Do Stop Program"
// Tampilkan harga tiket dan nama dari pengunjung

var nama = "Juan" ;
var status = false ;
var umur = 8 ;
var umursesungguhnya = "" ; 
var hargadasar = 25000 ;
var harga ="" ;

if(umur > 120){
    console.log ("Invalid age")
}
else if(umur < 2){
    harga = 0
}
else if (umur >= 2 && umur <= 10 && status == true || status==false ){
    var umursesungguhnya = umur
    console.log(nama+' '+umursesungguhnya+' '+hargadasar*1)
}
else if (umur >= 12 && umur <= 18 && status == true ){
    var umursesungguhnya = umur
    console.log(nama+' '+umursesungguhnya+' '+hargadasar*1.25)
}
else if (umur >= 12 && umur <= 18 && status == false ){
    var umursesungguhnya = umur
    console.log(nama+' '+umursesungguhnya+' '+hargadasar*1.5)
}
else if (umur > 19 && status == true ){
    var umursesungguhnya = umur
    console.log(nama+' '+umursesungguhnya+' '+hargadasar*1.5)
}
else if (umur > 19 && status !== false ){
    var umursesungguhnya = umur
    console.log(nama+' '+umursesungguhnya+' '+hargadasar*2)
}