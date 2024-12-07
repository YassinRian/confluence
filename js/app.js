define(function () {
	"use strict";

	function BasicControl() {}

	BasicControl.prototype.draw = function (oControlHost) {
		const cont = oControlHost.container;
		cont.innerHTML = "<h1>vandaag is het zondag!!</h1>";
	};
	return BasicControl;
});
