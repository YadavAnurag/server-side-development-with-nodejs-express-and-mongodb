const http = require('http');
const path = require('path');
const fs = require('fs');

const PORT = 3000;
const hostname = 'localhost';


const server = http.createServer((req, res) => {
    console.log(`Request for ${req.url} by method ${req.method}`);

    if(req.method === 'GET'){
        let fileUrl = null;
        if(req.url === '/'){
            fileUrl = 'index.html';
        }else{
            fileUrl = req.url;
        }

        const filePath = path.join(__dirname, './public', fileUrl);
        const fileExt = path.extname(fileUrl);
        fs.exists(filePath, exists => {
            if(!exists){
                res.statusCode = 404;
                res.setHeader('Content-Type', 'text/html');
                res.end(`<h1> Requested ${fileUrl} not found...!</h1>`);
            }else{
                if(fileExt === '.html'){
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    fs.createReadStream(filePath).pipe(res);
                }else{
                    res.statusCode = 404;
                    res.setHeader('Content-Type', 'text/html');
                    res.end(`<h1> Requested ${fileUrl} is not a HTML file...!</h1>`);
                }
            }
        });


    }else{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<h1> Request method ${req.method} not supported...! </h1>`);
    }
});

server.listen(PORT, hostname, () => {
    console.log(`Server is running at http://${hostname}:${PORT}`);
});
