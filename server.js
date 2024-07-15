const http = require("http");
const port = 8081;

// HTTP methods:
// >> GET
// >> POST
// >> DELETE
// >> PATCH
// >> PUT

const student = ["name", "age", "dept"];
http.createServer((req,res)=>{

    const {method,url} = req
    if (url === "/todos"){
        if (method === "GET"){
            res.writeHead(200);
            res.write(student.toString());
            res.end();
        }
    }

    // res.writeHead(200, {"Content-Type":"text/html"});
    // res.write("<h2>Hey server started running in this port</h2>");
    // res.end();
})
.listen(port, () => {
    console.log(`Server running on port ${port}`);
})