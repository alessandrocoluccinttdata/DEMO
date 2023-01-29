sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function (Controller, Device) {
	"use strict";

	return Controller.extend("DEMO.DEMO.controller.Main", {
		onInit: function () {
			let oPurchase = this.getView().byId("EBELN");
			oPurchase.bindElement("oDataModel>/A_PurchaseOrder('4500000011')");
			
			var Json = {
				"PurchaseOrder": 11
			};
			this.getView().getModel("jsonModel").setProperty("/A_PurchaseOrder", "oDataModel>/A_PurchaseOrder('4500000011')");
		}
	});
});