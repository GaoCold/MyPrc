qx.Class.define("Route.three",
{
  extend:Route.one,

  construct: function()
  {
    this.base(arguments); 
    console.log("执行1");
    this.createDull();
    this.set({
      name:"three"
    })
  },
  members :
  {
    createDull:function(){

      var bottom = new qx.ui.form.Button(this.tr("welcome-start"));
      bottom.setId("btn");

    }
  }
});