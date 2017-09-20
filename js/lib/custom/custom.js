define([ 'jquery' ], function($) {
    "use strict";
    var scrollTop = function(ko) {
        ko.bindingHandlers.scrollTop = {
            init: function(element, valueAccessor) {
                $(document).ready(function() {
                    $(window).scroll(function() {
                        if ($(this).scrollTop() != 0)
                            $(element).fadeIn();
                        else
                            $(element).fadeOut();
                    });
                    $(element).click(function() {
                        $('body,html').animate({
                            scrollTop: 0
                        }, 300);
                    });
                });
            },
        };
        return ko;
    };
    return {
        scrollTop: scrollTop
    }
});