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
                interfaces:["sap.ui.core.IAsyncContentCreation"],
                manifest:"json"
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
            }
        })
    }
)