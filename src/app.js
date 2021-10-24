console.log("Merhaba Kodlama.io")

//js type safe değildir
let dolarBugun=9.30

let dolarDun = 9.20

{
    let dolarDun=9.10
}

console.log(dolarDun)

const euroDun=11.2
//euroDun=11 BU OLMAZ

console.log(euroDun)
//array: dizi anlamına gelir []
//camelCasing ilk haf kücük sonra ki kücük, isim tanımlama yöntemi
//PascalCasing, ilk harfler büyük.  Değişkenler için pascal, fonksiyonlar için camel
let konutKredileri = ["Konut Kredisi","Emlak Konut Kredisi","Kamu Komut Kredisi","Özel Konut Kredisi"]


console.log("<ul>")
for (let i = 0; i < konutKredileri.length; i++) 
{
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("<ul>")
