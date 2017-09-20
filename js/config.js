require.config({
    baseUrl: '../../',
    paths: {
        text: "js/lib/requirejs/text",
        css: "js/lib/requirejs/css",
        jquery: "js/lib/jquery/jquery-3.2.1.min",
        bootstrap: 'js/lib/bootstrap/bootstrap.min',
        paginator: 'js/lib/paginator/jqPaginator',
        custom: "js/lib/custom/custom",
        knockout: "js/lib/knockout/knockout-3.2.0.debug"
    },
    shim: {
        bootstrap: {
            deps: [ 'jquery', 'css!../../css/bootstrap.min.css' ]
        },
        paginator: {
            deps: [ "jquery" ]
        }
    },
    urlArgs: 'v=1.0.0'
});
