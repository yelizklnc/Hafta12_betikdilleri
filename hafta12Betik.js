var a=5;                    //YELİZ KILINÇ       
undefined

var b=6;
undefined

console.log(a*b)
30
******************************************************
var slogan="Yaşasın Türkiye";
undefined
alert (slogan);
undefined
alert(slogan.length);
undefined
function b(metin) { 
       for(i=0;i<metin.length;i++){   
          alert(metin[i]); 
}
       alert(metin);                                                                                                                                                                                                                                               }
undefined
b(slogan)
undefined //bu kodda her basışta harfler tek tek gelir en sonda birleşir
*******************************************************
var m = "Yaşasın Türkiye!";

function foo(parametre) {
    let slg = ''; // boş string ile başlıyoruz
    for (let i = 0; i < parametre.length; i++) {
        slg = slg + parametre[i]; // her harfi sırayla ekliyoruz
        alert(slg);               // o ana kadar oluşan string'i gösteriyoruz
    }
}

foo(m);
