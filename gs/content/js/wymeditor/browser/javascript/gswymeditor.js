jQuery.noConflict();

function gs_content_js_wymeditor_init() {
    var scriptElement=null, textElementSelector=null, submitButtonSelector=null,
        o=null;

    scriptElement = jQuery('script.gs-content-js-wymeditor');
    textElementSelector = scriptElement.attr('data-text-element');
    submitButtonSelector = scriptElement.attr('data-submit');

    o = {updateSelector: textElementSelector,
         basePath: '/++resource++wymeditor-1.0.0b5/',
         wymPath: '/++resource++wymeditor-1.0.0b5/jquery.wymeditor-min.js',
         jQueryPath: '/++resource++jquery-1.9.1.min.js',
         lang: 'en'}
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