sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("project2.controller.View2", {
        onClearInput: function() {
            const oInput1 = this.getView().byId("namInput1");
            const oInput2 = this.getView().byId("namInput2");
            const oInput3 = this.getView().byId("namInput3");
            const oInput4 = this.getView().byId("namInput4");
            const oInput5 = this.getView().byId("namInput5");
            const oInput6 = this.getView().byId("select1");
            oInput1.setValue("");
            oInput2.setValue("");
            oInput3.setValue("");
            oInput4.setValue("");
            oInput5.setValue("");
            oInput6.setValue("");
            MesageToast.show("Input Field Cleared!");
        }
/*        
        onInit() {
           
        }
*/        
    });
});