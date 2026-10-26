// let son1 = 11;
// let son2 = 19;

// let max = (son2 > son1 && son2) || son1;
// let min = (son2 < son1 && son2) || son1;

// console.log(max);
// console.log(min);

//===================================================================//

// 1-masala. Imtihon natijasini aniqlash //

let ball =100;
if (ball < 0 || ball > 100) {
    console.log("Bunaqa bal yo'q");
} else if(ball >= 90 && ball <=100){
    console.log("siz 5 baxo oldiz");
} else if(ball >= 70){
    console.log("siz 4 baxo oldiz");
} else if(ball >= 60){
    console.log("siz 3 baxo oldiz");
} else if(ball >= 50){
    console.log("siz yeqildingiz");
} else{
    console.log("basharez bilan yerga tushdiz");
    
}

//===================================================================//

// 2-masala. Login va parol tekshiruvi //

let login = "admin";
let password = "12345";
let isBlocked = false;

if (isBlocked) {
    console.log("Hisobingiz bloklangan");
} else if (login === "admin" && password === "12345" && !isBlocked) {
    console.log("Xush kelibsiz!");
} else if (login !== "admin") {
    console.log("Login noto'g'ri");
} else {
    console.log("Parol noto'g'ri");
}

//====================================================================//

// 3-masala. Chegirmali xarid //

let total = 650000;
let isMember = true;

let chegirmaFoizi = 0;

if (total >= 1000000) {
    chegirmaFoizi = 20;
} else if (total >= 500000 && isMember) {
    chegirmaFoizi = 15;
} else if (total >= 500000 && !isMember) {
    chegirmaFoizi = 10;
} else if (total >= 200000) {
    chegirmaFoizi = 5;
} else {
    chegirmaFoizi = 0;
}

let chegirmaSummasi = (total * chegirmaFoizi) / 100;
let yakuniySumma = total - chegirmaSummasi;

console.log("Chegirma foizi: " + chegirmaFoizi + "%");
console.log("Yakuniy to'lov miqdori: " + yakuniySumma + " so'm");

//=======================================================================//

// 4-masala. Uchburchak mavjudligini tekshirish //

let q = 5;
let d = 7;
let k = 9;

if (q <= 0 || d <= 0 || k <= 0) {
    console.log("Tomonlar noto'g'ri");
} else if ((q + d > k) && (q + d > k) && (d + k > q)) {
    console.log("Uchburchak mavjud");
} else {
    console.log("Uchburchak mavjud emas");
}

//=======================================================================//

// 5-masala. Yetkazib berish narxi //

let orderPrice = 180000;
let region = "tashkent";
let isExpress = true;

let shippingPrice = 0;

if (region === "tashkent") {
    if (orderPrice >= 200000) {
        shippingPrice = 0;
    } else {
        shippingPrice = 15000;
    }
} else {
    shippingPrice = 25000;
}

if (isExpress) {
    shippingPrice = shippingPrice + 20000;
}

let totalPrice = orderPrice + shippingPrice;

console.log("Yetkazib berish narxi: " + shippingPrice + " so'm");
console.log("Umumiy to'lov: " + totalPrice + " so'm");

//=======================================================================//

// 6-masala. Ishga qabul qilish //

let age = 22;
let experience = 2;
let englishLevel = "B2";
let hasCertificate = true;

if (age < 18) {
    console.log("Yosh talabiga mos emas");
} else if (age >= 18 && experience >= 2 && (englishLevel === "B2" || englishLevel === "C1")) {
    console.log("Suhbatga taklif qilindi");
} else if (experience >= 1 && hasCertificate) {
    console.log("Qo'shimcha ko'rib chiqiladi");
} else {
    console.log("Talablarga mos emas");
}

//=======================================================================//

// 7-masala. Bankomatdan pul yechish //

let balance = 850000;
let amount = 300000;
let cardBlocked = false;

if (cardBlocked) {
    console.log("Karta bloklangan");
} else if (amount <= 0) {
    console.log("Summa noto'g'ri");
} else if (amount > 1000000) {
    console.log("Kunlik limitdan oshdi");
} else if (balance < amount) {
    console.log("Mablag' yetarli emas");
} else {
    balance = balance - amount;
    console.log("Pul muvaffaqiyatli yechildi. Qolgan balans: " + balance + " so'm");
}

//=======================================================================//

// 8-masala. Sonlarni tahlil qilish //

let a = 12;
let b = 12;
let c = 5;

if (a < 0 || b < 0 || c < 0) {
    console.log("Manfiy son mavjud");
} else if (a === b && b === c) {
    console.log("Barcha sonlar teng");
} else if (a === b || a === c || b === c) {
    console.log("Ikkita son teng");
} else {
    console.log("Barcha sonlar har xil");
}

//=======================================================================//

// 9-masala. Talabaning stipendiyasi //

let averageScore = 88;
let attendance = 92;
let hasWarning = false;

if (attendance < 60 || hasWarning) {
    console.log("Stipendiya berilmaydi");
} else if (averageScore >= 90 && attendance >= 90) {
    console.log("Yuqori stipendiya");
} else if (averageScore >= 75 && attendance >= 80) {
    console.log("Oddiy stipendiya");
} else {
    console.log("Talablar bajarilmadi");
}
