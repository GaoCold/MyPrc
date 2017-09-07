qx.Class.define("Route.controller",
{
  extend: qx.core.Object,

  construct: function(url)
  {
    this.base(arguments);
    console.log("去你妹");
    console.log(url);
    this.url=url;
    this.choose(url);
  },

  members :
  {
    choose:function(url){
     if(url == "three"){
        new Route.controllers();
     }
     if(url == "four"){
        new Route.controllerfour();
     }
  }
}
});