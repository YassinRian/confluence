define(function () {
	"use strict";

	function BasicControl() {}

	BasicControl.prototype.draw = function (oControlHost) {
		const cont = oControlHost.container;
		cont.innerHTML = "<h1>hallo Iman en khalid!!</h1>";
	};
	return BasicControl;
});
