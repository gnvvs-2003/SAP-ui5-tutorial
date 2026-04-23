/**
 * @author gnvvs-2003
 * This is the controller for all the elements present in App.view.xml
 */

sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel"
    ],(Controller,MessageToast,JSONModel)=>{
        "use strict";
        return Controller.extend("ui5.walkthrough.controller.App",{
            /// Init function
            onInit : function(){
                const oModel = new JSONModel({
                    recipient : {
                        name : "GNVVS"
                    }
                });
                // connects the model to the view
                this.getView().setModel(oModel);
            },

            /// Functions used in the "App.view.xml"

            /**
             * @description : This function is used to show the message toast
             * @returns : void
             */
            onShowHello : function(){
                MessageToast.show("Hello World!!!");
            }

        })
    }
)