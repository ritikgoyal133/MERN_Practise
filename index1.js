import http from "http";
import fs from "fs";

let indexFile;
try {
    indexFile = fs.readFileSync('index.html', 'utf-8');
} catch (err) {
    console.error('Error reading index.html:', err);
    process.exit(1);
}

let products;
try {
    const data = JSON.parse(fs.readFileSync('product.json', 'utf-8'));
    products = data.products;
} catch (err) {
    console.error('Error reading index.html:', err);
    process.exit(1);
}

// Create an HTTP server
// const server = http.createServer((req, res) => {
//     // Set the response HTTP status code to 200 (OK)
//     res.statusCode = 200;

//     // Set the Content-Type header to text/html
//     res.setHeader("Content-Type", "text/html");
//     res.setHeader("Content-Type", "application/json");

//     // Send the response body
//     // res.end(indexFile);
//     res.end(products);
// });

//Another way
const server = http.createServer((req, res) => {
    // Set the response HTTP status code to 200 (OK)

    switch (req.url) {
        case '/':
            res.setHeader("Content-Type", "text/html");
            res.statusCode = 200;
            res.end(indexFile);
            break;
        case '/product':
            res.setHeader("Content-Type", "application/json");
            res.statusCode = 200;
            // res.end(products);
            res.end(JSON.stringify(products));
            break;
        default:
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Not Found"); //Need to sent response we cant just send status code 404.
            break;
    }
});

// The server listens on port 3001
server.listen(3001, "127.0.0.1", () => {
    console.log("Server running at http://127.0.0.1:3001/");
});


