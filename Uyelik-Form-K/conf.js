var ad = document.getElementById("ad");
var soyad = document.getElementById("soyad");
var username = document.getElementById("username");
var pass = document.getElementById("parola");
var retrypass = document.getElementById("retryparola");
var buton = document.getElementById("buton");

var mesaj_ver = document.getElementById('mesaj');
var hata_ver = document.getElementById('hata-ver');
var hata_ver_8 = document.getElementById('hata-ver-8');


var ad_list,soyad_list = "";




ad.addEventListener("keyup", function(){

    ad_list = ad.value;
    username.value = ("@" + ad_list + soyad_list).toLowerCase();  
    console.log(ad_list, soyad_list);

});

soyad.addEventListener("keyup", function(){

    soyad_list = soyad.value;
    username.value = ("@"+ad_list+soyad_list).toLowerCase();  

});



buton.addEventListener("click", function(){
    
    if(pass.value.length >= 8){
        
        if(pass.value === retrypass.value){
            mesaj_ver.innerText += ad_list + " " + soyad_list; 
            mesaj_ver.classList.remove("d-none");
        }

        else{
            hata_ver.classList.remove("d-none");
        }
        
    }

    else{
        hata_ver_8.classList.remove("d-none");
    }


});
