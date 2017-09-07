qx.Class.define("Route.controllers",
{
  extend: qx.core.Object,

  construct: function()
  {
    this.base(arguments);
    this._widgetRegistry = DesAP.MWidgetRegistry;
    this.btn = this._widgetRegistry.getWidgetById("btn");  
    console.log("去你大爷")
  },

  members :
  { 
    
   
  }
});