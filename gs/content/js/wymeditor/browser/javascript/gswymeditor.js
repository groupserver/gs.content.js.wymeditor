jQuery.noConflict();

function gs_content_js_wymeditor_init() {
    var scriptElement=null, textElementSelector=null, submitButtonSelector=null,
    o=null, classesItems=null;

    scriptElement = jQuery('script.gs-content-js-wymeditor');
    textElementSelector = scriptElement.attr('data-text-element');
    submitButtonSelector = scriptElement.attr('data-submit');

    classesItems = [
        {name: 'dotted-inline-list',
         title: 'Inline list',
         expr: 'ul'},
        {name: 'alert',
         title: 'Alert',
         expr: 'p, ul, div'},
        {name: 'small',
         title: 'Small',
         expr: '*'}
    ];

    o = {updateSelector: submitButtonSelector,
         basePath: '/++resource++wymeditor-1.0.0b5/',
         wymPath: '/++resource++wymeditor-1.0.0b5/jquery.wymeditor-min.js',
         jQueryPath: '/++resource++jquery-1.9.1.min.js',
         lang: 'en',
         skin: 'gs',
         classesItems: classesItems}
    jQuery(textElementSelector).wymeditor(o);
}

jQuery(window).load(function () {
    var migrate=null, modules=null;
    // Partly nicked from Google Analytics
    migrate = ('https:' == document.location.protocol ? 'https://' : 'http://')
        + 'code.jquery.com/jquery-migrate-1.2.1.min.js';
    modules = [migrate, '/++resource++wymeditor-1.0.0b5/jquery.wymeditor.js'];
    gsJsLoader.with_module(modules, gs_content_js_wymeditor_init);
});