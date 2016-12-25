"use strict";

var net = require('net');

var PORT = 1337;
var HOST = '127.0.0.1';

var client = new net.Socket();
client.connect(PORT, HOST, function() {
  console.log('CONNECTED TO: ' + HOST + ':' + PORT);
});

client.on('data', function(data) {
	socket.emit("status", data);
});

var socketio = require("socket.io");
var io;

exports.listen = function(server) {
	io = socketio.listen(server);
	io.sockets.on("connection", function(socket) {
		registerCommands(socket);
	});
};

function registerCommands(socket) {
	socket.on("turnOn", function(data) {
		sendPacket("on");
	});

	socket.on("turnOff", function(data) {
		sendPacket("off");
	});
};

function sendPacket(data) {
	client.write(data);
};
