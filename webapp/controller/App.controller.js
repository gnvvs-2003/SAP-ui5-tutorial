/**
 * @author gnvvs-2003
 * This is the controller for all the elements present in App.view.xml
 */

sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
    ],(Controller,MessageToast)=>{
        "use strict";
        return Controller.extend("ui5.walkthrough.controller.App",{
            /// Functions used in the "App.view.xml"
            onShowHello : function(){
                // Reads msg from i18n model
                const oBundle = this.getView().getModel("i18n").getResourceBundle();
                const sRecipient = this.getView().getModel().getProperty("/recipient/name");// gets name from Json model
                const sMsg = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMsg);
            }

        })
    }
)