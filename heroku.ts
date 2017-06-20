console.log("Server starting");

import Http = require("http");
import Url = require("url");

interface AssocStringString {
    [key: string]: string;
}

let port: number = process.env.PORT;
if (port == undefined)
    port = 8100;

let server: Http.Server = Http.createServer();
server.addListener("listening", handleListen);
server.addListener("request", handleRequest);
server.listen(port);

function handleListen(): void {
    console.log("Listening on port: " + port);
}

function handleRequest(_request: Http.IncomingMessage, _response: Http.ServerResponse): void {
    console.log("Request received");
    console.log(_request.url);
    _response.setHeader("Access-Control-Allow-Origin", "*");
    _response.setHeader("content-type", "text/html; charset=utf-8");

    //HTML DOCUMENT & STYLE
    _response.write("<html>");
    _response.write("<head> <link rel='stylesheet' type='text/css' href='style.css'> </head>");
    _response.write("<body>");


    //URL QUERY & OUTPUT
    let query: AssocStringString = Url.parse(_request.url, true).query;
    let selection: string = "";

    if (query["Vanilla "] != "0")
        selection += query["Vanilla "] + " scoop(s) of Vanilla, ";

    if (query["Chocolate "] != "0")
        selection += query["Chocolate "] + " scoop(s) of Chocolate, <br>";

    if (query["Stracciattela "] != "0")
        selection += query["Stracciatella "] + " scoop(s) of Stracciattela, ";

    _response.write("Hello " + query["Name"] + ", <br> Your order has been submitted! <br><br>");
    _response.write("Your order: " + selection);

    _response.end("</body></html>");
}