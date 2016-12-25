"use strict";

var socket = io.connect();

$(document).ready(function() {
	var treeElement = "#treeImage";
	var isOn = false;
	socket.emit("turnOff", "off");

    $(treeElement).on("click", function() {
        if (isOn) {
        	socket.emit("turnOff", "off");
            $(treeElement).removeClass("on").addClass("off");
            isOn = false;
        }
        else {
        	socket.emit("turnOn", "on");
            $(treeElement).removeClass("off").addClass("on");
            isOn = true;
        }
    });
});