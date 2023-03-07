// Unique Gift

//Descripition


// You are visiting a friend at her housewarming party. When you arrives at her house, you see a queue of people standing outside waiting to go inside. Everybody is holding a present in their hands , and since there arent many gift shops nearby, most of them end up buying the same gift for her . As more and more people keep joining the queue , you are curious to find the first uniue gift in the line. You sit and examine the row after a new person arrives  when he does youe examine the  queue  from front to back to find out which is the first different gift and add it to your list

// Note -> If after a new person arrives no gift is unique in the queue add "#" to the output

//Sample Input    Sample Output

// abadbc           aabbdd
// abcabc           aaabc#


//Solution

// function ug(str){
//     let obj={}
//     let qu=[]
//     let ans=[]
//     for(let i=0;i<str.length;i++){
//         if(obj[str[i]]==undefined){
//             obj[str[i]]=1
//         }else{
//             obj[str[i]]+=1
//         }
//         qu.push(str[i])
//         while(qu.length!=0){
//             if(obj[qu[0]]==1){
//                 break;
//             }
//             qu.shift()
//         }
//         if(qu.length==0){
//             ans.push("#")
//         }else{
//             ans.push(qu[0])
//         }
//     }
//     console.log(ans.join(""))
    
// }