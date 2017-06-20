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
        selection += query["Vanilla "] + " scoop(s) of Vanilla <br>";

    if (query["Chocolate "] != "0")
        selection += query["Chocolate "] + " scoop(s) of Chocolate <br>";

    if (query["Stracciatella "] != "0")
        selection += query["Stracciatella "] + " scoop(s) of Stracciatella <br>";
    
    if (query["Pistachio "] != "0")
        selection += query["Pistachio "] + " scoop(s) of Pistachio <br>";
    
    if (query["Cinnamon "] != "0")
        selection += query["Cinnamon "] + " scoop(s) of Cinnamon <br>";

    if (query["Tiramisu "] != "0")
        selection += query["Tiramisu "] + " scoop(s) of Tiramisu <br>";

    if (query["Coconut "] != "0")
        selection += query["Coconut "] + " scoop(s) of Coconut <br>";
    
    if (query["Cookies "] != "0")
        selection += query["Cookies "] + " scoop(s) of Cookies <br>";
    
    if (query["Coffee "] != "0")
        selection += query["Coffee "] + " scoop(s) of Coffee <br>";
    
    if (query["Caramel "] != "0")
        selection += query["Caramel "] + " scoop(s) of Caramel <br>";
    
    if (query["Bueno "] != "0")
        selection += query["Bueno "] + " scoop(s) of Bueno <br>";

    if (query["Rafaello "] != "0")
        selection += query["Rafaello "] + " scoop(s) of Rafaello <br>";

    if (query["Almond "] != "0")
        selection += query["Almond "] + " scoop(s) of Almond <br>";
    
    if (query["Hazelnut "] != "0")
        selection += query["Hazelnut "] + " scoop(s) of Hazelnut <br>";

    _response.write("Hello " + query["Name"] + ", <br> Your order has been submitted! <br><br>");
    _response.write("Your order: <br><br>" + selection);
    _response.write("<br>Your delivery data: <br><br> " + query["Street"]);
    _response.end("</body></html>");
}