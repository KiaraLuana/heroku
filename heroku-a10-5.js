/*
Aufgabe: Aufgabe 10 - ClientServer
Name: Kiara Luana Oßwald
Matrikel: 254140
Datum: 21.06.2017
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. Er wurde nicht kopiert und auch nicht diktiert.

Dieser Code wurde mit der Hilfe von Moritz Giuliani erstellt.
*/
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
    let selection = "";
    let top = "";
    let contain = "";
    //Eissorten
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
    //Toppings
    if (query["Whipped Cream "] == "on")
        top += "with whipped cream<br>";
    if (query["Brittle "] == "on")
        top += "with brittle<br>";
    if (query["Couverture "] == "on")
        top += "with couverture<br>";
    //Container
    if (query["Cone "] != "off")
        contain += "served in a cone<br>";
    if (query["Bowl "] != "off")
        contain += "served in a bowl<br>";
    if (query["Brittle Cone "] != "off")
        contain += "served in a brittle cone<br>";
    _response.write("Thank you, " + query["Name"] + "! <br> Your order has been submitted! <br><br>");
    _response.write("<br>Your order: <br><br>" + selection + top + contain);
    _response.write("<br><br><br>Your delivery data: <br><br>Name: " + query["Name"] + "<br>Street: " + query["Street"]
        + "<br>Location: " + query["Location"] + "<br>Delivery option: " + query["Options"]);
    _response.end("</body></html>");
}
//# sourceMappingURL=heroku-a10-5.js.map