                // 1-MISOL:

// Kiritish: 
// n = 10
// ["qo'ng'iroq","qo'ng'iroq","qo'ng'iroq"]
// Chiqish: [10,11,12]
//  Izoh: 
//  counter() = 10 // counter() birinchi marta chaqirilganda u n ni qaytaradi.
// counter() = 11 // Oldingi vaqtdan 1 ta ko'proq qaytaradi.
// counter() = 12 // Oldingi vaqtdan 1 ta ko'proq qaytaradi.
// 2-misol:

// Kiritish: 
// n = -2
// ["qo'ng'iroq","qo'ng'iroq","qo'ng'iroq","qo'ng'iroq","qo'ng'iroq"]
// Chiqish: [-2,-1,0,1,2]
//  Izoh: counter() dastlab -2 ni qaytaradi. Keyin har bir keyingi qo'ng'iroqdan keyin ortadi.


// let n = 10;
// let arr = ["salom", "salom", "salom"];

// let counter=n;
// let array=[];

// for (let i = 0; i < arr.length; i++) {
//     array.push(counter);
//     counter++;
// }

// console.log(array);


            // 2-MASALA 

// Butun sonli massiv arrva filtrlash funksiyasi berilgan fn, filtrlangan massivni qaytaring filteredArr.

// Funktsiya fnbir yoki ikkita argumentni oladi:

// arr[i]- dan raqamarr
// i - indeksiarr[i]
// filteredArrarrfaqat iboradan haqiqiyfn(arr[i], i) qiymatga baholanadigan elementlarni o'z ichiga olishi kerak  . Haqiqiy  qiymat  qaytariladigan   qiymatdir  .Boolean(value)true

// Iltimos, uni o'rnatilgan Array.filterusulsiz hal qiling.

 

// 1-misol:

// Kirish: arr = [0,10,20,30], fn = funktsiya kattaroq10(n) { qaytish n > 10; }
//  Chiqish: [20,30]
//  Izoh:
// const newArray = filter(arr, fn); // [20, 30]
// Funktsiya 10 dan katta bo'lmagan qiymatlarni filtrlaydi
// 2-misol:

// Kirish: arr = [1,2,3], fn = funktsiya firstIndex(n, i) { return i === 0; }
//  Chiqish: [1]
//  Izoh:
// fn har bir elementning indeksini ham qabul qilishi mumkin
// Bunday holda, funktsiya 0 indeksida bo'lmagan elementlarni olib tashlaydi
// 3-misol:

// Kirish: arr = [-2,-1,0,1,2], fn = funktsiya plusOne(n) { qaytish n + 1 }
//  Chiqish: [-2,0,1,2]
//  Izoh:
// 0 kabi noto'g'ri qiymatlarni filtrlash kerak

// 2634-MISOL

// let arr = [0, 10, 20, 30];
// let newArray = arr.filter(value => {
//     return value>10;
// });

// console.log(newArray);

// let arr=[-2,-1,0,1,2];
// let newArray=arr.map(value => {
//     if (value==-2) {
//         return value=-2;
//     }
//     return value+1;
// });

// newArray.pop();

// console.log(newArray);


// 2619-MISOL 
// 1-misol:

// Kirish: nums = [null, {}, 3]
//  Chiqish: 3
//  Izoh: nums.last() ga qo'ng'iroq qilish oxirgi elementni qaytarishi kerak: 3.
// 2-misol:

// Kirish: nums = []
//  Chiqish: -1
//  Izoh: Elementlar yo'qligi sababli -1 ni qaytaring.

// let nums=[2,3,4,2,21];

// let arr=nums.join(" ");
// let last=arr.length-1;
// let arrSearch=arr.search(arr[last]);

// console.log(arrSearch);
 

// 2648-MISOL 0, 1, 1, 2, 3, 5, 8, 13, 21

// function fibonacci(n){
//     let series=[0, 1];

//     if (n<=2) {
//         return series.slice(0, n);
//     };

//     for (let i = 2; i < n; i++) {
//         series[i]=series[i-1]+series[i-2];        
//     };

//     return series;

// };


// console.log(fibonacci(6));



                                // 4-OY 11-DARS 
// 1-misol revers

// let string=prompt("Kiriting");

// let array=string.split('');
// let newArr=array.reverse();
// let reverseArr=newArr.join('');

// console.log(reverseArr);

// 2-misol longest 
// let str="Assalomu Alaykum bolalar";

// function longest(arg){
//     let arr=arg.split(" ");

//     let engUzunUzunlik=0;
//     let engUzunSoz="";

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i].length>engUzunUzunlik) {
//             engUzunUzunlik=arr[i].length;
//             engUzunSoz=arr[i];
//         }
//     }

//     return engUzunSoz;
// }


// console.log(longest(str));


// 3-misol count vowels
// let str="salom dunyo";//2 ta unli

// const vowels=function(arg) {
//     let counter=0;
//     let newstr=[];
//     for (let i = 0; i < arg.length; i++) {

//         if (arg[i]=="a"||arg[i]=="e"||arg[i]=="i"||arg[i]=="o"||arg[i]=="u") {
//             counter++;
//             newstr.push(arg[i]);
//         }
//     }

//     return newstr+" unlilar soni => "+counter+" ta";
  
// };

// console.log(vowels(str));

// 4-misol palindrom 
// let str="kiyik";

// const palindrom=(arg) => {
//     let newstr=arg.split('');
//     let arr=newstr.reverse();
//     let String=arr.join('');

//     if (String==arg) {
//         return true;
//     } else {
//         return false;
//     };
// };

// console.log(palindrom(str));

// 5-misol remove duplicate 
// let mass=["salom", 23, "write", 12, "salom", 12];

// const removeDuplicate=(arg) => {
//     let newMass=arg.filter((v, i) => {
//         return arg.indexOf(v) === i;
//     });

//     return newMass;
// };


// console.log(removeDuplicate(mass));


// 6-misol capitalize words
// let str="salom dunyo";

// function capitalize(arg){
//     let array=arg.split(" ");
//     let newstr=[];
//     for (let i = 0; i < array.length; i++) {
//            newstr.push(array[i].charAt().toUpperCase()+array[i].slice(1, array[i].length));
//     }

//     return newstr.join(' ');
// };

// console.log(capitalize(str));


// 7-misol find the missing number 
// let arr=[0, 1, 2, 3, 8];//4, 5, 6, 7
// arr.splice(4, 0, 4, 5, 6, 7);

// console.log(arr);


// 8-misol rotate array 
// let arr=[1, 2, 3, 4, 5, 6];

// function rotate(arg) {
//     for (const value of arg) {
//         console.log(value[arg]);
//     }
// };


// rotate(arr);

// 9-misol concat
// let arr1=[1,2,3,4];
// let arr2=[5,6,7,8];

// const marge=function(arg1, arg2, arg3) {
//    return arg3=arg1.concat(arg2);
// };

// console.log(marge(arr1, arr2));


// 10-misol 
// anagramma nimaligiga tushunmadim?