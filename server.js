const http = require("http");
const port = 8081;

http.createServer((req,res)=>{
    res.writeHead(200, {"Content-Type":"text/html"});
    res.write("<h2>Hey server started running in this port</h2>");
    res.end();
})
.listen(port, () => {
    console.log(`Server running on port ${port}`);
})