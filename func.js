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