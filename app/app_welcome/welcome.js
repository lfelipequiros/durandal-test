define(['durandal/app'], function (app) {
    var ctor = function () {
        this.displayName = 'Welcome to the Test by Felipe Quiros';
        this.description = 'This is build in Durandal, if you want more info, you can always go to the README.md file.';
        this.features = [
            "Each app has it's own folder with it's viewmodel, model and view",
            'Shell is a folder as well, is where durandal starts',
            'The MVVM is propertly used when you want to have your data organized, and the interaction in the viewmodel',
            'Css is based on durandal but customized',
            'Each folder can has its own dataModel to handle requests',
            'Consistent Async Programming w/ Promises',
            'App Bundling and Optimization',
            'Use any Backend Technology',
            'Built on top of jQuery, Knockout & RequireJS',
            'Integrates with other libraries such as SammyJS & Bootstrap'
        ];


        this.activate = function (){
          console.log('hey i actually activate myself');  
        };
    };

    //Note: This module exports a function. That means that you, the developer, can create multiple instances.
    //This pattern is also recognized by Durandal so that it can create instances on demand.
    //If you wish to create a singleton, you should export an object instead of a function.
    //See the "flickr" module for an example of object export.

    return ctor;
});