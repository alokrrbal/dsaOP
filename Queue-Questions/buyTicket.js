// Buy ticket


// Descripition

// There is a long waiting line of integers waitaing for there turn to buy ticket for a cricket match
// there are N operations that can be performed on this line. The operations are of following types
// E x : Integer x enter the queue (For each such operation , print the new length of the queue)
// D: The integer at front buy ticket and leave the queue (For such operation,print the element that left the queue and the new size of the queue seperated by space . If there is no element in the queue then print "-1" in place of deleted element.  )

// sample Input     Sample Output

// E 2              1
// D                2 0 
// D                -1 0
// E 3              1
// D                3 0

// Solution


// let qu=[]

// function buyTicket(arr){
//     if(arr[0]=="E"){
//         qu.push(arr[1])
//         console.log(qu.length)
//     }else if(arr[0]=="D"){
//         if(qu.length==0){
//             console.log(-1,0)
//         }else{
//             console.log(qu[0],qu.length-1)
//             qu.shift()
//         }
//     }
// }