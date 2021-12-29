const response = await fetch("https://httpbin.org/ip")
const result = await response.json()
console.log(`Your IP is ${result.origin}`)
