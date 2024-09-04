// 1 - Masala

// k sonini n marta chiqaradi. 


// {
//     let n = 5
//     let k = 7

//     for (i = 0; i < n; i++){
//         console.log(k)
//     }
// }

// -----------------------------------------------------------------------------------------------------------

// 2 - Masala

// a va b sonlari orasidagi sonlar a va b sonlari ham chiqadi. 


// {
//     let a = 10
//     let b = 15

//     if (a < b){
//         for (i = a; i <= b; i++){
//             console.log(i)
//         }
//     }
//     else if(a > b){
//         for (i = b; i <= a; i++){
//             console.log(i)
//         }
//     }
//     else{
//         console.log("Sonlar o'zaro teng.")
//     }
// }

// -------------------------------------------------------------------------------------------------------------

// 3 - Masala

// a va b sonlari orasidagi sonlarni teskari chiqaradi.


// {
//     let a = 10
//     let b = 15

//     if (a < b){
//         for (i = b - 1; i > a; i--){
//             console.log(i)
//         }
//     }
//     else if(a > b){
//         for (i = a; i > b; i--){
//             console.log(i)
//         }
//     }
//     else{
//         console.log("Sonlar o'zaro teng.")
//     }
// }

// -------------------------------------------------------------------------------------------------

// 4 - Masala

// Kanfetning narxini chiqaradi.


// {
//     let kanfet = 12.5

//     for (i = 1; i <= 10; i++){
//         console.log(i * kanfet)
//     }
// }

// ----------------------------------------------------------------------------------------------------

// 5 - Masala

// 1 kg gacha bolgan kanfetning narxini chiqardi.


// {
//     let kanfet = 12.5
    
//     for (i = 0.1; i <= 0.9; i += 0.1){
//         console.log(i * kanfet)
//     }
// }

// ----------------------------------------------------------------------------------------------------

// 6 - Masala

// 2 kg gacha 0.2 kg dan bolgan kanfetning narxini chiqardi.


// {
//     let kanfet = 12.5
    
//     for (i = 1.2; i <= 2; i += 0.2){
//         console.log(i * kanfet)
//     }
// }

// ------------------------------------------------------------------------------------------------------

// 7 - Masala

// a dan b gacha bolgan sonlarni yigindisini chiqaradi.


// {
//     let a = 1
//     let b = 9
//     let sum = 0

//     for (i = 1; i <= b; i++){
//         sum += i
//     }
//     console.log(sum)
// }

// -------------------------------------------------------------------------------------------------------

// 8 - Masala

// a dan b gacha bolgan sonlarni kopaytmasini chiqaradi.


// {
//     let a = 1
//     let b = 9
//     let sum = 1

//     for (i = 1; i <= b; i++){
//         sum *= i
//     }
//     console.log(sum)
// }

// -------------------------------------------------------------------------------------------------------

// 9 - Masala

// a dan b gacha bolgan sonlarni kvadratlarini yigindisini chiqaradi.


// {
//     let a = 1
//     let b = 9
//     let sum = 0

//     for (i = 1; i <= b; i++){
//         sum += i * i
//     }
//     console.log(sum)
// }

// -------------------------------------------------------------------------------------------------------

// 10 - Masala

// 1 ni n gacha bolgan sonlarga bolib beradi.


// {
//     let n = 5
//     let sum = 0

//     for (i = 1; i < n; i++){
//         sum += 1 / i
//     }
//     console.log(sum)
// }

// -------------------------------------------------------------------------------------------------------

// 11 - Masala


// {
//     let a = 12
//     let b = 5

//     for (i = b; i <= a; ){
//         a -= b
//     } 
//     console.log(a)
// }

// -----------------------------------------------------------------------------------------------------------

// 12 - Masala


// {
//     let a = 18
//     let b = 5
//     let count = 0

//     for (i = b; i <= a; ){
//         a -= b
//         count += 1
//     } 
//     console.log(count)
// }

// -----------------------------------------------------------------------------------------------------------

// 13 - Masala


// {
//     let a = 29
//     let b = 5
//     let count = 0

//     for (i = b; i <= a; ){
//         a -= b
//         count += 1
//     } 
//     console.log(a, count)
// }

// -----------------------------------------------------------------------------------------------------------

// 14 - Masala


// {
//     let n = 25
//     let i = 3

//     while (i <= n){
//         n -= i
//         if (n === 0){
//             console.log("3 ning darajasi.")
//         }
//         if (n < 3){
//             console.log("3 ning darajasi emas.")
//         }
//     }
// }

// ---------------------------------------------------------------------------------------------------------------

// 15 - Masala


// {
//     let n = 49
//     let i = 7
//     let count = 0

//     while (i <= n){
//         n /= i
//         count += 1
//     }
//     console.log(count)
// }

// --------------------------------------------------------------------------------------------------------------

// 16 - Masala


// {
//     function doubleFactorial(n) {
//         if (n < 0) {
//             return "N soni manfiy bo'lmasligi kerak";
//         }
        
//         let result = 1;
//         while (n > 0) {
//             result *= n;
//             n -= 2;
//         }
//         return result;
//     }
    
//     let n = 7; 
//     console.log(`${n}!! = ${doubleFactorial(n)}`);
    
// }

// ---------------------------------------------------------------------------------------------------------------

// 17 - Masala


// {
//     function findSmallestSquareRoot(n) {
//         let k = 1;
        
//         while (k * k < n) {
//         k++;
//         }
        
//         return k;
//         }
        
//         console.log(findSmallestSquareRoot(16)); 
//         console.log(findSmallestSquareRoot(25)); 
//         console.log(findSmallestSquareRoot(30));
// }

// -------------------------------------------------------------------------------------------------------------------

// 18 - Masala


// {
//     function findLargestSquareRoot(n) {
//         let k = 0;
        
//         while (k * k < n) {
//           k++;
//         }
        
//         return k - 1;
//       }
      
//     const n = 25;
//     const largestSquareRoot = findLargestSquareRoot(n);
//     console.log("The largest square root of " + n + " is " + largestSquareRoot);

// }

// ------------------------------------------------------------------------------------------------------------
