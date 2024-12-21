var sayi1 = document.getElementById("sayi1");
var sayi2 = document.getElementById("sayi2");
var sonuc = document.getElementById("sonuc");


function hesapla(type) {
var sonucText =""

switch(type) {
    case"+":
      sonucText = Number(sayi1.value) + Number(sayi2.value);
     break;
    case"-":
      sonucText = Number(sayi1.value) - Number(sayi2.value);
      break;
    case"*":
      sonucText = Number(sayi1.value) * Number(sayi2.value);
      break;
    case"/":
      sonucText = Number(sayi1.value) / Number(sayi2.value);
}

    sonuc.innerHTML = sonucText;

}