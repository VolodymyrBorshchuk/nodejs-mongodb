const { error } = require('console');
const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
     console.log('Server request!')
     console.log(req.url, req.method)

     res.setHeader('Content-Type', 'application/json')

    //  res.write('<head><link rel="stylesheet" href="#"></head>') //even possible add the styles in browser via server/node) Hooray!)
    //  res.write("<h1>Hello World!</h1>")
    //  res.write("<p>Hello, my name is Vova!</p>")

    const data = JSON.stringify([
        {name: 'Bill', age: 40},
        {name: 'Bob', age: 30}
    ]);

     res.end(data)
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`)
})