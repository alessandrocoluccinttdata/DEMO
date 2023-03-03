sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/Device"],
  function (Controller, Device) {
    "use strict";

    return Controller.extend("DEMO.DEMO.controller.Main", {
      onInit: function () {
        // Binding diretto con oData (l'odata è presente nella business API)
        let oPurchase = this.getView().byId("EBELN");
        oPurchase.bindElement("oDataModel>/A_PurchaseOrder('4500000011')");

        // Valorizzazione Modello Json con array con caricamento diretto in script
        let arrayPo = [];
        let elementPo1 = { PurchaseOrder: 11, PurchaseOrderType: "test" };
        arrayPo.push(elementPo1);
        this.getView()
          .getModel("jsonModel")
          .setProperty("/A_PurchaseOrder", arrayPo);

        // Valorizzazione Modello Json direttamente da file
        var oModel = new sap.ui.model.json.JSONModel();
		oModel.loadData("model/CarSell.json");
        this.getView().setModel(oModel);
        let OCarlist = this.getView().byId("idCarSellList");
        OCarlist.setModel(oModel);


      },
    });
  }
);
