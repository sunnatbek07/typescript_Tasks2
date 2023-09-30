"use strict";
// 1
// const arr: number[] = [];
// const n: number = 5;
// for(let i = 0; i < n; i++){
//     arr.push(i);
// }
// console.log(arr)
// 2
// const n: number = 5;
// const arr: number[] = [];
// for(let i = 0; i < n; i++){
//     arr.push(2 ** i);
// }
// console.log(arr)
// 3
// let sum: number = 0;
// const arr: number[] = [1, 2, 3, 25];
// for(let i = 0; i < arr.length; i++){
//     sum += arr[i];
// }
// console.log(sum)
// 4
// const arr: number[] = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// function countArr(arr: number[]): string{
//     let sumToq: number = 0;
//     let sumJuft: number = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 1){
//             sumToq += arr[i];
//         }else{
//             sumJuft -= arr[i];
//         }
//     }
//     return `sumToq = ${sumToq} va sumJufy = ${sumJuft}`;
// }
// console.log(countArr(arr));
// 5
// const n: number = 5;
// function countArr(n:number):number {
//     const arr: number [] = [];
//     let sum: number = 0;
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(countArr(n))
// 6
// const n: number = 5;
// function showArr(n:number):number[] | number {
//     const arr: number [] = [];
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     return arr.reverse();
// }
// console.log(showArr(n))
// 7
// 8
// const n: number = 10;
// const k: number = 1;
// const l: number = 4;
// function showArr(n: number, k: number, l: number): number {
//     const arr: number[] = [];
//     let sum: number = 0;
//     if (k >= 0 && l < n) {
//         for (let i = 0; i < n; i++) {
//             arr.push(Math.floor(Math.random() * 10));
//             if (i >= k && i <= l) {
//                 sum += arr[i];
//             }
//         }
//         console.log(arr);
//     } else {
//         console.error("K va L massivning chegarasidan tashqari");
//     }
//     return sum;
// }
// console.log(showArr(n, k, l));
// 9
// const n: number = 5;
// function showArr(n:number):number {
//     const arr: number [] = [];
//     let maxN: number = 0;
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 0){   
//             // console.log(arr[i])
//             maxN = Math.max(arr[i], maxN);
//         }
//     }
//     return maxN;
// }
// console.log(showArr(n))
// 10
// const n: number = 5;
// function showArr(n:number):number {
//     const arr: number [] = [];
//     let minN: number = Infinity;
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 0){   
//             minN = Math.min(minN, arr[i]);
//         }
//     }
//     return minN;
// }
// console.log(showArr(n))
// 11
// const n: number = 5;
// function showArr(n:number):number {
//     const arr: number [] = [];
//     let maxN: number = 0;
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 1){   
//             // console.log(arr[i])
//             maxN = Math.max(arr[i], maxN);
//         }
//     }
//     return maxN;
// }
// console.log(showArr(n))
// 12
// const n: number = 5;
// function showArr(n:number):number {
//     const arr: number [] = [];
//     let sum: number = 0;
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }
// console.log(showArr(n))
// 13
// const n: number = 6;
// function showArr(n:number): number[] {
//     const arr: number [] = [];
//     const arr2: number [] = [];
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 1){   
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// console.log(showArr(n))
// 14
// 15
// const n: number = 6;
// function showArr(n:number): number[] {
//     const arr: number [] = [];
//     const arr2: number [] = [];
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     console.log(arr)
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 1){   
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// console.log(showArr(n))
// 16
// const arr: (number | string) [] = [1, "ho", 2, "hello", "red", 34];
// function showArr(arr:(number | string)[]): string[] {
//     const arr2: string[] = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === "string"){   
//             arr2.push(arr[i]);
//         }
//     }
//     return arr2;
// }
// console.log(showArr(arr))
// 17
// const a: number[] = [1, 2, 3, 4, 6, 22, 13, 14, 2];
// const b: number[] = [22, 2, 44, 40, 1];
// function checkArr(a:number[], b:number[]):number[]{
//     return Array.from(new Set(a.filter(value => b.includes(value))));
// }
// console.log(checkArr(a, b))
// 18
// const n:number = 5;
// function listArr(n:number): number[] | number {
//     const arr: number[] = [];
//     for(let i = 0; i < n; i++){
//         arr.push(prompt("Enter the number = "));
//     }
//     return arr;
// }
// console.log(listArr(n))
// 19
// const n:number = 5;
// function listArr(n:number): number[] | number {
//     const arr: number[] = [];
//     const sum: number = 0;
//     for(let i = 0; i < n; i++){
//         arr.push(prompt("Enter the number = "));
//     }
//     for(let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(listArr(n))
// 21
// const n: number = 6;
// function showArr(n:number): number[] {
//     const arr: number [] = [];
//     for(let i = 0; i < n; i++){
//         arr.push(Math.floor(Math.random() * 10));
//     }
//     
//     return arr[arr.length - 1];
// }
// console.log(showArr(n))
// 22
const n = 10;
function showArr(n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    console.log(arr);
    return Array.from(new Set(arr));
}
console.log(showArr(n));
