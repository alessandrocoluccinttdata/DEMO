sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("DEMO.DEMO.controller.Main", {
		onInit: function () {
			let oPurchase = this.getView().byid("EBELN");
			oPurchase.bindElement("Model>/PurchaseOrder");
 
		}
	});
});