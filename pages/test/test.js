define([ 'jquery', 'knockout', 'custom', 'bootstrap' ], function($, ko, custom) {
    var self = this;
    var viewmodel = {
        test: ko.observable('this is a test page')
    };
    ko.applyBindings(viewmodel, document.getElementById("binding"));
})