
/*
JavaScript Ödev - Pratik
Değişken, for ve if kullanılarak aşağıdaki senaryo oluşturulacak.
Örnek çıktı şu şekilde olacaktır: Ömer doğdu -> Ömer 1 yaşında -> Ömer 2 yaşında -> ... -> Ömer reşit oldu -> Ömer 30 yaşında evlendi
Yapılacaklar:

ad, resitYas, evlenecegiYas değişkenleri oluşturulacak
evlenecegiYas değişkeni promp() ile kullanıcıya sorulacak
for ile 0'dan 35'e kadar döngü oluşturulacak
Kişinin yaşı 0 ise doğdu, 18 ise reşit oldu, 'evlenecegiYas' ise konsola evlendi yazacak

*/

let ad = "Memo";
let resitYas = 18;
let evlenecegiYas = prompt("Evleneceği Yaş?");


for (var i=0; i < 35; i++) {
    if (i == 0) {
        console.log(ad + " doğdu.")
    }

    if (i == 18) {
        console.log(ad + " Reşit oldu.")
    }

    if (i == evlenecegiYas) {
        console.log(ad + " evlendi.")
    }

    else {
        console.log(ad + " " + i + " yaşında.")
    }
}