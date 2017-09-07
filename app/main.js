requirejs.config({
    paths: {
        'text': '../lib/require/text',
        'durandal':'../lib/durandal/js',
        'plugins' : '../lib/durandal/js/plugins',
        'transitions' : '../lib/durandal/js/transitions',
        'knockout': '../lib/knockout/knockout-3.4.0',
        'bootstrap': '../lib/bootstrap/js/bootstrap',
        'jquery': '../lib/jquery/jquery-1.9.1'
    },
    shim: {
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
       }
    }
});

define(['durandal/system', 'durandal/app', 'durandal/viewLocator', 'bootstrap'],  function (system, app, viewLocator) {
    //>>excludeStart("build", true); --> Just in case i decide to make a build task.
    system.debug(true);
    //>>excludeEnd("build");

    app.title = "Felipe's Test";

    app.configurePlugins({
        router:true,
        dialog: true
    });

    app.start().then(function() {
        viewLocator.useConvention();

        //Here is where we init a Durandal app :).
        app.setRoot('shell/shell', 'entrance');
    });
});