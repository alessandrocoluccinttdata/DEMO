sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function (Controller, Device) {
	"use strict";

	return Controller.extend("DEMO.DEMO.controller.Main", {
		onInit: function () {
			let oPurchase = this.getView().byId("EBELN");
			oPurchase.bindElement("oDataModel>/A_PurchaseOrder('4500000011')");
			let arrayPo = [];
			let elementPo1 = { PurchaseOrder : 11 , PurchaseOrderType : "test"};
			arrayPo.push(elementPo1);
			this.getView().getModel("jsonModel").setProperty("/A_PurchaseOrder", arrayPo);
		}
	});
});