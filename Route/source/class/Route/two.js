qx.Class.define("Route.two",
{
  extend:Route.one,

  construct: function()
  {
    this.base(arguments);
    console.log("执行2");
    this.set({
      name:"two"
    })
  },
  members :
  {
   
  }
});