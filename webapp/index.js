/**
 * @author : gnvvs-2003
 * @notice This is the entry point of the application which is pointing to Component.js
 */

sap.ui.define(
    [
        "sap/ui/core/ComponentContainer"
    ],
    (ComponentContainer)=>{
        "use strict";
        new ComponentContainer({
          name:"ui5.walkthrough",
          settings:{
            id:"walkthrough"
          },
          async:true
        }).placeAt("content");
    }
)