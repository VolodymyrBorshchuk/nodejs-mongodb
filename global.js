// setTimeout(() => {
//     console.log("hello")
// }, 2000);

// console.log(process.argv)

// console.log(`Hello, ${process.argv[2]}`)

const url = new URL('https://somesite.com/somePath/someName#test');
console.log(url.hostname)
console.log(url.href)
console.log(url.pathname)
console.log(url.hash)