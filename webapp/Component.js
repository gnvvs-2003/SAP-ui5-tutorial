sap.ui.define(
    [
        "sap/ui/core/UIComponent",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ],(UIComponent,JSONModel,ResourceModel)=>{
        "use strict";
        return UIComponent.extend("ui5.walkthrough.Component",{
            /// Metadata : Key configuration
            metadata : {
                "interfaces":["sap.ui.core.IAsyncContentCreation"],
                "rootView":{
                    "viewName":"ui5.walkthrough.view.App",
                    "type":"XML",
                    "async":true,
                    "id":"app"
                }
            },
            /// Init function
            init(){
                UIComponent.prototype.init.apply(this,arguments);
                /// Models
                // json model
                const oData = {
                    recipient : {
                        name : "GNVVS"
                    }
                };
                const oModel = new JSONModel(oData);
                this.setModel(oModel);

                // resource model
                const oResourceModel = new ResourceModel({
                    bundleName : "ui5.walkthrough.i18n.i18n"
                });
                this.setModel(oResourceModel,"i18n");
            }
        })
    }
)