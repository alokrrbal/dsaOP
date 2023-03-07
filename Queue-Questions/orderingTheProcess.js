// Descripition

// You are the operations manager at Masai School, and N number of process have to be executed by you. All the process have a unique number assigned them from 1 to N.

// You are given two arrays

// 1-> The first array denotes the calling ondragover, in which the processes are being started
// 2-> The second array denotes theidealorder in which all the processes should have been executed
// Note -> Executing a process , or changing the posotion takes 1 unit of time 

// Sample Input   Sample Output

// 3                    5
// 3 2 1 
// 1 3 2

// Solution

// function OrderingProcess(n,arr1,arr2){
//     let i=0
//     let co=0
//     while(arr1.length!=0){
//         if(arr1[0]==arr2[i]){
//             arr1.shift()
//             i++
//         }else{
//             arr1.push(arr1.shift())
//         }
        
//         co++
//     }
//     console.log(co)
// }