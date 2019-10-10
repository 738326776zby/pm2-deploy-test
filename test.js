var http= require('http')
http.createServer((req,res)=>{
    res.end('6666端口跑起来了')
}).listen(6666)