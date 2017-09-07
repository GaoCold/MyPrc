qx.Class.define("Route.four",
{
  extend:Route.one,

  construct: function()
  {
    this.base(arguments);
    console.log("执行3");
    this.set({
      name:"four"
    })
   
  },

  members :
  {
    
  }
});