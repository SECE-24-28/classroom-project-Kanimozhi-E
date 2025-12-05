a=[12,34,45]
result= a.length
console.log(result)

a=[12,34,45]
result= a.push(160,89)
console.log('the result',result)
console.log('the arr is',a)

a=[12,34,45]
result= a.unshift(100,90)
console.log('the result',result)
console.log('the arr is',a)

a=[12,34,45]
result= a.pop()
console.log('the result',result)
console.log('the arr is',a)

a=[12,34,45]
result= a.shift()
console.log('the result',result)
console.log('the arr is',a)

a=[12,34,45,415,676,78]
result= a.splice(1,1)// index,delcount
console.log('the result',result)
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.splice(2,0,90,200)// index,delcount,data1,data2...
console.log('the result',result)
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.slice(2) 
console.log('the result',result)
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.slice(1,4) 
console.log('the result',result)
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.join(" ") 
console.log('the result',result,typeof(result))
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.includes(4151) 
console.log('the result',result)
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.reverse()
console.log('the result',result)
console.log('the arr is',a)

// 0   1  2  3  4   5
a=[12,34,45,415,676,78]
result= a.indexOf(415)
console.log('the result',result)
console.log('the arr is',a)

const a=(s,p)=>{
   
    s+p
    return p-s
}
let b=a(3,4)
console.log(b)

p=[3,2,4];
 const p1=a.map((d)=>{return d*2})
 console.log(p1)
// arr=[];
// for (var i=0;i<a.length;i++){ 
//      arr.push(a[i]*2)
// }
// console.log(arr)

let nums5 = [10,1,2,4,5,12, 20, 30, 40];
 const a6=nums5.filter((d)=>{ return d%2==0})
// const a=[]
// for(let d of nums)
// {
//    if(d%2==0)
//    {
//     a.push(d)
//    }
// }
  console.log(a6)