
///////////////////////////// VALUES AND VARIABLES///////////////////////////////////
let JavaScript = 'arbitraj';
if (JavaScript === 'arbitraj')
console.log(11+20)
// script içerisinde script komutu yazdığım için çalışmamıştı. bkz sikrit.js//
// 10uncu video; value is a basically a piece of data. most fundemental unit of programming//
console.log('apple')
// kullandığımız value'lar ile variable yaratmak;
let firstName = 'Enis'
let surName = 'Ersin'
// firstName bir variable. 'Enis' ise bir value//
console.log(firstName)
console.log(surName)
// console.log komutu ile browser konsolu üzerinde komutlarımızı çalıştarabiliyoruz.//
// kodlarımızın sonuna noktalı virgül koyarsak birden fazla kodu aynı satırda çalıştırabiliyoruz.//
//////////////////////////////////////////VARIABLE ISIMLENDIRME/////////////////////////////////
// (firstName)//
// yukarıdaki variable isimlendirme şekline CamelCase deniyor.Birden fazla kelime barındıran her-//
// variable'da yeni bir kelimeye başlarken büyük harf kullanılır. örneğin ==> 'let EnisErsin' gibi//
// variable isimleri rakam ile başlayamaz örn; 'let 35enis' gibi//
// variable isimleri içerisinde sadece rakamlar-harfler-alt çizgiler- ve dolar işareti bulunabilir.//
// variable isimlerine büyük harflerle başlanmaz- en azından şimdilik.//
// /* yazarak devamındaki tüm satırları commente çevirebilir daha sonra */ 
console.log(firstName);
console.log(surName); 
let m_A_$ = 'yarrow'  ; console.log(m_A_$);
// variable oluştururken isimlendirmemiz daha açıklayıcı olmalı ki geriye dönüp baktığımızda anlayalım//


/////////////////////////////////////////DATA TYPES//////////////////////////////////////////////////////
///////////////////////////////////PRIMITIVE DATA TYPES//////////////////////////////////////////////////
////////////////////////1NUMBER-2STRING-3BOOLEAN-4UNDEFINED-5NULL-6SYMBOL-7BIG INT.//////////////////////
// 1.Number: Floating point numbers >> let age = 28;
// 2.String: Sequence of characters,used for text >> let firstName = 'Enis'; // 
// Stringler yazılırken her zaman quote ile yazılır. ' koymayı unutmayalım.//
// 3.Boolean: Logical type that can only be true or false,used taking desicions >> let fullAge = true;//
// bu üç data tipi en çok kullanılanlar, geri kalan kısmı ise biraz daha karışık//
// 4.Undefined: Value taken by a variable that is not defined yet. >> let children;//
// 5.Null: means empty value - şimdilik //
// 6.Symbol (ES2015): Value that is unique and cannot be changed [Not useful for now]// 
// 7.BigInt (ES2020): Larger integers than the number type can hold.//

let JavaScriptIsFun = true;
console.log(JavaScriptIsFun);
console.log(typeof true);
console.log(typeof 31);
console.log(typeof JavaScriptIsFun);

JavaScriptIsFun = 'YESSIR';
console.log(typeof JavaScriptIsFun);

// yeni variable oluştururken let komutu kullanıyoruz.
// fakat daha önceden oluşturduğumuz variable'ı değiştirmek için **bkz:str.51

let year; //undefined variable yarattık.
console.log(year); // konsol komutuna bakarsak undefined olduğunu görebiliriz.
console.log(typeof year); //undefined olduğunu görebiliriz.
year = 1994; //undefined datayı numaraya çevirdik.
console.log(year); //konsolda 1994 yazdığını görebiliriz.
console.log(typeof year); //konsolda data tipini number olarak görebiliriz.
year = '1994' //number olan datayı quote koyarak stringe çevirdik.
console.log(year);
console.log(typeof year); //konsolda string olduğunu görebiliriz.


/////////////////////////////////////////LET, CONST AND VAR//////////////////////////////////////////////
// let ve const keywordleri Js'ye ES6'da gelmiş,yani modern Js komutları.
// also var keyword is the old way of declaring variables.
// !!the value in a const variable cannot be changed.!!

let age = 31; //let komutu ile age'i 31 olarak deklare ettik.
age = 30;     //31 olan age'i 30 olarak değiştirdik.
const birthYear = 1994;
console.log (birthYear);
// birthYear = 1990; //const variable'ı değiştirdiğimizde >>Uncaught TypeError: Assignment to 
// constant variable. hatası alıyoruz. Constant >> Sabit
// değişebilecek valueları; let komutu ile, sabit valueları ise const komutu ile deklare etmeli.
// const komutunda empty value girmek illegal.
// var komutu da let gibi daha sonrada modifiye edilebilir bi yöntem fakat eski dilden gelen bir komut.
// daha sonra öğreneceğiz.
var job = 'bodybuilder';
job = 'nurse';
console.log(job); 
// let is block-scoped
// var is function-scoped, daha sonra anlamlarını öğreneceğiz.


/////////////////////////////////////////BASIC OPERATORS/////////////////////////////////////////////////
// Operators basically allows us to transform values.
///// Mathematical or Arithmetic Operators//////
const ageEnis = 2022 - 1994;
console.log(ageEnis);
const ageSabih = 2022 - 1995;
console.log(ageEnis - ageSabih); // valuelarını girdiğimiz variableları birbirinden çıkarttım. sonuç doğru.
console.log(ageEnis, ageSabih);  // aralarına virgül koyarak birden fazla variable'ı aynı satırda görebiliyoruz.
// 92 ve 94. satırda yaş hesaplaması yaparken şu anki yılı kullandık. kod içerisinde yılı değiştirecek olsay-
// dık eğer her ikisini de değiştirmek zorunda kalacaktık. Bunun yerine const now = 2022 olarak yılı belirle-
// mek daha pratik bir çözüm oluşturuyor. örnek aşağıda;
const now = 2022;
const ageEnis1 = now - 1994;
const ageSabih1 = now - 1995;
console.log(ageEnis1, ageSabih1);
//operatör kullanarak stringleri birleştirmek de mümkün
let firstName1 = 'dj'; 
let surName1 = 'kene';
console.log(firstName1 + surName1); // sonuç djkene. >> aralarında boşluk olmasını istersek eğer;
console.log(firstName1 + ' ' + surName1); // sonuç dj_kene > quote arasına boşluk koyduk.
///// Typeof Operators /////
//typeof operator basically gives us the type of the value örn;
console.log(typeof now);  //now'u 100. satırda 2022 olarak deklare etmiştik yani >> number
console.log(typeof firstName1); //bkz.str 105 >> string
///// Assignment Operators /////
let x = 31 * 1; // bir çarpım işleminin sonucunu x variable'ına atadık.
console.log(x);
x += 9; // x = x + 9 >> 40 // += operatörünün bir örneği.
console.log(x);
x *= 3; // x = x * 3 >> 120 //*= operatörünün bir örneği.
console.log(x);
x++; // ++ operatörüne kısaca +1 diyelim.
console.log(x);
x--; // -- operatörüne de -1 diyelim.
console.log(x);









