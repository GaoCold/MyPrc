qx.Class.define("Route.one",
{
  extend: qx.core.Object,

  construct: function()
  {
    this.base(arguments);
  },

  properties :
  {
    name : {
      check: "String",
      event: "changeName"
    }
  },

  members :
  {
   
  }
});