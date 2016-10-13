//1- primer ejemplo con express
/*
var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); //el tutorial indicaba exp.createServer()

//app.use(app.router);
app.use(exp.static(__dirname + "/public"));

app.get("/",function(request,response){
	response.send("hola");
});
console.log("Servidor escuchando en "+host+":"+port);
// 127.0.0.1:1337
app.listen(port,host);
*/

// Respuesta: Servidor escuchando en 127.0.0.1:1337


//2- Devolver la cadena indicada en la url con
//este formato /hola/juanito


/*

var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 

//app.use(app.router);
app.use(exp.static(__dirname + "/public"));

app.get("/",function(request,response){
	response.send("hola");
});
app.get("/hola/:text",function(request,response){
	response.send("Hola "+request.params.text);
});
console.log("Servidor escuchando en "+host+":"+port);
app.listen(port,host);
*/

// Respuesta: Hola Juanito




//3-Devolver los valores según un parámetro indicado
//en la url
//Puedes utilizar console.log para que el servidor muestre mensajes
//Observa que el servidor acepta tres rutas / /hola/pepito y /user/numero
/*
var fs=require("fs");
var config=JSON.parse(fs.readFileSync("config.json"));
var host=config.host;
var port=config.port;
var exp=require("express");
var app=exp(); 

//app.use(app.router);
app.use(exp.static(__dirname + "/public"));

app.get("/",function(request,response){
	response.send("hola");
});
app.get("/hola/:text",function(request,response){
	response.send("Hola "+request.params.text);
});
var users ={
	"1":{
		"name":"Pepe Lopez",
		"cuenta":"@pepe"
	},
	"2":{
		"name":"Juan Perez",
		"cuenta":"@juan"
	}
}
app.get("/user/:id",function(request,response){
	var user=users[request.params.id];
	if(user){
		response.send("Usuario: "+user.name+" cuenta: "+user.cuenta);
	}
	else{
		response.send("usuario no existe");
	}
	response.send
})
app.listen(port,host);
*/

// url: http://127.0.0.1:1337/user/1.  respuesta: Usuario: Pepe Lopez cuenta: @pepe
// url: http://127.0.0.1:1337/user/2.  respuesta: Usuario: Juan Perez cuenta: @juan
// url: http://127.0.0.1:1337/user/2.  respuesta: usuario no existe
// url: http://127.0.0.1:1337.  respuesta: hola
// url: http://127.0.0.1:1337/luis.  Cannot GET /luis

