// 1 X number enter the queue
// 2 x Number x enter the stack
// 3 Output whoever is infront of the queue
// 4 output whoever is in the top of the stack
// 5 Which person is in-front of queue get out of queue and enters the stack
// Note - If the Queue or Stack is Empty Then Output "-1"

// sample input     sample output

// 1 4              4
// 2 3              3
// 1 2              4
// 3 
// 4
// 5
// 4

//Solution


// let qu = []
// let st = []
// function nyc(arr){
//     if(arr[0]==1){
//         qu.push(arr[1])
//     }else if(arr[0]==2){
//         st.push(arr[1])
//     }else if(arr[0]==3){
//         if(qu.length==0){
//             console.log("-1")
//         }else{
//             console.log(qu[0])
//         }
//     }else if(arr[0]==4){
//         if(st.length==0){
//             console.log("-1")
//         }else{
//             console.log(st[st.length-1])
//         }
//     }else if(arr[0]==5){
//         st.push(qu.shift())
//     }
// }