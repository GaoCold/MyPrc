/* ************************************************************************

   Copyright:

   License:

   Authors:

************************************************************************ */

/**
 * This is the main application class of your custom application "Route"
 *
 * @asset(Route/*)
 */
qx.Class.define("Route.Application",
{
  extend : qx.application.Inline,



  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      // var button1 = new qx.ui.form.Button("First Button", "Route/test.png");

      // // Document is the application root
      // var doc = this.getRoot();

      // // Add button to document at fixed coordinates
      // doc.add(button1, {left: 100, top: 50});

      // // Add an event listener
      // button1.addListener("execute", function(e) {
      //   alert("Hello World!");
      // });
      qx.Class.include(qx.ui.core.Widget, DesAP.MWidgetRegistry);

      
      var pages = new qx.data.Array();
      pages.push(
        new Route.three(),
        new Route.four
      );
      
      console.log(new Route.two().getName());
      var path=new Route.two().getName()
      if(path=="two"){
        new Route.controller()
      }
      // application routing
      var routing = new qx.application.Routing();
      for (var i=0; i < pages.length; i++) {
        // set up a route for every page
        console.log("没运行");
        routing.on(pages.getItem(i).getName(), function(data) {
          // find the right page
          pages.forEach(function(page) {
            console.log("快快快");
            console.log(data);
            console.log(page.getName());
            //console.log(data);
            if (page.getName() == data.path) {
                new Route.controller(data.path)
            };

            // if (page.getName() == "three") {
            //      new Route.controllers()
            // };

          }, this);
        }, this);
      }


    }
  }
});
