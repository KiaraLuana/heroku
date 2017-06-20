"use strict";
console.log("Server starting");
const Http = require("http");
const Url = require("url");
let port = process.env.PORT;
if (port == undefined)
    port = 8100;
let server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);
function handleListen() {
    console.log("Listening on port: " + port);
}
function handleRequest(_request, _response) {
    console.log("Request received");
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");
    //HTML DOCUMENT & STYLE
    _response.write("<html>");
    _response.write("<head> <link rel='stylesheet' type='text/css' href='style.css'> </head>");
    _response.write("<body>");
    //URL QUERY & OUTPUT
    let query = Url.parse(_request.url, true).query;
    let selection;
    selection = query["Vanilla+"];
    _response.write("Hallo " + query["Name"] + ", <br> Vielen Dank für die Bestellung! <br><br>");
    _response.write(selection);
    _response.end("</body></html>");
}
//# sourceMappingURL=heroku.js.map