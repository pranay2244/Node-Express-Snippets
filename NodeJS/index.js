const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    if (req.url == '/') {
        res.write("Hello World\n");
        res.end();
    } else if (req.url == '/index') {
        fs.readFile('index.html', (err, data) => {
            if (err)
                alert(err.toString());
            else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.write(data);
                res.end();
            }
        })
    } else if (req.url == '/json') {
        const day = {
            date: "27-04-2021",
            temp: 30,
            unit: "C",
            day: "Tuesday"
        };
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.write(JSON.stringify(day));
        res.end();
    } else {
        try {

            var url = req.url.toString().split('?');
            var values = url[1].split("&");
            var value1 = values[0].split('=')[1];
            var value2 = values[1].split('=')[1];

            var ans = parseInt(value1) + parseInt(value2);
            console.log(ans);
            res.end();
        } catch (err) {}
    }
}).listen(1112);