qx.Class.define("Route.both",
{
  extend : qx.core.Object,

  construct : function(page) {
    this.setPage(page);
  },


  properties :
  {
    page : {
      check: "Route.Page"
    },

    view : {
      check : "qx.ui.core.Widget"
    }
  }
});